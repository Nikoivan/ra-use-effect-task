import "./ListItem.css";

export type ListItemProps = {
  name: string;
  id: number;
  onClickHandler: (e: number) => void;
};

export default function ListItem({ name, id, onClickHandler }: ListItemProps) {
  return (
    <li className="List-Item" onClick={() => onClickHandler(id)}>
      <span className="ListItem-content">{name}</span>
    </li>
  );
}
