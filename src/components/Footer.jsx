const Footer = () => {
  return (
    <div className="  h-2 w-full flex flex-col items-center justify-center mt-4">
      <a
        className="  bg-rose-50  fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
        href="https://twitter.com/0xdeepak_eth"
        target="__blank"
      >
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by Deepak
      </a>
    </div>
  );
};

export default Footer;
