const Marquee = () => {
  const texts = [
    "Clinically proven to plump",
    "100% natural",
    "vegan",
    "cruelty-free",
    "certified",
    "Clinically proven to plump",
    "100% natural",
    "vegan",
    "cruelty-free",
    "certified",
  ];
  return (
    <div className="marquee-container w-full px-5 my-7">
      <div className="flex gap-3 w-fit mx-auto">
        {texts.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 w-fit items-center text-primary font-oswald font-semibold"
          >
            <h1 className="text-lg lg:text-3xl">*</h1>
            <h1 className=" text-lg lg:text-3xl lg:tracking-wider w-max">
              {item.toLocaleUpperCase()}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Marquee;
