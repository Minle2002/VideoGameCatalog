import React from "react";
import "./Slider.css";
import GameCard from "../GameCard/GameCard";
import { Link } from "react-router-dom";

const Slider = (props) => {
  return (
    <div className="slider-container" data-testid={`${props.type}-slider`}>
      <table className="slider-table">
        <thead>
          <tr>
            <th id="slider-header">{props.type}</th>
            <th colSpan="8"></th>
            <th>
              <Link
                to={`/search/${props.type.toLowerCase().replace(/\s+/g, "")}`}
                id="view-link"
              >
                Explore
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.games &&
              props.games.map((game, index) => (
                <td key={index}>
                  <GameCard
                    image={game.game_background_image}
                    title={game.game_name}
                    releaseDate={game.game_released}
                    id={game.rawg_id}
                  />
                </td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Slider;
