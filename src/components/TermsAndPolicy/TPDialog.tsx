import React, { useState, useRef, useEffect } from "react";
import Terms from "./Terms";
import Policy from "./Policy";

const TPDialog: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"terms" | "policy">("terms");
  const [canSwitchTab, setCanSwitchTab] = useState(false);
  const [canContinue, setCanContinue] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpen = (tab: "terms" | "policy") => {
    setSelectedTab(tab);
    setCanSwitchTab(false);
    setCanContinue(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    console.log("Continue clicked!");
    handleClose();
  };

  const handleScroll = () => {
    const contentElement = contentRef.current;
    if (contentElement) {
      const isScrolledToBottom =
        contentElement.scrollHeight - contentElement.scrollTop ===
        contentElement.clientHeight;
      setCanSwitchTab(isScrolledToBottom);
      if (selectedTab === "policy" && isScrolledToBottom) {
        setCanContinue(true);
      }
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [selectedTab]);

  return (
    <>
      <button onClick={() => handleOpen("terms")}>Terms of Service</button>
      <button onClick={() => handleOpen("policy")}>Privacy Policy</button>

      {open && (
        <div
          className="dialog"
          style={{
            maxHeight: "35rem",
            overflowY: "auto",
            border: "1px solid black",
            padding: "1rem",
            backgroundColor: "white",
          }}
        >
          <div
            className="dialog-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h2>
              {selectedTab === "terms" ? "Terms of Service" : "Privacy Policy"}
            </h2>
            <button
              onClick={handleClose}
              className="close-button"
              style={{
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
              }}
            >
              X
            </button>
          </div>
          <div
            className="dialog-content"
            onScroll={handleScroll}
            ref={contentRef}
            style={{ maxHeight: "calc(35rem - 4rem)", overflowY: "auto" }}
          >
            {selectedTab === "terms" ? <Terms /> : <Policy />}
          </div>
          <div
            className="dialog-actions"
            style={{ marginTop: "1rem", textAlign: "right" }}
          >
            {canSwitchTab && selectedTab === "terms" && (
              <div
                style={{
                  color: "green",
                  marginBottom: "0.5rem",
                  textAlign: "left",
                }}
              >
                You can now switch to the Privacy Policy.
              </div>
            )}
            <button
              onClick={() => setSelectedTab("terms")}
              disabled={selectedTab === "terms" || !canSwitchTab}
              style={{ marginRight: "1rem" }}
            >
              Terms of Service
            </button>
            <button
              onClick={() => setSelectedTab("policy")}
              disabled={selectedTab === "policy" || !canSwitchTab}
              style={{
                marginRight: "1rem",
                backgroundColor: canSwitchTab ? "lightgreen" : "lightgray",
                transition: "background-color 0.3s",
              }}
            >
              Privacy Policy
            </button>
            <button onClick={handleContinue} disabled={!canContinue}>
              Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TPDialog;
