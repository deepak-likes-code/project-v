import { useRouter } from "next/router";
import { toast } from "react-toastify";

const YesCard = () => {
  const router = useRouter();

  const handleClick = () => {
    alert("I love you so much Hela!");
    router.push("/photos");
  };

  const showNotAvailableMessage = () => {
    toast("Gotta wait till tomorrow 😉", {
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

  return (
    <div className="flex flex-col items-center justify-center">
      <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />

      <div className=" px-4  text-center text-4xl md:text-6xl font-bold my-10">
        I love you so much Hela ❤️ 😘
      </div>

      <div className="flex flex-wrap justify-center gap-2 items-center">
        <button
          onClick={showNotAvailableMessage}
          className=" bg-rose-300 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
        >
          Here is a little something for you!
        </button>
      </div>
    </div>
  );
};

export default YesCard;
