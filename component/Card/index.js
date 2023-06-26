import ReactStars from "react-rating-stars-component";
export default function Card({ data, cartItems, handleAddtoCard }) {
  return (
    <>
      {data.map((element) => (
        <div className="col-md-4 mb-2">
          <div className="card " style={{ width: "16rem" }}>
            <img src={element.img} className="card-img-top" alt="..." />
            <div className="card-body m-auto">
              <h5 className="card-title">{element.Product}</h5>
              {element.rateing > 0 ? (
                <h3 className="hai">
                  <ReactStars value={element.rateing}></ReactStars>
                </h3>
              ) : (
                <p>No Rateing</p>
              )}
              <p>Price: {element.Price}</p>
              <button
                onClick={() => {
                  handleAddtoCard(element);
                }}
                disabled={cartItems.some((obj) => obj.id === element.id)}
                className="btn btn-primary"
              >
                Add to Card
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}


// ..........
