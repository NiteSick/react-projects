import React from "react";
import styled, { css } from "styled-components";
import GlobalStyles from "../../GlobalStyles";

// Image imports
import AbstractImage from "../../../public/images/abstract-logo.png";

const Container = styled.div`
  width: 100%;
  background-color: var(--black);
  height: 80px;
  padding: 10px 100px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftConatiner = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const LogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
`;

const Heading = styled.h1`
  color: var(--white);
  font-size: 20px;
`;

const HelpContainer = styled.div`
  padding: 0 20px;
  border-left: 3px solid #fff;

  h1:hover {
    text-decoration: underline;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const RequestButton = styled.button`
  color: var(--white);
  background-color: #2f3941;
  border: 1px solid white;
  font-size: 24px;
  padding: 6px 22px;
  font-weight: 400;
  border-radius: 10px;
  text-align: center;
`;
const SignInButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  border: none;
  font-size: 24px;
  font-weight: 400;
  border-radius: 10px;
  padding: 6px 22px;
  text-align: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftConatiner>
          <LogoTitle>
            <Logo src={AbstractImage} />
            <Heading>Abstract</Heading>
          </LogoTitle>
          <HelpContainer>
            <Heading>Help Center </Heading>
          </HelpContainer>
        </LeftConatiner>

        <RightContainer>
          <RequestButton>Submit a request</RequestButton>
          <SignInButton>Sign In</SignInButton>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
