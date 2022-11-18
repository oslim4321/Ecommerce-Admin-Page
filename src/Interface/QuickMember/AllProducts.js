import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../Preloader/Spinner'
import { deleteProductStart, getSingleProductDetails } from '../../Redux/Product'
import { UserRequest } from '../../Request'
import { format } from 'timeago.js'


function AllProducts() {
    const [products, setproducts] = useState()
    // const selector = useSelector()
    const { Product, error } = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getSingleProductDetails())

    }, [])
    useEffect(() => {
        setproducts(Product)
    }, [Product])
    // products && setproducts((prev) => prev.sort((a, b) => a.createdAt - b.createdAt))



    const DeleteProd = async (id) => {
        const res = Product.find((item) => item._id === id)

        await UserRequest.delete(`/product/${res._id}`)
        // setproducts([Product.filter((item) => item._id != id)])
        setproducts(
            Product.filter((item) => item._id !== id)
        )
        // Product.filter(
        //     Product.find((item) => item._id === id),
        //     1
        // )
    }

    // console.log(products)
    return (
        <div>
            <div className="max-w-5xl mx-auto pl-10">

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="p-4">
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative mt-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"></path>
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
                                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Stock
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products ?
                                    products.map((prod) => (
                                        <tr key={prod._id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                                {prod._id}
                                            </th>
                                            <td className="px-6 py-4 flex items-center">
                                                <img className='w-10 mx-3' src={prod.img} alt="" />
                                                <div className="font-bold">{prod.title}</div>
                                            </td>
                                            <td className={`px-6 py-4 ${prod.inStock ? 'text-green-600' : 'text-red-500'}`}>
                                                {prod.inStock ? 'True' : 'false'}
                                            </td>
                                            <td className="px-6 py-4">
                                                ${prod.price}
                                            </td>
                                            <td className="px-6 py-4">
                                                {format(prod.createdAt)}
                                            </td>
                                            <td className="px-6 py-4 text-right flex">
                                                <a onClick={() => navigate(`/editProduct/${prod._id}`)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</a>
                                                <a onClick={() => DeleteProd(prod._id)} className="font-medium text-red-600 dark:text-blue-500 hover:underline"><i className="bi bi-trash3"></i></a>
                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <div className="py-4"><Spinner /></div>
                            }
                            <p className='text-red-400 text-center'>{error}</p>

                            {/* <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>


                <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
            </div>
        </div>
    )
}

export default AllProducts