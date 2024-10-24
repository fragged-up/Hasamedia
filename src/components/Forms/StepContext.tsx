import { createContext, useState, useContext, ReactNode } from "react";

type StepContextType = {
  currentStep: number;
  userSelections: { [key: number]: string };
  nextStep: () => void;
  previousStep?: () => void;
  handleSelection: (step: number, selection: string) => void;
  stepFiveData: {
    urlValue: null | string;
    fullName: null | string;
    phoneNumber: null | number;
    email: null | string;
    finished?: boolean;
    checked?: boolean;
  };
  setStepFiveData: React.Dispatch<
    React.SetStateAction<{
      urlValue: string;
      fullName: string;
      phoneNumber: number;
      email: string;
      finished: boolean;
      checked: boolean;
    }>
  >;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userSelections, setUserSelections] = useState<{
    [key: number]: string;
  }>({});

  const [stepFiveData, setStepFiveData] = useState<{
    urlValue: string;
    fullName: string;
    phoneNumber: number;
    email: string;
    checked: boolean;
  }>({
    urlValue: "",
    fullName: "",
    phoneNumber: 0,
    email: "",
    checked: false,
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 7));
  };

  const previousStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSelection = (step: number, selection: string) => {
    setUserSelections((prevSelections) => {
      const updatedSelections = {
        ...prevSelections,
        [step]: selection,
      };
      console.log("All selections so far:", updatedSelections);

      return updatedSelections;
    });
    nextStep();
  };

  return (
    <StepContext.Provider
      value={{
        currentStep,
        userSelections,
        nextStep,
        previousStep,
        handleSelection,
        stepFiveData,
        setStepFiveData,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
};
