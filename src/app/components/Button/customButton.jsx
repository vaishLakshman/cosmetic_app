"use client";
const CustomButton = (props) => {
  const { text, onClick, isCart, textColor } = props;
  console.log("data", props);

  return (
    <button
      className={`border-2 border-primary rounded-3xl font-bold   ${
        !isCart ? "px-5 py-2" : "pl-3"
      } text-${
        textColor ? textColor : "black"
      } cursor-pointer hover:text-white hover:bg-primary flex items-center group font-oswald`}
      onClick={onClick}
    >
      {text}
      {isCart && (
        <div className="ml-2 border-2 border-primary rounded-full size-10 group-hover:border-white py-1">
          0
        </div>
      )}
    </button>
  );
};

export default CustomButton;
