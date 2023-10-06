import { useState } from "react";
import Dropdown from "./Dropdown";
import ServicesMenu from "../features/services/ServicesMenu";
import ProjectsMenu from "../features/projects/ProjectsMenu";
import HeaderContactForm from "../features/contact/HeaderContactForm";

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
        <HeaderContactForm />
      </Dropdown>
    </div>
  );
}

export default HeaderDropdowns;
