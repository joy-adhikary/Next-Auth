'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import SignIn from '@/src/app/signin/page'

const Header = () => {

    const [IsModelOpen, setModelOpen] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const { data: session } = useSession()

    const handleDevice = () => {
        setIsMobile(!isMobile);
        IsModelOpen ? setModelOpen(!IsModelOpen) : null;

    };

    const handleToggle = () => {
        setModelOpen(!IsModelOpen)
        isMobile ? setIsMobile(!isMobile) : null;
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 h-22 py-2 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                            width={30}
                            height={30}
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Joy&apos;s Auth
                        </span>
                    </Link>

                    <div className="flex items-center md:order-2  relative">
                        {session ? (
                            <button
                                type="button"
                                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                id="user-menu-button"
                                aria-expanded="false"
                                data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom"
                                onClick={handleToggle}
                            >
                                <span className="sr-only">Open user menu</span>
                                {session?.user?.image ? (
                                    <Image
                                        className="w-8 h-8 rounded-full"
                                        src={session.user.image}
                                        alt={session.user.name as string}
                                        width={30}
                                        height={30}
                                    />) : (
                                    <Image
                                        className="w-8 h-8 rounded-full"
                                        src="/docs/images/people/profile-picture-3.jpg"
                                        alt="user photo"
                                        width={30}
                                        height={30}
                                    />
                                )}
                            </button>
                        ) : (
                            <Link href='/signin'>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Sign in
                                </span>
                            </button>
                            </Link>
                        )}
                        <div
                            className={` absolute top-10 right-16 md:top-10 md:right-7 ${IsModelOpen ? '' : 'hidden'} text-base list-none bg-white divide-y divide-gray-100 rounded-lg  dark:bg-gray-700 dark:divide-gray-600 shadow-lg`}
                            id="user-dropdown"
                        >
                            <div className="px-4 py-3">
                                <span className="block px-4 py-2 font-bold text-sm text-blue-700 dark:to-blue-500">
                                    Bonnie Green
                                </span>
                                <span className="block px-4 py-2 font-bold text-sm text-blue-700 dark:to-blue-500">
                                    name@flowbite.com
                                </span>
                                <span className="block px-4 py-2 font-bold text-sm text-blue-700 dark:to-blue-500">
                                    SessionTime
                                </span>
                                <span className="block px-4 py-2 font-bold text-sm text-blue-700 dark:to-blue-500">
                                    SessionId
                                </span>

                                <a
                                    href="#"
                                    className="block px-4 py-2 font-bold text-sm text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >
                                    Sign out
                                </a>
                            </div>
                        </div>


                        <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user"
                            aria-expanded="false"
                            onClick={handleDevice}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`items-center justify-between ${isMobile ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
                        id="navbar-user"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        </>
    )
}

export default Header