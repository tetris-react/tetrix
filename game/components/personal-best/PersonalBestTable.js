import moment from 'moment-timezone';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Table } from './styles/PersonalBestContainer';

const PersonalBestTable = props => {
  const { session } = props;
  const { records } = props?.session?.currentUser;
  
  console.log('records', records);

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Score</th>
          <th>Lvl</th>
          <th>Tetris %</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {records.slice(0, 15).map((record, i) => {
          return (
            <tr key={i}>
              <td>{++i}</td>
              <td>{record.score}</td>
              <td>{record.level}</td>
              <td>{record.tetrisRate}</td>
              <td>{moment(record.date).format("YYYY-MM-DD HH:mm")}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
};

export default PersonalBestTable;
