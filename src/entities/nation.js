const { getUID } = require("../utilities");

class Nation {
  constructor({ name, isEvilEmpire = false }) {
    this.id = getUID();
    this.name = name;
    this.isEvilEmpire = isEvilEmpire;
  }
}

const createNation = (name, isEvilEmpire = false) => {
  const newNationOpts = {
    name,
    isEvilEmpire
  };
  const newNation = new Nation(newNationOpts);
  return newNation;
};

module.exports = {
  Nation,
  createNation
};