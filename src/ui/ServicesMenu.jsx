function ServicesMenu() {
  return (
    <div className="services-info-grid">
      <div>
        <h1 className="pb-1 text-2xl font-bold">Front End</h1>
        <ul>
          <li className="flex py-2">
            <img className="mr-2 h-7" src="react_icon.png" />
            <p className="text-lg">React</p>
          </li>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="html_icon.png" />
            <img className="mr-1 h-7" src="css_icon.png" />
            <img className="mr-1 h-7" src="js_icon.png" />
            <p className="text-lg">Vanilla</p>
          </li>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="bootstrap_icon.png" />
            <p className="text-lg">Bootstrap</p>
          </li>
          <li className="flex py-2">
            <img className="mr-1 h-6" src="tailwind_icon.png" />
            <p className="text-lg">Tailwind</p>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="pb-1 text-2xl font-bold">Back End</h1>
        <ul>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="nodejs_icon.png" />
            <p className="text-lg">NodeJS</p>
          </li>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="python_icon.png" />
            <p className="text-lg">Python</p>
          </li>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="mysql_icon.png" />
            <img className="mr-1 h-7" src="postgresql_icon.png" />
            <p className="text-lg">MySQL, PostreSQL</p>
          </li>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="mongodb_icon.png" />
            <img className="mr-1 h-7" src="dynamodb_icon.png" />
            <p className="text-lg">MongoDB, DynamoDB</p>
          </li>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="aws_icon.png" />
            <img className="mr-1 h-7" src="azure_icon.png" />
            <img className="mr-1 h-7" src="googlecloud_icon.png" />
            <p className="text-lg">AWS, Azure, Google Cloud</p>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="pb-1 text-2xl font-bold">CMS</h1>
        <ul>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="shopify_icon.png" />
            <p className="text-lg">Shopify</p>
          </li>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="wordpress_icon.png" />
            <p className="text-lg">WordPress</p>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="pb-1 text-2xl font-bold">MicroServices</h1>
        <ul>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="docker_icon.png" />
            <img className="mr-1 h-7" src="kubernetes_icon.png" />
            <p className="text-lg">Docker, Kubernetes</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesMenu;
