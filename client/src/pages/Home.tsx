import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

export default function Home() {
    const navigate = useNavigate();
    return (
        <Container>
            <div className='content'>
                <h1 className="text-center">31 Nights of Horror</h1>
                <h3> How Scary Can You Handle?</h3>
                <div className='buttons'>
                    <button onClick={() => navigate('/notscary')}>Not So Scary!</button>
                    <button onClick={() => navigate('/scary')}>Scary!</button>
                    <button onClick={() => navigate('/terrifying')}>Terrifying!</button>
                </div>

            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    padding-top: 250px;
    margin: 0px;
    background-color:black;
    background-size:100%;
    margin:0;
    .content{
        display:flex;
        flex-direction: column;
        color:orange;
        margin: 0;
        text-align: center;
        justify-content:center;
        align-items:center;
    }

    .buttons{
        width: 25vw;
        display:flex;
        align-items: center;
        justify-content: space-around;
    }
    button{
        color: orange;
        font-size: 15px;
        font-weight: bold;
        background-color:white;
        border: none;
        height: 40px;
        width: 30vw;
        margin: 20px;


    }

`