import { useState } from 'react';
import { Button } from './Button';

interface GenreItemProps {
  genre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
}

export function SideBar(props: GenreItemProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <Button
      key={String(props.genre.id)}
      title={props.genre.title}
      iconName={props.genre.name}
      onClick={() => handleClickButton(props.genre.id)}
      selected={selectedGenreId === props.genre.id}
    />
  );

}