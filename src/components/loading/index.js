import React from "react";
import URLS from "../../util/urls.js";

const ReactLoading = React.lazy(() =>
  import(/* webpackChunkName: "ReactLoading" */ "react-loading")
);

function Loading({ message, image, width, type, maxHeight }) {
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",

        marginTop: "85px",
        minHeight: "100vh",
        width: "100%",
        padding: "0 auto",
        margin: "0 auto"
      }}
    >
      <h2 style={{ width: "100%", textAlign: "center", margin: "0 auto" }}>
        {message ? message : "Loading..."}
      </h2>
      {image ? (
        <div style={{ width: "100%", margin: "0 auto" }}>
          <img
            alt=""
            style={{
              width: "100%",
              margin: "10px auto",
              maxHeight: maxHeight ? maxHeight : "250px"
            }}
            src={`${URLS.images}/${image}.svg`}
          />
        </div>
      ) : null}
      <div style={{ width: "10%", padding: "0 auto", margin: "10% auto" }}>
        <React.Suspense fallback={null}>
          <ReactLoading
            width={width ? width : "100%"}
            height="10%"
            color="#1f2179"
            type={type ? type : "spin"}
          />
        </React.Suspense>
      </div>
    </div>
  );
}

export default Loading;
