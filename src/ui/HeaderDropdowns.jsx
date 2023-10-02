import { useState } from "react";
import Dropdown from "./Dropdown";

const navData = {
  Skills: ["skill1", "skill2", "skill3", "skill4"],
  Projects: ["project1", "project2", "project3", "project4"],
  Contacts: ["contact1", "contact2", "contact3", "contact4"],
  Interests: ["interest1", "interest2", "interest3", "interest4"],
};

function HeaderDropdowns() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="flex">
      <Dropdown
        id={"Skills"}
        dropdownHeader="Skills"
        dropdownContent={navData.Skills}
        openId={openId}
        setOpenId={setOpenId}
      />
      <Dropdown
        id={"Projects"}
        dropdownHeader="Projects"
        dropdownContent={navData.Projects}
        openId={openId}
        setOpenId={setOpenId}
      />
      <Dropdown
        id={"Contacts"}
        dropdownHeader="Contacts"
        dropdownContent={navData.Contacts}
        openId={openId}
        setOpenId={setOpenId}
      />
    </div>
  );
}

export default HeaderDropdowns;
