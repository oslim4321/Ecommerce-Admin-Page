import React, { useEffect, useMemo, useState } from 'react'
import Sidebar from '../SideBar/Sidebar'
import NewMember from './NewMember'
import Transactions from './Transactions'
import LineChart from './LineChart'
import { UserRequest } from '../../Request'

function DashboardBase() {
    const [userData, setuserData] = useState([])

    const MONTH = useMemo(() => [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'August',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ])




    useEffect(() => {
        const getStats = async () => {
            const res = await UserRequest.get('/user/stats')
            // console.log(res.data)
            res.data.map((elem) => {
                setuserData(prev => [
                    ...prev,
                    { name: MONTH[elem._id - 1], "ActiveUsers": elem.total }
                ])
            })

        }
        getStats()
    }, [])
    // console.log(userData)

    return (
        <div className='ml-3'>
            <div className="flex flex-wrap bg-pink-500 justify-center items-center">
                <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs"> Revenue</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">334,100</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-emerald-500 mr-2"><i class="bi bi-arrow-up"></i> 2,99% </span>
                                <span className="whitespace-nowrap"> Compare to last month </span>
                                <div className="whitespace-nowrap text-red-600">STILL WORKING ON IT </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">New users</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">2,999</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                        <i className="fas fa-chart-pie"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-red-500 mr-2"><i class="bi bi-arrow-up"></i>  4,01%</span>
                                <span className="whitespace-nowrap"> Since last week </span>
                                <div className="whitespace-nowrap text-red-600">STILL WORKING ON IT </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Sales</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">901</span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                                        {/* <i class="bi bi-arrow-up"></i> */}
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-red-500 mr-2"><i class="bi bi-arrow-up"></i>  1,25% </span>
                                <span className="whitespace-nowrap"> Since yesterday </span>
                                <div className="whitespace-nowrap text-red-600">STILL WORKING ON IT </div>
                            </p>
                        </div>
                    </div>
                </div>
                {/* 
                <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
                    <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                    <h5 className="text-blueGray-400 uppercase font-bold text-xs">Performance</h5>
                                    <span className="font-semibold text-xl text-blueGray-700">51.02% </span>
                                </div>
                                <div className="relative w-auto pl-4 flex-initial">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                                        <i className="fas fa-percent"></i>
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm text-blueGray-400 mt-4">
                                <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 12% </span>
                                <span className="whitespace-nowrap"> Since last mounth </span></p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='md:mx-10 my-8'><LineChart userData={userData} /></div>
            <div className="md:flex justify-center overflow-x-auto">

                <NewMember />
                <Transactions />
            </div>

            {/* <footer className="relative pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}



        </div>
    )
}

export default DashboardBase