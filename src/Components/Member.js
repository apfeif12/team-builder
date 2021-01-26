import React from "react";

export default function Member(props) {
  const { data } = props;

  return (
    <div>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
      <h2>{data.role}</h2>
    </div>
  );
}
