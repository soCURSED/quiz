import React from "react";
import { useHistory } from "react-router";
const First = () => {
  const takeMeToThisPage = useHistory();
  const yesBTN = () => {
    takeMeToThisPage.push("/homes");
  };
  const noBTN = () => {
    takeMeToThisPage.push("/bye");
  };
  return (
    <>
      <h1>Are you ready to take a quiz?</h1>
      <div className="ready">
        <button onClick={yesBTN} type="button" className="btn btn-info ">
          YES
        </button>
        <button onClick={noBTN} type="button" className="btn btn-danger ">
          NO
        </button>
      </div>
    </>
  );
};

export default First;
