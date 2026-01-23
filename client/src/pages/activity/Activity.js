import React, { useEffect } from "react";
import "./activity.css";
import Layout from "../../layout/Layout";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

// const ActivityAward = "";
const InvitationImg = "https://i.ibb.co/Cs7tbH06/invitation-Bonus.webp";
const AcitivityReward = "https://i.ibb.co/60fp56NM/activity-Reward.png";
const bettingImg = 'https://i.ibb.co/Kz8vtWT/Betting-Rebate.png"';
const SupperImg = "https://i.ibb.co/1MbggqG/super-Jackpot.png";
const MemberGiftImg = "https://i.ibb.co/Hg13hYF/member-Gift.png";

const GiftImg = "https://i.ibb.co/GkJh6My/sign-In-Banner.png";
const AttendanceImg = "https://i.ibb.co/PCm07tj/gift-Redeem.png";

const Activity = () => {
  const { loader, bannergetData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="flex justify-center nav-bg sticky top-0">
        <img
          src={bannergetData?.gameall?.logo1}
          alt=""
          loading="lazy"
          className="w-36"
        />
      </div>

      {loader && <Loader />}
      <div className="nav-bg text-center text-white py-6">
        <div className="flex justify-center items-center space-x-8 mb-5">
          <div>
            <p className="fs-sm text-white">Today's bonus</p>
            <p className="text-xl font-bold text-white">₹0.00</p>
          </div>

          <div className="h-10 w-px bg-[#fff]"></div>

          <div>
            <p className="fs-sm text-white">Total bonus</p>
            <p className="text-xl font-bold text-white">₹0.00</p>
          </div>
        </div>

        <button className="border border-[#f57c7b] text-[#f57c7b] bg-[#fff] px-6 py-2 rounded-full  transition">
          Bonus details
        </button>
      </div>
      <div className="container-section mt-3">
        <div className="flex justify-around items-center">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => navigate("/main/ActivityAward")}
          >
            <img src={AcitivityReward} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text text-center whitespace-nowrap leading-3 mt-2">
              Activity <br /> Reward
            </p>
          </div>
          <div
            className=" flex flex-col justify-center items-center "
            onClick={() => navigate("/main/InvitationBonus")}
          >
            <img src={InvitationImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text text-center leading-3 mt-2">
              Invitation <br /> Bonus
            </p>
          </div>

          <div
            className=" flex flex-col justify-center items-center"
            onClick={() => navigate("/main/Laundry")}
          >
            <img src={bettingImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text text-center leading-3 mt-2">
              Betting <br /> rebate
            </p>
          </div>
          {/* <div
            className=" flex flex-col justify-center items-center"
            onClick={() => navigate("/main/SuperJackpot")}
          >
            <img src={SupperImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text  text-center leading-3 mt-2">
              Super
              <br />
              Jackpot
            </p>
          </div> */}
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => navigate("/main/firstgift")}
          >
            <img src={MemberGiftImg} alt="" loading="lazy" className="w-10" />
            <p className="fs-sm gray-text text-center whitespace-nowrap leading-3 mt-2">
              Frist Gift
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 mt-5">
          <div
            className="col-span-6 bg-body rounded-md"
            onClick={() => navigate("/main/RedeemGift")}
          >
            <img src={GiftImg} alt="" loading="lazy" />
            <div className="p-2 mb-3">
              <h3 className="heading-h3 text-whites mb-1 text-base font-bold">
                Gift
              </h3>
              <p className="gray-text fs-sm">
                Enter the redemption code to recieve gift rewards
              </p>
            </div>
          </div>
          <div
            className="col-span-6 bg-body rounded-md"
            onClick={() => navigate("/activity/DailySignIn")}
          >
            <img src={AttendanceImg} alt="" loading="lazy" />
            <div className="p-2 mb-3">
              <h3 className="heading-h3 text-whites mb-1 text-base font-bold">
                Attendance bonus
              </h3>
              <p className="gray-text fs-sm">
                The more consecutive days you sign in, the higher the reward
                will be.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=12")}
        >
          <img
            src={"https://i.ibb.co/9RZQWnR/Banner-20251209160017si3k.jpg"}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="text-lg text-whites font-medium p-2">
            INSTALL 1.1.1.1 FOR A FASTER EXPERIENCE
          </h3>
        </div>

        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=10")}
        >
          <img
            src={"https://i.ibb.co/84SM3KFm/Banner-20240708181807oxoq.jpg"}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            winstar99 Protect Yourself From Scams
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=11")}
        >
          <img
            src={bannergetData?.activity?.ban1}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            First Deposit Loss Bonus 35%
          </h3>
        </div>

        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=2")}
        >
          <img
            src={bannergetData?.activity?.ban2}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            2nd & 3rd Recharge Bonus – Get up to ₹777!
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=3")}
        >
          <img
            src={bannergetData?.activity?.ban3}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Recharge for bonus up to 4%
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=4")}
        >
          <img
            src={bannergetData?.activity?.ban4}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Loss Bonus 5%
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=5")}
        >
          <img
            src={bannergetData?.activity?.ban5}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Lottery7 Lucky Spin
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=6")}
        >
          <img
            src={bannergetData?.activity?.ban6}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Betting Rebate
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=7")}
        >
          <img
            src={bannergetData?.activity?.ban7}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            WEEKLY SLOT BETTING CHALLENGE
          </h3>
        </div>

        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/main/InvitationBonus")}
        >
          <img
            src={bannergetData?.activity?.ban8}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Player invitation reward collection
          </h3>
        </div>

        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=9")}
        >
          <img
            src={bannergetData?.activity?.ban9}
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Partner Rewards
          </h3>
        </div>
        <div
          className="bg-body mt-3 rounded-xl"
          onClick={() => navigate("/activity/ActivityDetail?id=8")}
        >
          <img
            // src={bannergetData?.activity?.ban11}
            src="https://i.ibb.co/YF8VsF0M/Banner-20250428141655wcjw.jpg
"
            alt=""
            loading="lazy"
            className="rounded-t-xl h-44 w-full"
          />
          <h3 className="heading-h3 text-whites font-bold p-2">
            Benefits of Using ARWALLET
          </h3>
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
