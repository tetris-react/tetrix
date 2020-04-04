import React from 'react';
import { useSelector } from 'react-redux';
import { I, J, L, O, S, T, Z } from '../../assets';
import { LeaderboardContainer } from './styles/LeaderboardContainer';
const Leaderboard = () => {
  const { nextTetrad } = useSelector(state => state.playfield);
  return (
    <LeaderboardContainer>
      <div>
        <span>Next Tetrad </span>
        <hr />
      </div>
      <div>
        <div>
          <span>Leaderboard</span>
        </div>
        <div className="next-tetrad">
          {nextTetrad?.type === 'T' && <T filterID="T_b" />}
          {nextTetrad?.type === 'Z' && <Z filterID="Z_b" />}
          {nextTetrad?.type === 'S' && <S filterID="S_b" />}
          {nextTetrad?.type === 'I' && <I filterID="I_b" />}
          {nextTetrad?.type === 'J' && <J filterID="J_b" />}
          {nextTetrad?.type === 'O' && <O filterID="O_b" />}
          {nextTetrad?.type === 'L' && <L filterID="L_b" />}
        </div>
      </div>
      <table>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>Score</th>
          <th>Lvl</th>
          <th>Time</th>
          <th>Tetris %</th>
          <th>Date (EDT)</th>
        </tr>
        <tr>
          <td>1</td>
          <td>lulahemon</td>
          <td>121850</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>2</td>
          <td>halophilous</td>
          <td>245791</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Cera53Ocelot</td>
          <td>23451</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Vamplate</td>
          <td>456124</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Vaudeville</td>
          <td>24154</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Psilothrum</td>
          <td>452136</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Abderian</td>
          <td>451748</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>8</td>
          <td>DerpulPiolet</td>
          <td>954126</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>9</td>
          <td>Pollent</td>
          <td>451234</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>10</td>
          <td>Hagioscope</td>
          <td>54123</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>11</td>
          <td>Orthopraxis</td>
          <td>2315</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>12</td>
          <td>Urbiculture</td>
          <td>123451</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>13</td>
          <td>Urbiculture</td>
          <td>123451</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>14</td>
          <td>Urbiculture</td>
          <td>123451</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
        <tr>
          <td>15</td>
          <td>Urbiculture</td>
          <td>123451</td>
          <td>9</td>
          <td>08:30</td>
          <td>50 %</td>
          <td>04-03-20 ~ 04:15:01</td>
        </tr>
      </table>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
