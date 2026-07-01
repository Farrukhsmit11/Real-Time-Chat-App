import React, { useEffect, useState } from 'react'
import "./CountCards.css"
import { Card, Col, Row, Statistic } from "antd"

const CountCards = () => {
    return (
        <div className="count-cards-main">
            <div className="count-card">
                <Card>
                    <Statistic title="Active Users" value={112893} />
                </Card>

            </div>
        </div>

    )
}

export default CountCards