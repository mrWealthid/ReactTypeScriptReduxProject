import { Popover, Transition } from '@headlessui/react';
import React, { Fragment, useRef} from 'react';


import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Messages } from '../assets/icon/comment.svg';
import { ReactComponent as Complain } from '../assets/icon/complain.svg';
import { ReactComponent as Email } from '../assets/icon/email.svg';
import { ReactComponent as Book } from '../assets/icon/home.svg';
import { ReactComponent as Flag } from '../assets/icon/flag.svg';


// import { RootState } from 'redux/rootReducer';
// import { logout } from 'redux/authSlice/actions';
// import { Button } from 'components/common';
import { ReactComponent as Bell } from '../assets/icon/bell.svg';
import ProfilePhoto from '../assets/icon/user.svg';

export const Navbar = () => {

  const navigate = useNavigate();


  //Beginning
  const buttonRef: any = useRef(null);
  const timeoutDuration = 1;
  let timeout: string | number | NodeJS.Timeout | undefined;

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  };

  const onMouseEnter = (open: any) => {
    clearTimeout(timeout);
    if (open) return;
    return buttonRef.current?.click();
  };

  const onMouseLeave = (open: any) => {
    if (!open) return;
    timeout = setTimeout(() => closePopover(), timeoutDuration);
  };

  return (
    <div className="flex gap-20 py-3 sticky z-10 top-0 bg-white  justify-end px-10 text-black ">
      <section className="flex items-center gap-10">
        <Link to="/notification" className="relative">
          <div className="h-3 w-3 rounded-[50%] bg-auraPrimary absolute top-[-10px] right-[-10px]" />
          <Bell />
        </Link>
        <Popover className="relative">
          {({ open }: any) => (
            <>
              <Popover.Button
                ref={buttonRef}
                type="button"
                className="flex px-[6px] py-2 gap-1 items-center bg-auraPrimary rounded-lg outline-0"
                onMouseEnter={onMouseEnter.bind(null, open)}
                onMouseLeave={onMouseLeave.bind(null, open)}
              >


                <div className="inline-flex h-7 w-7 rounded-[50%] flex-none">
                  <img
                    src={ProfilePhoto}
                    alt="profile"
                    className="h-7 w-7 rounded-[50%] flex-none"
                  />
                </div>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  className="absolute  right-[-30px] mt-3  z-10   transform px-4 sm:px-0"
                  onMouseEnter={onMouseEnter.bind(null, open)}
                  onMouseLeave={onMouseLeave.bind(null, open)}
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="bg-white w-64  py-1 pb-4">
                      <>
                        <div className="flex flex-col gap-2">
                          <Link
                            to="/"
                            className="flex items-center gap-[14px] hover:bg-gray-100  transition-all hover:translate-x-1 duration-300 py-3 px-4"
                          >
                            <Messages />
                            <p className="text-sm font-medium text-gray-4">
                              Messages
                            </p>
                          </Link>
                          <Link
                            to="/user-profile/bookings"
                            className="flex items-center gap-[14px] transition-all hover:bg-gray-100  hover:translate-x-1 py-3 px-4"
                          >
                            <Book />
                            <p className="text-sm font-medium text-gray-4">
                              Bookings
                            </p>
                          </Link>
                          <Link
                            to="/user-profile/wishlist"
                            className="flex items-center gap-[14px] transition-all hover:bg-gray-100  hover:translate-x-1 py-3 px-4"
                          >
                            <Email />
                            <p className="text-sm font-medium text-gray-4">
                              Wishlists
                            </p>
                          </Link>
                          <Link
                            to="/"
                            className="flex items-center gap-[14px] hover:bg-gray-100  transition-all hover:translate-x-1 py-3 px-4"
                          >
                            <Complain />
                            <p className="text-sm font-medium text-gray-4">
                              Complaints
                            </p>
                          </Link>
                          <Link
                            to="/onboarding"
                            className="flex items-center gap-[14px] transition-all hover:bg-gray-100 hover:translate-x-1 py-3 px-4"
                          >
                            <Flag />
                            <p className="text-sm font-medium text-gray-4">
                              Become a Host
                            </p>
                          </Link>
                        </div>
                        <div className="flex w-full px-3 h-10 gap-4 mt-6">
                          <button
                            type="button"

                            className="w-full"
                            onClick={() => navigate('/user-profile')}
                          >
                            Account
                          </button>
                          <button
                            type="button"

                            className="w-full"
                          >
                            Logout
                          </button>
                        </div>
                      </>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </section>
    </div>
  );
};
