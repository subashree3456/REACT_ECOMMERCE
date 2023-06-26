export default function AddCard({ cart, removeFromCard }) {
  return (
    <>
      {cart.length === 0 ? (
        <div>
          <h3>No Items In Card</h3>
        </div>
      ) : (
        <div className="row">
          <ol className="list-group list-group-numbered">
            {cart.map((element) => (
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{element.Product}</div>
                  <h5>Price:${element.Price}</h5>
                  <p>over All Rating: {element.rateing}</p>
                </div>
                <span className="badge bg-primary">
                  <button onClick={() => removeFromCard(element)}>x</button>
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}


// ...........
