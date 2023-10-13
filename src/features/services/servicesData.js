const servicesData = [
  {
    name: "Front End",
    link: "services/frontend",
    elements: [
      {
        name: "React",
        hashLink: "react",
        logos: ["react_icon.png"],
      },
      {
        name: "Vanilla",
        hashLink: "vanilla",
        logos: ["html_icon.png", "css_icon.png", "js_icon.png"],
      },
      {
        name: "Bootstrap, Material UI",
        hashLink: "front-frameworks",
        logos: ["bootstrap_icon.png", "materialui_icon.png"],
      },
      {
        name: "Tailwind, styled-components",
        hashLink: "styles-of-css",
        logos: ["tailwind_icon.png", "styledcomponents_icon.png"],
      },
    ],
  },
  {
    name: "Back End",
    link: "services/backend",
    elements: [
      {
        name: "NodeJS, Python",
        hashLink: "apisetup",
        logos: ["nodejs_icon.png", "python_icon.png"],
      },
      {
        name: "MySQL, PostreSQL",
        hashLink: "sqldb",
        logos: ["mysql_icon.png", "postgresql_icon.png"],
      },
      {
        name: "MongoDB, DynamoDB",
        hashLink: "nosqldb",
        logos: ["mongodb_icon.png", "dynamodb_icon.png"],
      },
      {
        name: "AWS, MSAzure, GCloud",
        hashLink: "cloud",
        logos: ["aws_icon.png", "azure_icon.png", "googlecloud_icon.png"],
      },
    ],
  },
  {
    name: "CMS",
    link: "services/cms",
    elements: [
      {
        name: "Shopify, WordPress",
        hashLink: "options",
        logos: ["shopify_icon.png", "wordpress_icon.png"],
      },
    ],
  },
  {
    name: "Microservices",
    link: "services/microservices",
    elements: [
      {
        name: "Docker, Kubernetes",
        hashLink: "tools",
        logos: ["docker_icon.png", "kubernetes_icon.png"],
      },
    ],
  },
];

export default servicesData;
