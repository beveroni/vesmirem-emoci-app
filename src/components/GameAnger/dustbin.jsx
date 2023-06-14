import React, { memo } from 'react';
import { ItemTypes } from './ItemTypes';
import { useDrop } from 'react-dnd';

const style = {
  padding: '1rem',
  textAlign: 'center',
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
  const colorMap = {
    [ItemTypes.FOOD]: 'green',
    [ItemTypes.PAPER]: 'blue',
    [ItemTypes.OTHER]: 'grey',
    [ItemTypes.PET]: 'yellow',
  };

  const isActive = isOver && canDrop;
  const backgroundColor = isActive ? colorMap[accept] || 'grey' : 'none';

  return (
    <div
      className="dustbin__container"
      ref={drop}
      style={{ ...style, backgroundColor }}
      data-testid="dustbin"
    >
      <img src={`/img/popelnice_${accept}.svg`} alt="" className="trashbin" />
    </div>
  );
});
