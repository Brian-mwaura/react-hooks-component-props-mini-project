import React from "react";

const About = (props) => {
  const {
    title,
    date,
    preview,
    about,
    image = "https://via.placeholder.com/215",
    alt = "blog logo",
  } = props;

  return (
    <aside>
      <img src={image} alt={alt} />
      <p>{about}</p>
      <article>
        <h3>{title}</h3>
        <small>{date || "January 1, 1970"}</small>
        <p>{preview}</p>
      </article>
    </aside>
  );
};

export default About;