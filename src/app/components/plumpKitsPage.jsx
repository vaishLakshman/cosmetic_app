"use client";
import CustomButton from "./Button/customButton";
import PlumpCard from "./Card/plumpCard";
import img1 from "../../../public/assets/image1.webp";
import img2 from "../../../public/assets/image2.webp";
import img3 from "../../../public/assets/image3.webp";

const PlumpKits = () => {
  const Products = [
    {
      title: "The full works",
      sub_heading: "Buff,prep & plump kit",
      discount: 22,
      old_price: 54.0,
      new_price: 42.0,
      image: img1,
      alt: "lip gloss",
    },
    {
      title: "filter free",
      sub_heading: "Smooth,plump & prep kit",
      discount: 16,
      old_price: 42.0,
      new_price: 35.0,
      image: img2,
      alt: "face cream",
    },
    {
      title: "plump & fill liner bundles",
      sub_heading: "Plumping lip liner kit",
      discount: 27,
      old_price: 48.0,
      new_price: 35.0,
      image: img3,
      alt: "lip shade",
    },
    {
      title: "prep & plump",
      sub_heading: "Prime, hydrate & plump kit",
      discount: 20,
      old_price: 30.0,
      new_price: 24.0,
      image: img1,
      alt: "lip gloss",
    },
  ];

  const handleClick = () => {
    console.log("Shop all kits");
  };
  return (
    <div className="plump-container bg-orange-50 h-full px-7 py-20">
      <div className="flex justify-between mb-15 lg:mb-10">
        <h1 className="text-5xl text-primary font-oswald font-bold">
          PLUMPING KITS
        </h1>
        <CustomButton
          text={"SHOP ALL KITS"}
          onClick={handleClick}
          textColor={"primary"}
        />
      </div>
      <div className="lg:grid grid-cols-4 place-items-center">
        {Products?.map((product, index) => (
          <PlumpCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PlumpKits;
