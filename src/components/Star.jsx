import React from "react";
import { FaStar } from "react-icons/fa";
import { Outlet } from "react-router-dom";

class Star extends React.Component {
  render() {
    return (
      <>
        {this.props.rating == null ? (
          <small className="text-muted">No rating yet</small>
        ) : (
          <>
            {[...Array(this.props.rating)].map((star) => {
              return <FaStar className="text-warning" />;
            })}
            {[...Array(5 - this.props.rating)].map((star) => {
              return <FaStar className="text-muted" />;
            })}
          </>
        )}
        <Outlet />
      </>
    );
  }
}

export default Star;
