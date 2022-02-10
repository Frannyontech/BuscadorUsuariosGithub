//init github
const github = new Github;

//UI
const ui = new UI

//Search Input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if (userText !== ''){
        //http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //alert

                ui.showAlert('User not found', 'alert alert-danger')
            }else {
                //profile
                ui.showProfile(data.profile);
            }
        })
    } else {
        //clear profile
        ui.clearProfile();
    }
});