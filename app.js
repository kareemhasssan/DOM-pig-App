var scoers = [0, 0],
  roundscore = 0,
  activeplayer = 1,
  dice=Math.floor(Math.random()*6)+1;
  console.log(dice)

  document.querySelector('#current-' +activeplayer).textContent =dice
// document.querySelector('#current-'+activeplayer).innerHTML='<em>' +dice+'</em>'

var x=document.querySelector('#score-0').textContent
console.log(x)

document.querySelector('.dice').style.display='none'