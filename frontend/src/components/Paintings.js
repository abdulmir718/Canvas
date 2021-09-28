import React from "react";
import "./Paintings.css";
import { Link } from "react-router-dom";

function Paintings({ id, name, price, imageUrl, sold }) {
  return (
    <div className="paintings">
      <div className="paintingInfo">
        <h3 className="paintingName">{name}</h3>
        <img className="paintingImg" src={imageUrl} alt={name} />
        <p className="paintingPrice">{price} USD</p>
        {/* <p className = 'paintingSold'></p> */}
        <div className="viewPainting">
          <Link to={`/paintings/${id}`}>Learn More</Link>
        </div>
      </div>
    </div>
  );
}

export default Paintings;
