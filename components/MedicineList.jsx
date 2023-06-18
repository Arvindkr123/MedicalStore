import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { addToCartMedicine, getMedicine, updateData } from '../database/api';

const MedicineList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const res = await getMedicine();
        console.log(res)
        setList(res.data)
    }
    const addToCartHandler = async (item, id) => {
        console.log('button clicked', item, id)
        await addToCartMedicine({ name: item.name, description: item.description, price: item.price });
        await updateData({ name: item.name, description: item.description, price: item.price, qty: Number(item.qty) - 1, id: id }, id)
        getData();
    }

    return (
        <div className='text-3xl m-8 flex flex-wrap gap-8 bg-slate-400 mx-auto rounded-xl p-24'>
            {/* MedicineName: name, Price: price, Description: description, Quantity */}
            {list.length == 0 ? <p className='text-center text-6xl'>Medicine are not added yet go to add medicine form ! </p> : list.map((item, i) => {
                return <div className="bg-white rounded-lg p-6 shadow-xl w-[500px] hover:scale-105 duration-300" key={i}>
                    <div className="text-center">
                        <h2 className="text-3xl mb-8">{item.name}</h2>
                        <div className="text-gray-600 mb-3 text-2xl">{item.description}</div>
                        <div className="text-gray-600 mb-2 text-xl">RS {item.price} / </div>
                        <div className="text-gray-600 text-xl">Qty : {item.qty}</div>
                        <div className='w-1/2 mx-auto mt-5'>
                            <button disabled={item.quantity === 0} onClick={() => addToCartHandler(item, item.id)} className={`bg-green-600 text-yellow-50 rounded-xl p-3 ${item.qty === 0 && 'bg-red-800'}`}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default MedicineList
