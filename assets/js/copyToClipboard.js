function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", function() {
/*     elm = document.getElementById("buttonCopy");
    if(!elm) { return; }

    btn = document.createElement("button");
    btn.textContent = ' <i class="ri-file-copy-line"></i> ';
    btn.setAttribute('id','buttonElementCopy');
    btn.addEventListener("click", function() {
        var copyText = document.getElementById("icsLink");
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(copyText.value);
    });
    elm.appendChild(btn); */

    btnnew=this.getElementById("copyButton");
    btnnew.addEventListener("click", function() {
        var copyText = document.getElementById("icsLink");
/*         copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices */
        navigator.clipboard.writeText(copyText.value);
        iconCheck = btnnew.firstChild; 
        iconCheck.setAttribute('class','ri-check-line ri-12x')
        btnnew.style.borderColor = "#238636";
        btnnew.style.backgroundColor = "white"
        btnnew.style.color = "#238636";
        sleep(2000).then(() => {
            iconCheck.setAttribute('class','ri-file-copy-line ri-12x')
            btnnew.style.borderColor = "#1b4d75";
            btnnew.style.backgroundColor = "#1b4d75"
            btnnew.style.color = "white";
        });
    });
})