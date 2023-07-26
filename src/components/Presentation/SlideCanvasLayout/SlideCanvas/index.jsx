import { styled } from "styled-components";
import Object from "../../../Object";

function SlideCanvas({
  canvasSpec,
  objects,
  pointedObject,
  pointObject,
  handleMouseDown,
}) {
  return (
    <Canvas spec={canvasSpec}>
      {objects &&
        objects.map((object) => {
          return (
            <Object
              key={object._id}
              spec={object}
              pointedObject={pointedObject}
              onObjectClick={pointObject}
              onObjectMouseDown={handleMouseDown}
            />
          );
        })}
    </Canvas>
  );
}

const Canvas = styled.div`
  position: relative;
  width: ${({ spec }) => spec.width / spec.scaleX}px;
  height: ${({ spec }) => spec.height / spec.scaleY}px;
  transform: scaleX(${({ spec }) => spec.scaleX})
    scaleY(${({ spec }) => spec.scaleY})
    translate(${({ spec }) => spec.translate});
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #222;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export default SlideCanvas;
