let body = document.body;

function getc(e){
    if(e.isComposing === false && e.key.length === 1){
        document.body.textContent += e.key;
    }
}

body.addEventListener("keydown", getc);