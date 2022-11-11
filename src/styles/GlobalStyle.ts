import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/react-toastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#885CE8",
  secondary: "#5409F2",
  third: "#885CE8",
  thirdLight:"#5409F2",
  white: "#ffffff",
  black: "#000000",
  success: "#885CE8",
  danger: "#ffffff"
}
