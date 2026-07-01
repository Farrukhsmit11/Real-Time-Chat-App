import React from 'react'
import "./Home.css"
import CountCards from '../../components/countCards/CountCards'

const Home = () => {
    return (
        <main style={{ "flex": "1" }}>
            <div className="container">
                <div className="page-header">
                    <h1 className="dashboard-home-title">Dashboard Overview</h1>
                </div>
                <CountCards />
            </div>
        </main>
    )
}

export default Home