let result = "",
    current_command = "",
    status = false,
    cls = false;
const commands = ['help', 'about', 'version', 'clear', 'personal_Info'];
const id = "[system@guest ~ ]",
    dir = "",
    input = document.getElementById('command'),
    log = document.getElementById('log');
const user = document.getElementById('user').innerHTML = id + dir

let personal_info = {
    'Full Name' : 'Khagendra Kumar',
    'D.O.B': '17-09-1996',
    'Email': 'itskhagendra@hotmail.com',
    'Willing To relocate':'YES',
    'Location': 'Chennai',
    'Relationship': 'None'
}

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
                case 'clear': {
                    cls = true
                    break;
                }
                case 'about': {
                    result = "<p class='response'>I am a Deep Learning Engineer with 6+ Months of Experience of working in a product-based startup in Chennai, during that I developed multiple computer vision and NLP Applications completely for production. that did help the company to gain an initial push. I am looking forward to joining a team of enthusiastic people where I can nurture my skills and help the company to grow. </p>"
                    break
                }
                case 'personal_Info': {
                    object_size = Object.keys(personal_info).length
                    result = "<p class='response'>Personal Information<table>"

                    for( data in personal_info){
                        result = result+"<tr><td>"+data+"</td><td>"+personal_info[data]+"</td></tr>"
                    }
                    +"</table></p>"
                    break
                }
                default: {
                    result = "<p class='response'>Not implemented as of now, please Try again in the next upadate</br></p>"
                    break;
                }
            }

        } else {
            result = "<p class='error response'>" + "`" + current_command + "`" + ":is not recognized as an internal or external command, operable program or batch file.</p>"
        }
        if (cls) {
            log.innerHTML = ''
            cls = false;
        } else {
            log.innerHTML = log.innerHTML + '<p><span class="root">' + id + dir + "</span> " + input.value + '</br>' + result + '</p>'

        }
        input.value = ""
    }

})