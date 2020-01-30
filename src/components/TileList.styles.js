import styled from 'styled-components';

// También se puede crear un archivo que contenga
// todos los estilos que necesitemos y luego
// exportarlos para usarlos en el componente.

const StyledTileList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  li {
    background-color: #FFFFFF;
  }
  
  img {
    max-width: 300px;
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 1rem;
  }
`;

export {
  StyledTileList
}
