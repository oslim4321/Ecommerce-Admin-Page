import React from 'react'

function Select({ product, setdesc, settitle, setprice, setinStock, desc, title, price, inStock }) {
    return (
        <div>
            <h1 className='font-bold'>{product.title}</h1>
            <div className="relative mt-4">
                <label for="name" className="text-base leading-7 text-blueGray-500">In Stock</label>
                <select onChange={(e) => setinStock(e.target.value)} className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                    {/* {product.inStock ? } */}
                    <option disabled selected value='disabled'>InStocK</option>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>

                <div>
                    <label for="price" className="text-base leading-7 text-blueGray-500">Price</label>
                    <input onChange={(e) => setprice(e.target.value)} placeholder={product.price} value={price} type="text" className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" />
                </div>
                <div>
                    <label for="name" className="text-base leading-7 text-blueGray-500">title</label>
                    <input onChange={(e) => settitle(e.target.value)} value={title} type="text" className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" placeholder={product.title} />
                </div>
                <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                    <div className="w-full px-3">
                        <label className="text-base leading-7 text-blueGray-500" htmlFor="description">Description </label>
                        <textarea onChange={(e) => setdesc(e.target.value)} value={desc} className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand" id="description" type="text" name="description" placeholder={product.desc} required=""
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Select