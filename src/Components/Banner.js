import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <h1 className="logo">
      <i className="fas fa-paw"></i> Album
    </h1>
  );
}

//  CHILD
function Menu({ title, link, icon }) {
  return (
    <Link to={link}>
      <i className={icon}></i>
      {" " + title}
    </Link>
  );
}

//  PARENT
function Banner(props) {
  const currentPath = props.match.path;

  const paths = [
    {
      currentPath: "/",
      link: "/photos",
      title: "All Photos",
      icon: "far fa-images"
    },
    {
      currentPath: "/photos",
      link: "/",
      title: "Home",
      icon: "fas fa-globe-asia"
    },
    {
      currentPath: "/details",
      link: "/",
      title: "Home",
      icon: "fas fa-globe-asia"
    }
  ];

  const [filtered] = paths.filter(path => path.currentPath === currentPath);
  const { title, link, icon } = filtered;

  return (
    <div className="mainNav">
      <Logo />
      <Menu title={title} link={link} icon={icon} />
    </div>
  );
}

export default Banner;
