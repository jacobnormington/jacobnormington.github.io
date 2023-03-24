const biggerbtn = document.getElementById("biggerbtn");
const moobtn = document.getElementById("moobtn");
const fancybtn = document.getElementById("fancy");
const boringbtn = document.getElementById("boring");
const txt = document.getElementById("text-input");


biggerbtn.addEventListener("click", () => {
    document.getElementById("text-input").style.fontSize = "24pt";
});

moobtn.addEventListener("click", () => {
    let str = txt.value.toUpperCase();
    let words = str.split(". ");
    for (let i = 0; i < words.length; i++)
    {
        words[i] += "-Moo";
    }
    str = words.join(". ");
    txt.value = str;
});

fancybtn.addEventListener("click", () => {
    txt.style.fontFamily = "cursive";
    txt.style.color = "blue";
    txt.style.fontWeight = "bold";
    txt.style.textDecoration = "underline";
});

boringbtn.addEventListener("click", () => {
    txt.style.fontFamily = "sans-serif";
    txt.style.color = "black";
    txt.style.fontWeight = "normal";
    txt.style.textDecoration = "none";
});