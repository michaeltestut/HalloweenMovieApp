import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="text-center">31 Nights of Horror</h1>
            <h3> How Scary Do You Want?</h3>
            <button onClick={() => navigate('/notscary')}>Not So Scary!</button>
            <button onClick={() => navigate('/scary')}>Scary!</button>
            <button onClick={() => navigate('/terrifying')}>Terrifying!</button>

        </div>
    )
}