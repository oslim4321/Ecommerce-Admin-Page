import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../Preloader/Spinner'
import { UserRequest } from '../../Request'

function NewMember() {
    const [NewMembers, setNewMembers] = useState()
    const [error, seterror] = useState('')
    const [spinnerState, setspinnerState] = useState(true)
    useEffect(() => {
        const FetchUsers = async () => {
            try {
                const res = await UserRequest.get('/user/findall/?new=true')
                setNewMembers(res.data)
            } catch (error) {
                seterror(error.response.data)
                setspinnerState(false)

            }
        }
        FetchUsers()
    }, [])

    // function displayUser(id) {

    // }

    return (
        <div>

            <div className="max-w-2xl ml-12">

                <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">New Join Member</h3>
                        <Link to='/User' className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                            View all
                        </Link>
                    </div>
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                            {NewMembers ?
                                NewMembers.map((user) => (
                                    <li key={user._id} className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                {/* <img className="w-8 h-8 rounded-full" src="" alt="Neil image" /> */}
                                                <i className="bi bi-person-circle w-8 h-8 rounded-full text-4xl"></i>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {user.username}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {user.email}
                                                </p>
                                            </div>
                                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white bg-blue-400 p-2 px-4 rounded-full">
                                                Display
                                            </div>
                                        </div>
                                    </li>
                                ))
                                :
                                spinnerState &&
                                <Spinner />
                            }
                            <div className="text-red-400" >{error}</div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMember