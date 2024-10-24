import Block from "../components/UI/Block";
import PrMobile from "@/assets/images/prMobile.png";
import VideoSection from "../components/UI/VideoSection";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reviews from "@/components/UI/Reviews";
import { Link } from "react-router-dom";

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
      <header>
        <Header />
      </header>
      {/* <nav className="bg-black-primary sm:my-28 sm:mb-[6rem] sm:mt-[8rem] lg:mb-0 lg:mt-0 max-sm:mb-[3.3rem] max-sm:mt-[9rem]"> */}
      {/* <div className="w-full overflow-x-hidden bg-black py-1 max-sm:mt-[calc(4%)]"> */}
      <div className="grid w-full place-items-center">
        <div className="w-full overflow-x-hidden bg-black py-1">
          <nav className="bg-black-primary">
            <div className="hero-wrapper mt-[10.5rem] sm:mt-[12.8rem] lg:mt-[17rem]">
              <div className="text-hero-wrap">
                <div className="pb-8 pt-4 lg:pb-[3.75rem] lg:pt-0 xl:pt-4">
                  <h1 className="gradient-hero-text hero-solution hero-boster xl:text-[4.5rem]: text-center text-[1.75rem] font-gilroy-black sm:text-[2.6rem] lg:text-[3.5rem] lg:leading-[3.5rem] xl:text-[4.5rem] xl:leading-[4.5rem]">
                    Build, Grow, Manage.
                  </h1>
                  <h2 className="gradient-hero-text text-center text-base font-gilroy-black sm:text-3xl lg:text-[3rem] lg:leading-[4rem] xl:text-[3.4375rem] xl:leading-[4rem]">
                    Your One-Step Solution for Digital Success.
                  </h2>
                </div>
              </div>

              <div className="mx-auto flex w-[90%] flex-col py-0 sm:py-1">
                <p className="text-center text-xs text-white font-gilroy-bold sm:text-xl lg:text-2xl lg:leading-[2rem]">
                  From Concept to Launch, We Empower Your Digital Journey.
                </p>
                <div className="h-[24px]">
                  <p className="text-wrap text-center text-[.625rem] text-white font-gilroy-regular sm:text-sm lg:text-[1.5rem] lg:leading-[2rem] max-md:text-white">
                    Whether you’re starting from scratch or looking to enhance
                    an existing platform,{" "}
                    <br className="md:block max-md:hidden" /> we provide a
                    comprehensive suite of services to build, grow, and manage
                    your digital presence.
                  </p>
                </div>
              </div>
              <div className="btn-container mx-auto mb-[5.5rem] mt-12 flex w-full items-center justify-center md:mt-16 lg:mb-36 lg:mt-[7.5rem] max-md:max-w-[192px]">
                <Link to="/Lead">
                  <button className="recive-cta text-nowrap px-6 py-1.5 text-center text-white-primary font-gilroy-bold sm:max-w-96 sm:text-xl lg:w-[347px] lg:p-4 lg:py-3 lg:text-[24px] max-sm:w-[192px] max-sm:max-w-48 max-sm:text-xs">
                    Receive Free Evaluation
                  </button>
                </Link>
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
                  Trusted by individuals & teams <br className="md:hidden" />{" "}
                  from all over the world.
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
                    alt="projectsImagesTwo"
                    className="scroll-right-image md:hidden"
                  />
                </div>
              </div>
            </section>
            <div className="my-24 flex flex-col items-center justify-center gap-y-12">
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
              <div className="flex items-center justify-center max-sm:mb-[1.1rem] max-sm:mt-[7.5rem]">
                <h1 className="my-10 text-nowrap text-center text-[1.3rem] text-white font-gilroy-black sm:text-4xl lg:text-[3rem] max-sm:my-0">
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
                <div className="btm-shadow"></div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
