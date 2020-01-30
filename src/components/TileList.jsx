import React from 'react';
import { StyledTileList } from './TileList.styles'; // Importamos los estilos

const tileListItemsArray = [
  {
    title: 'First tile list item',
    url: 'https://cdn.pixabay.com/photo/2016/08/26/17/30/mountains-1622731_1280.jpg',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    title: 'Second tile list item',
    url: 'https://cdn.pixabay.com/photo/2016/08/26/17/30/mountains-1622731_1280.jpg',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    title: 'Third tile list item',
    url: 'https://cdn.pixabay.com/photo/2016/08/26/17/30/mountains-1622731_1280.jpg',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    title: 'Fourth tile list item',
    url: 'https://cdn.pixabay.com/photo/2016/08/26/17/30/mountains-1622731_1280.jpg',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    title: 'Fifth tile list item',
    url: 'https://cdn.pixabay.com/photo/2016/08/26/17/30/mountains-1622731_1280.jpg',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    title: 'Sixth tile list item',
    url: 'https://cdn.pixabay.com/photo/2016/08/26/17/30/mountains-1622731_1280.jpg',
    description: 'Lorem ipsum dolor sit amet'
  }
];

const TileList = () => (
  <StyledTileList>
    {tileListItemsArray.map(tile => (
      <li key={tile.title}>
        <img src={tile.url} alt={tile.title} />
        <h2>{tile.title}</h2>
        <p>{tile.description}</p>
      </li>
    ))}
  </StyledTileList>
);

export default TileList;
