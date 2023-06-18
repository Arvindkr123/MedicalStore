import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/cart-context'

const Cart = () => {
    const { data } = useContext(CartContext);
    return (
        <div className='bg-yellow-600'>
            <h1 className='text-center text-6xl p-12 animate-ping'>CART</h1>
            <div className='text-3xl m-8 flex flex-wrap gap-8 bg-slate-400 mx-auto rounded-xl p-24'>
                {
                    data?.map((item, i) => {
                        return <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] hover:scale-105 duration-300" key={i}>
                            <div className="text-center">
                                <h2 className="text-3xl mb-8">{item.name}</h2>
                                <div className="text-gray-600 mb-3 text-2xl">{item.description}</div>
                                <div className="text-gray-600 mb-2 text-xl">RS {item.price} / </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Cart
