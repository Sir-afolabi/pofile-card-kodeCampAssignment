export default function Profile(props) {
  return (
    <div className="profileCard">
      <img src={props.image} alt={props.name} className="img" />
      <h2>{props.name}</h2>
      <p>{props.bio}</p>
    </div>
  );
}
