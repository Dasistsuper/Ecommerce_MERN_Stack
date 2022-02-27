import styled from "styled-components";
import { mobile} from "../responsive";


const Container = styled.div`
  height: 50px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping in Ireland for Orders Over €50</Container>;
};

export default Announcement;