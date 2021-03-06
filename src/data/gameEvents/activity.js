const activityTypes = {
  "harass-nuns": {
    name: "Harass Nuns",
    description: "Watch out for rulers!",
    eventType: "activity",
    effect: 0,
    min: 1,
    max: 5,
    consequenceIncident: "the-ruler"
  },
  "shakedown-nerds": {
    name: "Shakedown Nerds",
    description: "Shake down nerds for their pocket change.",
    effect: 1,
    min: 1,
    max: 5,
    consequenceIncident: "nerd-revenge"
  }
};

module.exports = {
  activityTypes
};
