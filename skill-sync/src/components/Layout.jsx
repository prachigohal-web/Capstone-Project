import styled from "styled-components";

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

export default function Layout({ children }) {
  return <PageWrapper>{children}</PageWrapper>;
}