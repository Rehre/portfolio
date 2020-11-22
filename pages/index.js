import Head from "next/head";

import Logo from "../components/commons/Logo";
import Navbar from "../components/commons/Navbar";
import SocialLinks from "../components/commons/SocialLinks";

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

  return (
    <div className="bg-pallete-0 text-pallete-1 w-full h-auto font-default">
      <Head>
        <title>Akmal Maulana Azzam</title>
      </Head>
      <Logo />
      <Navbar currentPage={currentPage} setCurrentPage={changePage} />
      <SocialLinks />
      <div className="pl-48">
        <Home />
        <Portfolio />
        <Profile />
      </div>
    </div>
  );
}
