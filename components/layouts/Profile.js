import Title from "../commons/Title";
import PictureBox from "../commons/PictureBox";

export default function Profile() {
  return (
    <div id="profile-page" className="w-full h-screen">
      <Title text="About Me" />
      <div className="flex items-center justify-center py-12 ">
        <div className="px-24">
          <PictureBox />
        </div>
        <div className="text-xl pr-24">
          <div className="my-2">Hi, my name is Akmal Maulana Azzam.</div>
          <div className="my-2">
            it has been 4 years since i started learning javascript and its been
            3 years since i started learning reactjs.{" "}
          </div>
          <div className="my-2">
            other than that i also learn other technologies too like gatsby,
            nextjs, graphql and others things that i cannot put here.
          </div>
          <div className="my-2">
            its quite a journey, i learned a lot about what to do and what not
            to do.
          </div>
          <div className="my-2">nice to meet you!, and thanks for coming!</div>
        </div>
      </div>
    </div>
  );
}
