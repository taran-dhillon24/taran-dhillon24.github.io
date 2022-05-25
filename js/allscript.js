$(window).load(function() {
	// Animate loader off screen
	$(".loader").fadeOut("slow");;
});

function display_time() {
    var x = new Date()
    var ampm = x.getHours() >= 12 ? ' PM' : ' AM';
    hours = x.getHours() % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().length == 1 ? 0 + hours.toString() : hours;

    var minutes = x.getMinutes().toString()
    minutes = minutes.length == 1 ? 0 + minutes : minutes;

    var seconds = x.getSeconds().toString()
    seconds = seconds.length == 1 ? 0 + seconds : seconds;

    var month = (x.getMonth() + 1);
    switch (month) {
        case 1: month = "Jan"
			break;
        case 2: month = "Feb"
            break;
        case 3: month = "Mar"
            break;
        case 4: month = "Apr"
            break;
        case 5: month = "May"
            break;
        case 6: month = "Jun"
            break;
        case 7: month = "Jul"
            break;
        case 8: month = "Aug"
            break;
        case 9: month = "Sep"
            break;
        case 10: month = "Oct"
            break;
        case 11: month = "Nov"
            break;
        case 12: month = "Dec"
            break;
        default:
            break;
    }

    var dt = x.getDate().toString();
    dt = dt.length == 1 ? 0 + dt : dt;

    var x1 = dt + " " + month + " " + x.getFullYear();
    x1 = x1 + " • " + hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById('time').innerHTML = x1;
    document.getElementById('year').innerHTML = x.getFullYear();
    display_time2();
}
function display_time2() {
    var refresh = 1000;
    mytime = setTimeout('display_time()', refresh)
}
display_time2()