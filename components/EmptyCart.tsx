import img from "../assets/assets_images/emptyCart.svg";
function EmptyCart() {
  return (
    <>
      <div>
        <img src={img} />
        <h2>Empty Basket</h2>
        <p className="text-grey text-xs">
          You basket is still empty, browser the delicious and mouth watering
          menu from the bardeal
        </p>
        <button className="block border bg-main text-white rounded rounded-md">
          Shopping Now
        </button>
      </div>
    </>
  );
}

export default EmptyCart;
