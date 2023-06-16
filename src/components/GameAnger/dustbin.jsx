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

  const shadowMap = {
    [ItemTypes.FOOD]: '0 0 10px rgba(0, 255, 0, 0.5)',
    [ItemTypes.PAPER]: '0 0 10px rgba(0, 0, 255, 0.5)',
    [ItemTypes.OTHER]: '0 0 10px rgba(128, 128, 128, 0.5)',
    [ItemTypes.PET]: '0 0 10px rgba(255, 255, 0, 0.5)',
  };

  const isActive = isOver && canDrop;
  const backgroundColor = isActive
    ? `${colorMap[accept] || 'none'} url(/img/popelnice_${accept}.svg)`
    : 'none';
  const boxShadow = isActive ? shadowMap[accept] || 'none' : 'none';

  const style = {
    padding: '3rem',
    textAlign: 'center',
    float: 'left',
    filter: isActive ? `drop-shadow(${boxShadow})` : 'none',
    backgroundSize: 'contain',
  };

  return (
    <div
      className="dustbin__container"
      ref={drop}
      style={{ ...style, backgroundColor }}
      data-testid="dustbin"
    >
      <img src={`/img/popelnice_${accept}.svg`} alt="" className="trashbin" />
      {isActive && <p>✅</p>}
    </div>
  );
});
