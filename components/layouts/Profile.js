export default function Profile() {
  return (
    <section id="profile-page" className="min-h-screen pt-12">
      <header className="py-5 pb-10 text-center">
        <h1 className="text-2xl">About Me</h1>
      </header>
      <div className="lg:flex lg:items-center lg:justify-center">
        <img
          src="/images/profile-pic.png"
          alt="profile"
          className="mx-auto lg:mx-5"
          width="200px"
        ></img>
        <div className="mt-10 lg:mt-0 mx-auto lg:mx-0 w-4/5 lg:max-w-md">
          <div className="my-1">Hi, my name is Akmal Maulana Azzam.</div>
          <div className="my-1">
            it has been 4 years since i started learning javascript and its been
            3 years since i started learning reactjs.{" "}
          </div>
          <div className="my-1">
            other than that i also learn other technologies too like gatsby,
            nextjs, graphql and others things that i cannot put here.
          </div>
          <div className="my-1">
            its quite a journey, i learned a lot about what to do and what not
            to do.
          </div>
          <div className="my-1">nice to meet you!, and thanks for coming!</div>
        </div>
      </div>
      <footer className="flex items-center justify-center mt-10 lg:hidden">
        <a
          href="https://github.com/Rehre"
          target="_blank"
          className="m-2 opacity-50 hover:opacity-100"
        >
          <img src="/icons/github-logo.png" alt="github-icon" width="40px" />
        </a>
        <a
          href="https://linkedin.com/in/akmal-maulana-azzam-98b84b143"
          target="_blank"
          className="mx-2 opacity-50 hover:opacity-100"
        >
          <img
            src="/icons/linkedin-logo.png"
            alt="linkedin-icon"
            width="40px"
          />
        </a>
      </footer>
    </section>
  );
}
