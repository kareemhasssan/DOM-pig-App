var scoers, roundscore, activeplayer;


// document.querySelector('#current-' +activeplayer).textContent =dice
// document.querySelector('#current-'+activeplayer).innerHTML='<em>' +dice+'</em>'

// var x=document.querySelector('#score-0').textContent

init()

document.querySelector(".btn-roll").addEventListener("click", function () {
  //1.Random number
  var dice = Math.floor(Math.random() * 6) + 1;
  //2.Display the result

  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";


  //3.Update
  if(dice !== 1)
  {
    roundscore+=dice
    document.querySelector('#current-' +activeplayer).textContent=roundscore
  }
  else {
       nextplayer()
  }
});


document.querySelector('.btn-hold').addEventListener('click',function() {
   //Add current score to global
  scoers[activeplayer]+=roundscore

   //Update the ui
  document.querySelector('#score-'+activeplayer).textContent=scoers[activeplayer]

  //check if win
  if (scoers[activeplayer]>=20) {
     document.querySelector('#name-'+activeplayer).textContent='Winner!'
     document.querySelector('.dice').style.display='none'
     document.querySelector('.player-'+activeplayer+'-panel').classList.add('Winner')
     document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active')
     nextplayer()
  }else {
    //next palyer
    nextplayer()
  }

})

document.querySelector('.btn-new').addEventListener('click',init)

function nextplayer() {
  activeplayer===0 ? activeplayer =1 :activeplayer=0
  roundscore=0

  document.getElementById('current-0').textContent ='0'
  document.getElementById('current-1').textContent ='0'

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('a ctive')
  // document.querySelector('.player-0-panel').classList.remove('active')
  // document.querySelector('.player-1-panel').classList.add('active')

  document.querySelector('.dice').style.display ='none'
}

function init() {
  scoers = [0, 0];
  roundscore = 0;
  activeplayer = 0;
  document.querySelector(".dice").style.display = "none"

document.getElementById("score-0").textContent = "0"
document.getElementById("score-1").textContent = "0"
document.getElementById("current-0").textContent = "0"
document.getElementById("current-1").textContent = "0"
document.getElementById('name-0').textContent='player 1'
document.getElementById('name-1').textContent='player 1'
document.querySelector('.player-0-panel').classList.remove('winner')
document.querySelector('.player-1-panel').classList.remove('winner')
document.querySelector('.player-0-panel').classList.remove('active')
document.querySelector('.player-1-panel').classList.remove('active')
document.querySelector('.player-0-panel').classList.add('active')


}