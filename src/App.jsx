import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Advice from "./Advice";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14rem 0rem;

  @media (min-width: 769px) {
    padding: 14rem 7rem;
  }

  @media (min-width: 1025px){
    padding: 14rem;
  }
`;

function App() {
  return (
    <>
      <Container>
        <Advice />
      </Container>
    </>
  );
}

export default App;
