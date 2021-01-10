export default function Portfolio() {
  return (
    <section id="portfolio-page" className="min-h-screen pt-12">
      <header className="py-5 text-center">
        <h1 className="text-2xl">My Projects</h1>
      </header>
      <div className="w-64 h-64 mx-auto">
        <div className="w-64 h-64 bg-black text-white text-xl flex justify-center items-center">
          Katou project
        </div>
        <div className="w-64 h-64 bg-pallete-1 flex flex-col justify-center items-center">
          <div className="text-center">
            Chat bot created with line and telegram api.
          </div>
          <a
            href="https://github.com/Rehre/Katou-bot"
            target="_blank"
            className="text-blue-600 hover:underline block"
          >
            Link to project
          </a>
        </div>
      </div>
    </section>
  );
}
