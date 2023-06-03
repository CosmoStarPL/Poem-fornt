import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 122px;
  color: #fff;
  background: #2297bc;
  border: 1px solid #00b3ff;
  box-shadow: 0px 0px 0px 7px rgba(43, 176, 185, 0.5);
  border-radius: 25px;
  padding: 10px 0;
`;
Box.Title = styled.div`
  font-size: 20px;
  font-weight: 400;
  padding: 10px 20px;
`;
Box.Text = styled.div`
  font-size: 14px;
  padding: 0 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;

const Button = styled.button`
  width: 98px;
  height: 35px;
  background: #00c2ff;
  border-radius: 20px;
  border: none;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  padding: 0 10px;
  cursor: pointer;
  :hover {
    background: #0095C5;
  }
`;

export { Container, Box, ButtonGroup, Button };
