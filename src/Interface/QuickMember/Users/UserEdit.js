import React, { useState } from 'react'

function EditButt({ user }) {
    const [edit, setedit] = useState(false)
    return (
        <>
            <h1 className="leading-7 text-blueGray-500 text-2xl my-3">Username</h1>
            <div x-data="{ open : false }" className="p-2 bg-white border shadow rounded md:w-96">
                {
                    !edit &&
                    <div className="flex justify-between items-center">
                        <div className="ml-2">{user.username}</div>
                        <button onClick={() => setedit(!edit)} type="button" className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">Edit</button>
                    </div>
                }

                {
                    edit &&
                    <div x-show="open" className="flex justify-between items-center">
                        <input type="text" className="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500" placeholder={user.username} />

                        <div className="flex justify-center items-center space-x-2">
                            <button onClick={() => setedit(!edit)} type="button" className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">
                                Cancel
                            </button>

                            <button onClick={() => setedit(!edit)} type="button" className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-medium rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                }

            </div>


            {/* EMAIL */}

            <h1 className="leading-7 text-blueGray-500 text-2xl my-3">Email</h1>
            <div x-data="{ open : false }" className="p-2 bg-white border shadow rounded md:w-96">
                {
                    !edit &&
                    <div className="flex justify-between items-center">
                        <div className="ml-2">{user.email}</div>
                        <button onClick={() => setedit(!edit)} type="button" className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">Edit</button>
                    </div>
                }

                {
                    edit &&
                    <div x-show="open" className="flex justify-between items-center">
                        <input type="text" className="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500" placeholder={user.email} />

                        <div className="flex justify-center items-center space-x-2">
                            <button onClick={() => setedit(!edit)} type="button" className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded">
                                Cancel
                            </button>

                            <button onClick={() => setedit(!edit)} type="button" className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-medium rounded"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default EditButt