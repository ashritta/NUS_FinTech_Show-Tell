
$(document).ready(function () {
    $("#encrypt").click(function (e) {
        e.preventDefault()
        function rot13encrypt(form) {
            var newstr = "";
            for (var i = 0; i < form.length; i++) {
                var charCode = form.charCodeAt(i);
                if (charCode > 96 && charCode < 110) {
                    newstr += String.fromCharCode(charCode + 13);
                }
                else if (charCode > 109 && charCode < 123) {
                    newstr += String.fromCharCode(charCode - 13);
                }
                else {
                    newstr += form[i];
                }
            }
            return newstr;
        }
        var text = $("#text").val();
        var lowerCase = text.toLowerCase();
        var outputmsg = rot13encrypt(lowerCase);
        $("#output").html(outputmsg);
    })
})

$(document).ready(function () {
    $("#decrypt").click(function (e) {
        e.preventDefault()
        function rot13decrypt(form) {
            var newstr = "";
            for (var i = 0; i < form.length; i++) { //iterates through characters in str
                var charCode = form.charCodeAt(i); // sets new var charCode to each character in str
                if (charCode > 96 && charCode < 110) { // if the character is in first 13 of alpha
                    newstr += String.fromCharCode(charCode - 13); // set newstr equal to the character + 13
                }
                else if (charCode > 109 && charCode < 123) { // if the character is in last 13 of alpha
                    newstr += String.fromCharCode(charCode + 13);
                }
                else {
                    newstr += form[i];
                }
            }
            return newstr;
        }
        var text = $("#text").val();
        var lowerCase = text.toLowerCase();
        var outputmsg = rot13decrypt(lowerCase);
        $("#output").html(outputmsg);
    })
})

