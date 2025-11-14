const ChildCard = ({ addToCart }) => {
  console.log("Child Rendered");
  return (
    <>
      <button onClick={addToCart}>Add to Cart</button>
    </>
  );
};

export default ChildCard;
