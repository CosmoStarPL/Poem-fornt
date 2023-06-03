import React from "react";
import CreatePoemPage from "./CreatePoems";
import { Container, Box, ButtonGroup, Button } from "./style";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      {/* <Box>
          <Box.Title>Тетрадь творчество</Box.Title>
          <Box.Text>
            Этот сайт создан для творения творчества и что-бы создавать
            невероятные стихи которые поражают каждого человека кто заходит на
            этот великолепный творческий тетрадь
          </Box.Text>
        </Box>
      <ButtonGroup>
        <Button onClick={() => navigate('/admin/createPoem')}>Создать</Button>
        <Button>Изменить</Button>
      </ButtonGroup> */}
      <CreatePoemPage/>
    </div>
  );
};

export default AdminPage;
