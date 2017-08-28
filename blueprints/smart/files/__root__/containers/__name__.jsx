import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

export class <%= pascalEntityName %> extends PureComponent {

  render() {
    return (
      <p>Component</p>
    );
  }
}

<%= pascalEntityName %>.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>);
