 alert('hello world');

 let gold = 0;
 let howlingP = 0;
 let healthP = 0;


 function addGold() {
     gold = gold + 1;
     document.querySelector('#goldPouchText').innerHTML = `Gold: ${gold}`;
     if(gold > 99){
      gold = 99;
      document.querySelector('#goldPouchText').innerHTML = `Gold: ${gold}`;
     }
 }

 function add10Gold(){
     gold = gold + 10;
     document.querySelector('#goldPouchText').innerHTML = `Gold: ${gold}`;
     if (gold >= 99){
         gold = 99;
         document.querySelector('#goldPouchText').innerHTML = `Gold: ${gold}`;
     }
 }

 function resetGold() {
     gold = 0;
     document.querySelector('#goldPouchText').innerHTML = `Gold: ${gold}`;
 }

 function buyHowling() {
     gold = gold;
     const buyError1 = new Audio()
     buyError1.src = "itemError.wav";

     const buySound = new Audio()
     buySound.src = "buyshop.wav";
     

     if (gold < 15) {
          document.querySelector('#innerText').innerHTML = `You do not have enough Gold.`;
          buyError1.play();
     }else {
         gold = gold - 15;
         howlingP = howlingP + 1;
         buySound.play();
         document.querySelector('#innerText').innerHTML = `You Buy a Howling Potion.`;
         document.querySelector('#goldPouchText').innerHTML = `Gold: ${gold}`;
         document.querySelector('#myInv1').innerHTML = `Howling Potion (${howlingP})`;
       
     }
   
      
     if (howlingP >= 99){
         document.querySelector('#innerText').innerHTML = 'You have the maximum number of Howling Potions.';
         howlingP = 99;
         gold = gold + 0;
         document.querySelector('#myInv1').innerHTML = `Howling Potion (${howlingP})`;
     }
 }

 function buyHealth() {
     healthP = healthP;
     const buyError2 = new Audio()
     buyError2.src = "itemError.wav";

     const buySound2 = new Audio()
     buySound2.src = "buyshop.wav";

     if (gold < 10) {
         document.querySelector('#innerText').innerHTML = "You do not have enough Gold.";
         buyError2.play();

     }else {
         gold = gold - 10;
         healthP = healthP + 1;
         document.querySelector('#innerText').innerHTML = `You buy a Health Potion for 10 Gold.`;
         document.querySelector('#goldPouchText').innerHTML = `Gold: ${gold}`;
         document.querySelector('#myInv2').innerHTML = `Health Potion (${healthP})`;
         buySound2.play();
     }
    }

 function playBgm1(){
     const bgm1 = new Audio();
     bgm1.src = "magicShopMusic.mp3";
     bgm1.play();
    }

 
