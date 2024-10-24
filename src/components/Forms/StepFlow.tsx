import { StepProvider, useStep } from "./StepContext";
import { useEffect } from "react";
import { Step1, Step2, Step3, Step4, Step5, Step6 } from "./Steps";
import { Link, useLocation } from "react-router-dom";

const StepFlow = () => {
  const { currentStep } = useStep();
  const location = useLocation();

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();

      if (currentStep === 4) {
        const step4Ready = document.querySelector(
          ".step-active .btn-send",
        ) as HTMLButtonElement | null;
        step4Ready?.click();
      } else if (currentStep === 5) {
        const step5Submit = document.querySelector(
          ".step-active .btn-send",
        ) as HTMLButtonElement | null;
        step5Submit?.click();
      }
    }
  };

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => e.preventDefault();

    // Function to apply touch-action: pan-x (disable Y-axis scrolling)
    const disableYScroll = () => {
      document.body.style.touchAction = "pan-x";
      document.documentElement.style.touchAction = "pan-x";
    };

    // Function to restore default touch-action (allow all scrolling)
    const restoreScroll = () => {
      document.body.style.touchAction = "auto";
      document.documentElement.style.touchAction = "auto";
    };

    // Function to prevent scroll if on Lead or ContactUs route
    const preventScroll = () => {
      if (location.pathname === "/Lead" || location.pathname === "/ContactUs") {
        disableYScroll();

        // Disable scrolling but allow touch events on buttons
        document.addEventListener(
          "touchmove",
          (e) => {
            const target = e.target as HTMLElement;

            // Allow touch moves on buttons only
            if (target.tagName !== "BUTTON") {
              preventDefault(e);
            }
          },
          { passive: false },
        );
      } else {
        restoreScroll();
      }
    };

    preventScroll();

    return () => {
      restoreScroll();
      document.removeEventListener("touchmove", preventDefault); // Clean up event listener
    };
  }, [location.pathname]); // Dependency on the location path
  return (
    <div
      className="no-focus-outline flex w-full flex-col bg-black"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header */}
      <Link to="/">
        <div className="mb-[2.31rem] max-h-[4.6785rem]">
          <div className="h-auto w-full bg-black">
            <header className="darken-lb-border relative z-20 flex border-b border-[#1c1c1c] bg-black px-6 pb-[1.3981rem] pt-[1.4918rem]">
              <nav className="my-auto flex w-full items-center justify-between">
                <div className="mobile-logo-container max-h-[6.3rem] w-full max-w-32 self-center sm:max-w-40">
                  <div className="flex h-[2.3rem] w-full bg-header-logo-mobile bg-no-repeat sm:h-10"></div>
                </div>
              </nav>
            </header>
            <div className="darken-lb sticky w-full translate-y-[-50.5%] object-cover xl:top-[-4rem]"></div>
          </div>
        </div>
      </Link>

      {/* Section */}
      <div className="flex h-full overflow-hidden bg-black">
        <div
          className="step-container"
          style={{ transform: `translateX(-${(currentStep - 1) * 100}%)` }} // Slide effect based on the currentStep
        >
          <div className={`step ${currentStep === 1 ? "step-active" : ""}`}>
            <Step1 />
          </div>
          <div className={`step ${currentStep === 2 ? "step-active" : ""}`}>
            <Step2 />
          </div>
          <div className={`step ${currentStep === 3 ? "step-active" : ""}`}>
            <Step3 />
          </div>
          <div className={`step ${currentStep === 4 ? "step-active" : ""}`}>
            <Step4 />
          </div>
          <div className={`step ${currentStep === 5 ? "step-active" : ""}`}>
            <Step5 />
          </div>
          <div className={`step ${currentStep === 6 ? "step-active" : ""}`}>
            <Step6 />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex-grow-1 fixed bottom-0 z-50 flex h-[5.225rem] w-full items-center justify-center border-t border-[#2c2c2c] bg-black">
        <p className="text-center text-sm text-white font-gilroy-medium">
          2024 &copy; Hasa Media LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default function StepFlowWrapper() {
  return (
    <StepProvider>
      <StepFlow />
    </StepProvider>
  );
}
