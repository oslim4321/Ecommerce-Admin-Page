import React, { useState } from 'react'

function Testing() {
    const [input, setinput] = useState({})

    function handleChange(e) {
        setinput({
            ...input,
            [e.target.name]: e.target.value
        }
        )
    }
    function post() {


    }

    return (
        <div className='mx-52'>
            <div className="relative mt-4">
                <label htmlFor="inStock" className="text-base leading-7 text-blueGray-500">in Stock</label>
                <select name='yes/no' onChange={handleChange} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                    <option selected disabled value='inStoct'>te/no</option>
                    <option value='yes'>yes</option>
                    <option value='no'>no</option>
                </select>
            </div>
            <div className="relative mt-4">
                <label htmlFor="inStock" className="text-base leading-7 text-blueGray-500">in Stock</label>
                <select name='inStock' onChange={handleChange} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                    <option selected disabled value='inStoct'>true/false</option>
                    <option value='true'>True</option>
                    <option value='false'>False</option>
                </select>
            </div>
            <div className="relative mt-4">
                <label htmlFor="inStock" className="text-base leading-7 text-blueGray-500">in Stock</label>
                <select name='yourname' onChange={handleChange} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                    <option selected disabled value='inStoct'>inStock</option>
                    <option value='samad'>samad</option>
                    <option value='semiat'>semiat</option>
                </select>
            </div>
            <div className="relative mt-4">
                <label htmlFor="inStock" className="text-base leading-7 text-blueGray-500">in Stock</label>
                <input onChange={handleChange} type="text" name='lastname' className='w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2' />
            </div>
            <button onClick={post}>Check</button>
        </div>
    )
}

export default Testing