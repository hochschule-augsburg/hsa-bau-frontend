import React, { useEffect, Fragment } from 'react';

import AuftragItem from './AuftragItem';

import { useAuftrag, getAuftraege } from '../../context/auftrag/auftragState';
import Spinner from '../layout/Spinner';

const Auftraege = () => {
	const [auftragState, auftragDispatch] = useAuftrag();
	const { auftraege, loading } = auftragState;

	useEffect(() => {
		getAuftraege(auftragDispatch);
		//console.log(auftraege);
		//console.log(typeof auftraege);
	}, [auftragDispatch]);

	if (loading) {
		return <Spinner />;
	}

	console.log(auftraege);

	if (auftraege !== null && auftraege.length === 0 && !loading) {
		return (
			<div className='container'>
				<h4 className='center-align'>Auftragsübersicht</h4>
				<div className='row'>
					<div className='mg-top-100 center-align'>
						<span>Momentan sind keine Aufträge vorhanden...</span>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<Fragment>
				{auftraege !== null && !loading && (
					<div className='container'>
						<h4 className='center-align'>Auftragsübersicht</h4>
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
							{}
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
