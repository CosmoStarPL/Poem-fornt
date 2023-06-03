import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  Form,
  Box,
  Title,
  CreatePoem,
  SubTitle,
  Input,
  Select,
  SendButton,
} from "./style";
import { useNavigate } from "react-router-dom";

const URL = "https://316d-213-230-92-87.ngrok-free.app/admin";
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Баг лист:
//            Не реактивный
//            Удоление и edit работает криво

const CreatePoemPage = () => {
  const navigate = useNavigate();
  const titleRef = useRef("");
  const poemRef = useRef("");
  const authorRef = useRef("");

  const Create = async () => {
    await fetch(URL, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        title: titleRef.current.value,
        poem: poemRef.current.value,
        author: authorRef.current.value,
      }),
    });
  };

  return (
    <div>
      <Container>
        <Form afteSubmit={() => navigate("/admin")}>
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
              cols="27"
            ></Input.Textarea>
            <Select>
              <option ref={authorRef}>Дарья Люсетт</option>
            </Select>
            <SendButton onClick={Create}>Опубликовать</SendButton>
          </CreatePoem>
        </Form>
      </Container>
    </div>
  );
};

export default CreatePoemPage;
