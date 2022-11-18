import React, { useEffect, useState } from 'react'
import Spinner from '../../Preloader/Spinner'
import { UserRequest } from '../../Request'
import { format } from 'timeago.js'
import './transaction.css'

function Transactions() {
    const [NewOrder, setNewOrder] = useState()
    const [error, seterror] = useState('')
    const [spinnerState, setspinnerState] = useState(true)
    useEffect(() => {
        const FetchUsers = async () => {
            try {
                const res = await UserRequest.get('/order')
                setNewOrder(res.data)

            } catch (error) {
                seterror(error.message)
                setspinnerState(false)

            }
        }
        FetchUsers()
    }, [])


    return (
        <div>
            <section className="py-1 bg-blueGray-50">
                <div className="md:w-[100vh] mb-12 xl:mb-0 px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">Latest Transactions Orders</h3>
                                </div>
                                {/* <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                                </div> */}
                            </div>
                        </div>

                        <div className="block w-full overflow-x-auto">
                            <table className="items-center bg-transparent w-full border-collapse ">
                                <thead>
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-extrabold text-left">
                                            Customer
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-extrabold text-left">
                                            Date
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-extrabold text-left">
                                            Amount
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-extrabold text-left">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {NewOrder ?
                                        NewOrder.map((order) => (
                                            <tr key={order._id} className='py-3'>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                    {order.userId}
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                    {format(order.createdAt)}
                                                </td>
                                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    {order.amount}
                                                </td>
                                                <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-2 text-center ${order.status} rounded-full`}>
                                                    {order.status}
                                                </td>
                                            </tr>
                                        ))
                                        :
                                        spinnerState &&
                                        <Spinner />
                                    }
                                    {!spinnerState && error && <div className="text-red-400" >{error}</div>}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Transactions