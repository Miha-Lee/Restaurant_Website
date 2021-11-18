import React from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = ({ loading }) => {
  return (
    <div className="loader">
      <RingLoader
        color={"#FFFFFF"}
        loading={loading}
        size={70}
        css={override}
      />
    </div>
  );
};

export default Loader;
