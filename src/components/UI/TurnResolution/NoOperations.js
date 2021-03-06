import React from "react";
import { Modal } from "../../GeneralUse/index";

const NoOperations = ({ next }) => {
  return (
    <Modal>
      <div className="bg-white w-1/4 p-4">
        <p>No Operations!</p>
        <button onClick={() => next()}>Next</button>
      </div>
    </Modal>
  );
};

export default NoOperations;
