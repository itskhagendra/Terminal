let result = "",
    pointer = 0,
    args = 0,
    user_input = [],
    current_command = [],
    coun = 0,
    status = false,
    cls = false;
const commands = ['help', 'about', 'version', 'clear', 'personal_info', 'skills','gui'];
const id = "[system@guest ~ ]",
    dir = "",
    input = document.getElementById('command'),
    log = document.getElementById('log');
const user = document.getElementById('user').innerHTML = id + dir
today = new Date()
past = new Date(2019,04,01)
experience = calcDate(today,past)
input.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        status = false
        current_command[coun] = input.value
        user_input = input.value.split(' ')
        args = user_input.splice(1, user_input.length)
        result = ""
        status = commands.includes(user_input[0])
        if (status == true && args.length <= 0) {
            switch (user_input[0]) {
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
                    result = "<p class='response'>I am a Deep Learning Engineer with "+ experience + " of Experience of working in a product-based startup in Chennai, during that I developed multiple computer vision and NLP Applications completely for production. that did help the company to gain an initial push. I am looking forward to joining a team of enthusiastic people where I can nurture my skills and help the company to grow. </p>"
                    break
                }
                case 'personal_info': {
                    result = "<p class='response'>Personal Information" + dict_parser(personal_info) + "</p>"
                    break
                }
                case 'skills': {
                    result = "<p class='response'>My skills are as follows:" + dict_parser(skills) +
                        "</p>"
                    break
                }
                case 'gui':
                    {
                        window.open("http://khagendra.ml","_blank")
                    break;
                }
                default: {
                    result = "<p class='response'>Not implemented as of now, please Try again in the next upadate</br></p>"
                    break;
                }
            }

        } else if (status == true && args.length > 0) {
            result = "<p class='error response'>" + "`" + args + "`" + ":is not a valid argument</p>"
        } else {
            result = "<p class='error response'>" + "`" + current_command[coun] + "`" + ":is not recognized as an internal or external command, operable program or batch file.</p>"
        }
        if (cls) {
            log.innerHTML = ''
            cls = false;
        } else {
            log.innerHTML = log.innerHTML + '<p><span class="root">' + id + dir + "</span> " + input.value + '</br>' + result + '</p>'

        }
        input.value = ""
        input.scrollIntoView(true);
        coun = coun + 1
        pointer = coun
        // console.log(coun)
    }
    if (event.keyCode == 38) {
        if (pointer > 0) {
            pointer = pointer - 1;
            // console.log(current_command[pointer])
            input.value = current_command[pointer]
        }
    }

})