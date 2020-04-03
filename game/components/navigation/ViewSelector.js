import React, { useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ACTIVE_SESSION } from '../../../queries';
import {
  Option,
  Options,
  Select,
  Selection,
  SelectionContainer
} from '../../styles';

const ViewSelector = props => {
  const { session } = props;
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState('Statistics');
  const [view, setView] = useState('statistics');

  const toggleMenu = e => {
    setOpen(open => !open);
  };

  const handleSelection = e => {
    setView(e.target.value);
    setSelection(e.target.firstChild.textContent);
    setOpen(false);
  };

  return (
    <SelectionContainer>
      <Select onClick={toggleMenu}>
        <Selection>
          {selection}
          <ArrowDropDownIcon />
        </Selection>
      </Select>
      <Options isOpen={open}>
        {selection !== 'Statistics' &&
          <Option
            value="statistics"
            name="Statistics"
            onClick={handleSelection}
          >
            Statistics
          </Option>}
        {selection !== 'Leaderboard' &&
          <Option
            value="leader-board"
            name="Leaderboard"
            onClick={handleSelection}
          >
            Leaderboard
          </Option>}
        {selection !== 'Personal Board' &&
          session &&
          <Option
            value="personal-board"
            name="Personal Board"
            onClick={handleSelection}
          >
            Personal Board
          </Option>}
      </Options>
    </SelectionContainer>
  );
};

export default ViewSelector;
