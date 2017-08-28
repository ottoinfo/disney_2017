import React, { PropTypes } from 'react';
import styles from './<%= pascalEntityName %>.scss';

const <%= pascalEntityName %> = ({ children }) => {
  return (
    <div className={styles.<%= pascalEntityName %>}>
      {children}
    </div>
  );
};

<%= pascalEntityName %>.propTypes = {};

export default <%= pascalEntityName %>;
