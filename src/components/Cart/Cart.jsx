/* eslint-disable react/prop-types */
const Cart = ({ selectedActors, cost, remaining }) => {
  return (
    <div>
      <h1>Total Actor: {selectedActors.length}</h1>
      <h2>Remaining ={remaining}</h2>
      <h2>Cost={cost}</h2>
      {selectedActors.map((actor, idx) => {
        return <li key={idx}>{actor.name}</li>;
      })}
    </div>
  );
};

export default Cart;
