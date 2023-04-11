import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import { CharactersCard } from "../component/CharactersCard.jsx";
import { PlanetCard } from "../component/PlanetCard.jsx";
import { Vehicles } from "../component/Vehicles.jsx";

export const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container  ">
          <h1>Characters</h1>
          <div className="home-card-list">
            <CharactersCard nature="people" item="name" />
          </div>
        </div>

        <div className="container">
          <h1>Planets</h1>
          <div className="home-card-list">
            <PlanetCard nature="planets" item="name" />
          </div>
        </div>

        <div className="container">
          <h1>Vehicles</h1>
          <div className="home-card-list">
            <Vehicles nature="vehicles" item="name" />
          </div>
        </div>

        <footer className="bg-dark text-center text-lg-start">
          <div className="text-center p-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
            made by <span style={{ color: "#ffc107", fontWeight: "bold" }}>MGcode</span> with force and love!
          </div>
        </footer>
      </div>
    </>
  );
};
