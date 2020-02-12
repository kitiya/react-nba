import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_TEAMS } from "../utils/paths";

const Team = props => {
  const name = props.match.params.name;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTeam = () => {
      axios
        .get(`${URL_TEAMS}?name=${name}`)
        .then(response => setData(response.data[0]));
    };
    fetchTeam();
  }, [name]);

  const renderSquad = squad =>
    squad
      ? squad.map((item, index) => (
          <div key={index} className="item player_wrapper">
            <img alt={item.name} src="/images/avatar.png" />
            <h4>{item.name}</h4>
          </div>
        ))
      : null;

  const renderTeam = () => {
    return data ? (
      <div className="team_data_wrapper">
        <div className="left">
          <img alt={data.name} src={`/images/teams/${data.logo}`} />
        </div>
        <div className="right">
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <hr />
          <section className="squad">{renderSquad(data.squad)}</section>
        </div>
      </div>
    ) : null;
  };

  return <div>{renderTeam()}</div>;
};

export default Team;
