import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRouter = ( {component: Component, ...anotherProps} ) => {
    return (
      <Route
        {...anotherProps}
        render={
          (props) => localStorage.getItem('token')
            ?  <Component {...props}/>
            :  <Redirect to={'/auth'}/>
        }
      />
    )
}
