import PropTypes from 'prop-types';

Matchup.propTypes = {
  users: PropTypes.array.isRequired,
  rosters: PropTypes.array.isRequired,
  matchups: PropTypes.array.isRequired,
  format: PropTypes.string.isRequired,
};

// ! use for individual matchups and call team scores from here
export default function Matchup(props) {
  return null;
}
