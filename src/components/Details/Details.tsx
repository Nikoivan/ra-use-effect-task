import "./Details.css";

export type DetailsProps = {
  data: {
    avatar: string;
    details: { city: string; company: string; position: string };
    name: string;
  };
};

export default function Details({ data }: DetailsProps) {
  const { avatar, details, name } = data;
  return (
    <div className="Details">
      <img src={avatar} alt="" className="Details-Item Details-Avatar" />
      <div className="Details-Item Details-Name">{name}</div>
      <div className="Details-Item Details-City">City: {details.city}</div>
      <div className="Details-Item">Company: {details.company}</div>
      <div className="Details-Item">Position: {details.position}</div>
    </div>
  );
}
