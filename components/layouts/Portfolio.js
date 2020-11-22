import Title from "../commons/Title";

export default function Portfolio() {
  return (
    <div id="portfolio-page" className="w-full h-screen">
      <Title text="My Projects" />
      <div className="w-64 h-64 text-center overflow-hidden project-container mx-auto">
        <div className="w-64 h-64 bg-black text-white text-xl grid items-center">
          Katou project
        </div>
        <div className="w-64 h-64 bg-pallete-2 text-base grid items-center project-container-desc">
          Chat bot created with line and telegram api.
          <a
            href="https://github.com/Rehre/Katou-bot"
            className="text-blue-600 hover:underline"
          >
            Link to project
          </a>
        </div>
      </div>
    </div>
  );
}
