import React, { useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Size from './Size'
import app from '../../../firebase'
import Color from './Color';
import { UserRequest } from '../../../Request';
import { useNavigate } from 'react-router-dom';

function UploadProduct() {
    const [size, setSize] = useState()
    const [input, setinput] = useState()
    const [categories, setcategories] = useState('')
    const [color, setcolor] = useState('')
    const [file, setfile] = useState()
    const [showColor, setshowColor] = useState(false)
    const [postProgress, setpostProgress] = useState()
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    function handleChange(e) {
        setinput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    function handleCat(e) {
        setcategories(e.target.value.split(','))
    }
    function handleColor(e) {
        setcolor(e.target.value.split(','))

    }
    /* Upload item to backend node */
    const UploadItems = async (product) => {
        try {
            const res = await UserRequest.post(`/product`, product)

            if (res.data) {
                navigate('/AllProducts')
                setloading(false)
            }
        } catch (error) {

        }
    }
    /* Upload item to backend node end*/

    // console.log(color)
    const Post = (e) => {
        e.preventDefault()
        setloading(true)
        const filename = new Date().getTime() + file.name
        const storage = getStorage(app)
        const storageRef = ref(storage, filename)

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                setpostProgress(progress)
                switch (snapshot.state) {
                    case 'paused':

                        break;
                    case 'running':

                        break;
                    default:
                }
            },
            (error) => {
                // Handle unsuccessful uploads
                setloading(false)

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log('File available at', downloadURL);
                    const product = { ...input, img: downloadURL, categories, size, color }
                    UploadItems(product)
                });
            }
        );
    }

    return (
        <div>
            <div>

                <div className="container items-center px-5 py-12 lg:px-20">
                    <form className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
                        <div className="text 2xl font-extrabold">Upload Products</div>
                        <section className="flex flex-col w-full h-full p-1 overflow-auto">
                            <header className="flex flex-col items-center justify-center py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                                <p className="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500">
                                    {/* <span>Drag and drop your</span> <span> img anywhere or</span> */}
                                    {/* <label for="name" className="text- text-blueGray-500">Input Image</label> */}

                                </p>
                                {/* <button className="w-auto px-2 py-1 my-2 mr-2 text-blueGray-500 transition duration-500 ease-in-out transform border rounded-md hover:text-blueGray-600 text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-gray-100"> */}
                                <input type="file" onChange={(e) => setfile(e.target.files[0])} />
                                {/* Upload a img </button> */}
                            </header>
                        </section>
                        <div className="relative pt-4">
                            <label for="title" className="text-base leading-7 text-blueGray-500">Title</label>
                            <input onChange={handleChange} type="text" id="title" name="title" placeholder="title" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        </div>
                        <div className="relative pt-4">
                            <label htmlFor="price" className="text-base leading-7 text-blueGray-500">Price</label>
                            <input onChange={handleChange} type="number" id="number" name="price" placeholder="price" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        </div>
                        <div className="relative pt-4">
                            <label htmlFor="category" className="text-base leading-7 text-blueGray-500">Category</label>
                            <input onChange={handleCat} type="text" id="number" name="category" placeholder="red,xl,yellow" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                        </div>
                        <div className="relative pt-4">
                            <label htmlFor="color" className="text-base leading-7 text-blueGray-500">Colors</label>
                            <input onChange={handleColor} type="text" id="number" name="color" placeholder="red,green,yellow,purple" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                            <div>
                                {color &&
                                    color.map((elem) => {
                                        return (
                                            <div className='flex justify-center items-center mt-2 flex-col'>
                                                {/* {console.log(elem)} */}
                                                <div className={`w-8 h-8 bg-${elem}-500 transition-all rounded-full block ring-[#f6cda8] hover:ring-2 ring-offset-1 `} ></div>
                                            </div>
                                        )
                                    })


                                }
                            </div>
                        </div>

                        <div className="relative mt-4">
                            <label htmlFor="inStock" className="text-base leading-7 text-blueGray-500">in Stock</label>
                            <select name='inStock' onChange={handleChange} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                                <option selected disabled value='inStoct'>inStock</option>
                                <option value='true'>True</option>
                                <option value='false'>False</option>
                            </select>
                        </div>
                        <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                            <div className="w-full px-3">
                                <label className="text-base leading-7 text-blueGray-500" htmlFor="description">Description </label>
                                <textarea onChange={handleChange} className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand" id="description" type="text" name="desc" placeholder="Message..." required=""></textarea>
                            </div>
                        </div>
                        {/* Sizes */}
                        <div className="relative pt-1">
                            <label className="flex items-center"> Size </label>
                            <div type="number" id="number" name="number" placeholder="price" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                                <Size setSize={setSize} />
                            </div>
                        </div>
                        <div className="flex items-center w-full pt-4 mb-4">
                            {
                                loading ?
                                    <button className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 cursor-not-allowed"> Loading... </button>
                                    :
                                    <button onClick={Post} className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "> Post </button>
                            }
                        </div>
                        <div className="text-center text-2xl">{postProgress ? 'Upload is ' + postProgress + '% done' : null}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadProduct