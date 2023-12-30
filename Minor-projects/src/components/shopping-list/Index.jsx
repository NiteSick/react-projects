import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 700px;
  border: 3px dashed black;
  background-color: white;
  padding: 10px;
`;

const StyledHeading = styled.h1`
  font-size: 50px;
  font-weight: 400px;
  color: black;
  text-align: center;
  margin-top: 20px;
`;

const InputWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const StyledTextInput = styled.input`
  height: 30px;
  width: 200px;
`;

const AddButton = styled.button`
  height: 30px;
  width: 40px;
`;

const TodoContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color: gray;
  margin-top: 30px;
  overflow-y: scroll;
`;

const ItemList = styled.ol``;
function ShoppingList() {
  const [items, setItems] = useState([]);
  return (
    <Container>
      <Wrapper>
        <StyledHeading>Items to Buy</StyledHeading>
        <InputWrapper>
          <StyledTextInput type="text" id="item" placeholder="Add a new item" />
          <AddButton>Add</AddButton>
        </InputWrapper>

        <TodoContainer>
          <
        </TodoContainer>
      </Wrapper>
    </Container>
  );
}

export default ShoppingList;
