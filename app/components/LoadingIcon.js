import React, { useEffect } from "react";

function LoadingIcon() {
  return (
    <>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default LoadingIcon;
