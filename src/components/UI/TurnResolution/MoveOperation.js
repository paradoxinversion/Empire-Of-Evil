import React, { useEffect, useContext } from "react";
import { GameDataContext } from "../../../context/GameDataContext";
import { Modal } from "../../GeneralUse/index";
const MoveOperation = ({ operationData, next }) => {
  const gameDataContext = useContext(GameDataContext);
  useEffect(() => {
    const targetTile = gameDataContext.getTileById(operationData.targetTileId);
    operationData.squads.forEach((squad) => {
      gameDataContext.setSquadLocation(targetTile.x, targetTile.y, squad.id);
    });
  }, [gameDataContext]);
  return (
    <Modal>
      <div className="bg-white w-1/4 p-4">
        <p>Moving {currentGameEvent.squads.length} squads</p>
        <button className="border px-1" onClick={() => next()}>
          Next
        </button>
      </div>
    </Modal>
  );
};

export default MoveOperation;
