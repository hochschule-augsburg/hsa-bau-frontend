import React, { Fragment } from 'react';

const AuftragItem = ({ auftrag }) => {
	//const [auftragState, auftragDispatch] = useAuftrag();

	return (
		<Fragment>
			<tbody>
				<tr>
					<td>{auftrag.bauvorhaben}</td>
					<td>{auftrag.name}</td>
					<td>{auftrag.kunde}</td>
					<td>{auftrag.monteur}</td>
					<td>
						<b>{auftrag.status}</b>
					</td>
					<td>
						<a href='!#'>
							<i className='material-icons grey-text'>delete</i>
						</a>
					</td>
					<td>
						<a href='!#'>
							<i className='material-icons grey-text'>edit</i>
						</a>
					</td>
				</tr>
			</tbody>
		</Fragment>
	);
};

export default AuftragItem;
