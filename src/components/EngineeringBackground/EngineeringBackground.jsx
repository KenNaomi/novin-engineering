import "./EngineeringBackground.css";
export default function CADBackground() {
  return (
    <div className="cad-bg">

      <div className="cad-grid"></div>

      <div className="drawing-line line1"></div>
      <div className="drawing-line line2"></div>
      <div className="drawing-line line3"></div>

      <div className="dimension">
        12.50m
      </div>

      <div className="cad-info">
        PROJECT: K-001<br/>
        DRAWING: A-204<br/>
        SCALE: 1:100
      </div>

      <div className="point p1"></div>
      <div className="point p2"></div>

    </div>
  );
}