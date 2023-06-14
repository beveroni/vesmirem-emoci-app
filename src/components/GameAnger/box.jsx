import React, { memo } from 'react';
import { useDrag } from 'react-dnd';
const style = {
  cursor: 'move',
  float: 'left',
};
export const Box = memo(function Box({ name, type, isDropped }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  );
  return (
    <div
      className="trash"
      ref={drag}
      style={{ ...style, opacity }}
      className="trash__container"
    >
      {isDropped ? null : (
        <img src={`/img/${name}.svg`} alt="" className="trash" />
      )}
    </div>
  );
});
