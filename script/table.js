// Initial bankroll
let bankroll = 2022;

// Get bankroll value
function getBankroll() {
  return bankroll;
}

// Set bankroll value
function setBankroll(newBalance) {
  if (Number.isInteger(newBalance)) {
    bankroll = newBalance;
    updateBankrollDisplay();
  } else {
    console.error("Bankroll must be an integer.");
  }
}

// Update the bankroll display in the interface
function updateBankrollDisplay() {
  const display = document.getElementById("bankroll-display");
  if (display) {
    display.textContent = `$${getBankroll()}`;
  }
}

// Show the betting section and hide the player's actions
function timeToBet() {
  document.getElementById("playersActions")?.classList.add("hidden");
  document.getElementById("betting")?.classList.remove("hidden");
  updateBankrollDisplay();
}

// Hide the betting section and show the player's actions
function timeToPlay() {
  document.getElementById("betting")?.classList.add("hidden");
  document.getElementById("playersActions")?.classList.remove("hidden");
}

// Handle the wager submission
function makeWager() {
  const wagerInput = document.getElementById("users-wager");
  const wager = parseInt(wagerInput.value, 10);

  if (!Number.isInteger(wager) || wager <= 0) {
    console.error("Invalid wager amount.");
    return;
  }

  console.log(`Wager placed: $${wager}`);
  timeToPlay();
}