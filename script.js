
$(document).ready(function () {
    $("#encrypt").click(function (e) {
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
        var text = $("#text").val();
        var outputmsg = rot13encrypt(text.toLowerCase());
        $("#output").html(outputmsg);
    })
})

$(document).ready(function () {
    $("#decrypt").click(function (e) {
        e.preventDefault()
        function rot13decrypt(str) {
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
        var text = $("#text").val();
        var outputmsg = rot13decrypt(text.toLowerCase());
        $("#output").html(outputmsg);
    })
})

