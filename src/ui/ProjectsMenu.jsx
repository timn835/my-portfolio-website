function ProjectsMenu() {
  return (
    <div className="projects-info-grid">
      <div>
        <h1 className="pb-1 text-2xl font-bold">Featured</h1>
        <ul>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="kiwisave_icon.png" />
            <p className="text-lg">KIWI Savings App</p>
          </li>
          <li className="flex py-2">
            <img className="mr-1 h-7" src="chessinsights_icon.png" />
            <p className="text-lg">Chess Insights App</p>
          </li>
        </ul>
      </div>
      <div className="projects-info-grid">
        <div>
          <h1 className="pb-1 text-2xl font-bold">Other</h1>
          <ul>
            <li className="flex py-2">
              <img className="mr-1 h-7" src="tripledot_icon.png" />
              <p className="text-lg">Click here to see more!</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsMenu;
