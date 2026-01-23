import React, { useEffect, useState } from "react";
import "./navbar.css";
import { RiHomeSmileLine } from "react-icons/ri";
import {
  MdDiamond,
  MdOutlineAccountBox,
  MdOutlineLocalActivity,
} from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import ServiceImg from "../assets/icon_sevice.png";
import WheelSpinImg from "../assets/wheelspin.8ec6f252ec6ce93fb9fd.8ec6f252ec6ce93fb9fd.png";
import dragonImg from "../assets/changlong.de82cd2c25a08dc22ccd.png";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("/");

  const { userInfo } = useSelector((state) => state.auth);

  const naviaget = useNavigate();
  const handleClick = (item) => {
    setActiveItem(item);
    naviaget(`/${item}`);
  };
  let location = useLocation();
  useEffect(() => {
    setActiveItem(location.pathname);
  }, [activeItem]);
  return (
    <>
      <div
        style={{
          position: "fixed",
          // left: position.x,
          // top: position.y,
          zIndex: 500,
          // cursor: dragging ? "grabbing" : "pointer",
          // transition: dragging ? "none" : "all 0.2s ease-out",
        }}
        // onMouseDown={handleStartDragging}
        // onTouchStart={handleStartDragging}
        // onMouseMove={(e) => e.preventDefault()}
        className="flex flex-col right-0 bottom-20"
      >
        {/* <div
          onClick={() => handleClick("WheelSpin")}
          style={{ display: "inline-block" }}
        >
          <img src={WheelSpinImg} alt="Service" className="w-14  " />
        </div> */}
        <div style={{ display: "inline-block" }}>
          <img src={dragonImg} alt="Service" className="w-14 mb-2" />
        </div>

        {userInfo ? (
          <Link
            to={`https://h5.workorder.support.winstar99.fit?token=${Cookies.get(
              "auth"
            )}`}
            style={{ display: "inline-block" }}
          >
            <img src={ServiceImg} alt="Service" className="w-14" />
          </Link>
        ) : (
          <div
            onClick={() => handleClick("main/CustomerService")}
            style={{ display: "inline-block" }}
          >
            <img src={ServiceImg} alt="Service" className="w-14" />
          </div>
        )}
      </div>
      <div className="navbar-section">
        <div
          className={`gray-100 flex  justify-center items-center flex-col p-2  ${
            activeItem === "/promotion" ? "active" : ""
          }`}
          onClick={() => handleClick("promotion")}
        >
          <div className="flex justify-center items-center ml-[5px]">
            {/* <RiHomeSmileLine className="text-2xl" /> */}
            {/* <MdHeartBroken
              className={`text-2xl  ${
                activeItem === "/promotion"
                  ? "active"
                  : "text-[#A8A5A1] "
              }`}
            /> */}
            <svg
              data-v-fb80cf49
              className={
                activeItem === "/promotion"
                  ? "svg-icon icon-p3_promotion_a"
                  : "svg-icon icon-p3_promotion"
              }
            >
              <use
                xlinkHref={
                  activeItem === "/promotion"
                    ? "#icon-p3_promotion_a"
                    : "#icon-p3_promotion"
                }
              />
            </svg>
          </div>
          <span
            className={`text-[11px] font-medium   ${
              activeItem === "/promotion" ? "active" : " text-[#A8A5A1] "
            }`}
          >
            Promotion
          </span>
        </div>
        <div
          className={`gray-100 flex  justify-center items-center flex-col p-2   ${
            activeItem === "/activity" ? "active" : ""
          } `}
          onClick={() => handleClick("activity")}
        >
          {/* <BiSolidGift
            className={`text-2xl ${
              activeItem === "/activity"
                ? "active"
                : "text-[#A8A5A1] "
            }`}
          /> */}
          <svg
            data-v-fb80cf49
            className={
              activeItem === "/activity"
                ? "svg-icon icon-p3_activity_a"
                : "svg-icon icon-p3_activity"
            }
          >
            <use
              xlinkHref={
                activeItem === "/activity"
                  ? "#icon-p3_activity_a"
                  : "#icon-p3_activity"
              }
            />
          </svg>

          <span
            className={`text-[11px] font-medium   ${
              activeItem === "/activity" ? "active" : " text-[#A8A5A1] "
            }`}
          >
            Activity
          </span>
        </div>

        <div
          onClick={() => handleClick("")}
          className={` flex  justify-center items-center flex-col p-2   ${
            activeItem === "/" ? "promotion" : "active"
          } `}
        >
          <div className="nav-promotion">
            {/* <LiaGamepadSolid
              className={`text-2xl ${
                activeItem === "/" ? "text-black" : " text-black"
              }`}
            /> */}
            <svg data-v-fb80cf49 className="svg-icon icon-p3_home_a">
              <use xlinkHref="#icon-p3_home_a" />
            </svg>
          </div>
          <span
            className={`text-[11px] font-medium   ${
              activeItem === "/" ? "gray-100" : ""
            }`}
          ></span>
        </div>

        <div
          className={`gray-100 flex  justify-center items-center flex-col p-2   ${
            activeItem === "/wallet" ? "active" : ""
          }`}
          onClick={() => handleClick("wallet")}
        >
          {/* <IoWallet
            className={`text-2xl ${
              activeItem === "/wallet"
                ? "active"
                : " text-[#A8A5A1] "
            }`}
          /> */}
          <svg
            data-v-fb80cf49
            className={
              activeItem === "/wallet"
                ? "svg-icon icon-p3_wallet"
                : "svg-icon icon-p3_wallet_a"
            }
          >
            <use
              xlinkHref={
                activeItem === "/wallet"
                  ? "#icon-p3_wallet_a"
                  : "#icon-p3_wallet"
              }
            />
          </svg>

          <span
            className={`text-[11px] font-medium   ${
              activeItem === "/wallet" ? "active" : "text-[#A8A5A1] "
            }`}
          >
            Wallet
          </span>
        </div>
        <div
          className={`gray-100 flex  justify-center items-center flex-col p-2   ${
            activeItem === "/main" ? "active" : ""
          }`}
          onClick={() => handleClick("main")}
        >
          {/* <FaUser
            className={`text-2xl text-[#A8A5A1] ${
              activeItem === "/main" ? "active" : ""
            }`}
          /> */}
          <svg
            data-v-fb80cf49
            className={
              activeItem === "/main"
                ? "svg-icon icon-p3_main_a"
                : "svg-icon icon-p3_main"
            }
          >
            <use
              xlinkHref={
                activeItem === "/main" ? "#icon-p3_main_a" : "#icon-p3_main"
              }
            />
          </svg>

          <span
            className={`text-[11px] font-medium   ${
              activeItem === "/main" ? "active" : "text-[#A8A5A1] "
            }`}
          >
            Account
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
