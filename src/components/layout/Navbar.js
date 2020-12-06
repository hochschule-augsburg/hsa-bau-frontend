import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Fragment>
			<nav style={{ marginBottom: '30px', padding: '0 15px' }} className='yellow darken-4'>
				<div className='nav-wrapper'>
					<Link to='/'>
						<span className='pd-top-50 text-size-mid mg-left-50'>SSB Fidan GmbH</span>
					</Link>
					<a href='!#' data-target='mobile' className='sidenav-trigger'>
						<i className='material-icons'>menu</i>
					</a>
					<ul id='nav-mobile' className='right hide-on-med-and-down mg-right-100'>
						<li>
							<Link to='/'>
								<i className='fas fa-cog fa-sm'></i> Start Process
							</Link>
						</li>
						<li>
							<Link to='/tasklist'>
								<i className='fas fa-tasks fa-sm'></i> Task List
							</Link>
						</li>
						<li>
							<div className='navItems'>
								<Link to='/jobs'>
									<i className='far fa-folder-open fa-sm'></i> Aufträge
								</Link>
							</div>
						</li>
						<li>
							<div className='navItems'>
								<Link to='/kunden'>
									<i className='fas fa-user fa-sm'></i> Kunden
								</Link>
							</div>
						</li>
						<li>
							<div className='navItems'>
								<Link to='/about'>
									<i className='fas fa-info fa-sm'></i> About
								</Link>
							</div>
						</li>
					</ul>
				</div>
			</nav>
			<ul className='sidenav' id='mobile'>
				<li>
					<Link to='/process'>
						<i className='fas fa-cog'></i> Start Process
					</Link>
				</li>
				<li>
					<Link to='/tasklist'>
						<i className='fas fa-cog'></i> Task List
					</Link>
				</li>
				<li>
					<Link to='/jobs'>
						<i className='fas fa-clipboard-list'></i> Aufträge
					</Link>
				</li>
				<li>
					<Link to='/kunden'>
						<i className='fas fa-user-plus fa-sm'></i> Kunden
					</Link>
				</li>
				<li>
					<Link to='/about'>
						<i className='fas fa-info'></i> About
					</Link>
				</li>
			</ul>
		</Fragment>
	);
};

export default Navbar;
