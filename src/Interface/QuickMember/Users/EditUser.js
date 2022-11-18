import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import UserEdit from './UserEdit'
import UserOrdersList from './UserOrdersList'
import UserProfile from './UserProfile'

function EditUser() {
    const { pathname } = useLocation()
    const UserID = pathname.split('/')[2]
    const user = useSelector((state) => state.users.user.find((item) => item._id === UserID))
    return (
        <>
            <h1 className='text-2xl font-extrabold mb-7 text-center'>Edit User</h1>
            <div className='md:px-28 px-7 md:flex py-14  justify-center'>

                <div className='w-full md:w-[65%] py-8 shadow-md bg-gray-200 m-2'>
                    <UserProfile user={user} />
                </div>
                <div className='w-[100%] py-8 shadow-md  bg-gray-200 m-2'>
                    <div className='p-3'>
                        <h1 className='text-2xl font-bold mb-8'>Edit</h1>
                        <UserEdit user={user} />
                    </div>
                </div>
            </div>
            {/* User order List */}
            <div className='md:px-28 mx-7'>
                <div className='w-[100%] py-8 shadow-md  bg-gray-200 m-2'>
                    <div className='p-3'>
                        <h1 className='text-2xl font-bold mb-8'>Orders</h1>
                        <UserOrdersList UserID={UserID} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser