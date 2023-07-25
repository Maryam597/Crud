let root = document.getElementById('root')
let url = 'http://localhost:8000/all';

fetch(url) //récupére l'url 
    .then(response => {     //stocker les données de l'url dans response
        console.log(response);
        response.json()  //j.son = tableau 
        .then(data => { // tableau renommé data 
            console.log(data.data)
            data.forEach(element => { // boucle foreach
                console.log(element); // element =  ce qui se trouve dans la data 
                root.innerHTML +=` 
                <div class='bloc'> 
                <p> ${element.Lastname}</p>
                <p> ${element.Firstname}</p>
                <p> ${element.Address}</p>
                <p> ${element.Zipcode}</p>
                <p> ${element.City}</p>
                <p> ${element.Phonenumber}</p>
                <p> ${element.Email}</p>
                </div>` // innerHtml --> écrire du html dans du js
            })
        })
    }
    )
    .catch(error => console.error(error));
console.log(root);


// headers vérification j.son 
// modale 