let userOnZone = [];

WA.onEnterZone('warden', () => {
  WA.sendChatMessage("Mot de passe ?", 'Gardien');
  userOnZone.push("warden");
  console.log("WA", WA);
})
WA.onLeaveZone('warden', () => {
  userOnZone = userOnZone.filter(z => z !== "warden");
})

WA.onChatMessage((message => {
  if (!userOnZone.includes("warden")) {
    WA.sendChatMessage("Vous êtes trop loin, je ne vous entends pas !", 'Gardien');
    return;
  }

  switch (message) {
    case "toto":
      WA.sendChatMessage("Titi", 'Gardien');
      break;
    default:
      WA.sendChatMessage("Ce n'est pas ça", 'Gardien');
  }
}));