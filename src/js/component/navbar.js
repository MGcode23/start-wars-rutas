import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  // const [fav, setFav] = useState([]);

  return (
    <nav className="navbar navbar-darl bg-light mb-3 ">
      <Link to="/">
        <img
          className="logo"
          src="https://cdn.worldvectorlogo.com/logos/star-wars.svg"
        />
      </Link>
      <div className="ml-auto ">
        <div className="dropdown ">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="badge bg-secondary">{store.favorites.length}</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.favorites.length ? (
              store.favorites.map((item) => {
                return (
                  <li key={item._id}>
                    <a className="dropdown-item" href="#">
                      {item.properties.name}

                      <i
                        className="fas fa-trash-alt mx-3"
                        onClick={() => actions.delFavo(item._id)}
                      ></i>
                    </a>
                  </li>
                );
              })
            ) : (
              <li className="dropdown-item text-center">"Empty"</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
