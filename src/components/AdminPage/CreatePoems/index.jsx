import React, { useRef } from "react";
import {
  Container,
  Form,
  Title,
  CreatePoem,
  SubTitle,
  Input,
  Select,
  SendButton,
} from "./style";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:3001/admin";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const CreatePoemPage = () => {
  const navigate = useNavigate();
  const titleRef = useRef("");
  const poemRef = useRef("");
  const authorRef = useRef("");

  const Create = () => {
      fetch(URL, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        title: titleRef.current.value,
        poem: poemRef.current.value,
        author: authorRef.current.value,
      }),
    });
  };
  const cols = 35
  function inputChangeHandler(event) {
    const lines = event.target.value.split("\n");
    const maxCharsPerLine = cols;  
    const updatedLines = lines.map((line) => {
      if (line.length > maxCharsPerLine) {
        return line.slice(0, maxCharsPerLine);
      }
      return line;
    });
  
    event.target.value = updatedLines.join("\n");
  }

  return (
    <div>
      <Container>
        <Form afteSubmit={() => navigate("/")}>
          <CreatePoem
            style={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Title>Создать стих</Title>
            <SubTitle name="poemTitle">Названия</SubTitle>
            <Input id="poemTitle" ref={titleRef} type="text" />
            <SubTitle name="poem">Стих</SubTitle>
            <Input.Textarea
              id="poem"
              ref={poemRef}
              rows="30"
              cols={cols}
              onChange={inputChangeHandler}
            ></Input.Textarea>
            <Select>
              <option ref={authorRef}>admin</option>
            </Select>
            <SendButton onClick={Create}>Опубликовать</SendButton>
          </CreatePoem>
        </Form>
      </Container>
    </div>
  );
};

export default CreatePoemPage;
