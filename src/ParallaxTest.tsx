import "./ParallaxTest.css";

export const ParallaxTest = () => {
  return (
    <div className="parallax">
      <div className="parallax__group" style={{ zIndex: 3 }}>
        <div className="parallax__layer parallax__layer--base" style={{ backgroundColor: "lightPink" }}>
          <div className="content">Base 1</div>
        </div>
        <div className="parallax__layer parallax__layer--back">
          <div className="content">Back 1</div>
        </div>
      </div>
      <div className="parallax__group" style={{ zIndex: 3 }}>
        <div className="parallax__layer parallax__layer--base" style={{ backgroundColor: "lightBlue" }}>
          <div className="content">Base 2</div>
        </div>
        <div className="parallax__layer parallax__layer--back">
          <div className="content">Back 2</div>
        </div>
      </div>
      <div className="parallax__group" style={{ zIndex: 4 }}>
        <div className="parallax__layer parallax__layer--fore">
          <div className="content">Fore 3</div>
        </div>
        <div className="parallax__layer parallax__layer--base" style={{ backgroundColor: "lightGreen" }}>
          <div className="content">Base 3</div>
        </div>
        <div className="parallax__layer parallax__layer--back">
          <div className="content">Back 3</div>
        </div>
      </div>
    </div>
  );
};
