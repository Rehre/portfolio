import Head from "next/head";

import Home from "../components/layouts/Home";
import Portfolio from "../components/layouts/Portfolio";
import Profile from "../components/layouts/Profile";

export default function IndexPage() {
  const [currentPage, setCurrentPage] = React.useState("home");

  function changePage(value) {
    const homePageContainer = document.getElementById("home-page");
    const portfolioPageContainer = document.getElementById("portfolio-page");
    const profilePageContainer = document.getElementById("profile-page");

    if (value === "home") {
      homePageContainer.scrollIntoView({ behavior: "smooth" });
      setCurrentPage("home");
      return;
    }

    if (value === "portfolio") {
      portfolioPageContainer.scrollIntoView({ behavior: "smooth" });
      setCurrentPage("portfolio");
      return;
    }

    profilePageContainer.scrollIntoView({ behavior: "smooth" });
    setCurrentPage("profile");
  }

  React.useEffect(() => {
    const homePageContainer = document.getElementById("home-page");
    const portfolioPageContainer = document.getElementById("portfolio-page");
    const profilePageContainer = document.getElementById("profile-page");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentPage(entry.target.id.replace("-page", ""));
        }
      });
    }, options);

    observer.observe(homePageContainer);
    observer.observe(portfolioPageContainer);
    observer.observe(profilePageContainer);

    return () => {
      observer.unobserve(homePageContainer);
      observer.unobserve(portfolioPageContainer);
      observer.unobserve(profilePageContainer);
    };
  }, []);

  function getNavClassName(type) {
    if (currentPage === type) {
      return "ml-5";
    }

    return "ml-5 opacity-50";
  }

  return (
    <React.Fragment>
      <Head>
        <title>Akmal Maulana Azzam</title>
      </Head>
      <div className="font-default lg:flex lg:max-h-screen">
        <header className="fixed lg:hidden bg-pallete-0 w-screen py-4 border-gray-300 border-b flex items-center justify-around">
          <div className="text-lg lg:text-xl px-5">Rehre.</div>
          <nav>
            <ul className="flex">
              <li
                className={getNavClassName("home")}
                onClick={() => changePage("home")}
              >
                home
              </li>
              <li
                className={getNavClassName("portfolio")}
                onClick={() => changePage("portfolio")}
              >
                portfolio
              </li>
              <li
                className={getNavClassName("profile")}
                onClick={() => changePage("profile")}
              >
                profile
              </li>
            </ul>
          </nav>
        </header>
        <aside className="relative hidden lg:block lg:w-48 lg:py-4 border-gray-300 border-r">
          <div className="text-lg lg:text-xl px-5">Rehre.</div>
          <nav className="my-5">
            <ul>
              <li
                className={getNavClassName("home")}
                onClick={() => changePage("home")}
              >
                home
              </li>
              <li
                className={getNavClassName("portfolio")}
                onClick={() => changePage("portfolio")}
              >
                portfolio
              </li>
              <li
                className={getNavClassName("profile")}
                onClick={() => changePage("profile")}
              >
                profile
              </li>
            </ul>
          </nav>
          <footer className="absolute lg-footer-position mb-5">
            <a
              href="https://github.com/Rehre"
              target="_blank"
              className="opacity-50 hover:opacity-100 block w-10"
            >
              <img
                src="/icons/github-logo.png"
                alt="github-icon"
                width="40px"
              />
            </a>
            <a
              href="https://linkedin.com/in/akmal-maulana-azzam-98b84b143"
              target="_blank"
              className="opacity-50 hover:opacity-100 block w-10 mt-5"
            >
              <img
                src="/icons/linkedin-logo.png"
                alt="linkedin-icon"
                width="40px"
              />
            </a>
          </footer>
        </aside>
        <div className="w-full lg:overflow-auto">
          <Home />
          <Portfolio />
          <Profile />
        </div>
      </div>
    </React.Fragment>
  );
}
