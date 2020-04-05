import { gql } from 'apollo-boost';

export const REGISTER = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      username
      email
      country
      tzAbv
      tzName
    }
  }
`;

export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      message
      status
      user {
        id
        username
      }
    }
  }
`;

export const LOG_OUT = gql`
  mutation Logout {
    logout
  }
`;

export const ACTIVE_SESSION = gql`
  query CurrentUser {
    currentUser {
      id
      username
      email
      country
      tzAbv
      tzName
      records {
        id
        score
        level
        lines
        isPrivate
      }
    }
  }
`;

export const ADD_GAME_RECORD = gql`
  mutation AddGameRecord($data: AddGameRecordInput!) {
    addGameRecord(data: $data) {
      id
      score
      level
      lines
      isPrivate
      numTetris
      tetrisRate
      attackPerSecond
      attackPerMinute
      processedPerSecond
      processedPerMinute
      date
      user {
        id
        username
        email
        country
        tzAbv
        tzName
        isPrivate
      }
    }
  }
`;

export const LEADER_BOARD = gql`
  query LeaderBoard {
    leaderBoard {
      id
      score
      lines
      level
      isPrivate
      numTetris
      tetrisRate
      attackPerSecond
      attackPerMinute
      processedPerSecond
      processedPerMinute
      date
      user {
        id
        username
        email
        country
        tzAbv
        tzName
        isPrivate
      }
    }
  }
`;
