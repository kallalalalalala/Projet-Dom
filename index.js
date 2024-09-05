//gestion de la carte 
dom = document.getElementsByClassName("carte");
for (let i = 0; i < dom.length; i++) {
    let nombre = dom[i].children[2].innerHTML;
    let plus = dom[i].children[3].children[0];
    let ajout = dom[i].children[3].children[1].innerHTML;
    let moins = dom[i].children[3].children[2];
    let supprimer = dom[i].children[4].children[0];
    let like = dom[i].children[4].children[1];
    let nbr = parseInt(nombre);
    let ajouint = parseInt(ajout);
    console.log(nbr);
    console.log(plus);
    //fonction pour ajouter les articles 
    plus.addEventListener('click',function() {
        ajouint += 1;
        dom[i].children[3].children[1].innerHTML = ajouint;
        let t = (nbr * ajouint);
        dom[i].children[2].innerHTML = t;
    });
    //fonction pour diminuer les articles 
    moins.addEventListener('click',function() {
        if(ajouint > 0){
            ajouint -= 1;
            dom[i].children[3].children[1].innerHTML = ajouint;
            let t = (nbr * ajouint);
        dom[i].children[2].innerHTML = t;
        }
    });
    //fonction pour les likes 
    like.addEventListener('click', function() {
    if (like){
        like.style.color = 'red';
    }

    });
    //fonction pour supprimer les articles
    supprimer.addEventListener('click', function() {
        dom[i].style.display = 'none';
    });
};



