import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import ListPage from './pages/listPage/ListPage'
import SingleListPage from './pages/singleListPage/SingleListPage'
import ProfilePage from './pages/profilePage/ProfilePage'
import Signup from './pages/signup/Signup'
import Signin from './pages/signin/Signin'
import EmailVerification from './pages/emailVerification/EmailVerification'
import AppLayout from './layouts/AppLayout'
import AuthRoute from './routes/AuthRoute'
import NotFoundPage from './pages/Others/NotFoundPage'


function App() {

  return (

    <>
      <Routes>

        <Route element={<AppLayout />} >

          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/emailVerification' element={<EmailVerification />} />
          <Route path='/about' element={<About />} /> 
  
          <Route element={<AuthRoute />}>

            <Route path='/listPage' element={<ListPage />} />
            <Route path='/listPage/:id' element={<SingleListPage />} />
            <Route path='/profile' element={<ProfilePage />} />

          </Route >

        </Route>

        <Route path='/*' element={<NotFoundPage />} />

      </Routes>
    </>

  )
}

export default App
 