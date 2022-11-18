import React, { useState } from 'react'

function Size({ setSize }) {
    const [userinfo, setUserInfo] = useState({
        size: [],
    });


    function handleChange(e) {
        const { value, checked } = e.target;
        const { size } = userinfo;

        if (checked) {
            setUserInfo({
                size: [...size, value],
            });
        }

        else {
            setUserInfo({
                size: size.filter((e) => e !== value),
            });
        }
    }
    setSize(userinfo)

    return (
        <div>
            <div className="flex gap-x-10 overflow-x-auto my-4">
                <label className="inline-flex items-center mt-3">
                    <input value='xs' type="checkbox" className="form-checkbox h-5 w-5 text-gray-600"
                        onChange={handleChange}
                    /><span className="ml-2 text-gray-700">XS</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input value='xl' type="checkbox" className="form-checkbox h-5 w-5 text-red-600"
                        onChange={handleChange}
                    /><span className="ml-2 text-gray-700">XL</span>
                </label>

                <label className="inline-flex items-center mt-3">
                    <input value='s' type="checkbox" className="form-checkbox h-5 w-5 text-orange-600"
                        onChange={handleChange}
                    /><span className="ml-2 text-gray-700">S</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input value='l' type="checkbox" className="form-checkbox h-5 w-5 text-orange-600"
                        onChange={handleChange}
                    /><span className="ml-2 text-gray-700">L</span>
                </label>
                <label className="inline-flex items-center mt-3">
                    <input value='m' type="checkbox" className="form-checkbox h-5 w-5 text-orange-600"
                        onChange={handleChange}
                    /><span className="ml-2 text-gray-700">M</span>
                </label>
            </div>
            {/* <p className='space-x-9'>{userinfo.size}</p> */}
            {/* <div className="result">
                Above checkbox is {isChecked ? "checked" : "un-checked"}.
            </div> */}
        </div>
    )
}

export default Size