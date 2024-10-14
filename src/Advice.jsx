import styled from "styled-components";
import { useEffect, useState } from "react";
import dividerPc from "./assets/pattern-divider-desktop.svg";
import dividerMobile from "./assets/pattern-divider-mobile.svg";
import loader from "./assets/loader.gif";

import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 3rem;
  background-color: #313a49;
  border-radius: 10px;
  width: 90%;

  @media (min-width: 768px) {
    border-radius: 20px;
  }
`;

const Header = styled.small`
  color: #53ffab;
  font-size: 0.8rem;
  letter-spacing: 3px;
  font-weight: 400;
`;

const AdviceText = styled.h3`
  margin: 1rem 0;
  font-size: 1.6rem;
  text-align: center;
  min-height: 7rem;
  width: 80%;
`;

const DividerImg = styled.img`
  content: url(${dividerMobile});
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    content: url(${dividerPc});
  }
`;

const Loader = styled.img`
  width: auto;
  height: 10rem;
  color: #313a49;
`;
function Advice() {
  const [result, setResult] = useState({});
  const [fetchState, setFetchState] = useState("");

  // async function

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");

    setFetchState("isLoading");

    if (!res.ok) {
      console.error("failed to fetch advice:", res.status);
      return;
    }

    const data = await res.json();
    setResult(data.slip);
    setTimeout(() => {
      setFetchState("isOkay");
    }, 2000);
  };

  return (
    <>
      <Container>
        {fetchState === "isOkay" ? (
          <>
            <Header>{`ADVICE #${result.id}`}</Header>
            <AdviceText>{`"${result.advice}"`}</AdviceText>
            <DividerImg />
            <Button
              onClick={() => {
                fetchAdvice();
              }}
            />{" "}
          </>
        ) : (
          <Loader src={loader} />
        )}
      </Container>
    </>
  );
}

export default Advice;
