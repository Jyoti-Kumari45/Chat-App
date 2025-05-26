import React from 'react'
import { CiSearch } from 'react-icons/ci'
const Search = () => {
    return (
        <div className='w-full h-[96px] flex items-center px-4'>
     
            <div className='flex items-center bg-[#5436397A] w-full px-3 py-2 rounded-full space-x-1' >
                <CiSearch className='text-x1 text-white' />
                <input 
                    type="text-x1"
                    name=""
                    id=""
                    placeholder="Search..."
                    className='bg-transparent outline-none placeholder:text-[#FFFFFF99] text-xs font-light flex-1 text-white'
                // className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    )
}

export default Search