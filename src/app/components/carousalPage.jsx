"use client";
import img1 from "../../../public/assets/image1.webp";
import img2 from "../../../public/assets/image2.webp";
import img3 from "../../../public/assets/image3.webp";
import DisplayCard from "./Card/displayCard";

const Carousal = () => {
  const handleClick = () => {
    console.log("Card clicked");
  };
  return (
    <div className="w-full  lg:grid grid-cols-3 place-items-center py-5 ">
      <DisplayCard
        text={"LIP"}
        img={img1}
        alt={"Lip Gloss"}
        onClick={handleClick}
      />
      <DisplayCard
        text={"FACE"}
        img={img2}
        alt={"Face cream"}
        onClick={handleClick}
      />
      <DisplayCard
        text={"KITS"}
        img={img3}
        alt={"Lip stick"}
        onClick={handleClick}
      />
    </div>
  );
};

export default Carousal;
