import React, { useEffect } from "react";
import { Modal } from "../../GeneralUse/index";

const MoveOperation = ({ gameManager, currentGameEvent, next }) => {
  useEffect(() => {
    const targetTile = gameManager.getTileById(currentGameEvent.targetTileId);
    currentGameEvent.squads.forEach(squad => {
      gameManager.setSquadLocation(targetTile.x, targetTile.y, squad.id);
    });
  }, [gameManager]);
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