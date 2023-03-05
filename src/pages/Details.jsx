import React from "react";
import { useLocation } from "react-router-dom";
import DetailsContainer from "../components/styled/Detail.styled";

const Details = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <DetailsContainer>
      <div className="header">
        {" "}
        <h2>{data?.label}</h2>
      </div>
      <div className="elements">
        {" "}
        <div className="element">
          {" "}
          <ul>
            {" "}
            <h1>Ingredients</h1>
            {data?.ingredientLines.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="element">
          {" "}
          <img src={data.image} alt="" />
        </div>
        <div className="element">
          <ul>
            <h1>Nutrients</h1>
            {data?.digest.map((item) => (
              <li key={item.label}>
                {item.label}: {item.total}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DetailsContainer>
  );
};

export default Details;
