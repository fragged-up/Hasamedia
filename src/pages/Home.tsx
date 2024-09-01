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
      <div className="w-full bg-black">
        <nav className="bg-black-primary">
          <div className="hero-wrapper">
            <div className="text-hero-wrap mb-1 mt-16">
              <div className="py-4">
                <h1 className="gradient-hero-text max-md:text-3xl text-center font-gilroy-black sm:text-[3rem]">
                  Build, Grow, Manage.
                </h1>
                <h2 className="gradient-hero-text max-md:text-base text-center font-gilroy-black sm:text-3xl">
                  Your One-Step Solution for Digital Success.
                </h2>
              </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col py-2">
              <p className="max-md:text-xs text-center text-white font-gilroy-bold sm:text-2xl lg:text-2xl">
                From Concept to Launch, We Empower Your Digital Journey.
              </p>
              <p className="max-md:text-[.625rem] max-md:text-white text-wrap text-center text-white font-gilroy-regular lg:text-xl">
                Whether you’re starting from scratch or looking to enhance an
                existing platform, we provide a comprehensive suite of services
                to build, grow, and manage your digital presence.
              </p>
            </div>
            <div className="btn-container max-md:my-5 flex items-center justify-center sm:my-12">
              <button className="recive-cta max-md:max-w-48 max-md:text-xs px-6 py-1.5 text-center text-white-primary font-gilroy-bold sm:max-w-96 sm:text-xl">
                Receive Free Evaluation
              </button>
            </div>
          </div>
        </nav>
        <main className="bg-black">
          <section className="my-12 grid gap-y-16">
            <div className="w-full rounded-lg">
              <VideoSection videoUrl="https://www.youtube.com" />
            </div>
            <div>
              <p className="text-center text-xl text-white-primary font-gilroy-bold md:text-2xl">
                Trusted by individuals & teams <br className="md:hidden" /> from
                all over the world.
              </p>
            </div>
            <div className="scroll-right-container flex items-center justify-center">
              <div className="scroll-right-content">
                <img
                  src={PrMobile}
                  alt="projectsImages"
                  className="scroll-right-image"
                />
                <img
                  src={PrMobile}
                  alt="projectsImages"
                  className="scroll-right-image md:hidden"
                />
              </div>
            </div>
          </section>
          <div className="my-32 flex flex-col items-center justify-center gap-y-12">
            {blocksTexts.map((e, index) => (
              <Block
                key={index}
                header={e.blockHeader}
                subHeader={e.blockSubHeader}
                text={e.blockMainText}
              />
            ))}
          </div>
          <section className="mx-auto w-4/5 bg-black">
            <div className="flex items-center justify-center">
              <h1 className="my-32 text-nowrap text-center text-2xl text-white font-gilroy-black sm:text-4xl lg:text-[3rem]">
                What our customers say about us
              </h1>
            </div>
            <div className="infinite-scroll-container">
              <div className="scroll-shadow-top"></div>
              <div className="scroll-shadow-bottom">
                <div className="scroll-track">
                  <div className="scroll-item">
                    <Reviews />
                    <Reviews />
                    <Reviews />
                  </div>
                  <div className="scroll-item">
                    <Reviews />
                    <Reviews />
                    <Reviews />
                  </div>
                </div>
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
