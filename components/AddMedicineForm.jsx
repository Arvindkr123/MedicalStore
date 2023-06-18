import React, { useState } from 'react'
import { addMedicines } from '../database/api';
import { useNavigate } from 'react-router-dom'

const initialValue = {
    name: '',
    description: '',
    price: '',
    qty: ''
}
const AddMedicineForm = () => {
    const [medicine, addMedicine] = useState(initialValue);
    const { name, description, price, qty } = medicine;
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        await addMedicines(medicine)
        addMedicine(initialValue);
        navigate("/");
    }

    const onChangeValue = e => {
        // console.log(e.target.name, e.target.value)
        addMedicine({ ...medicine, [e.target.name]: e.target.value })
    }
    return (
        <div className="w-1/2 py-20 mx-auto">
            <p className="text-center text-red-500 p-3 rounded-xl mb-5 text-3xl bg-green-900">
                Add your Medicine
            </p>
            <form onSubmit={submitHandler} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 border shadow-lime-700">
                <div className="mb-4">
                    <label className="block text-gray-700 text-xl font-bold mb-2">
                        Medicine Name
                    </label>
                    <input value={name} name={'name'} onChange={(e) => onChangeValue(e)} className="shadow text-2xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xl font-bold mb-2">
                        Description
                    </label>
                    <textarea value={description} name={'description'} onChange={(e) => onChangeValue(e)} row={1} className="shadow text-2xl  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xl font-bold mb-2">
                        Price
                    </label>
                    <input value={price} name={'price'} onChange={(e) => onChangeValue(e)} className="shadow text-2xl  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-xl font-bold mb-2">
                        Quantity
                    </label>
                    <input value={qty} name={'qty'} onChange={(e) => onChangeValue(e)} className="shadow appearance-none text-2xl  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="Submit">
                        Add Medicine
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AddMedicineForm;
