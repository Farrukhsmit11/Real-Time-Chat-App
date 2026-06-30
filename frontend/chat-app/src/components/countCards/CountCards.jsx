import React, { useEffect, useState } from 'react'
import "./CountCards.css"
import { Card } from "antd"
import { dummyAdminDashboardData } from '../../utils'

const CountCards = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        setData(dummyAdminDashboardData)
    }, [])


    return (
        <Card></Card>
    )
}

export default CountCards