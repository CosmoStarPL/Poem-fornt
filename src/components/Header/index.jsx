import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import AdminPage from "../AdminPage";
import CreatePoemPage from "../AdminPage/CreatePoems";

const Header = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/createPoem" element={<CreatePoemPage />} />
    </Routes>
  );
};

export default Header;
