import React, { Element } from 'react';
import { Route } from 'react-router';

type Props = {
  layout: Element<any>,
  component: Element<any>,
  props: Object,
};

const LayoutRoute = ({layout: Layout, component: Component, ...props={}}: Props) => (
    <Route 
      {...props} 
      render={(routeProps) => {
        return (
        <Layout {...props} {...routeProps}>
            <Component {...routeProps} />
        </Layout>
      )} }
    />
);

export default LayoutRoute;
