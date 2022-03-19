const quotes =[
   {
      id: 1,
      quoteText:  "'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.'",
      autornName: ' -Samuel Beckett',
   }, 
   {
      id: 2,
      quoteText:  "'Loking for a shortcut to success? Develop pleasure from failure.'" ,
      autornName: ' -Kehinde Olubode ',

   },

   {
      id: 3,
      quoteText:  "'The dream is so big and outspace my imagination.'",
      autornName: '-Kehinde Olubode',

   },
   {
      id: 4,
      quoteText:  "'You must take action now that will move you towards your goals. Develop a sense of urgency in your life.'",
      autornName: '-H. Jackson Brown, Jr.',

   },
   {
      id: 5,
      quoteText:  "'Failure is part of success not the oppoosite, You can fail but make sure you fail forward. '",
      autornName: '-Kehinde Olubode',

   },
   {
      id: 6,
      quoteText:  "'God always strives together with those who strive.'",
      autornName:'-Aeschylus',

   },
   {
      id: 7,
      quoteText:  "'Have plans and stop living life like a nylon being directed by wind.'",
      autornName: '-Kehinde Olubode',

   },
   {
      id: 8,
      quoteText:  "'No one will exchange life for any amount of money, if life is all you got atm cherish it.'",
      autornName: '-Kehinde Olubode',

   },
   {
      id: 9,
      quoteText:  "'If you don't ask the answer will always be NO'",
      autornName: '-Kehinde Olubode',

   },
   {
      id: 10,
      quoteText:  "''",
      autornName: 'aye',

   },
   {
      id: 11,
      quoteText:  'two of the best way to start work in the mornning is by having sex',
      autornName: 'onil',

   },
   {
      id: 12,
      quoteText:  'two of the best way to start work in the mornning is by having sex',
      autornName: 'jsjs',

   },
   {
      id: 13,
      quoteText:  'two of the best way to start work in the mornning is by having sex',
      autornName: 'ODHDISHkssSISNSBSNS',

   },
]



 


const qouteText = document.querySelector(".quote-text")
const autorName = document.querySelector(".autor-name")
const btn= document.querySelector(".get-qoute")
const quote = document.querySelector(".quote")
const body = document.querySelector("body")
const play = document.querySelector(".play")
const music = document.querySelector(".mp3")



let counter = 0
let color = 0




play.addEventListener("click",function(){
   if(music.paused){
      music.play();
      
      play.innerHTML = "pause"
  }
  else{
      music.pause();

      play.innerHTML = "play"
  }

})












function pause(pauseMusic){
   music.forEach(function(){
       music.pause()
   })
   if(music.paused){
      music.play();
      
      play.innerHTML = "pause"
  }
  else{
      music.pause();

      play.innerHTML = "play"
  }
}



btn.addEventListener('click', function(){
   counter++
   if(counter > quotes.length-1){
      counter = 0;
   }
   showQuotemessages(counter)
   gco(color)


   
})

// generate random Quote function //

function showQuotemessages(messages){
   const item = quotes[counter]
   qouteText.textContent =item.quoteText;
   autorName.textContent = item.autornName;
   quote.classList.add('trans')

   body.classList.add('body-delay')
  
}

// End generate random Quote function //



// random color function //
function gco(color){
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   btn.style.backgroundColor = "#" + randomColor;
body.style.backgroundColor = "#" + randomColor;
   quote.style.color ="#" + randomColor;
}
// End random color function //



