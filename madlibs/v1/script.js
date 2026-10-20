(function(){
    'use strict';

    const form = document.querySelector('form');
    const overlay = document.querySelector('#overlay');
    const story = document.querySelector('#story');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

    const a1 = document.querySelector('#answer1').value;
        const a2 = document.querySelector('#answer2').value;
        const a3 = document.querySelector('#answer3').value;
        const a4 = document.querySelector('#answer4').value;
        const a5 = document.querySelector('#answer5').value;
        const a6 = document.querySelector('#answer6').value;
        const a7 = document.querySelector('#answer7').value;
        const a8 = document.querySelector('#answer8').value;
        const a9 = document.querySelector('#answer9').value;
        const a10 = document.querySelector('#answer10').value;
    
        story.innerHTML = `This summer break, my friends and I met for a barbeque. On the day of, I brought ${a1}.`;


        overlay.classList.remove('hidden');
    });
        
        
})();