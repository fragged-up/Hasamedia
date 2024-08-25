import desktopLogo from "@/assets/images/logoDesktop.png";
import lbImage from "@/assets/images/lightBlueDesk.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice"; // ייבוא פונקציית logout
import { RootState } from "../../redux/store"; // ייבוא RootState
import { Link, useNavigate } from "react-router-dom";

const DesktopHeader = () => {
  const [popUp, setPopUP] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstName = useSelector(
    (state: RootState) => state.auth.user?.firstName
  );

  const handleLogout = () => {
    dispatch(logout()); // ביצוע logout
    navigate("/login"); // ניתוב לדף ההתחברות לאחר logout
  };
  return (
    <>
      <div className="bg-black">
        {popUp && (
          <div className="bg-black flex justify-center items-center py-2">
            <input
              type="checkbox"
              name="hiring"
              id="hiring"
              className="mr-2"
              onClick={() => setPopUP(false)}
            />
            <p className="text-base font-gilroy-regular text-white-secondary text-center">
              We are hiring soon keep in touch, we may be open for business in
              the US soon
            </p>
          </div>
        )}
        <header className="bg-black-primary shadow-md flex justify-between items-center relative">
          <div className="container flex items-center gap-x-6 py-10">
            <div className="left-side flex justify-center items-center ml-8">
              <div className="desktop-logo-container flex justify-center items-center max-w-56">
                <img src={desktopLogo} alt="desktopLogo" className="flex" />
              </div>
            </div>

            <nav className="flex justify-center items-center gap-x-6 pt-6">
              <Link
                to="/product"
                className="text-white-secondary font-gilroy-regular text-base"
              >
                Product
              </Link>
              <Link
                to="/templates"
                className="text-white-secondary font-gilroy-regular text-base"
              >
                Templates
              </Link>
              <Link
                to="/contact"
                className="text-white-secondary font-gilroy-regular text-base"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="right-side flex gap-5 pt-6 px-10">
            <div className="flex items-center justify-center gap-x-4">
              {firstName ? (
                <>
                  <p className="text-white-secondary font-gilroy-regular text-base text-nowrap">
                    Hello, {firstName}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="text-white-secondary font-gilroy-regular text-base text-nowrap"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/signup">
                    <p className="text-white-secondary font-gilroy-regular text-base text-nowrap">
                      SignUp
                    </p>
                  </Link>
                  <Link to="/login">
                    <p className="text-white-secondary font-gilroy-regular text-base text-nowrap">
                      Login
                    </p>
                  </Link>
                </>
              )}
            </div>

            <div className="desk-rev-btn flex justify-center items-center text-nowrap py-2 px-4 rounded-lg">
              <Link
                to="/free-website-review"
                className="text-white font-gilroy-black transition duration-300 text-center"
              >
                Free Website Review
              </Link>
            </div>
          </div>
        </header>
        <div>
          <img
            src={lbImage}
            alt="Crazy Border"
            className="absolute h-10 min-w-full mt-[-3%] translate-y-4/4"
          />
        </div>
      </div>
    </>
  );
};

export default DesktopHeader;
