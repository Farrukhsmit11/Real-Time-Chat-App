import './App.css'
import { Login } from './pages/auth'
import { useEffect, useState } from 'react'
import Loader from './components/loader/Loader'
import Auth from "./routes/Auth"
import AppRoutes from "./routes/AppRoutes"
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from './store/features/auth/authThunk'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Auth />
      <AppRoutes />
    </>
  )
}

export default App
