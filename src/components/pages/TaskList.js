import React, { Fragment } from 'react';

import Tasks from '../task/Tasks';

const TaskList = () => {
	return (
		<Fragment>
			<div className='container'>
				<h4 className='center-align'>Task Liste</h4>
				<div className='row'>
					<Tasks />
				</div>
			</div>
		</Fragment>
	);
};

export default TaskList;
