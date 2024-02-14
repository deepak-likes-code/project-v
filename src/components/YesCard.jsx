import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CountdownTimer from "./CountDownTimer";

const YesCard = () => {
  const router = useRouter();
  const [timerExpired, setTimerExpired] = useState(false);

  const handleClick = () => {
    if (timerExpired) {
      router.push("/valentines-card");
    } else {
      showNotAvailableMessage();
    }
  };

  const handleClickGift = () => {
    if (timerExpired) {
      router.push("/photos");
    } else {
      showNotAvailableMessage();
    }
  };

  const showNotAvailableMessage = () => {
    toast("Have some patience baby gworl 😉", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: "#be185d",
        color: "white",
      },
    });
  };

  const handleTimeExpire = () => {
    setTimerExpired(true);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img src="https://media.tenor.com/tLsYTSNv11IAAAAi/tkthao219-bubududu.gif" />

      <div className=" px-4  text-center text-4xl md:text-6xl font-bold my-10">
        I love you so much Hela ❤️ 😘
      </div>

      <div className="flex flex-wrap justify-center gap-2 items-center">
        <button
          onClick={handleClick}
          className=" bg-rose-300 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
        >
          Invitation 💌
        </button>
        <button
          onClick={handleClickGift}
          className=" bg-rose-300 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
        >
          Claim gift 🎁
        </button>
      </div>
      <CountdownTimer
        initialTimeInSeconds={10}
        onTimeExpire={handleTimeExpire}
      />
    </div>
  );
};

export default YesCard;
