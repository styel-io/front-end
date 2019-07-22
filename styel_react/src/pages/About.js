import React from "react";
import queryString from "query-string";

const About = ({ location, match }) => {
  const query = queryString.parse(location.search);
  const detail = query.detail === "true";
  console.log(query);
  return (
    <div>
      <h1>About {match.params.name}</h1>
      {detail && "detail: blahblah"}
    </div>
  );
};

export default About;
