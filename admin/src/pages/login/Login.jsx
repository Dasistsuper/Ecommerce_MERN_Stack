import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [formValue, setFormValue] = useState ({
        username: "",
        password: "",
      });
    
      const {username, password} = formValue;
      const {currentUser, error, isFetching} = useSelector(state => state.user);
      const navigate = useNavigate()
    
      const dispatch = useDispatch();
      const handleClick = (e) => {
      e.preventDefault()
      login(dispatch,{username, password});
      };
    
    
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValue((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        placeholder="username"
        name="username"
        value = {username}
        onChange = {handleChange}    />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        placeholder="password"
        type="password"
        name="password"
        value = {password}
        onChange = {handleChange}     />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
  );
};

export default Login;
