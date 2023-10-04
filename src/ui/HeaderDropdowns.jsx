import { useState } from "react";
import Dropdown from "./Dropdown";
import ServicesMenu from "./ServicesMenu";
import ProjectsMenu from "./ProjectsMenu";
import { Link } from "react-router-dom";

const navData = {
  Services: ["ServicesMenu"],
  Projects: ["project1", "project2", "project3", "project4"],
  Contact: ["contact1", "contact2", "contact3", "contact4"],
  About: ["Just a link to the About page"],
};

function HeaderDropdowns() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="my-auto flex">
      <Dropdown id={"Services"} openId={openId} setOpenId={setOpenId}>
        <ServicesMenu />
      </Dropdown>
      <Dropdown id={"Projects"} openId={openId} setOpenId={setOpenId}>
        <ProjectsMenu />
      </Dropdown>
      <Dropdown id={"Contact"} openId={openId} setOpenId={setOpenId}>
        <Link to="contact">Contact</Link>
      </Dropdown>
    </div>
  );
}

export default HeaderDropdowns;
