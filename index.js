let result = "",
    current_command = "",
    status = false,
    cls = false;
const commands = [ 'help', 'info', 'version','clear'];
const id = "[system@guest ~ ]",
    dir = "",
    input = document.getElementById('command'),
    log = document.getElementById('log');
const user = document.getElementById('user').innerHTML = id + dir

input.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        status = false
        current_command = input.value
        result = ""
        status = commands.includes(input.value)
        if (status == true) {
            switch (input.value) {
                case 'help': {
                    result = "<p class='response'>COMMANDS<br>"

                    for (iterator_comm = 0; iterator_comm < commands.length; iterator_comm++) {
                        result = result + (iterator_comm + 1) + "&emsp;" + commands[iterator_comm] + "<br>"
                    }
                    break;
                }
                case 'version': {
                    result = "<p class='response'>This Web base terminal is developed by Khagendra kumar<br>Latest version of this terminal is 1.0.0"
                    break;
                }
                case 'clear':{
                    cls = true
                    break;
                }
                default: {
                    result = "<p class='response'>Not implemented as of now, please Try again in the next upadate</br></p>"
                    break;
                }
            }

        } else {
            result = "<p class='error response'>" + "`" + current_command + "`" + ":is not recognized as an internal or external command, operable program or batch file.</p>"
        }
        if(cls)
        {
            log.innerHTML=''
            cls=false;
        }
        else{
            log.innerHTML = log.innerHTML + '<p><span class="root">' + id + dir + "</span> " + input.value + '</br>' + result + '</p>'

        }
        input.value = ""
    }

})