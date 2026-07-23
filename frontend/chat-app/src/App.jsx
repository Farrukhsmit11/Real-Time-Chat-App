import './App.css'
import { Login } from './pages/auth'
import { useEffect, useState } from 'react'
import Loader from './components/loader/Loader'
import Auth from "./routes/Auth"
import AppRoutes from "./routes/AppRoutes"
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from './store/features/auth/authThunk'
import { useNavigate } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const navigate = useNavigate()

    const {isAuthenticate} = useSelector(({ auth }) => ({
      isAuthenticate: auth?.isAuthenticate,
    }))

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
    {isAuthenticate ? <AppRoutes /> :    <Auth /> }
    </>
  )
}

export default App
