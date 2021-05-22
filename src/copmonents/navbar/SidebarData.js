import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'About us',
        path:'/aboutus',
        icon:<AiIcons.AiOutlineAlignCenter />,
        cName:'nav-text'
    },
    {
        title:'Calendar',
        path:'/calendar',
        icon:<IoIcons.IoIosCalendar />,
        cName:'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icon:<IoIcons.IoMdPeople />,
        cName:'nav-text'
    },
    {
        title:'Messages',
        path:'/messages',
        icon:<FaIcons.FaEnvelopeOpenText />,
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    },
    {
        title:'Contact Us',
        path:'/contactus',
        icon:<FaIcons.FaPhoneAlt />,
        cName:'nav-text'
    },
]