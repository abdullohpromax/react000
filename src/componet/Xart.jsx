function AppDesignCard(props) {
  return (
    <div className="card">
      <img src={props.Xart} alt="App Design" className="card-img" />
      <div className="card-content">
        <h2>{props.Xartp}</h2>
        <button className="btn">
          {props.Xartb} <span className="arrow">›</span>
        </button>
      </div>
    </div>
  );
}

export default AppDesignCard;