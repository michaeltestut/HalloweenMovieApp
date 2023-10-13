import React from "react";
import styled from "styled-components";

export default function NotScary() {
    return (
        <Container>
            <div>
                <h1> Not So Scary</h1>
            </div>
        </Container>
    )

}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0px;
    padding-top: 10px;
    background-color:black;
    h1{
        color: orange;
    }
`