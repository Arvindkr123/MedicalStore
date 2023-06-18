import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/cart-context'

const Header = () => {
    const cartCtx = useContext(CartContext);
    return (
        <div className='bg-blue-900'>
            <div className="container max-w-[1240px] mx-auto flex justify-between items-center">
                <div className="logo py-5 flex items-center">
                    <img className='w-20 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-GI4f4u15N9e7QFsgsfr0gtdk1gmOB85maYarnDCb2OBD0_ViiZPpsGhTOGv3R5Aoyo&usqp=CAU" alt="logo" />
                    <span className='text-6xl text-white'>AK</span>
                </div>
                <ul className='flex gap-10 text-white text-2xl'>
                    <li className='duration-500 hover:text-green-600'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='duration-500 hover:text-green-600'>
                        <Link to='/addMedicine'>Add Medicine</Link>
                    </li>
                    <li className='duration-500 hover:text-green-600'>
                        <Link to='/cart'>Cart items ({`${cartCtx.data.length}`})</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
