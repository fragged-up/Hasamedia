import { useState } from "react";
import { Step6 } from "@/components/Forms/Steps";
import Dropdown from "@/components/Forms/DropDown";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
const encodeObjectToBase64 = (obj: object) => {
  const jsonString = JSON.stringify(obj);
  return btoa(encodeURIComponent(jsonString));
};
export default function ContactUs() {
  // Define state variables
  useLockBodyScroll();

  const [currentStep, setCurrentStep] = useState(1);
  const [stepFiveData, setStepFiveData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    service: "", // Added service for dropdown
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    service: "",
  });
  const resetError = (field) => {
    setTimeout(() => {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    }, 2500);
  };

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dropdown state
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "What are you looking for?",
  );

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setStepFiveData((prevData) => ({
      ...prevData,
      service: option,
    }));
    setDropdownOpen(false);
  };

  // Validation Patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;

  // Validate Fields
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
    // Email validation
    if (!emailPattern.test(stepFiveData.email || "")) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
      resetError("email");
    } else {
      newErrors.email = "";
    }

    // Phone number validation
    if (!phonePattern.test(stepFiveData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
      isValid = false;
      resetError("phoneNumber");
    } else {
      newErrors.phoneNumber = "";
    }
    if (
      stepFiveData.service === "What are you looking for?" ||
      !stepFiveData.service
    ) {
      newErrors.service = "Please select a valid option.";
      isValid = false;
      resetError("service");
    }

    setErrors(newErrors);
    console.log("errors");
    resetError(newErrors);
    return isValid;
  };

  // Form submission and request to emailHandler.php
  const handleSubmit = async () => {
    if (!validateFields()) return;

    setLoading(true);

    const finalData = {
      fullName: stepFiveData.fullName,
      email: stepFiveData.email,
      phoneNumber: stepFiveData.phoneNumber,
      service: stepFiveData.service, // This should hold the selected service
    };

    const encodeData = {
      fullName: stepFiveData.fullName,
      email: stepFiveData.email,
      phoneNumber: stepFiveData.phoneNumber,
    };

    console.log(finalData); // Log the data to see if "service" is set correctly

    // Initialize FormData object
    const formData = new FormData();
    Object.keys(finalData).forEach((key) => {
      formData.append(key, finalData[key as keyof typeof finalData] || "");
    });
    const token = encodeObjectToBase64(encodeData);
    formData.append("token", token);
    // Send request to backend
    try {
      const response = await fetch("https://hasamedia.io/emailHandler.php", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSubmitted(true);

      if (data.message) {
        console.log(data.message);
      }

      if (data.error) {
        console.error(data.error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: data.error,
        }));
      }
    } catch (err) {
      console.error("Error submitting form:", err.message);
    } finally {
      setLoading(false);
      setCurrentStep(2);
    }
  };

  // Handle "Enter" key submission
  const handleKeyDownSubmit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex h-full flex-col bg-black">
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

      {/* Main content */}
      <div className="contact-page-content flex h-full items-center justify-center">
        {!submitted ? (
          <div className="flex w-full max-w-[16.81rem] flex-col items-center gap-2">
            <div className="flex">
              <h1 className="text-[2.375rem] text-white font-gilroy-black">
                Contact Us
              </h1>
            </div>
            {/* Dropdown Component */}
            <div className="my-4 flex w-full">
              <Dropdown
                selectedOption={selectedOption}
                onOptionSelect={handleOptionSelect}
              />
            </div>
            {errors.service && (
              <p className="error-text font-gilroy-regular">{errors.service}</p>
            )}
            {/* Input Fields */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={stepFiveData.fullName}
              onChange={(e) =>
                setStepFiveData({ ...stepFiveData, fullName: e.target.value })
              }
              className={`url-input font-gilroy-regular ${errors.fullName && "error-input"}`}
            />
            {errors.fullName && (
              <p className="error-text font-gilroy-regular">
                {errors.fullName}
              </p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={stepFiveData.email}
              onChange={(e) =>
                setStepFiveData({ ...stepFiveData, email: e.target.value })
              }
              className={`url-input ${errors.email && "error-input"}`}
            />
            {errors.email && (
              <p className="error-text font-gilroy-regular">{errors.email}</p>
            )}

            <input
              type="text"
              name="phoneNumber"
              placeholder="Best Phone Number"
              value={stepFiveData.phoneNumber}
              onChange={(e) =>
                setStepFiveData({
                  ...stepFiveData,
                  phoneNumber: e.target.value,
                })
              }
              className={`url-input font-gilroy-regular ${errors.phoneNumber && "error-input"} `}
            />
            {errors.phoneNumber && (
              <p className="error-text font-gilroy-regular">
                {errors.phoneNumber}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="button"
              className="btn-send font-gilroy-black"
              onClick={handleSubmit}
              onKeyDown={handleKeyDownSubmit}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        ) : (
          <div className="mx-auto flex items-center justify-center overflow-hidden">
            {" "}
            <Step6 />
          </div>
        )}
      </div>

      {/* Sub-Footer (Legal Section) */}
      <div className="sub-footer mx-auto mb-[6.875rem] flex w-4/6 flex-col items-center justify-center">
        <nav className="mt-6 flex flex-col gap-0 p-1 text-center opacity-60">
          <p className="text-[.6875rem] text-gray-500 font-gilroy-regular">
            By clicking the submit button, I agree to the
          </p>
          <div className="mt-[-.5rem]">
            <span className="text-[.6875rem] text-xs text-blue-600 font-gilroy-regular">
              Privacy Policy
            </span>
            <span className="mx-1 text-[.6875rem] text-gray-500 font-gilroy-regular">
              and
            </span>
            <span className="text-[.6875rem] text-xs text-blue-600 font-gilroy-regular">
              Terms of Service.
            </span>
          </div>
        </nav>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 z-50 flex h-[5.25rem] w-full items-center justify-center border-t border-[#2c2c2c] bg-black">
        <p className="text-center text-sm text-white font-gilroy-medium">
          2024 &copy; Hasa Media LLC. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
