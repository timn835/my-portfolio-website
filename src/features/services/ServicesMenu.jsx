import servicesData from "./servicesData";
import MenuSection from "../../ui/MenuSection";
import MenuListItem from "../../ui/MenuListItem";

function ServicesMenu({ close }) {
  return (
    <div className="services-info-grid">
      {servicesData.map((section) => (
        <MenuSection
          title={section.name}
          link={section.link}
          close={close}
          key={section.name}
        >
          <ul>
            {section.elements.map((element) => (
              <MenuListItem
                link={`${section.link}${
                  element.hashLink ? `#${element.hashLink}` : ""
                }`}
                close={close}
                key={element.name}
              >
                {element.logos.map((logo) => (
                  <img
                    className="mr-2 h-7"
                    src={`/${logo}`}
                    alt={logo.slice(0, -4)}
                    key={logo}
                  />
                ))}
                <p className="text-lg">{element.name}</p>
              </MenuListItem>
            ))}
          </ul>
        </MenuSection>
      ))}
    </div>
  );
}

export default ServicesMenu;
