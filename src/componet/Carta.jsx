function Carta(props) {
  return (
    <div className="tract_carta">
      <img className="img" src={props.img} alt="" />
      <p className="carta_p">{props.Text}</p>
      <p className="carta_pp">{props.TExTt}</p>
    </div>
  );
}
export default Carta;