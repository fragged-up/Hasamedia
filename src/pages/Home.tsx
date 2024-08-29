import Block from "../components/UI/Block";
import PrMobile from "@/assets/images/prMobile.png";
import VideoSection from "../components/UI/VideoSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "@/components/UI/Reviews";

const blocksTexts = [
  {
    blockHeader: "Build",
    blockSubHeader: "Create Your Digital Presence",
    blockMainText:
      "We help you create your brand’s website, software, or app from the ground up. Our team works closely with you to ensure everything reflects your vision and meets your needs.",
  },
  {
    blockHeader: "Grow",
    blockSubHeader: "Reach More Customers",
    blockMainText:
      "We assist you in expanding your business by increasing your visibility and reaching more customers. Our strategies are designed to help you engage your audience and boost your brand.",
  },
  {
    blockHeader: "Manage",
    blockSubHeader: "Keep Things running Smoothly",
    blockMainText:
      "We provide the tools and support you need to manage your business efficiently. From monitoring performance to optimizing operations, we ensure you get the best results while focusing on what you do best.",
  },
];
const Home = () => {
  return (
    <>
      <Header />
      <div className="w-full bg-black my-12">
        <nav className="bg-black-primary">
          <div className="md:py-4 lg:py-8">
            <h1 className="gradient-hero-text font-gilroy-black md:text-3xl lg:text-[3rem] text-center py-4">
              Build Grow, Manage.
            </h1>
            <h2 className="gradient-hero-text font-gilroy-black text-center md:text-base lg:text-3xl">
              Your One-Step Solution for Digital Success.
            </h2>
          </div>

          <div className="md:p-2 lg:py-0">
            <p className="md:text-xs lg:text-2xl text-white-primary font-gilroy-bold text-center">
              From Concept to Launch, We Empower Your Digital Journey.
            </p>
            <p className="md:text-[.625rem] lg:text-xl text-white-secondary md:font-gilroy-bold lg:font-gilroy-regular text-center lg:py-4">
              Whether you’re starting from scratch or looking to enhance an
              existing platform,
              <br /> we provide a comprehensive suite of services to build,
              grow, and manage your digital presence.
            </p>
          </div>
          <div className="btn-container flex justify-center items-center my-4">
            <button className="md:text-xs lg:text-xl py-1.5 px-6 font-gilroy-bold text-center recive-cta text-white-primary md:max-w-48 lg:max-w-96">
              Receive Free Evaluation
            </button>
          </div>
        </nav>
        <main className="bg-black">
          <section className="grid gap-y-16 my-12">
            <div className="rounded-lg w-full">
              <VideoSection videoUrl="https://www.youtube.com" />
            </div>
            <div>
              <p className="font-gilroy-bold text-xl text-white-primary text-center">
                Trusted by individuals & teams <br /> from all over the world.
              </p>
            </div>
            <div className="flex justify-center items-center my-4 scroll-container">
              <img
                src={PrMobile}
                alt="projectsImages"
                className="scrolling-image"
              />
            </div>
          </section>
          <div className="flex flex-col gap-y-12 justify-center items-center my-32">
            {blocksTexts.map((e, index) => (
              <Block
                key={index}
                header={e.blockHeader}
                subHeader={e.blockSubHeader}
                text={e.blockMainText}
              />
            ))}
          </div>
          <section className="bg-black w-4/5 mx-auto">
            <div className="flex justify-center items-center">
              <h1 className="font-gilroy-black text-white sm:text-[1.375rem] md:text-[3rem] lg:text-[5rem] text-center my-32">
                What our partners say about us
              </h1>
            </div>
            <div className="shady-container">
              <div className="shady-top-effect"></div>
              <div className="relative shady-bottom-effect scroll-content">
                <Reviews />
                <Reviews />
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
