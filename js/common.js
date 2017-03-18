function hashPassword()
{

    var sha1 = CryptoJS.SHA1($("#inputPassword").val());
    $("textarea#result").val("SHA1: " + sha1.toString());

}