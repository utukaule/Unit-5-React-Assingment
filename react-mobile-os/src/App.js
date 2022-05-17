
import "./App.css";

function App() {
  const mid = ["Services", "Projects", "About"];
  const heading = ["Mobile Operating System", "Mobile Manufacturers"]
  const osArr = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const mobArr = [{ name: "Samsung", style: "square" }, { name: "HTC", style: "square" }, { name: "Micromax", style: "disc" }, { name: "Apple", style: "circle" }];

  return (
    <div className="App">

      <div className="nav">
        <div className="logo">LOGOBAKERY</div>
        <div className="links">
          {mid.map((e) => {
            return <div className="txt">{e}</div>;
          })}
        </div>
        <button className="btn">connect</button>
      </div>



      <div className="body">


        <div className="os">
          <h1>Mobile Operating System</h1>
          {osArr.map((e) => {
            return <Skill skill={e} />;
          })}
        </div>


        <div className="mob">
          <h1>Mobile Manufacturers</h1>
          {mobArr.map((e) => {
            return (
              <li className={e.style}>{e.name}</li>
            );
          })}
        </div>




      </div>
    </div>
  );
}

//  --
function Skill(props) {
  return <li>{props.skill}</li>;
}

export default App;
