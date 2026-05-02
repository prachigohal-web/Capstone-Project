import { useEffect, useState } from "react";
import { fetchCourses } from "../api/courses";
import { motion } from "framer-motion";
import styled from "styled-components";

const Page = styled.div`
  padding: 20px;
`;

const Search = styled.input`
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: none;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
`;

const Card = styled(motion.div)`
  background: #1a1a1a;
  color: white;
  padding: 15px;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #222;
  }
`;

const Tag = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 4px 8px;
  background: #00c2ff;
  color: black;
  border-radius: 5px;
  font-size: 12px;
`;

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCourses().then(setCourses);
  }, []);

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page>

      <h1>Dashboard 📚</h1>

      <Search
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Grid>
        {filtered.map((course, index) => (
          <Card
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{course.title}</h3>
            <Tag>{course.level}</Tag>
          </Card>
        ))}
      </Grid>

    </Page>
  );
}

export default Dashboard;