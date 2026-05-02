import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  width: 320px;
  padding: 25px;
  background: #1a1a1a;
  border-radius: 12px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #00c2ff;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

function Login() {
  const navigate = useNavigate();

  return (
    <Wrapper>

      <Card
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >

        <h2>Login 🔐</h2>

        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <Button onClick={() => navigate("/dashboard")}>
          Login
        </Button>

      </Card>

    </Wrapper>
  );
}

export default Login;