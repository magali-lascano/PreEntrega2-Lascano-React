import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import { ItemDetailContainer } from './components/ItemDetailContainer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
            path="/"
            //element={<ItemListContainer greeting="Productos" />}
        />
        <Route 
            path="/category/:id"
            //element={<ItemListContainer greeting="Productos" />}
        />
      </Routes>
      <ItemDetailContainer itemId={2} />
    </BrowserRouter>
  )
}

