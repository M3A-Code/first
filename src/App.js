function App() {
  return (
    <>
    <header>
      <h1>JavaScript</h1>
      <h1>Age Calculator</h1>
    </header>
    <div className="info-box">
      <input type="date" name="" id="date" />
      <button id="btn">Calculate</button>
    </div>
    <p id="text-value" />
  </>
  );
}

let date = document.getElementById("date");
let calcBtn = document.getElementById("btn");
let textValue = document.querySelector("#text-value")

date.max = new Date().toISOString().split("T")[0];

calcBtn.onclick = function () {
    let birth = new Date(date.value);
    let yb = birth.getFullYear();
    let mb = birth.getMonth() + 1;
    let db = birth.getDate();

    let today = new Date();
    let yn = today.getFullYear();
    let mn = today.getMonth() + 1;
    let dn = today.getDate();

    let yf, mf, df;

    yf = yn - yb;

    if (mn >= mb) {
        mf = mn - mb;
    } else {
        yf--;
        mf = 12 + (mn - mb);
    }

    if (dn >= db) {
        df = dn - db;
    } else {
        mf--;
        df = getDaysFromMY(yb, mb) + dn - db;
    }

    if (mf < 0) {
        mf = 11;
        yf--;
    }
    textValue.innerHTML = `You are <span>${yf}</span> years, <span>${mf}</span> months and <span>${df}</span> days old `;
}

function getDaysFromMY(year, month) {
    return new Date(year, month, 0).getDate(); // number of days in this month  in this year
}


export default App;
