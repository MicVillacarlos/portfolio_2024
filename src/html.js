import React from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} style={{ margin: 0, padding: 0 }}>
        {props.preBodyComponents}
        <div
          key={"loader"}
          id="___loader"
          style={{
            display: "flex", // Ensure it's visible initially
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            justifyContent: "center",
            backgroundColor: "#e8e6d8",
          }}
        >
          <ReactLoading type={"balls"} color={"black"} height={"10%"} />
        </div>
        <div
          key={`body`}
          id="___gatsby"
          style={{
            display: "none", // Hidden initially
          }}
          dangerouslySetInnerHTML={{ __html: props.body }}
        />

        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
