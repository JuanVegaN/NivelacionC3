var users_registered = [];

function addUser() {
    let user_name = document.getElementById('txt_user');
    let user_pass = document.getElementById('pwd_user');
    let user_obj = {
        'user':user_name.value,
        'pass':user_pass.value
    };
    users_registered.push(user_obj);

    user_name.value="";
    user_pass.value="";

    console.log(users_registered);
}