import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MedicineList from './components/MedicineList'
import AddMedicineForm from './components/AddMedicineForm'
import Cart from './components/Cart'
import CartContextProvider from './Context/cart-context'

const App = () => {
    const addMedicined = (medicine) => {
        // console.log(medicine)
        setList(prev => [...prev, medicine]);
        console.log(list)
    }
    return (
        <CartContextProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<MedicineList />} />
                    <Route path='/addMedicine' element={<AddMedicineForm addMedicine={addMedicined} />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App

