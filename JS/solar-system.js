function solarSystem(selector) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (let i = 0; i < 1; i++) {
        
        HTML += `<div class="sun">
                      <div class="earth">
                            <div class="moon"></div> 
                      </div>                                       
                 </div>`
    }
    DOM.innerHTML +=HTML
}



export{ solarSystem }