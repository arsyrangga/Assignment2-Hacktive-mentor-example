import "./App.css";
import { Component, useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=eadb543f8b504b939f3b7c19c2a5211c&format=json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div
      className="table-responsive d-flex p-5"
      style={{
        display: "flex",
        height: "100vh",
        background: "url('https://picsum.photos/seed/324/1200')",
        backgroundSize: "cover",
      }}
    >
      <table border={1} className="table table-dark">
        <thead>
          <tr>
            <th
              scope="col"
              className="text-center"
              style={{ borderLeft: "2px solid white" }}
            >
              Currency
            </th>
            <th scope="col" className="text-center">
              We Buy
            </th>
            <th scope="col" className="text-center">
              Exchange Rate
            </th>
            <th scope="col" className="text-center">
              We Sell
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data?.rates || {})?.map((e, i) => {
            return (
              <tr>
                <td
                  key={i}
                  className="px-5 text-center"
                  style={{ borderLeft: "2px solid white" }}
                >
                  {e}
                </td>
                <td key={i} className="px-5 text-center">
                  {data?.rates[e] * 1.05}
                </td>
                <td key={i} className="px-5 text-center">
                  {data?.rates[e]}
                </td>
                <td key={i} className="px-5 text-center">
                  {data?.rates[e] * 0.95}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
