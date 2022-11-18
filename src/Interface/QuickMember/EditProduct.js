import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Spinner from '../../Preloader/Spinner'
import { UserRequest } from '../../Request'
import Select from './Select'
import ProductChart from './ProductChart'

function EditProduct() {
    const { pathname } = useLocation()
    const productId = pathname.split('/')[2]
    const product = useSelector((state) => state.product.Product.find((product) => product._id === productId))



    const [title, settitle] = useState()
    const [price, setprice] = useState()
    const [inStock, setinStock] = useState()
    const [desc, setdesc] = useState()
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState()
    const navigate = useNavigate()

    const UpdateProduct = async () => {
        if (!inStock) {
            alert('You didnt pick stock value')
        } else {
            setloading(true)
            try {
                const res = await UserRequest.patch(`/product/${productId}`, { title, price, inStock, desc })
                // console.log(res.data)
                setloading(false)
                navigate('/AllProducts')
            } catch (error) {
                setloading(false)
                seterror(error.message)


            }
        }
    }

    return (
        <div className='md:pt-[150px] pt-12'>
            <div className="flex justify-between items-center md:px-60 mb-6 px-20">
                <h1 className='font-bold text-2xl'>Products</h1>
                <button className="btn btn-success md:btn-lg">Create</button>
            </div>
            {
                product ?
                    <>
                        <div className='md:flex justify-center items-center w-screen px-7'>
                            {/* Sales */}
                            <div className="md:w-[500px] h-[200px] shadow-md w-full" ><ProductChart /></div>
                            {/* summarys */}
                            <div className="md:w-[500px] h-[200px] shadow-md w-full" >
                                <div className="p-3">
                                    <div className="flex items-center space-x-5 pl-7">
                                        <img className='w-16 rounded-full' src="/Images/stock-photo-woman-is-using-virtual-reality-headset-neon-light-studio-portrait-1563687376 (1).jpg" alt="" />
                                        <h1>Apple Cloth</h1>
                                    </div>
                                    <div className="px-2">
                                        <div className="flex items-center space-x-14 pl-7">
                                            <h1 className='font-bold my-2'>ID:</h1>
                                            <h1>{product._id.slice(0, 7)}</h1>
                                        </div>
                                        <div className="flex items-center space-x-14 pl-7">
                                            <h1 className='font-bold my-2'>Sales:</h1>
                                            <h1>Apple Cloth</h1>
                                        </div>
                                        <div className="flex items-center space-x-14 pl-7 ">
                                            <h1 className='font-bold my-2'>Instock:</h1>
                                            <h1>{product.inStock ? 'True' : 'false'}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Edit here */}
                        <div className="md:px-56 md:flex items-center justify-center mt-14 mb-10 w-screen">
                            <div className="w-full  shadow-md" >
                                <div className="md:flex justify-between items-center p-8">
                                    <div className='mb-5'>
                                        <Select
                                            product={product}
                                            setinStock={setinStock}
                                            setprice={setprice}
                                            settitle={settitle}
                                            setdesc={setdesc}
                                            inStock={inStock}
                                            price={price}
                                            title={title}
                                            desc={desc}
                                        ></Select>
                                    </div>
                                    {/* Other side */}
                                    <div className='space-y-14'>
                                        <img className='w-40 rounded-md' src={product.img} alt="" />
                                        <div className="md:flex items-center justify-center">
                                            {
                                                loading ?
                                                    <button onClick={UpdateProduct} className="btn btn-success cursor-not-allowed">Loading...</button>
                                                    :
                                                    <button onClick={UpdateProduct} className="btn btn-success">Update</button>
                                            }
                                            <p>{error}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                    :
                    <Spinner />
            }
        </div>
    )
}

export default EditProduct