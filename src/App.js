import "./App.css";
import  {useState} from 'react';


const App =() => {

      const [price, setPrice] = useState("$19.99");
      const [price2, setPrice2] = useState("$24.99");
      const [price3, setPrice3] = useState("$39.99");
      const [isChecked, setIsChecked] = useState(true);

      const toggle = () => {
      setIsChecked(!isChecked);
      if (price === "$19.99" && price2 === "$24.99" && price3 === "$39.99") {
        setPrice("$199.99");
        setPrice2("$249.99");
        setPrice3("$399.99");
       } else {
        setPrice("$19.99");
        setPrice2("$24.99");
        setPrice3("$39.99");
      }


    }

  return (
    <div className="container">
      <h1>Our Pricing</h1>
      <div className="selector">
        <h2>Annually</h2>
        <label class="toggle">
          <input type="checkbox" onChange={toggle}></input>
          <span className="slide"></span>
        </label>
        <h2>Monthly</h2>
      </div>

      <div id="cards">
        <div className="card-left">
          <h2>Basic</h2>
          <h3 className="monthly">{price}</h3>
        
          <p>500 GB Storage</p>
          <p>2 Users Allowed</p>
          <p>Send up to 3 GB</p>
          <button>Learn More</button>
        </div>

        <div className="card-middle">
          <h2>Professional</h2>
          <h3 className="monthly">{price2}</h3>
 
          <p>1 TB Storage</p>
          <p>5 Users Allowed</p>
          <p>Send up to 10 GB</p>
          <button>Learn More</button>
        </div>

        <div className="card-right">
          <h2>Master</h2>
          <h3 className="monthly">{price3}</h3>

          <p>2 TB Storage</p>
          <p>10 Users Allowed</p>
          <p>Send up to 20 GB</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default App;
