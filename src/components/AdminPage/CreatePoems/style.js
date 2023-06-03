import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

const SubTitle = styled.label`
  margin-bottom: 4px;
`;
const Input = styled.input`
  width: 100%;
  height: 37px;
  background: #f5f5f5;
  box-shadow: 0px 0px 0px 2px rgba(162, 162, 162, 0.5);
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0 5px;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 20px;
  :focus {
    box-shadow: 0px 0px 0px 2px rgba(0, 194, 255, 0.5);
  }
`;
Input.Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  background: #f5f5f5;
  box-shadow: 0px 0px 0px 2px rgba(162, 162, 162, 0.5);
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 10px 5px;
  font-size: 17px;
  font-style: italic;
  margin-bottom: 20px;
  :focus {
    box-shadow: 0px 0px 0px 2px rgba(0, 194, 255, 0.5);
  }
`;

const Select = styled.select`
  width: 105%;
  border: none;
  height: 26px;
  background: #ccf2ff;
  border-radius: 10px;
  outline: none;
  padding: 0 10px;
  :focus {
    box-shadow: 0px 0px 0px 2px rgba(0, 194, 255, 0.5);
  }
`;

const SendButton = styled.button`
  margin-top: 30px;
  width: 105%;
  height: 47px;
  background: #1f66cf;
  border-radius: 10px;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: none;
`;

const Form = styled.form``;

const CreatePoem = styled.div`
  padding: 20px 55px;
`;

export {
  Container,
  Form,
  Title,
  CreatePoem,
  SubTitle,
  Input,
  Select,
  SendButton,
};
