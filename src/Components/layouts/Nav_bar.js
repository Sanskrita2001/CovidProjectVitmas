import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
	.navbar {
		background-color: #060b26;
	}
	a,
	.navbar-nav,
	.navbar-light .nav-link {
		color: #7d26cd;
		&:hover {
			color: white;
		}
	}
	.navbar-brand {
		font-size: 1.4em;
		color: #7d26cd;
		&:hover {
			color: white;
		}
	}
	.form-center {
		position: absolute !important;
		left: 25%;
		right: 25%;
	}
	.btn-clear {
		background-color: #7d26cd;
	}
`;

function Nav_bar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<Styles>
				<Navbar expand='lg'>
					<IconContext.Provider value={{ color: '#fff' }}>
						<div className='navbar'>
							<Link to='#' className='menu-bars'>
								<FaIcons.FaBars onClick={showSidebar} />
							</Link>
						</div>
						<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
							<ul className='nav-menu-items' onClick={showSidebar}>
								<li className='navbar-toggle'>
									<Link to='#' className='menu-bars'>
										<AiIcons.AiOutlineClose />
									</Link>
								</li>
								{SidebarData.map((item, index) => {
									return (
										<li key={index} className={item.cName}>
											<Link to={item.path}>
												{item.icon}
												<span>{item.title}</span>
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>
					</IconContext.Provider>
					<Navbar.Brand href='/'>Covid 19</Navbar.Brand>
					<Form className='form-center'>
						<FormControl type='text' placeholder='Search' className='' />
					</Form>
					<Nav className='ml-auto'>
						<Nav.Item>
							<Button className='btn-clear' type='clear'>
								Clear
							</Button>
						</Nav.Item>
					</Nav>
				</Navbar>
			</Styles>
		</>
	);
}

export default Nav_bar;
