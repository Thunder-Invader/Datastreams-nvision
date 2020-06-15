import React, { CSSProperties } from "react";


class Container extends React.Component <{title: string }>{
    render() {
      return( <> 
      <div style={{marginLeft: 200}}>
      <h1>{this.props.title}</h1>
          {this.props.children}
      </div>
      </>);
    }
  }
  export default Container;