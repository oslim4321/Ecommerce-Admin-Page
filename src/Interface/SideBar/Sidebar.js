import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { dashboard, QuickMember } from './SideBarItems'

function Sidebar() {
    const [SideBar, setSideBar] = useState(true)
    const [hamburger, sethamburger] = useState(true)
    const AdminUser = JSON.parse(localStorage.getItem('Adminuser'));
    // console.log(AdminUser)

    const navigate = useNavigate()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scrollHeight = window.pageYOffset;
            if (scrollHeight > 600) {
                sethamburger(false)
            } else {
                sethamburger(true)
            }
        })
    }, [])
    // if (!AdminUser) {
    //     navigate('/')
    // }

    // function logout() {
    //     localStorage.removeItem('Adminuser')
    //     navigate('/')
    // }
    return (
        <div>
            {hamburger && <button onClick={() => setSideBar(!SideBar)} className='text-5xl z-20 flex justify-end items-end fixed right-5 '><i class="bi bi-list"></i></button>}

            <div className="min-h-screen bg-gray-100 absolute z-10">
                <div className={`${SideBar ? 'sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg' : 'hidden'}`}>
                    <div className="flex h-screen flex-col justify-between pt-2 pb-6">
                        <div className='hover:overflow-y-auto'>
                            <div className="w-max p-2.5 flex ">
                                {/* <img src="https://tailus.io/images/logo.svg" className="w-32" alt="" /> */}
                                <i className="bi bi-person w-32 text-3xl"></i>
                                {AdminUser && <h1 className='text-center'>Hi {AdminUser.username}</h1>}
                            </div>
                            <ul className="mt-6 space-y-2 tracking-wide">
                                <li className="min-w-max">
                                    <a href="#" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
                                        <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
                                            <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                                            <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
                                        </svg>
                                        <span className="-mr-1 font-medium">Dashboard</span>
                                    </a>
                                </li>
                                {
                                    dashboard.map((elem) => (
                                        <Link key={elem.id} to={elem.url}>
                                            <li className="min-w-max">
                                                <a href="#" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
                                                    <div>{elem.icon}</div>
                                                    <span className="group-hover:text-gray-700">{elem.text}</span>
                                                </a>
                                            </li>
                                        </Link>
                                    ))
                                }
                                <li className="min-w-max">
                                    <div href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                        <p classNameName='text-center'><i className="bi bi-three-dots"></i></p>
                                        <span className="group-hover:text-gray-700 text-blue-700">Quick Menu</span>
                                    </div>
                                </li>

                                {
                                    QuickMember.map((elem) => (
                                        <Link key={elem.id} to={elem.url}>
                                            <li className="min-w-max">
                                                <a href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                                    <div>{elem.icon}</div>
                                                    <span className="group-hover:text-gray-700">{elem.text}</span>
                                                </a>
                                            </li>
                                        </Link>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="w-max -mb-3">
                            <a href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                </svg>
                                <span className="group-hover:text-gray-700">Settings</span>
                            </a>
                        </div>
                        <div className="w-max ">
                            <div className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
                                <i class="bi bi-door-closed"></i>
                                <span className="group-hover:text-gray-700">Signout</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar