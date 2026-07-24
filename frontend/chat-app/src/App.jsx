import './App.css'
import { Login } from './pages/auth'
import { useEffect, useState } from 'react'
import Loader from './components/loader/Loader'
import Auth from "./routes/Auth"
import AppRoutes from "./routes/AppRoutes"
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from './store/features/auth/authThunk'
import { useNavigate } from 'react-router-dom'
import { TOKEN } from './utils/constant'

function App() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { loading, isAuthenticate } = useSelector((state) => state.auth)

  useEffect(() => {
    const token = localStorage.getItem(TOKEN)

    if (token) {
      dispatch(getProfile())
    }

  }, [])

  if (isAuthenticate) {
    return <AppRoutes />
  }


  if (!isAuthenticate) {
    return <Auth />
  }


  if (loading) {
    return <Loader />
  }

  return (
    <>

    </>
  )
}

export default App
