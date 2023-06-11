import React, { memo } from 'react';
import { useDrop } from 'react-dnd';
const style = {
  // height: '12rem',
  // width: '12rem',
  // marginRight: '1.5rem',
  // marginBottom: '1.5rem',
  // color: 'white',
  padding: '1rem',
  textAlign: 'center',
  // fontSize: '1rem',
  // lineHeight: 'normal',
  float: 'left',
};
export const Dustbin = memo(function Dustbin({
  accept,
  lastDroppedItem,
  onDrop,
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  let backgroundColor = 'none';
  if (isActive) {
    backgroundColor = 'none';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (
    <div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
      <img src={`/img/popelnice_${accept}.svg`} alt="" className="trashbin" />
    </div>
  );
});
