function listScore() {
    var scoreboard = JSON.parse(window.localStorage.getItem('scoreboard'));
    //create for loop to create elements for each score
    for (var i = 0; i < scoreboard.length; i += 1) {
        var liEl = document.createElement('li');
        liEl.textContent = scoreboard[i].initials + ' ' + scoreboard[i].score;

        var olEl = document.getElementById('scoreboard');
        olEl.appendChild(liEl);
    }
}

function clearScoreboard() {
    window.localStorage.removeItem('scoreboard');
    window.location.reload();
  }
  
  document.getElementById('clear').onclick = clearScoreboard;
  

  listScore();