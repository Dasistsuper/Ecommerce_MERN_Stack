import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from 'react'
import { publicRequest } from "../requestMethods";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


const Register = () => {

 const handleClick = (e) => {
    e.preventDefault()
    publicRequest.post('/auth/register', {name, lastname, username, email, password})
    .then(response => console.log(response.data))
  } 
  
  const [formValue, setFormValue] = useState({
    name: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { name, lastname, email, username, password } = formValue;

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" name="name" onChange={handleChange} value={name}/>
          <Input placeholder="Last Name" name="lastname" onChange={handleChange} value={lastname} /> {/* if lastname is not qual to an empty string the return empty string*/}
          <Input placeholder="Username" name="username" onChange={handleChange} value={username} />
          <Input placeholder="Email" name="email" onChange={handleChange} value={email}/>
          <Input placeholder="Password" name="password" onChange={handleChange} value={password}/>
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;