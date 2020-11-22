import Logo from "../components/commons/Logo";
import Navbar from "../components/commons/Navbar";
import SocialLinks from "../components/commons/SocialLinks";

import Home from "../components/layouts/Home";
import Portfolio from "../components/layouts/Portfolio";
import Profile from "../components/layouts/Profile";

export default function IndexPage() {
  const [currentPage, setCurrentPage] = React.useState("home");

  return (
    <div className="bg-pallete-0 text-pallete-1 w-full h-auto font-default">
      <Logo />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <SocialLinks />
      <div className="pl-48">
        <Home />
        <Portfolio />
        <Profile />
      </div>
    </div>
  );
}
