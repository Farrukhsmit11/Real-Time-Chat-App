import './App.css'
import { Login } from './pages/auth'
import { useEffect, useState } from 'react'
import Loader from './components/loader/Loader'
import Auth from "./routes/Auth"
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from './store/features/auth/authThunk'
import { useNavigate } from 'react-router-dom'
import { TOKEN } from './utils/constant'
import ProtectedRoutes from './routes/ProtectedRoutes'
import { PageWrapper } from './container'

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


  if (loading) {
    return <Loader />
  }

  if (!isAuthenticate) {
    return <Auth />
  }

  if (isAuthenticate) {
    return (
      <PageWrapper>
        <ProtectedRoutes />
      </PageWrapper>
    )
  }

  return (
    <>

    </>
  )
}

export default App
