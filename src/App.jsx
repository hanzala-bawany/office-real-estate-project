import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ListPage from './pages/listPage/ListPage'
import SingleListPage from './pages/singleListPage/SingleListPage'
import ProfilePage from './pages/profilePage/ProfilePage'

function App() {

  return (

    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/listPage' element={<ListPage />} />
        <Route path='/listPage/:id' element={<SingleListPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<ProfilePage />} />

      </Routes>
    </>

  )
}

export default App
