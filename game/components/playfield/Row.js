import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteFilledRow } from '../../../store';
import { Cell } from './Cell';

const Row = ({ row, yCoord }) => {
  const dispatch = useDispatch();
  const { tetrad, tetradLocked } = useSelector(state => state.playfield);
  useEffect(
    () => {
      if (tetradLocked) {
        if (tetrad.getYCoords().includes(yCoord)) {
          dispatch(deleteFilledRow(yCoord));
        }
      }
    },
    [tetradLocked, tetrad, yCoord, dispatch]
  );

  return (
    <Container>
      {row.map((cell, i) =>
        <Cell
          key={i}
          isLocked={cell.isLocked}
          isActive={cell.isActive}
          color={cell.color}
          coordinate={{
            x: cell.x,
            y: cell.y
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
`;

export default Row;
