import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;





function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <H1>The wild oasis</H1>
        <Button>Check in</Button>
        <Input />
        hello world
      </div>
    </>
  );
}

export default App;
