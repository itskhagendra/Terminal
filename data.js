function dict_parser(dict){
    let resultDOM = "<table>"
    for( data in dict){
        resultDOM = resultDOM+"<tr><td>"+data+"</td><td>"+dict[data]+"</td></tr>"
    }
    resultDOM = resultDOM+"</table>"

    return resultDOM
}

let personal_info = {
    'Full Name' : 'Khagendra Kumar',
    'D.O.B': '17-09-1996',
    'Email': 'itskhagendra@hotmail.com',
    'Willing To relocate':'YES',
    'Location': 'Chennai',
    'Relationship': 'None'
}
let skills = {
    'Languages': 'Python, C, C++, C#, Kotlin, JavaScript, PHP, Java',
    'Data Science' : 'Python Libraries: Keras,Py-torch,Dlib,YOLO',
    'Full Stack': 'HTML, CSS, Js, Jquery, NodeJs, MongoDB,Express',
    'Android Development': 'Kotlin (Preffered), Java, AndroidX',
    'Game Development': 'Unity',
}

const commands_disc = ['help', 'about', 'version', 'clear', 'personal_Info','skills'];










