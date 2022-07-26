import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Login from "./sections/login/Login";
import Dashboard from "./sections/dashboard/Dashboard";
import { Spinner, Box, ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function App() {
  useEffect(() => {
    getUserDataApi();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const getUserDataApi = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getUserData");
      if (res.status == 200) {
        navigate("/");
        setIsLoading(false);
      }
    } catch (error) {
      navigate("/login");
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <ChakraProvider>
          <Box p={4} marginTop="45vh" marginLeft="47vw">
            <Spinner size="xl" color="blue.500" thickness="6px" speed="0.95s" />
          </Box>
        </ChakraProvider>
      ) : (
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
