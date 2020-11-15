import Logo from "../components/commons/Logo";
import Navbar from "../components/commons/Navbar";
import SocialLinks from "../components/commons/SocialLinks";
import Title from "../components/commons/Title";

export default function IndexPage() {
  const [currentPage, setCurrentPage] = React.useState("home");

  return (
    <div className="bg-pallete-0 w-full h-full font-default">
      <Logo />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <SocialLinks />
      <div className="w-full-h-full"></div>
    </div>
  );
}
