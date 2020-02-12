import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { URL_TEAMS } from "../utils/paths";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchTeam = () => {
      Axios.get(URL_TEAMS).then(response => {
        console.log(response.data);
        setTeams(response.data);
        setFiltered(response.data);
      });
    };

    fetchTeam();
  }, []);

  const renderTeams = () =>
    filtered.map(team => (
      <CSSTransition key={team.id} timeout={500} classNames="fade">
        <Link to={`/teams/${team.name}`} className="team_item">
          <img alt={team.name} src={`/images/teams/${team.logo}`} />
        </Link>
      </CSSTransition>
    ));

  useEffect(() => {
    const searchTeams = () => {
      if (keyword !== "") {
        const list = teams.filter(team => {
          return team.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
        });

        setFiltered(list);
      } else {
        setFiltered(teams);
        setKeyword("");
      }
    };

    searchTeams();
  }, [teams, keyword]);

  const handleSearchChange = e => {
    setKeyword(e.target.value);
  };

  return (
    <div className="teams_component">
      <div className="teams_input">
        <input
          type="text"
          value={keyword}
          placeholder="Search for a team"
          onChange={e => handleSearchChange(e)}
        />
      </div>
      <div className="teams_container">
        <TransitionGroup component="span">{renderTeams()}</TransitionGroup>
      </div>
    </div>
  );
};

export default Teams;
