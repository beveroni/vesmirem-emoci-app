import React, { memo } from 'react';
import { ItemTypes } from './ItemTypes';
import { useDrop } from 'react-dnd';

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
    [ItemTypes.OTHER]: '#808080',
    [ItemTypes.PET]: 'yellow',
  };

  const isActive = isOver && canDrop;
  const backgroundColor = isActive
    ? `${colorMap[accept] || 'none'} url(/img/popelnice_${accept}.svg)`
    : 'none';

  const style = {
    padding: '1rem',
    textAlign: 'center',
    backgroundSize: 'contain',
    display: 'inline-block',
  };

  return (
    <div
      className="dustbin__container"
      ref={drop}
      style={{ ...style, backgroundColor, pointerEvents: isActive ? 'none' : 'auto' }}
      data-testid="dustbin"
    >
      {isActive && <p>✅</p>}
      <img src={`/img/popelnice_${accept}.svg`} alt="" className="trashbin" />
     
      </div>
  );
});
