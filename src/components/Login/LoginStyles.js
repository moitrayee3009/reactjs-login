import styled from 'styled-components'

const LoginForm = styled.form`
  background-color: whitesmoke;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 30px;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
`

const FormGroup = styled.div`
  width: 40%;
  margin-bottom: 10px;
  p {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #303030;
  }
  input {
    border: 1px solid gray;
    outline: none;
    height: 45px;
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: 5px;
    margin: 8px 0;
    display: inline-block;
    box-sizing: border-box;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.3);
  }
`
const Button = styled.button`
  cursor: pointer;
  margin-top: 10rem;
  color: white;
  font-size: 1rem;
  background-color: #5267ff;
  width: 8rem;
  height: 40px;
  border-radius: 20px;
  border-color: transparent;
`

const ContainerP = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  color: darkblue;
  letter-spacing: 0;
`

export { LoginForm, FormGroup, Button, ContainerP }
