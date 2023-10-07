import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useDarkMode } from "../../context/DarkModeContext";

function ServicesMenu({ close }) {
  const { isDarkMode } = useDarkMode();
  const darkLinkClasses = "rounded-lg p-1 text-2xl font-bold hover:bg-sky-700";
  const lightLinkClasses =
    "rounded-lg p-1 text-2xl font-bold hover:bg-zinc-300";
  const darkHashLinkClasses = "flex rounded-lg p-2 hover:bg-sky-700";
  const lightHashLinkClasses = "flex rounded-lg p-2 hover:bg-zinc-300";

  return (
    <div className="services-info-grid">
      <div>
        <Link to="services/frontend" onClick={close}>
          <h1 className={isDarkMode ? darkLinkClasses : lightLinkClasses}>
            Front End
          </h1>
        </Link>
        <ul>
          <li>
            <HashLink
              smooth
              to="services/frontend#react"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-2 h-7" src="react_icon.png" />
              <p className="text-lg">React</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="services/frontend#vanilla"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-1 h-7" src="html_icon.png" />
              <img className="mr-1 h-7" src="css_icon.png" />
              <img className="mr-1 h-7" src="js_icon.png" />
              <p className="text-lg">Vanilla</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="services/frontend#bootstrap"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-1 h-7" src="bootstrap_icon.png" />
              <p className="text-lg">Bootstrap</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="services/frontend#cssframeworks"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-1 h-6" src="tailwind_icon.png" />
              <img className="mr-1 h-7" src="styledcomponents_icon.png" />
              <p className="text-lg">Tailwind, styled-components</p>
            </HashLink>
          </li>
        </ul>
      </div>
      <div>
        <Link to="services/backend" onClick={close}>
          <h1 className={isDarkMode ? darkLinkClasses : lightLinkClasses}>
            Back End
          </h1>
        </Link>
        <ul>
          <li>
            <HashLink
              smooth
              to="services/backend#apisetup"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-1 h-7" src="nodejs_icon.png" />
              <img className="mr-1 h-7" src="python_icon.png" />
              <p className="text-lg">NodeJS, Python</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="services/backend#sqldb"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-1 h-7" src="mysql_icon.png" />
              <img className="mr-1 h-7" src="postgresql_icon.png" />
              <p className="text-lg">MySQL, PostreSQL</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="services/backend#nosqldb"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-1 h-7" src="mongodb_icon.png" />
              <img className="mr-1 h-7" src="dynamodb_icon.png" />
              <p className="text-lg">MongoDB, DynamoDB</p>
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="services/backend#cloud"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-1 h-7" src="aws_icon.png" />
              <img className="mr-1 h-7" src="azure_icon.png" />
              <img className="mr-1 h-7" src="googlecloud_icon.png" />
              <p className="text-lg">AWS, Azure, Google Cloud</p>
            </HashLink>
          </li>
        </ul>
      </div>
      <div>
        <Link to="services/cms" onClick={close}>
          <h1 className={isDarkMode ? darkLinkClasses : lightLinkClasses}>
            CMS
          </h1>
        </Link>
        <ul>
          <li>
            <HashLink
              smooth
              to="services/cms#options"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-1 h-7" src="shopify_icon.png" />
              <img className="mr-1 h-7" src="wordpress_icon.png" />
              <p className="text-lg">Shopify, WordPress</p>
            </HashLink>
          </li>
        </ul>
      </div>
      <div>
        <Link to="services/microservices" onClick={close}>
          <h1 className={isDarkMode ? darkLinkClasses : lightLinkClasses}>
            Microservices
          </h1>
        </Link>
        <ul>
          <li>
            <HashLink
              smooth
              to="services/microservices#tools"
              className={
                isDarkMode ? darkHashLinkClasses : lightHashLinkClasses
              }
              onClick={close}
            >
              <img className="mr-1 h-7" src="docker_icon.png" />
              <img className="mr-1 h-7" src="kubernetes_icon.png" />
              <p className="text-lg">Docker, Kubernetes</p>
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesMenu;
