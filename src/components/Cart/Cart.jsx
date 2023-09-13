/* eslint-disable react/prop-types */
const Cart = ({ selectedActors }) => {
  return (
    <div>
      <h1>Total Actor: {selectedActors.length}</h1>
      {selectedActors.map((actor, idx) => {
        return <li key={idx}>{actor.name}</li>;
      })}
    </div>
  );
};

export default Cart;
