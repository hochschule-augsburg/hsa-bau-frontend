import React, { Fragment, useEffect } from 'react';

import { useAuftrag, getAuftrag } from '../../../context/auftrag/auftragState';
import Spinner from '../../layout/Spinner';

import ZuweisenForm from './ZuweisenForm';

const FormHandler = () => {
	const [auftragState, auftragDispatch] = useAuftrag();
	const { selected, loading } = auftragState;

	useEffect(() => {
		const taskName = localStorage.getItem('taskName');
		const businessKey = localStorage.getItem('businessKey');

		console.log(businessKey);
		console.log(taskName);

		getAuftrag(taskName, businessKey, auftragDispatch);
		//console.log(auftraege);
		//console.log(typeof auftraege);
	}, [auftragDispatch]);

	console.log(selected);

	if (loading) {
		return <Spinner />;
	} else {
		return (
			<Fragment>
				<div>{selected !== null && !loading && <ZuweisenForm job={selected} key={selected.id} />}</div>
			</Fragment>
		);
	}
};

export default FormHandler;
