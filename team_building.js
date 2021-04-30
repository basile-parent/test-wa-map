let userOnZone = [];

WA.onEnterZone('warden', () => {
  WA.sendChatMessage("Mot de passe ?", 'Gardien');
  userOnZone.push("warden");
  console.log("WA", WA);
})

WA.onEnterZone('zoom', () => {
  WA.openTab('https://zoom.us/j/95247853169?pwd=WnFHSjAxYlhVV1RaeWwyRkhvT1Ftdz09');
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