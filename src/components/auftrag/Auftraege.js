import React, { useEffect, Fragment } from 'react';

import AuftragItem from './AuftragItem';

import { useAuftrag, getAuftraege } from '../../context/auftrag/auftragState';
import Spinner from '../layout/Spinner';

const Auftraege = () => {
	const [auftragState, auftragDispatch] = useAuftrag();
	const { auftraege, loading } = auftragState;

	useEffect(() => {
		getAuftraege(auftragDispatch);
	}, [auftraege]);

	if (loading) {
		return <Spinner />;
	}

	if (auftraege !== null && auftraege.length === 0 && !loading) {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col l12'>
						<h5 className='left-align'>Auftragsübersicht</h5>
						<p>Momentan sind keine Aufträge eingeplant.</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<Fragment>
				{auftraege !== null && !loading && (
					<div className='container'>
						<div className='row'>
							<div className='col l12'>
								<h5 className='left-align'>Auftragsübersicht</h5>
								<p>
									Verschaffen Sie sich einen Überblick über die Auftragsdetails und sehen Sie auf einen Blick welcher Auftrag welchen Status hat.
									<br />
									Bearbeiten Sie Auftragsdetails (außer Status) oder löschen sie den kompletten Auftrag aus der Datenbank.
									<br />
									*Achtung: wird ein Auftrag aus der Datenbank gelöscht, wird auch die dazugehörige Prozessinstanz entfernt.
								</p>
							</div>
						</div>
						<br />
						<table className='highlight'>
							<thead>
								<tr>
									<th>Bauvorhaben</th>
									<th>Name</th>
									<th>Kunde</th>
									<th>Monteur</th>
									<th>Status</th>
									<th>Delete</th>
									<th>Edit</th>
								</tr>
							</thead>
							{auftraege !== null && auftraege.map((auftrag) => <AuftragItem auftrag={auftrag} key={auftrag.id} />)}
						</table>
						<div></div>
					</div>
				)}
			</Fragment>
		);
	}
};

export default Auftraege;
