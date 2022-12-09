
$("#rot13encrypt").click(function (e) {
    e.preventDefault()
    function rot13encrypt(str) {
        var newstr = "";
        for (var i = 0; i < str.length; i++) {
            var charCode = str.charCodeAt(i);
            if (charCode > 96 && charCode < 110) {
                newstr += String.fromCharCode(charCode + 13);
            }
            else if (charCode > 109 && charCode < 123) {
                newstr += String.fromCharCode(charCode - 13);
            }
            else {
                newstr += str[i];
            }
        }
        return newstr;
    }
    var text = $("#msgtext").val();
    var outputmsg = rot13encrypt(text.toLowerCase());
    $("#rot13output").html(outputmsg);
})


$("#custencrypt").click(function (e) {
    e.preventDefault()
    function custencrypt(str, num) {
        num = num % 26;
        var newstr = "";
        for (var i = 0; i < str.length; i++) {
            var charCode = str.charCodeAt(i);
            if (charCode > 96 && charCode < 110) {
                newstr += String.fromCharCode(charCode + num);
            }
            else if (charCode > 109 && charCode < 123) {
                newstr += String.fromCharCode(charCode - num);
            }
            else {
                newstr += str[i];
            }
        }
        return newstr;
    }
    var text = $("#msgtext").val();
    var shift = $("#msgshift").val();
    var outputmsg = custencrypt(text.toLowerCase(), parseInt(shift));
    $("#custoutput").html(outputmsg);
})


