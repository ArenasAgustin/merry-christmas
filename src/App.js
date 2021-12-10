import "./App.scss";

function App() {
  const leafArray = [3, 5, 7, 5, 7, 9, 11, 9, 11, 13, 15, 13, 15, 17, 19];

  const otherKeyframes = (index) => {
    if (index % 2 === 0) return "other-keyframe";
    if (index % 3 === 0) return "other-keyframe-2";
    else return "";
  };

  const rowCreator = (leafs) => {
    const row = [];

    for (let i = 0; i < leafs; i++) {
      row.push(<div className="tree__leaf" key={i}></div>);

      if (i !== leafs - 1) {
        row.push(
          <div
            className={`tree__led ${otherKeyframes(i)}`}
            key={i + "led"}
          ></div>
        );
      }
    }

    return row;
  };

  return (
    <div className="christmas">
      <div className="tree__container">
        <div className="tree__star"></div>

        <div className="tree__body">
          {leafArray.map((leafs, index) => {
            return (
              <div className="tree__leaf-row" key={index}>
                {rowCreator(leafs)}
              </div>
            );
          })}
        </div>

        <div className="tree__trunk"></div>
      </div>

      <div className="txt">
        <h1>Merry Christmas!</h1>
      </div>
    </div>
  );
}

export default App;
