const database = firebase.database();

document.getElementById('submit').addEventListener('click', submitForm);

document.getElementById('copy').addEventListener('click', copy);

function copy(e){
    var copyText = document.getElementById('teamkey');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied Team Key");
}    

function submitForm(e){
    e.preventDefault();

    //Get values
    var email = getValue('email');
    var startupName = getValue('startupName');
    if (document.getElementById("radioIdeation").checked){
        var stage = "Ideation";
    }else if (document.getElementById('radioMvp').checked){
        var stage = "MVP";
    }else if (document.getElementById('radioFunded').checked){
        var stage = "Venture Funded";
    }
    var teamLeaderName = getValue('teamLeaderName');
    var teamLeaderMobile = getValue('teamLeaderMobile');
    var teamLeaderEmail = getValue('teamLeaderEmail');
    var member2 = getValue('member2Name');
    var member3 = getValue('member3Name');

    if (document.getElementById("age-one").checked){
        var age = "<6months";
    }else if (document.getElementById('age-two').checked){
        var age = ">6months & <2years";
    }else if (document.getElementById('age-three').checked){
        var age = ">2years";
    }
    var pitchdeck = getValue('pitchdeck');

    const teamdetails = {
        email: email,
        startup_name : startupName,
        stage : stage,
        teamleader_name : teamLeaderName,
        teamleader_mobile : teamLeaderMobile,
        teamleader_email : teamLeaderEmail,
        member2 : member2,
        member3 : member3,
        startup_age : age,
        pitchdeck : pitchdeck
    }

    const formRef = database.ref('team-details');
    const newRef = formRef.push(teamdetails);
    const refKey = newRef.key;
    document.getElementById('teamkey').value = refKey
    document.getElementById('registration-form').classList.add('hidden');
    document.getElementById('payment').classList.remove('hidden');

}

function getValue(id){
    return document.getElementById(id).value;
}