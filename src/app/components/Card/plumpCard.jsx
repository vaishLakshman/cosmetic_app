import Image from "next/image";

const PlumpCard = (props) => {
  const product = props.product;

  return (
    <div className="mb-15 lg:m-0">
      <div
        className="card-container border-2 border-primary relative bg-red-300 w-[20rem] lg:w-[22rem] lg:h-fit mb-5 lg:mb-3 rounded-2xl cursor-pointer overflow-hidden"
        onClick={product.onClick}
      >
        <div className="">
          <Image src={product.image} alt={product?.alt} width="fill" />
        </div>
        <div className="absolute top-3 ml-3 text-white font-oswald bg-primary rounded-2xl ">
          {product?.discount && (
            <h1 className="font-bold text-xl px-2 py-1">{`${product?.discount}% OFF`}</h1>
          )}
        </div>
      </div>
      <div>
        <h1 className="font-oswald font-bold text-black text-2xl mb-5">
          {product?.title?.toLocaleUpperCase()}
        </h1>
        <h2 className="font-lexend font-light">{product?.sub_heading}</h2>
        <div className="price-container flex gap-3 font-lexend font-bold">
          <h2 className="current-price text-primary">{`$${product?.new_price}`}</h2>
          <h2 className="old-price text-black line-through">{`$${product?.old_price}`}</h2>
        </div>
      </div>
    </div>
  );
};

export default PlumpCard;
