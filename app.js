// const elhtml = document.querySelector('nom')     celui le plus utilisé -- à précisé si c'est une classe . ID #
// const elhtml = document.getElementById('nom')      moins utilisé
// const elhtml = document.getElementsByClassName('nom')       moins utilisé

//  function presentation(){
// console.log("Test pour appeler une fonction");
// }

// // presentation()



// const titre = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', presentation)

function presentation(){
    console.log(titre)
    titre.classList.add('taille')   
}
