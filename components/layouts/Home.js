export default function Home() {
  return (
    <section
      id="home-page"
      className="min-h-screen flex justify-center items-center"
    >
      <header className="text-center">
        <img
          src="/images/profile-pic.png"
          alt="profile"
          className="mx-auto lg:mx-5"
          width="200px"
        ></img>
        <h1 className="mt-5 text-2xl">Hi, I am Akmal</h1>
        <h2 className="text-md">I am a frontend web developer</h2>
      </header>
    </section>
  );
}
