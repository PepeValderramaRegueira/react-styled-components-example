import React from 'react';
import styled, { keyframes } from 'styled-components';

// Se pueden añadir todos los estilos en el archivo
// del componente. Esto hace que quedde una estructura
// de archivos y carpeta más limpia, pues no tienes dos
// archivos por cada componente (uno con el marcado
// y la lógica y otro con los los estilos).

// Mediante styled, debemos indicar qué tipo de elemento
// va a ser (en este caso, un nav). Si fuese un h1, sería
// styled.h1, un span styled.span, etc.
const StyledNav = styled.nav`
  background-color: #FFFFFF;
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

const StyledMenuContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.h1`
  color: #232323;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.25rem;

  span {
    color: #888888;
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const StyledMenuItem = styled.li`
  padding: 2rem 1rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const StyledMenuLink = styled.a`
  color: #00bcd4;
  text-transform: uppercase;
  font-size: .8rem;
  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    color: #008ba3;
  }
`;

// También podríamos escribir los estilos como si fuera SCSS.
// const StyledMenu = styled.ul`
//   li {
//     /* Estilos para los items del menú. */
//   }

//   a {
//     /* Estilos para los enlaces del menú. */
//   }
// `;

// Para hacer animaciones, sería
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SomeStyledComponent = styled.div`
  /* Más estilos... */
  animation: 1s ${fadeIn} ease-in;
`;

const menuItemsArray = [
  { to: '/link-1', children: 'Link 1' },
  { to: '/link-2', children: 'Link 2' },
  { to: '/link-3', children: 'Link 3' },
  { to: '/link-4', children: 'Link 4' }
];

const Menu = () => (
  <StyledNav>
    <StyledMenuContainer>
      <StyledTitle>Styled <span>components</span></StyledTitle>
      <StyledMenu>
        {menuItemsArray.map(menuItem => (
          <StyledMenuItem key={menuItem.to}>
            <StyledMenuLink {...menuItem} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </StyledMenuContainer>
  </StyledNav>
);

export default Menu;
