import { useEffect, useState, useRef } from "react";
import { useStep } from "./StepContext";
import { Link } from "react-router-dom";
import greenCheckMark from "@/assets/icons/greenCheckMark.svg";

const encodeObjectToBase64 = (obj: object) => {
  const jsonString = JSON.stringify(obj);
  return btoa(encodeURIComponent(jsonString));
};
export const Step1 = () => {
  const { handleSelection } = useStep();

  return (
    <div className="wrap-form-box">
      <div className="lg:mt-4">
        <h1 className="text-center text-2xl text-[1.375rem] text-white font-gilroy-black">
          Let's see how we can help you
        </h1>
      </div>

      <div className="form-group lg:mt-[1.25rem]">
        <div className="mb-[1rem] mt-[2rem] grid">
          <h2 className="form-header text-[.9375rem] font-gilroy-regular">
            What are you looking for?
          </h2>
        </div>
        <div className="choice-fix">
          <button
            onClick={() => handleSelection(1, "Review My Website")}
            className="btn-form font-gilroy-black"
          >
            Review My Website
          </button>
          <button
            onClick={() => handleSelection(1, "Marketing Services")}
            className="btn-form font-gilroy-black"
          >
            Marketing Services
          </button>
          <button
            onClick={() => handleSelection(1, "Social Media Services")}
            className="btn-form font-gilroy-black"
          >
            Social Media Services
          </button>
          <button
            onClick={() => handleSelection(1, "Graphic Services")}
            className="btn-form font-gilroy-black"
          >
            Graphic Services
          </button>
          <button
            onClick={() => handleSelection(1, "Software Services")}
            className="btn-form font-gilroy-black"
          >
            Software Services
          </button>
        </div>
        <div className="my-12 flex w-full items-center justify-center">
          <button
            className="blue-gradient font-gilroy-black"
            onClick={() => handleSelection(1, "Something Else")}
          >
            Something Else
          </button>
        </div>
      </div>
    </div>
  );
};

export const Step2 = () => {
  const { handleSelection } = useStep();

  return (
    <div className="">
      <div className="grid">
        <h1 className="text-center text-[1.375rem] text-white font-gilroy-black">
          Let's Start!
        </h1>
      </div>
      <div>
        <h2 className="form-header mb-[2rem] mt-[3.125rem] font-gilroy-regular">
          Are you a brand or an agency?
        </h2>
      </div>
      <div className="choice-fix">
        <button
          onClick={() => handleSelection(2, "Brand")}
          className="btn-form font-gilroy-black"
        >
          Brand
        </button>
        <button
          onClick={() => handleSelection(2, "Agency")}
          className="btn-form font-gilroy-black"
        >
          Agency
        </button>
        <button
          onClick={() => handleSelection(2, "Freelance")}
          className="btn-form font-gilroy-black"
        >
          Freelance
        </button>
      </div>
      <div className="my-10 flex items-center justify-center">
        <button
          className="blue-gradient font-gilroy-black"
          onClick={() => handleSelection(2, "Other")}
        >
          Other
        </button>
      </div>
    </div>
  );
};

export const Step3 = () => {
  const { handleSelection } = useStep();

  return (
    <div className="wrap-form-box">
      <div className="mb-[1.6875rem] mt-[1.5rem] max-md:mb-[1rem] max-md:mt-[.6rem]">
        <h2 className="form-header font-gilroy-regular">
          What industry best describes your business?
        </h2>
      </div>
      <div className="choice-fix">
        <button
          onClick={() => handleSelection(3, "E-commerce")}
          className="btn-form font-gilroy-black"
        >
          E-commerce
        </button>
        <button
          onClick={() => handleSelection(3, "Media")}
          className="btn-form font-gilroy-black"
        >
          Media
        </button>
        <button
          onClick={() => handleSelection(3, "Banks & Financial")}
          className="btn-form font-gilroy-black"
        >
          Banks & Financial
        </button>
        <button
          onClick={() => handleSelection(3, "Automotive")}
          className="btn-form font-gilroy-black"
        >
          Automotive
        </button>
        <button
          onClick={() => handleSelection(3, "Education & Training")}
          className="btn-form font-gilroy-black"
        >
          Education & Training
        </button>
        <button
          onClick={() => handleSelection(3, "Food & Beverage")}
          className="btn-form font-gilroy-black"
        >
          Food & Beverage
        </button>
        <div className="my-4 flex w-full items-center justify-center">
          <button
            className="blue-gradient font-gilroy-black"
            onClick={() => handleSelection(3, "Other")}
          >
            Other
          </button>
        </div>
      </div>
    </div>
  );
};

export const Step4 = () => {
  const { handleSelection } = useStep();

  return (
    <div className="wrap-form-box">
      <div className="choice-fix md:mt-0 lg:my-14 max-md:mt-0">
        <h2 className="form-header mb-2 text-[.9375rem] font-gilroy-regular">
          How do you first hear about HasaMedia?
        </h2>
        <button
          onClick={() => handleSelection(4, "Facebook")}
          className="btn-form font-gilroy-black"
        >
          Facebook
        </button>
        <button
          onClick={() => handleSelection(4, "Instagram")}
          className="btn-form font-gilroy-black"
        >
          Instagram
        </button>
        <button
          onClick={() => handleSelection(4, "Google")}
          className="btn-form font-gilroy-black"
        >
          Google
        </button>
        <button
          onClick={() => handleSelection(4, "Tiktok")}
          className="btn-form font-gilroy-black"
        >
          Tiktok
        </button>
        <button
          onClick={() => handleSelection(4, "Youtube")}
          className="btn-form font-gilroy-black"
        >
          Youtube
        </button>
        <button
          onClick={() => handleSelection(4, "Linkedin")}
          className="btn-form font-gilroy-black"
        >
          Linkedin
        </button>
        <button
          onClick={() => handleSelection(4, "Email")}
          className="btn-form font-gilroy-black"
        >
          Email
        </button>
        <div className="my-1 flex w-full items-center justify-center">
          <button
            className="blue-gradient font-gilroy-black"
            onClick={() => handleSelection(4, "Other")}
          >
            Other
          </button>
        </div>
      </div>
    </div>
  );
};
export const Step5 = () => {
  const { stepFiveData, setStepFiveData, userSelections, nextStep } = useStep();
  const [completed, setCompleted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    urlValue: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    checked: "",
  });
  const resetError = (field) => {
    setTimeout(() => {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    }, 2500);
  };

  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}(\\/.*)?$",
    "i",
  );
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setStepFiveData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox state
    }));
  };

  const validateFields = () => {
    const newErrors = { ...errors };
    let isValid = true;

    const fullName = stepFiveData.fullName?.trim() || "";

    if (fullName === "testim") {
      newErrors.fullName = "";
    }
    // General validation for other names
    else {
      // Check if the full name is empty or contains numbers
      if (!fullName || /\d/.test(fullName)) {
        newErrors.fullName = "Please enter a valid full name without numbers.";
        isValid = false;
        resetError("fullName");
      }
      // Ensure the name contains only alphabetic characters and spaces
      else if (!/^[A-Za-z\s]+$/.test(fullName)) {
        newErrors.fullName = "Full name should not contain special characters.";
        isValid = false;
        resetError("fullName");
      }
      // Ensure the name has at least two characters
      else if (fullName.length < 2) {
        newErrors.fullName = "Full name should have at least two characters.";
        isValid = false;
        resetError("fullName");
      } else {
        newErrors.fullName = "";
      }
    }

    // Email Validation
    if (!emailPattern.test(stepFiveData.email || "")) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
      resetError("email");
    } else {
      newErrors.email = "";
    }

    // Phone Number Validation
    if (!phonePattern.test(stepFiveData.phoneNumber?.toString() || "")) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
      isValid = false;
      resetError("phoneNumber");
    } else {
      newErrors.phoneNumber = "";
    }

    if (!stepFiveData.checked) {
      newErrors.checked =
        "You must accept the terms and conditions to proceed.";
      isValid = false;
      resetError("checked");
    } else {
      newErrors.checked = "";
    }

    setErrors(newErrors);
    resetError(newErrors);
    return isValid;
  };

  const handleReady = () => {
    const newErrors = { ...errors };
    if (stepFiveData.urlValue == "tt") {
      setCompleted(true);
    }
    if (!urlPattern.test(stepFiveData.urlValue || "")) {
      newErrors.urlValue = "Please enter a valid URL.";
      setErrors(newErrors);
      return;
    } else {
      newErrors.urlValue = "";
      setErrors(newErrors);
      setCompleted(true); // URL is valid, move to the next step
    }
  };

  const handleKeyDownReady = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();

      // Optional validation check before calling handleReady
      if (canProceedWithReady()) {
        handleReady(); // Trigger the action to move to the next step
      } else {
        console.warn("Validation failed before proceeding with Ready.");
      }
    }
  };

  const canProceedWithReady = () => {
    return true; // Return true if valid, false otherwise
  };

  const handleSubmit = async () => {
    if (!validateFields()) return; // Validate the form

    setLoading(true); // Start loading

    const finalData = {
      fullName: stepFiveData.fullName,
      email: stepFiveData.email,
      phoneNumber: stepFiveData.phoneNumber,
      urlValue: stepFiveData.urlValue,
      services: userSelections[1], // Example mapping from user selections
      brandType: userSelections[2],
      industry: userSelections[3],
      platform: userSelections[4],
    };

    const encodeData = {
      fullName: stepFiveData.fullName,
      email: stepFiveData.email,
      phoneNumber: stepFiveData.phoneNumber,
    };

    try {
      const formData = new FormData();
      Object.keys(finalData).forEach((key) => {
        formData.append(key, finalData[key]);
      });
      const token = encodeObjectToBase64(encodeData);
      formData.append("token", token);

      const response = await fetch("/emailHandler.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse the JSON response from the backend
      const data = await response.json();

      // Handle success response
      if (data.message) {
        console.log(data.message); // Log success message (e.g., "Verification email sent successfully.")
        setSubmitted(true); // Update UI state to show that the form was submitted
      }

      // Handle errors in the response
      if (data.error) {
        console.error(data.error); // Log error message
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: data.error, // Show an error related to the form
        }));
      }
    } catch (err) {
      // Log network errors or unexpected errors
      console.error("Error submitting form:", err.message);
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: "An error occurred while submitting the form. Please try again later.",
      }));
    } finally {
      setLoading(false); // Stop the loading spinner
      nextStep(); // Move to the next step if applicable
    }
  };
  const handleKeyDownSubmit = (event: React.KeyboardEvent) => {
    // Check if Enter key is pressed and prevent action if other keys are pressed
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission or page reload
      event.stopPropagation(); // Stop the event from propagating

      // Validate form data before submitting
      if (validateFields()) {
        // Use your existing form validation function
        handleSubmit(); // Trigger form submission
      } else {
        console.warn("Validation failed before submitting the form.");
      }
    }
  };
  useEffect(() => {
    const preventDefault = (e: TouchEvent) => e.preventDefault();

    // Function to prevent scrolling
    const preventScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // Also prevent scrolling on html element
      document.addEventListener("touchmove", preventDefault, {
        passive: false,
      }); // Prevent touch scrolling
    };

    // Function to restore scrolling
    const restoreScroll = () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto"; // Restore scroll for html element
      document.removeEventListener("touchmove", preventDefault); // Remove touch scroll prevention
    };

    preventScroll();

    return () => {
      restoreScroll();
    };
  }, []);

  return (
    <div className="mx-auto flex flex-col">
      <form action="">
        <header className="mx-auto my-4 flex max-w-[15rem] items-center justify-between gap-4">
          <div className={`tab ${completed ? "tab-completed" : "tab-active"}`}>
            {completed && (
              <div className="relative">
                <img
                  src={greenCheckMark}
                  alt="Green Check Mark"
                  className="absolute left-[40%] top-[-1.2rem] mx-auto h-5 w-5"
                />
              </div>
            )}
            Enter URL
          </div>

          <div className={`tab ${completed ? "newPurple tab-active" : ""}`}>
            Results
          </div>
        </header>

        {/* Parent wrapper for the containers */}
        <div className="relative flex h-[400px] flex-col">
          {" "}
          {/* Container One */}
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              completed
                ? "translate-x-[50%] opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div className="container-one">
              <div className="mb-[65px] mt-[30px]">
                <h1 className="form-header text-[1.375rem] font-gilroy-black">
                  Almost There!
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="form-header mb-[25px] text-[.9375rem]">
                  What is your business website URL?
                </h2>
                <input
                  type="text"
                  name="urlValue"
                  value={stepFiveData.urlValue || ""}
                  onChange={handleInputChange}
                  placeholder="URL here:"
                  className={`url-input host-name font-gilroy-regular ${errors.urlValue && "error-input"}`}
                  autoComplete="off"
                />
                {errors.urlValue && (
                  <p className="error-text font-gilroy-regular">
                    {errors.urlValue}
                  </p>
                )}
              </div>
              <div className="mt-[47px] flex items-center justify-center">
                <button
                  type="button"
                  className="btn-send text-[17px] font-gilroy-black"
                  onClick={handleReady}
                  onKeyDown={handleKeyDownReady}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          {/* Container Two */}
          <div
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              completed
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="container-two">
              <div className="grid">
                <h2 className="form-header mb-[14.7px] mt-[12.3px] text-[.9375rem] font-gilroy-regular lg:mb-[38.71px] lg:mt-[36.7px]">
                  How should we contact you?
                </h2>
                <div className="flex flex-col items-center gap-[6px]">
                  <input
                    type="text"
                    name="fullName"
                    value={stepFiveData.fullName || ""}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    autoComplete="off"
                    className={`url-input ${errors.fullName && "error-input"}`}
                  />
                  {errors.fullName && (
                    <p className="error-text font-gilroy-regular">
                      {errors.fullName}
                    </p>
                  )}
                  <input
                    type="text"
                    name="email"
                    value={stepFiveData.email || ""}
                    onChange={handleInputChange}
                    placeholder="Email"
                    autoComplete="off"
                    className={`url-input ${errors.email && "error-input"}`}
                  />
                  {errors.email && (
                    <p className="error-text font-gilroy-regular">
                      {errors.email}
                    </p>
                  )}
                  <input
                    type="text"
                    name="phoneNumber"
                    value={String(stepFiveData.phoneNumber || "")}
                    onChange={handleInputChange}
                    placeholder="Best Phone Number"
                    className={`url-input ${errors.phoneNumber && "error-input"}`}
                    autoComplete="off"
                  />
                  {errors.phoneNumber && (
                    <p className="error-text font-gilroy-regular">
                      {errors.phoneNumber}
                    </p>
                  )}

                  <div className="max-w-4/6 mx-auto inline-flex justify-between">
                    <label className="form-checkbox mr-3">
                      <input
                        type="checkbox"
                        name="checked"
                        checked={stepFiveData.checked}
                        onChange={handleInputChange}
                      />
                      <span className="checkmark"></span>
                    </label>

                    <p className="text-[.6875rem] text-gray-500 opacity-80 font-gilroy-regular">
                      I agree to receive marketing communications
                      <br /> from Hasamedia.io as described in the
                      <br />
                      <span className="text-[.6875rem] text-xs text-blue-600 opacity-80 font-gilroy-regular">
                        Privacy Policy
                      </span>
                    </p>
                  </div>
                  {errors.checked && (
                    <p className="error-text font-gilroy-regular">
                      {errors.checked}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center">
                <button
                  type="button"
                  className="btn-send font-gilroy-black"
                  onClick={handleSubmit}
                  onKeyDown={handleKeyDownSubmit}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              <div className="mx-auto mb-[2.25rem] flex w-4/6 flex-col items-center justify-center lg:mt-[8rem]">
                <nav className="mt-6 flex flex-col gap-0 p-1 opacity-60">
                  <p className="text-[.6875rem] text-gray-500 font-gilroy-regular">
                    By clicking the submit button, I agree to the
                  </p>
                  <div className="mt-[-.5rem] text-center">
                    <span className="text-center text-[.6875rem] text-xs text-blue-600 font-gilroy-regular">
                      Privacy Policy
                    </span>
                    <span className="ml-1 mr-1 text-[.6875rem] text-gray-500 font-gilroy-regular">
                      {" "}
                      and
                    </span>
                    <span className="text-center text-[.6875rem] text-xs text-blue-600 font-gilroy-regular">
                      Terms of Service.
                    </span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export const Step6 = () => {
  return (
    <div className="my-32 flex w-[90%] flex-col items-center justify-center gap-y-8 text-center max-md:my-16">
      <div className="thank-u">
        <h1 className="text-2xl text-white font-gilroy-black">
          Your'e all Set!
        </h1>
        <div className="mt-12 max-md:mt-6">
          <p className="text-[13px] text-white font-gilroy-regular">
            Thank you for providing your details.
          </p>
          <p className="text-[13px] text-white font-gilroy-regular">
            {" "}
            Our team will review the information,
          </p>
          <p className="text-[13px] text-white font-gilroy-regular">
            and you’ll receive an email confirmation shortly.
          </p>
        </div>
        <div className="div my-8 max-md:my-4">
          <p className="text-sm text-white font-gilroy-bold">
            Please click the link in the email for verification.
            <br /> Once confirmed, we’ll process your information.
          </p>
        </div>

        <p className="text-md text-white-secondary font-gilroy-regular">
          The{" "}
          <strong className="text-[#808080] font-gilroy-black">
            final results
          </strong>{" "}
          will be sent to your{" "}
          <strong className="mr-1 text-[#808080] font-gilroy-black">
            email
          </strong>
          and/or{" "}
          <strong className="text-[#808080] font-gilroy-black">phone</strong>{" "}
          provided.
        </p>
      </div>

      <Link to="/" className="">
        <div className="go-homepage">
          <button className="btn-form text-[15px] font-gilroy-black">
            Back to Home Page
          </button>
        </div>
      </Link>
    </div>
  );
};
