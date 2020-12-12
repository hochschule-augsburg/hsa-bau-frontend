import React, { Fragment, useEffect } from 'react';

import { useAuftrag, getAuftrag } from '../../context/auftrag/auftragState';
import Spinner from '../layout/Spinner';

import ZuweisenForm from './taskforms/ZuweisenForm';
import AbschliessenForm from './taskforms/AbschliessenForm';
import GenehmigenForm from './taskforms/GenehmigenForm';
import PruefenForm from './taskforms/PruefenForm';
import FreigebenForm from './taskforms/FreigebenForm';

const FormHandler = () => {
	const [auftragState, auftragDispatch] = useAuftrag();
	const { selected, loading } = auftragState;

	let form;
	switch (selected.taskName) {
		case 'Zuweisen':
			form = <div>{<ZuweisenForm job={selected} key={selected.id} />}</div>;
			break;
		case 'Abschließen':
			form = <div>{<AbschliessenForm job={selected} key={selected.id} />}</div>;
			break;
		case 'Genehmigen':
			form = <div>{<GenehmigenForm job={selected} key={selected.id} />}</div>;
			break;
		case 'Überprüfen':
			form = <div>{<PruefenForm job={selected} key={selected.id} />}</div>;
			break;
		case 'Freigeben':
			form = <div>{<FreigebenForm job={selected} key={selected.id} />}</div>;
			break;
		default:
	}

	console.log(selected.taskName);

	if (loading) {
		return <Spinner />;
	} else {
		return <Fragment>{!loading && form}</Fragment>;
	}
};

export default FormHandler;
