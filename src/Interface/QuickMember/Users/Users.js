import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../API/ApiCalls'
import Spinner from '../../../Preloader/Spinner'
import { format } from 'timeago.js'
import { useNavigate } from 'react-router-dom'

function Users() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isFetching, user, error } = useSelector((state) => state.users)
    // console.log(user)
    useEffect(() => {
        getUsers(dispatch)
    }, [])
    return (
        <div>
            <div className="max-w-5xl mx-auto pl-10">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="p-4">
                        <label for="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
                        </div>
                    </div>

                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Transactions
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    createdAt
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user ?
                                    user && user.map((elem) => (
                                        <tr
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {elem.username}
                                            </th>
                                            <td className="px-6 py-4">
                                                {elem.email}
                                            </td>
                                            <td className="px-6 py-4">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4">
                                                {format(elem.createdAt)}
                                            </td>
                                            <td className="px-6 py-4 text-right flex">
                                                <a onClick={() => navigate(`/EditUser/${elem._id}`)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</a>
                                                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline"><i className="bi bi-trash3 text-red-500"></i></a>
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <>
                                        <Spinner />
                                        <h1>Please Wait...</h1>
                                    </>
                            }
                        </tbody>
                        {error && <div classNameName="text-red-400">{error.message}</div>}
                    </table>

                </div>
                <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
            </div>
        </div>
    )
}

export default Users