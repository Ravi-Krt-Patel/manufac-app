import "./App.css";

import data from "./Assets/Wine-Data.json";
import { Mean } from "./Assets/Mean";
import { Median } from "./Assets/Median";
import { Mode } from "./Assets/Mode";

let nArr = [];
for (let i = 0; i < data.length; i++) {
  let el: any = data[i];
  let Gamma =
    (parseFloat(el.Ash) * parseFloat(el.Hue)) / parseFloat(el.Magnesium);
  nArr.push({ ...el, Gamma: Gamma });
}

const mean = Mean(data, "Flavanoids");
const median = Median(data, "Flavanoids");
const mode = Mode(data, "Flavanoids");

const meanGama = Mean(nArr, "Gamma");
const medianGama = Median(nArr, "Gamma");
const modeGama = Mode(nArr, "Gamma");

function App() {
  return (
    <div className="App">
      <h1>Flavanoids Calculation</h1>
      <table style={{ width: "80%" }}>
        <tr>
          <th>Measure</th>
          {Object.keys(mean).map((el, ind) => (
            <th key={ind}>{`Alcohol ${el}`}</th>
          ))}
        </tr>
        <tr>
          <th>Flavanoids Mean</th>
          {Object.values(mean).map((el, ind) => (
            <td key={ind}>{parseFloat(el).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <th>Flavanoids Median</th>
          {Object.values(median).map((el, ind) => (
            <td key={ind}>{parseFloat(el).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <th>Flavanoids Mode</th>
          {Object.values(mode).map((el, ind) => (
            <td key={ind}>{parseFloat(el).toFixed(3)}</td>
          ))}
        </tr>
      </table>
      <h1>Gamma Calculation</h1>
      <table style={{ width: "80%" }}>
        <tr>
          <th>Measure</th>
          {Object.keys(meanGama).map((el, ind) => (
            <th key={ind}>{`Alcohol ${el}`}</th>
          ))}
        </tr>
        <tr>
          <th>Gama Mean</th>
          {Object.values(meanGama).map((el, ind) => (
            <td key={ind}>{parseFloat(el).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <th>Gama Median</th>
          {Object.values(medianGama).map((el, ind) => (
            <td key={ind}>{parseFloat(el).toFixed(3)}</td>
          ))}
        </tr>
        <tr>
          <th>Gama Mode</th>
          {Object.values(modeGama).map((el, ind) => (
            <td key={ind}>{parseFloat(el).toFixed(3)}</td>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default App;
