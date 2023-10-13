import React from "react";
import styled from "styled-components";

export default function Scary() {
    return (
        <Container>
            <div>
                <h1>Scary</h1>
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