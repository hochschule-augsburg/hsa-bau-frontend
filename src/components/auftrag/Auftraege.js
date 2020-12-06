import React, { useEffect, Fragment } from 'react';

import AuftragItem from './AuftragItem';

import { useAuftrag, getAuftraege } from '../../context/auftrag/auftragState';

const Auftraege = () => {
	const [auftragState, auftragDispatch] = useAuftrag();
	const { auftraege } = auftragState;

	useEffect(() => {
		getAuftraege(auftragDispatch);
		console.log(auftraege);
	}, [auftragDispatch]);

	if (auftraege !== null && auftraege.length === 0) {
		return (
			<div className='container'>
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
				{auftraege !== null && (
					<div className='container'>
						<table className='highlight'>
							<thead>
								<tr>
									<th>Kundennummer</th>
									<th>Bauvorhaben</th>
									<th>Name</th>
									<th>Kunde</th>
									<th>Monteur</th>
									<th>Status</th>
								</tr>
							</thead>
							{auftraege !== null && auftraege.map((auftrag) => <AuftragItem auftrag={auftrag} key={auftrag.uuid} />)}
						</table>
						<div></div>
					</div>
				)}
			</Fragment>
		);
	}
};

export default Auftraege;
