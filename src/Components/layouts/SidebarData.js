import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
	{
		title: 'Home',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text',
	},
	{
		title: 'States',
		path: '/States',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text',
	},
	{
		title: 'Hospitals',
		path: '/hospitals',
		icon: <FaIcons.FaHospital />,
		cName: 'nav-text',
	},
	{
		title: 'About Us',
		path: '/about',
		icon: <IoIcons.IoMdPeople />,
		cName: 'nav-text',
	},
	{
		title: 'Contact Us',
		path: '/contact',
		icon: <FaIcons.FaAddressBook />,
		cName: 'nav-text',
	},
	{
		title: 'Support',
		path: '/support',
		icon: <IoIcons.IoMdHelpCircle />,
		cName: 'nav-text',
	},
];
