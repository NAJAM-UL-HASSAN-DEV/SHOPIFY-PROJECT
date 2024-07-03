let btn = document.querySelector("#btn-black");
let body = document.querySelector('body')
btn.addEventListener('click', runEvent)
function runEvent(e) {
    var form = document.createElement('.form')
    form.innerHTML = ` 
    <input type="text" placeholder="Enter your name">
    <input type="email" name="email" id="email" placeholder="Enter your email">`;
    document.body.innerHTML = ``;
    body.appendChild('form')

}