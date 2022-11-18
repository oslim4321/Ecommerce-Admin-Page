import React from 'react'

function Color({ elem }) {
    return (

        <div className="relative cursor-pointer gap-4 flex justify-center">
            <div className={`w-8 h-8 bg-${elem}-500 transition-all rounded-full block ring-[#f6cda8] hover:ring-2 ring-offset-1 `} ></div>
            {/* <div className="w-8 h-8 bg-[#d89d94] transition-all rounded-full block ring-[#d89d94] hover:ring-2 ring-offset-1 " ></div>
                <div className="w-8 h-8 bg-[#dd6b6c] transition-all rounded-full block ring-[#dd6b6c] hover:ring-2 ring-offset-1 " ></div>
                <div className="w-8 h-8 bg-[#875d71] transition-all rounded-full block ring-[#875d71] hover:ring-2 ring-offset-1 " ></div>
                <div className="w-8 h-8 bg-[#5b5b5b] transition-all rounded-full block ring-[#5b5b5b] hover:ring-2 ring-2 ring-offset-1 " ></div> */}
        </div>

    )
}

export default Color