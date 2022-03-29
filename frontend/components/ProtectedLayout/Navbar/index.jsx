import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import NavLink from './NavLink/';
import ErrorMessage from '../ErrorMessage';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, HomeIcon, CogIcon, LogoutIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import actions from '../../../redux/actions/';

const Navbar = ({children}) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => !!state.authentication.token);
  return (

    <>
            <Disclosure as="nav" className="bg-white border-b">
                {({ open }) => (
                    <>
                        <div className="mx-auto px-2 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex-shrink-0 flex items-center">
                                        <h2 className="font-bold">Roben Wallets</h2>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    <button className="text-white rounded-md px-4 py-2 bg-orange text-sm">Connect Wallet</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
            <div className="min-h-screen sidebar-height relative flex">
                <div className="sidebar border-r w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out bg-primary">
                    <nav>
                        <NavLink privateRoute={true} href="/" ><div className="block py-2 px-4 flex hover:text-white cursor-pointer text-gray-300"><HomeIcon className="text-gray-300 block h-6 w-6 mr-2" />Dashboard</div></NavLink>
                        {/* <NavLink privateRoute={true} href="/portfolio" ><div className="block py-2 px-4 flex hover:text-white cursor-pointer text-gray-300"><ShoppingCartIcon className="text-gray-300 block h-6 w-6 mr-2" />Portfolio</div></NavLink> */}
                        <NavLink privateRoute={true} href="/settings" ><div className="block py-2 px-4 flex hover:text-white cursor-pointer text-gray-300"><CogIcon className="text-gray-300 block h-6 w-6 mr-2" />Settings</div></NavLink>
                        {isAuthenticated && (
                           <button onClick={() => dispatch(actions.deauthenticate())} ><div className="block py-2 px-4 flex hover:text-white cursor-pointer text-gray-300"><LogoutIcon className="text-gray-300 block h-6 w-6 mr-2" />Logout</div></button>
                        )}
                    </nav>
                </div>
                <ErrorMessage />
                {children}
            </div>
        </>
    
  );
};

export default Navbar;
