import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Vehicles = (props) => {
  const { store, actions } = useContext(Context);
  const { vehicles } = store;
  const { nature, name } = props;

  return (
    <>
      {vehicles.map((item) => {
        return (
          <div key={item._id} className="card ">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{`Name: ${item.properties.name}`}</h5>
              <p className="card-text">{`Model: ${item.properties.model}`}</p>
              <p className="card-text">{`Capacity: ${item.properties.cargo_capacity}`}</p>
              <p className="card-text">{`Description: ${item.description}`}</p>
              <div className="div">
                <Link to={`/${nature}/${item._id}`} className="btn btn-dark">
                  Details!
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
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
