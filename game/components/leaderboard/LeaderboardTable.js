import moment from "moment-timezone";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "./styles/LeaderboardContainer";

const LeaderboardTable = (props) => {
  const { data } = props;

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Score</th>
          <th>Lvl</th>
          <th>Tetris %</th>
          <th>Date (EDT)</th>
        </tr>
      </thead>
      <tbody>
        {data?.leaderBoard?.slice(0, 15).map((record, i) => {
          return (
            <tr key={i}>
              <td>{++i}</td>
              <td>{record?.user?.username}</td>
              <td>{record.score}</td>
              <td>{record.level}</td>
              <td>{record.tetrisRate}</td>
              <td>{moment(record.date).format("YYYY-MM-DD HH:mm")}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LeaderboardTable;
