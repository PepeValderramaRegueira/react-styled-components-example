import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Menu from './components/Menu';
import TileList from './components/TileList';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: #F8F8F8;
    padding: 0 0 2rem;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Menu />
      <TileList />
    </div>
  );
}
