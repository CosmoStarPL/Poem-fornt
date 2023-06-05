import React, { useEffect, useState } from "react";
import { Body, Container, Header, PoemBox } from "./style";

const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/", {
          method: "GET",
          headers: HEADERS,
        });
        const data = await response.json();
        setData(data.result);
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    };

    fetchData();
  }, []);

  const getBrokenText = (text) => {
    const replaced = text.replace(/\n/g, "<br>");
    return replaced;
  };

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
                <PoemBox.Main dangerouslySetInnerHTML={{__html: getBrokenText(poem) || "Стих..."}}></PoemBox.Main>
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
