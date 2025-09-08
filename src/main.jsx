import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar.jsx'
import "./layout.scss"
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <div className='layout'>
        <Navbar />
        <App />
      </div>

      <ToastContainer
        position="top-right"     // top-right, top-center, bottom-right, etc.
        autoClose={3000}         // ms me close time
        hideProgressBar={false}  // progress bar dikhani ya nahi
        newestOnTop={false}      // latest toast upar ho ya niche
        closeOnClick             // click karke close karna
        rtl={false}              // right-to-left langs ke liye
        pauseOnFocusLoss         // tab switch karne pe pause kare
        draggable                // drag karke dismiss
        pauseOnHover             // hover pe pause kare
        theme="light" />

    </BrowserRouter>

  </StrictMode>,
)
