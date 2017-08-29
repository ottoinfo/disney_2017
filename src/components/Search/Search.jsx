import React, { PropTypes } from 'react';
import styles from './Search.scss';

const Search = ({search, setSearch, clearSearch}) => (
  <div className={styles.Search}>
    <input type="text" placeholder='Search Videos' value={search} onChange={(ev) => setSearch(ev.target.value) } />
    <p onClick={() => clearSearch()}>x</p>
  </div>
);

Search.propTypes = {};

export default Search;
