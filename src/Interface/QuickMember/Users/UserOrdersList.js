import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Spinner from '../../../Preloader/Spinner'
import { UserRequest } from '../../../Request'
import { format } from 'timeago.js'

function UserOrdersList({ UserID }) {
    const [userOrder, setuserOrder] = useState()
    const location = useLocation()
    useEffect(() => {
        const GetUserOrders = async () => {
            const order = await UserRequest.get(`/order/${UserID}`)
            setuserOrder(order.data)
        }
        GetUserOrders()
    }, [location])
    console.log(userOrder)
    return (
        <div>
            <div className="block w-full overflow-x-auto">
                {
                    userOrder ?
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
                                    <th className="p-2">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                {userOrder.map((order) => (
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
                                }
                                {/* {!spinnerState && error && <div className="text-red-400" >{error}</div>} */}
                                {!userOrder && <p>No product</p>}
                            </tbody>

                        </table>
                        :
                        <Spinner />
                }

            </div>
        </div>
    )
}

export default UserOrdersList