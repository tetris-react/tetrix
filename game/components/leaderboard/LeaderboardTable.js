import moment from "moment";
import React from "react";
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
              <td>{moment.unix(Number(record.date) / 1000).utc().format("YYYY-MM-DD ~ HH:ss")}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LeaderboardTable;
