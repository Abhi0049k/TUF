import { BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./Form"
import Table from "./Table"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Form />} />
                <Route path='/table' element={<Table />} />
                <Route path='/*' element={<h1 className='text-2xl'>404 Page Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}