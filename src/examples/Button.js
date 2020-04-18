import styled from "styled-components"
const color = "blue"
const Button = styled.button`
  /* color: red; */
  color: ${props => props.color};
  background: ${color};
  /* font-size: 1rem; */
  padding: 1rem;
  font-size: ${props => (props.big ? "3rem" : "1rem")};
  margin: 1rem;
`

export default Button
