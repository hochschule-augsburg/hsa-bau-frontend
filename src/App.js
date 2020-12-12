import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Navbar from './components/layout/Navbar';
import Process from './components/pages/Process';
import About from './components/pages/About';
import Jobs from './components/pages/Jobs';
import Kunden from './components/pages/Kunden';
import TaskList from './components/pages/TaskList';
import AuftragState from './context/auftrag/auftragState';
import TaskState from './context/task/taskState';

const App = () => {
	useEffect(() => {
		// init Material JS
		M.AutoInit();
	});

	return (
		<AuftragState>
			<TaskState>
				<Router>
					<Fragment>
						<Navbar />
						<Switch>
							<Route exact path='/' component={Process} />
							<Route exact path='/about' component={About} />
							<Route exact path='/jobs' component={Jobs} />
							<Route exact path='/kunden' component={Kunden} />
							<Route exact path='/tasklist' component={TaskList} />
						</Switch>
					</Fragment>
				</Router>
			</TaskState>
		</AuftragState>
	);
};

export default App;
