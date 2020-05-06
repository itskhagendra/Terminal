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




 // remember this is equivalent to 05 01 2019
//dates in js are counted from 0, so 04 is May

function calcDate(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;
    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    var message = "";
    //message += " was "
    //message += days + " days "
    if(years>0) 
        message += years + "+ years"

    message += months + " Months \n"

    return message
    }






