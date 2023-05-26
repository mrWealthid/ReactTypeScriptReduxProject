import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './common/Logo';
import OverviewIcon from '../assets/Admin/Overviews.svg';
import UserMgtIcon from '../assets/Admin/UserMgt.svg';
import ReservationIcon from '../assets/Admin/Reservation.svg';
import VerificationIcon from '../assets/Admin/Verification.svg';

export const Sidebar = () => {
  function addStyle(val: string) {
    if (val) {
      return {
        color: 'white',
        background: '#F48220',
        textDecoration: 'none',

        padding: '10px 15px',
        borderRadius: '10px',
      };
    }
    return {
      color: '#545e6f',
      background: 'inherit',
      textDecoration: 'none',

      padding: '10px 15px',
    };
  }

  const routes = [
    {
      path: '',
      text: 'Overview',
      icon: OverviewIcon,
    },
    { path: 'user', text: 'User Management', icon: UserMgtIcon },
    { path: 'verification', text: 'Verification', icon: VerificationIcon },
    { path: 'reservation', text: 'Reservation', icon: ReservationIcon },
  ];

  return (
      <div className="flex flex-col  w-1/4 gap-22 bg-gray-900 text-white py-8">
        <Link className="flex justify-center space-x-4 text-white" to="/">
          <Logo />
        </Link>
        <section className="flex flex-col bg-inherit  mt-10 px-2">
          {routes.map((route, index) => (
              <NavLink
                  style={({ isActive }: any) => addStyle(isActive)}
                  to={route.path}
                  key={route.text}
                  end={index === 0 && true}
                  className={
                    'hover:translate-x-1 text-sm transition-all duration-500 flex items-center gap-2'
                  }
              >
                <img src={route.icon} alt={route.text} />
                {route.text}
              </NavLink>
          ))}
        </section>
      </div>
  );
};
