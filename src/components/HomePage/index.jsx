import React, { useState } from "react";
import { Body, Container, Header, PoemBox } from "./style";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "ngrok-skip-browser-warning": "34214",
};

const HomePage = () => {
  const [data, setData] = useState([]);
  fetch("https://316d-213-230-92-87.ngrok-free.app/", {
    method: "GET",
    headers: HEADERS,
  })
    .then((res) => res.json())
    .then((data) => setData(data.result));
  return (
    <Container>
      <Header>
        <Header.Nav>
          <Header.Nav.Title>Тетрадь Творчество</Header.Nav.Title>
          <Header.Nav.BlueBox />
        </Header.Nav>
        <Header.TextBox>
          <Header.TextBox.Line />
          <Header.TextBox.Text>
            На этом сайте вы сможете ознакомиться с прекрасными стихами,
            созданными талантливым автором. Ниже представлены несколько его
            работ, которые вы можете оценить для себя. Приносим извинения за
            возможные неудобства :)
          </Header.TextBox.Text>
        </Header.TextBox>
      </Header>
      <Body>
        {data.map(({ _id, date, time, title, poem, author }) => {
          return (
            <div key={_id}>
              <PoemBox>
                <PoemBox.Head>
                  <PoemBox.Head.Title>
                    {title || "Заголовок"}
                  </PoemBox.Head.Title>
                  <PoemBox.Head.Time>{time || "22:22"}</PoemBox.Head.Time>
                </PoemBox.Head>
                <PoemBox.Main>{poem || "Стих..."}</PoemBox.Main>
                <PoemBox.Footer>
                  <PoemBox.Footer.Like>
                    {author || "Author"}
                  </PoemBox.Footer.Like>
                  <PoemBox.Footer.Date>
                    {date || "23.02.2023"}
                  </PoemBox.Footer.Date>
                </PoemBox.Footer>
              </PoemBox>
            </div>
          );
        })}
      </Body>
    </Container>
  );
};

export default HomePage;
