import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Layout from './Layout'
import JoinNow from './components/JoinNow'
import PageUnderConstruction from './components/PageUnderConstruction'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/join-now' element={<JoinNow />} />
                    <Route path='/under-construction' element={<PageUnderConstruction />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
