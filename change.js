


function change_all() {
    const divs = document.getElementsByTagName('div');
    const currentSurname = divs[3].innerText.trim();

    if (currentSurname === 'Ibragimova') {
        document.body.style.backgroundImage = "url('passport.png')";
        divs[3].innerText = 'Ибрагимова';
        divs[4].innerText = 'Самира';
        divs[5].innerText = 'Рустамовна';
        divs[6].innerText = 'жен.';
        divs[8].innerText = 'Казань';
        
    } else if (currentSurname === 'Ибрагимова') {
        document.body.style.backgroundImage = "url('eng_pas.png')";
        divs[3].innerText = 'Ibragimova';
        divs[4].innerText = 'Samira';
        divs[5].innerText = 'Rustamovna';
        divs[6].innerText = 'female';
        divs[8].innerText = 'Kazan';
       
    }
}





document.getElementById('changeButton').addEventListener('click', change_all);
