import PictureBox from "../commons/PictureBox";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <PictureBox />
      <h1 className="text-4xl">Hi, I am Akmal</h1>
      <h2 className="text-xl">I am a frontend web developer</h2>
    </div>
  );
}

export default Home;
