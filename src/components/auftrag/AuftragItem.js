import React, { Fragment } from 'react';

const AuftragItem = ({ auftrag }) => {
	//const [auftragState, auftragDispatch] = useAuftrag();

	return (
		<Fragment>
			<tbody>
				<tr>
					<td>{auftrag.uuid}</td>
					<td>{auftrag.bauvorhaben}</td>
					<td>{auftrag.name}</td>
					<td>{auftrag.kunde}</td>
					<td>{auftrag.monteur}</td>
					<td>{auftrag.status}</td>
				</tr>
			</tbody>
		</Fragment>
	);
};

export default AuftragItem;
