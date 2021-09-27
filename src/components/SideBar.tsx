import { List, ListRowRenderer } from 'react-virtualized';
import { GenreResponseProps } from '../App';
import { Button } from './Button';

interface SideBarProps {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export function SideBar(props: SideBarProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const { genres } = props;
    return (
      <div key={key} style={style}>
        <Button
          key={String(genres[index].id)}
          title={genres[index].title}
          iconName={genres[index].name}
          onClick={() => props.handleClickButton(genres[index].id)}
          selected={props.selectedGenreId === genres[index].id}
        />
      </div>
    );
  };

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        <List
          width={320}
          height={820}
          overscanRowCount={1}
          rowCount={props.genres.length}
          rowHeight={78}
          rowRenderer={rowRenderer}
          autoHeight
        />
        {/* {props.genres.map((genre) => (
         
        ))} */}
      </div>
    </nav>
  );
}
