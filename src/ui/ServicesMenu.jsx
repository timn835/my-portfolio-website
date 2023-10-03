function ServicesMenu() {
  return (
    <div className="information-grid">
      <div>
        <h1>Front End</h1>
        <ul>
          <li>React</li>
          <li>HTML, CSS, JS</li>
          <li>TailWind, BootStrap</li>
        </ul>
      </div>
      <div>
        <h1>Back End</h1>
        <ul>
          <li>Nodejs</li>
          <li>Express</li>
          <li>SQL DB: MySQL, PostgreSQL + normalization</li>
          <li>NoSQL DB: MongoDB, DynamoDB</li>
          <li>AWS: Cognito, CloudWatch, CloudFront, ...</li>
        </ul>
      </div>
      <div>
        <h1>CMS</h1>
        <ul>
          <li>Shopify</li>
          <li>WordPress</li>
        </ul>
      </div>
      <div>
        <h1>MicroServices</h1>
        <ul>
          <li>Sync vs Async communication</li>
          <li>Kubernetes</li>
          <li>Event Bus</li>
        </ul>
      </div>
    </div>
  );
}

export default ServicesMenu;
