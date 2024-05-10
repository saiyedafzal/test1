import Image  from "next/image";
import Illustration from '../../../public/Illustration.png'
function Main() {
  return (
    <main className="main">
      <section className="section banner banner-section">
        <div className="container banner-column">
          {/* <img
            className="banner-image"
            src="./Illustration.png"
            alt="Illustration"
            width="640px"
            height="640px"
          /> */}
          <Image className="banner-image" src={Illustration} alt="afzal" priority />
          <div className="banner-inner">
            <h1 className="heading-xl">
              All Your Files in One Secure Location.
            </h1>
            <p className="paragraph">
              We stores all your most important files in one secure location.
              Access them whenever needed, share and collaborate with your
              connections.
            </p>
            <button className="btn btn-darken btn-inline">Get Started</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
