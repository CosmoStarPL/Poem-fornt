import styled from "styled-components";

const Container = styled.div``;

const Header = styled.header``;
Header.Nav = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
Header.Nav.Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000;
`;
Header.Nav.BlueBox = styled.div`
  width: 44px;
  height: 22px;
  background: #1f76dc;
`;

Header.TextBox = styled.div`
  width: 100%;
  height: 115px;
  background: #78d7f5;
  display: flex;
  align-items: center;
`;
Header.TextBox.Line = styled.div`
  width: 5px;
  height: 88px;
  background: #464646;
  border-radius: 2.5px;
  margin-left: 20px;
`;
Header.TextBox.Text = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  width: 300px;
  height: fit-content;
  margin-left: 20px;
`;

const Body = styled.div`
  margin-top: 20px;
  background-color: #78d7f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PoemBox = styled.div`
  width: 300px;
  height: fit-content;
  background: rgba(254, 254, 254, 0.7);
  border-radius: 20px;
  margin: 20px 0;
  padding-bottom: 10px;
`;
PoemBox.Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
`;
PoemBox.Head.Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  margin-top: 10px;
`;
PoemBox.Head.Time = styled.div`
  line-height: 24px;
  font-size: 16px;
  font-weight: 300;
`;

PoemBox.Main = styled.div`
  margin: 0px 20px;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;
PoemBox.Footer = styled.div`
  margin: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
PoemBox.Footer.Like = styled.div`
  font-weight: 600;
`;
PoemBox.Footer.Date = styled.div`
  line-height: 24px;
  font-size: 16px;
  font-weight: 300;
`;

export { Container, Header, Body, PoemBox };
