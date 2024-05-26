import { createGlobalStyle } from 'styled-components'

import background from '../assets/background.svg'

export const GlobalStyle = createGlobalStyle`

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Space Grotesk', sans-serif;
  color: white;

  /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
 
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-image: linear-gradient(0deg, white, rgba(255, 255, 255, 0.7));
  background-size: 100%;
  border-radius: 1rem;
  width: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: white;
}
}

body {
  background-color: black;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 100vh;
}

h1 {
  font-size: 3rem;
  background: linear-gradient(180deg, white 50%, rgba(255, 255, 255, 0.3));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

#root {
  width: 100%;
  height: 100%;
}
`
