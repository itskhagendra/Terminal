const id = "[system@guest ~ ]"
const dir = "";
result = "";
const Command = document.getElementById('terminalText')
const input = document.getElementById('command');
const user = document.getElementById('user');
const log = document.getElementById('log')
user.innerHTML = id+dir;

t = Command.innerHTML;
input.addEventListener('keydown',function(event){
    if(event.key==="Enter")
    {
        log.innerHTML = log.innerHTML+'<p><span class="root">'+id+dir+"</span> &nbsp&nbsp&nbsp"+input.value+'</br>'+result+'</p>'
        console.log(input.value)
        console.log("Bakchodi Nahi")
        input.value=""
    }
})

