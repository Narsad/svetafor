const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const e = document.querySelector('.e');
const f = document.querySelector('.f');

function main(){
    function start(){
        a.classList.toggle("red");
        f.classList.toggle("green");
    }
    function warning(){
        b.classList.toggle("orange");
        e.classList.toggle("orange");
    }
    function stop(){
        c.classList.toggle("green");
        d.classList.toggle("red");
    }
    start();
    setTimeout(warning, 4500);
    setTimeout(stop, 9000);
    setTimeout(warning, 9000);
    setTimeout(start, 9000);
    setTimeout(warning, 13500);
    setTimeout(stop, 18000);
}
function refresh (){
    location.reload();
}
main();
setInterval(main, 18000);
setInterval(refresh, 18000);
