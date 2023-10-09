import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import { Route, Routes } from 'react-router-dom'
import PokenmonDetails from './components/PokemonDetails/PokemonDetails'

function App() {
  return (
<Routes>
  <Route path='/' element={<Pokedex />} />
  <Route path='/pokemon/:id' element={<PokenmonDetails />} />
  <Route path='*' element={<h1> Not found </h1>} />
</Routes>
  ) 
}

export default App
