function hashPassword()
{
    var p = $("#inputPassword").val();
    var s = $("#inputSalt").val()

    if(!s)
        var sha1 = CryptoJS.SHA1(p);
    else
        var sha1 = CryptoJS.SHA1(p + s);

    $("textarea#result").val("SHA1: " + sha1.toString());
}