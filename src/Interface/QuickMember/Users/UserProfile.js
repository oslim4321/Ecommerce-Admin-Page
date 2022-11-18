import React from 'react'

function UserProfile({ user }) {

    return (
        <div>

            <div className="bg-gray-200 font-sans w-full flex flex-row justify-center items-center">
                <div className="card w-96 mx-auto  shadow-xl hover:shadow py-4">
                    <img className="w-32 mx-auto rounded-full mt-20 border-8 border-white" src="/Images/stock-photo-hipster-igen-teen-pretty-fashion-girl-model-wear-stylish-glasses-headphones-enjoy-listen-new-cool-1564166668.jpg" alt="" />
                    <div className="text-center mt-2 text-3xl font-medium capitalize">{user.username}</div>
                    <div className="text-center mt-2 font-light text-sm">{user.email}</div>
                    <div className="text-center font-normal text-lg">{user._id}</div>
                    <div className="text-center font-normal text-lg">Software Enginnering</div>
                    <div className="text-center mt-2 font-light text-sm">Contact Details</div>

                    {/* <div className="px-6 text-center mt-2 font-light text-sm">
                        <p>
                            Front end Developer, avid reader. Love to take a long walk, swim
                        </p>
                    </div>
                    <hr className="mt-8" />
                    <div className="flex p-4">
                        <div className="w-1/2 text-center">
                            <span className="font-bold">1.8 k</span> Followers
                        </div>
                        <div className="w-0 border border-gray-300">

                        </div>
                        <div className="w-1/2 text-center">
                            <span className="font-bold">2.0 k</span> Following
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default UserProfile