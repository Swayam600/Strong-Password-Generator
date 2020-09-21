// function to generate a strong password
function generate() {


    // password will be generated from the following characters
    var chars = 'abcdefghijklmnopqrstuvwxyzQWERTYUIOPLAKSJDJHFGMZNXBCV1234567890!@#$^%^&*()_+_[]""<>?/'
    var l = 16;


    // core function to generate password
    var string = '';
    for (var i = 0; i < l; i++) {
        var randint = Math.floor(Math.random() * chars.length);
        string += chars[randint]
    }

    // Password generated will be displayed on the input area.
    document.getElementById('password').value = string;
}

// function to copy the password to the clipboard
function copy() {

    // storing the password element in a variable
    var password = document.getElementById('password');
    password.select();
    password.setSelectionRange(0, 9999);
    document.execCommand('copy')


}