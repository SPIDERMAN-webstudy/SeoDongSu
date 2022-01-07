import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  // console.log(coins);
  const [value, setvalue] = useState(0);
  const [values, setvalues] = useState("0");
  // const onChange = (item) => {
  //   item.preventDefualt();
  //   setvalue(item);
  // };
  const onChange = (item) => {
    setvalue(item.target.value);
  };
  // const onSubmit = (item) => {
  //   item.preventDefualt();
  // };
  const [symbol, setsymbol] = useState("%");

  const onSelect = (item) => {
    console.log(item);
    // item.preventDefualt();
    setsymbol(item.target.value.symbol);
    setvalues(item.target.value.quotes.USD.price);
    // console.log(item.target.value.quotes.USD.price);
  };
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <form>
        <input
          type="text"
          placeholder="Write your dollar..."
          onChange={onChange}
        ></input>
        <select onChange={onSelect}>
          {coins.map((item, index) => (
            <option key={index}>
              {item.name}: {value / item.quotes.USD.price}개
            </option>
          ))}
        </select>
      </form>
      <h3>{value}$</h3>
      <h3>
        {values}
        {symbol}
      </h3>
    </div>
  );
}

export default App;
