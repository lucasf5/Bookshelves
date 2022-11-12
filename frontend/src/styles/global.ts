import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  :root {
    --primary-100: #e5f0f9;
    --primary-500: #2F80ED;
    --primary-900: #1D4B8A;
    --primary-1000: #06092b;

    --secondary-100: #F9F5E5;
    --secondary-500: #F2C94C;
    --secondary-900: #8A7B1D;

    --success-100: #E5F9F0;
    --success-500: #27AE60;
    --success-900: #1D8A4B;

    --danger-100: #F9E5E5;
    --danger-500: #EB5757;
    --danger-900: #8A1D1D;

    --warning-100: #F9F5E5;
    --warning-500: #F2C94C;
    --warning-900: #8A7B1D;

    --light-100: #F3F2F2;
    --light-500: #F2F2F2;
    --light-900: #E6E6E6;

    --pink-100: #F9E5F9;
    --pink-500: #F299C1;
    --pink-900: #8A1D8A;

    --dark-100: #272221;
    --dark-500: #333333;
    --dark-900: #4F4F4F;

    --breakpoints-sm: 640px;
    --breakpoints-md: 768px;
    --breakpoints-lg: 1024px;
    --breakpoints-xl: 1280px;
    --breakpoints-2xl: 1536px
  }

  body {
    background-color: ${({ theme }) => theme.colors["success-900"]};
  }

  body,
  input,
  textarea,
  select,
  button {
    // weight | font-size | font-family
    font: 400 1rem "Poppins", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
  button[type=submit]{
    opacity: 0.5
  }

  a {
    // assumir a cor que está por volta dele. A cor do texto do elemento pai.
    color: inherit;
    text-decoration: none;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default GlobalStyle;
