import React, { PropTypes } from 'react';
import styles from './<%= pascalEntityName %>.scss';

const <%= pascalEntityName %> = ({}) => (
  <div className={styles.<%= pascalEntityName %>}>
    <%= pascalEntityName %>
  </div>
);

<%= pascalEntityName %>.propTypes = {};

export default <%= pascalEntityName %>;
