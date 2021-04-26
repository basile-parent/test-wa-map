WA.onEnterZone('warden', () => {
  WA.sendChatMessage("Mot de passe ?", 'Gardien');
})

WA.onChatMessage((message => {
  switch (message) {
    case "toto":
      WA.sendChatMessage("Titi", 'Gardien');
      break;
    default:
      WA.sendChatMessage("Ce n'est pas ça", 'Gardien');
  }
}));