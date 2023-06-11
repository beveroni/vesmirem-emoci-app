import update from 'immutability-helper';
import React, { memo, useCallback, useState } from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import { Box } from './box.jsx';
import { Dustbin } from './dustbin.jsx';
import { ItemTypes } from './ItemTypes.jsx';
export const Container = memo(function Container({ onFinish }) {
  const [dustbins, setDustbins] = useState([
    { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
    {
      accepts: [ItemTypes.FOOD],
      lastDroppedItem: null,
    },
    {
      accepts: [ItemTypes.PET],
      lastDroppedItem: null,
    },
    {
      accepts: [ItemTypes.PAPER],
      lastDroppedItem: null,
    },
  ]);
  const [boxes] = useState([
    { name: 'odpad_druzice', type: ItemTypes.GLASS },
    { name: 'odpad_jablko', type: ItemTypes.FOOD },
    { name: 'odpad_kelimek', type: ItemTypes.PAPER },
    { name: 'odpad_papir', type: ItemTypes.PAPER },
    { name: 'odpad_pet_lahev', type: ItemTypes.PET },
    { name: 'odpad_vesmirne_sklo', type: ItemTypes.GLASS },
    { name: 'odpad_vesmirny_odpad', type: ItemTypes.GLASS },
  ]);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      );
      console.log(droppedBoxNames.length);
      if (droppedBoxNames.length === 6) {
        onFinish();
      }
    },
    [droppedBoxNames, dustbins],
  );
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: 'hidden', clear: 'both' }}>
        {boxes.map(({ name, type }, index) => (
          <Box
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
});
