import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);
  const { planets } = store;
  const { nature } = props;

  return (
    <>
      {planets.map((item) => {
        return (
          <div key={item._id} className="card ">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
              className="card-img-top card-img-top-error"
              alt="..."
              onError={(e) =>
                (e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg")
              }
            />
            <div className="card-body">
              <h5 className="card-title">{`Name: ${item.properties.name}`}</h5>
              <p className="card-text">{`Population: ${item.properties.population}`}</p>
              <p className="card-text">{`Gravity: ${item.properties.gravity}`}</p>
              <p className="card-text">{`Climate: ${item.properties.climate}`}</p>
              <div className="div">
                <Link to={`/${nature}/${item._id}`} className="btn btn-primary">
                  Learn more!
                </Link>
                <button
                  type="button"
                  className={`btn ${
                    store.favorites.includes(item)
                      ? "btn-warning"
                      : "btn-outline-warning"
                  }
                  `}
                  // data-bs-toggle="button"
                  onClick={() => {
                    {
                      actions.addCard(item, name);
                    }
                  }}
                >
                  <i className="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
