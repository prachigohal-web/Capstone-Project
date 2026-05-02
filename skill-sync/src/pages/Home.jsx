import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 100px 20px;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  background: #00c2ff;
  color: black;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: white;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skill-Sync 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Learn. Build. Grow.
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button onClick={() => navigate("/login")}>
          Get Started
        </Button>
      </motion.div>

    </Container>
  );
}

export default Home;