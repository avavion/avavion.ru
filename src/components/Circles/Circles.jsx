import Circle from "./Circle";

const COLORS_MATRIX = [
  ["#FF67F7", "#FF67F7", "#FF67F7", "#FF67F7", "#FF67F7"],
  ["#936DF9", "#936DF9", "#936DF9", "#936DF9", "#936DF9"],
  ["#59ABF7", "#59ABF7", "#59ABF7", "#59ABF7", "#59ABF7"],
  ["#5EDDAC", "#5EDDAC", "#5EDDAC", "#5EDDAC", "#5EDDAC"],
  ["#F6CD5D", "#F6CD5D", "#F6CD5D", "#F6CD5D", "#F6CD5D"],
];

const CIRCLE_SIZE = 48;

const Circles = () => {
  return (
    <div
      className='circles'
      style={{
        gridTemplateColumns: `repeat(${COLORS_MATRIX.length}, ${CIRCLE_SIZE}px)`,
        gridTemplateRows: `repeat(${COLORS_MATRIX.length}, ${CIRCLE_SIZE}px)`,
        gap: CIRCLE_SIZE / 2,
      }}
    >
      {COLORS_MATRIX.map((colors, parentIndex) => {
        return colors.map((color, index) => {
          return (
            <Circle
              size={CIRCLE_SIZE}
              color={color}
              key={`${parentIndex}${index}`}
            />
          );
        });
      })}
    </div>
  );
};

export default Circles;
