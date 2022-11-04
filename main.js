var gameData = {
    radium: 0,
    radiumPerClick: 1,
    radiumPerClickCost: 10,
    //update : 0

    pickaxeLevel: 1
}

function mineRadium() {
   gameData.radium += gameData.radiumPerClick
   document.getElementById("radiumMined").innerHTML = gameData.radium + " Radium Mined"
}

function buyRadiumPerClick() {
  if (gameData.radium >= gameData.radiumPerClickCost) {
    gameData.radium -= gameData.radiumPerClickCost
    gameData.radiumPerClick += 1
    gameData.pickaxeLevel += 1
    gameData.radiumPerClickCost *= 2
    //document.getElementById("radiumMined").innerHTML = gameData.radium + " Radium Mined"
    //document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.pickaxeLevel + ") Cost: " + gameData.radiumPerClickCost + " Radium"
    updateButtonText()
  }
}

function updateButtonText() {
  document.getElementById("radiumMined").innerHTML = gameData.radium + " Radium Mined"
  document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.pickaxeLevel + ") Cost: " + gameData.radiumPerClickCost + " Radium"   
}

var mainGameLoop = window.setInterval(function() {
    mineRadium()
}, 1000)

//var saveGameLoop = window.setInterval(function() {
//  localStorage.setItem("radiumMinerSave", JSON.stringify(gameData))
//  //gameData.update += 1
//}, 15000)

function saveGame() {
  localStorage.setItem("radiumMinerSave", JSON.stringify(gameData))
}

function loadGame() {
  var savegame = JSON.parse(localStorage.getItem("radiumMinerSave"))
  if (savegame !== null) {
    //if (savegame.update <= gameData.update) {
      gameData = savegame
      updateButtonText()
    //}
  }
}