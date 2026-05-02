import { useEffect, useState } from "react";
import { fetchCourses } from "../api/courses";

function Dashboard({ darkMode }) {
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const loadCourses = async () => {
      const data = await fetchCourses();
      setCourses(data);
    };

    loadCourses();
  }, []);

  // pagination logic
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  const currentCourses = courses.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Courses </h1>

      {/* COURSES */}
      {currentCourses.map((course) => (
        <div
          key={course.id}
          style={{
            background: darkMode ? "#1a1a1a" : "#f2f2f2",
            color: darkMode ? "#fff" : "#000",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{course.title}</h3>
          <p>{course.level}</p>
        </div>
      ))}

      {/* PAGINATION */}
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "5px",
              padding: "6px 10px",
              background: currentPage === i + 1 ? "blue" : "gray",
              color: "white",
              border: "none",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;