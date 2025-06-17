import Image from "next/image";

const DisplayCard = (props) => {
  const { text, img, alt, onClick } = props;
  return (
    <div
      className="card-container relative bg-red-300 w-[20rem] lg:w-[27rem] lg:h-fit mb-10 lg:m-0 rounded-2xl cursor-pointer hover:scale-103 duration-200 ease-in-out overflow-hidden"
      onClick={onClick}
    >
      <div className="">
        <Image src={img} alt={alt} width="fill" />
      </div>
      <div className="absolute top-3 ml-3 text-white font-oswald ">
        <h1 className="font-regular text-2xl">SHOP</h1>
        <h1 className="font-bold text-5xl">{text}</h1>
      </div>
    </div>
  );
};

export default DisplayCard;
