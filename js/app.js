// $('.screen').on('click', (e)=>{
//   console.log(e)
// })

let petNewName = ""

$('form').on('click', (e) => {
  e.preventDefault()
  petNewName = $('#pet-name').val()
  $('#pet-name').val("")
  $('#name').text(`${petNewName}`)
  if(e.target.id === "pet-btn"){
    setInterval( ageUp, 10000);
    setInterval(hungrySleepBored, 1000)

  }
})

const stop = () =>{
  clearInterval(time);
  clearInterval(inter)
}


class Pet {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
  }
}

const spot = new Pet(petNewName)


const morph = () => {
  $('#pic').attr('src',"images/evoPlay.gif")
}

let backGroundChange;
const $button = $('.unit')
$button.on('click', (e) => {
  if(e.target.id === "left" && spot.hunger > 0){
    spot.hunger--;
    $('#hung').text(`hunger ${spot.hunger}`)
    $('#pic').attr('src',"images/feeding.gif")
    // backGroundChange = setInterval(function(){
    //   changeBackground(e.target.id)
    // }, 1000)
  }else if(e.target.id === "center" && spot.sleepiness > 0){
    spot.sleepiness--;
    $('#sleep').text(`sleepiness ${spot.sleepiness}`)
    $('#pic').attr('src',"images/sleeping.gif")
    // backGroundChange = setInterval(function(){
    //   changeBackground(e.target.id)
    // }, 1000)
  } else if(e.target.id === "right" && spot.boredom > 0) {
    spot.boredom--;
    $('#bore').text(`boredom ${spot.boredom}`)
    $('#pic').attr('src',"images/play.gif")
    // backGroundChange = setInterval(function(){
    //   changeBackground(e.target.id)
    // }, 1000)
  }
})


const ageUp =()=>{
    spot.age = spot.age % 360 + 1;
    $('#age').text(`age: ${spot.age}`)
    if(spot.age === 5){
      morph()
    }
}

const hungrySleepBored = () => {
  spot.sleepiness = spot.sleepiness % 360 +1;
  spot.hunger = spot.hunger % 360 +1
  spot.boredom = spot.boredom % 360 +1;
  $('#sleep').text(`sleepiness: ${spot.sleepiness}`)
  $('#bore').text(`boredom: ${spot.boredom}`)
  $('#hung').text(`hunger: ${spot.hunger}`)
  if(spot.hunger === 10 || spot.boredom === 10 || spot.sleepiness === 10){
    dead()
  }
}


const dead = () => {
  $('.stats').remove()
  $('#pic').attr('src','images/dead.gif')
}

// let backTimer = 0
//
// const changeBackground = (param) =>{
//   backTimer++
//   if(backTimer === 2 && age < 5){
//     $('#pic').attr('src',"images/standing.gif")
//     backTimer = 0
//     clearInterval(backGroundChange)
//   } else if (backTimer === 2 && age > 5) {
//     $('#pic').attr('src',"images/evoPlay.gif")
//     backTimer = 0
//     clearInterval(backGroundChange)
//   }
// }
