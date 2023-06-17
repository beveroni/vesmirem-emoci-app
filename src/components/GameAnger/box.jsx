import React, { memo } from 'react';
import { ItemTypes } from './ItemTypes';
import { useDrag } from 'react-dnd';
const style = {
  cursor: 'move',
};
export const Box = ({ name, type, isDropped }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const getShadowStyle = () => {
    switch (type) {
      case 'food':
        return 'drop-shadow(0 0 5px rgba(0, 255, 0, 0.5))';
      case 'paper':
        return 'drop-shadow(0 0 5px rgba(0, 0, 255, 0.5))';
      case 'glass':
        return 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))';
      case 'pet':
        return 'drop-shadow(0 0 5px rgba(255, 255, 0, 0.5))';
      default:
        return '';
    }
  };

  const opacity = isDragging ? 0.9 : 1;
  const shadowStyle = getShadowStyle();

  return (
    <div
      ref={drag}
      style={{ opacity, filter: shadowStyle, display: 'inline-flex'}}
      className="trash__container"
    >
      {isDropped ? null : (
        <img src={`/img/${name}.svg`} alt="" className="trash" />
      )}
    </div>
  );
};
