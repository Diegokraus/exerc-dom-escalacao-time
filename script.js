function addPlayer() {
  const players = document.getElementById("players-list");
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmation = confirm(
    `Deseja escalar ${name} com a camisa ${number} na posição ${position}?`
  );

  if (confirmation) {
    const player = `${name} (${number}) - ${position}`;
    const li = document.createElement("li");
    li.textContent = player;
    li.id = 'player-' + number
    players.appendChild(li);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    `Remover o jogador ${playerToRemove.innerText} ?`
  );

  if (confirmation) {
    document.getElementById("players-list").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
