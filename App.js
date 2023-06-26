import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./component/Card";
import AddCard from "./component/AddToCard";
import Navication from "./component/Navbar";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [datas, setDatas] = useState([
    {
      id: 1,
      Product: "Iphone",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662424194/Croma%20Assets/Communication/Mobiles/Images/234253_tumty3.png/mxw_2048,f_auto",
      Price: 90000,
      rateing: 3,
    },
    {
      id: 2,
      Product: "MacBook Pro",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663415332/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245227_0_ton7gy.png/mxw_2048,f_auto",
      Price: 100000,
      rateing: 1,
    },
    {
      id: 3,
      Product: "Iwatch",
      img: "https://m.media-amazon.com/images/I/51PHv%2B17saL._SY445_SX342_QL70_FMwebp_.jpg",
      Price: 9000,
      rateing: 4,
    },
    {
      id: 4,
      Product: "Apple AirPod",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664411406/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/251324_0_r927el.png/mxw_2048,f_auto",
      Price: 900,
      rateing: 2,
    },
    {
      id: 5,
      Product: "Redmi 10 pro",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664413447/Croma%20Assets/Communication/Mobiles/Images/253156_0_hsjusu.png/mxw_2048,f_auto",
      Price: 12000,
      rateing: 4,
    },
    {
      id: 6,
      Product: "Realme 9 pro",
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662440456/Croma%20Assets/Communication/Mobiles/Images/248828_tsl8xj.png/mxw_2048,f_auto",
      Price: 15000,
      rateing: 3,
    },
  ]);
  let addToCard = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.Price);
  };
  let removeFromCard = (item) => {
    let index = cart.findIndex((obj) => obj.id === item.id);
    cart.splice(index, 1);
    setCart([...cart]);
    setTotal(total - item.Price);
  };
  return (
    <>
      <Navication></Navication>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mt-4">
            <div className="row">
              <Card
                data={datas}
                cartItems={cart}
                handleAddtoCard={addToCard}
              ></Card>
            </div>
          </div>
          <div className=" col-lg-4 mt-4">
            <AddCard cart={cart} removeFromCard={removeFromCard}></AddCard>
            <h4>Total:$ {total}</h4>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;


// .........
