import ListItem, { ListItemProps } from "./Item/ListItem";

import "./List.css";

export type ListProps = {
  list: ListItemProps[];
  onClickHandler: (e: number) => void;
};

export default function List({ list, onClickHandler }: ListProps) {
  return (
    <ul className="List">
      {list.map((el) => (
        <ListItem key={el.id} {...el} onClickHandler={onClickHandler} />
      ))}
    </ul>
  );
}
