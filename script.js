let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');





window.addEventListener('keydown', (event)=>{
    let code = event.keyCode;
  // console.log(code);  // 69 itd itd
  let keyElement =  document.querySelector(`div[data-key="${code}"]`);

        if(!keyElement) return;


    // if(!keyElement){
    //     return;
    // }

 console.log(keyElement);

    // let audio = document.querySelector('audio[data-key="66"]');
    let audio = document.querySelector(`audio[data-key="${code}"]`);
        audio.currentTime = 0;
        audio.play();



        keyElement.classList.add('playing');
    // console.log(event);
});



