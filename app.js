var scoers ,roundscore , activeplayer;

  scoers = [0,0]
  roundscore = 0
  activeplayer = 1
  // document.querySelector('#current-' +activeplayer).textContent =dice
// document.querySelector('#current-'+activeplayer).innerHTML='<em>' +dice+'</em>'

// var x=document.querySelector('#score-0').textContent


document.querySelector('.dice').style.display='none'

document.getElementById('score-0').textContent ='0'
document.getElementById('score-1').textContent ='0'
document.getElementById('current-0').textContent ='0'
document.getElementById('current-1').textContent ='0'


document.querySelector('.btn-roll').addEventListener('click',function () {
   //1.Random number
  var dice=Math.floor(Math.random()*6)+1
   //2.Display the result

   var diceDOM=document.querySelector('.dice')
    diceDOM.style.display='block'
   diceDOM.src='dice-'+dice+'.png'

})

