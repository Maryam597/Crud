let root = document.getElementById('root')
let url = 'http://localhost:8000/all';


function fetchUsers() {
  fetch(url) //récupére l'url 
    .then(response => {     //stocker les données de l'url dans response
      console.log(response);
      response.json()  //j.son = tableau 
        .then(data => { // tableau renommé data 
          console.log(data)
          data.forEach(user => { // boucle foreach / element =  ce qui se trouve dans la data 
            console.log(user); // 

            const userTableBody = document.getElementById('userTableBody');

            // Réinitialiser le contenu du tableau
            // userTableBody.innerHTML = '';

            // Parcourir les données des utilisateurs et les ajouter au tableau
              const row = document.createElement('tr');
              userTableBody.innerHTML += `
        <td>${user.Lastname}</td>
        <td>${user.Firstname}</td>
        <td>${user.Address}</td>
        <td>${user.Zipcode}</td>
        <td>${user.City}</td>
        <td>${user.Phonenumber}</td>
        <td>${user.Email}</td>


        <td> <button id="${user.id}" type="button" name="add" class="updatebtn" data-target="#modale3" > <i class="fa-solid fa-pen" style="color: #7e99c8;"></i></button></td>      
        <td><button id="${user.id}" type="button" class="btndelete"><i class="fa-solid fa-trash"></i></button></td>
        `
      
      
      
      })
              // Ajouter la ligne au tableau
              // userTableBody.appendChild(row);
            


              var modale3 = document.getElementById("modale3");
              const updatebtn = document.querySelectorAll('.updatebtn')


              updatebtn.forEach(element => {

                element.addEventListener('click', (e) => {
                  modale3.style.display = "block";



                })

                onclick = function () {
                  modale3.style.display = "block";
                }
                

                window.onclick = function (event) {
                  if (event.target == modale3) {
                    modale3.style.display = "none";
                  }}
                  
                const span3 = document.querySelectorAll('.close')[0];
                span3.addEventListener('click', (e) => {
                  modale3.style.display = "none";
                })
              })           
          
              






            var modal2 = document.getElementById("modal2");
            const btndelete = document.querySelectorAll('.btndelete')
            btndelete.forEach(element => {
              element.addEventListener('click', (e) => {
                modal2.style.display = "block";

                onclick = function () {
                  modal2.style.display = "block";
                }
                const id = element.id
                console.log(id);
                modal2.dataset.id = id


                const span = document.querySelectorAll('.close')[0];
                span.addEventListener('click', (e) => {
                  modal2.style.display = "none";
                })

                window.onclick = function (event) {
                  if (event.target == modal2) {
                    modal2.style.display = "none";
                  }
                }
              })


            });

            let yes = document.getElementById('yes')
              yes.addEventListener('click', () => {

                const id = modal2.dataset.id


                fetch(`http://localhost:8000/user/${id}`, {
                  method: "DELETE",
                })
  
                  .then(response => response.json())
                  .then(data => {
                    console.log('supprimé', data);
  
  
                  }
                  )
                  window.location.reload()

  
                  // .catch(error => {
                  //   console.error('erreur', error);
                  // });
              
  
  
              })
          
        })
    }
    )
    .catch(error => console.error(error));
}


fetchUsers()


var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal
const btn = document.getElementById('myBtn')
btn.addEventListener('click', (e) => {
  modal.style.display = "block";
})

onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
const span = document.querySelectorAll(".close")[0];
span.addEventListener('click', (e) => {
  modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





const form = document.getElementById('form')

const btnregister = document.getElementById('registerbtn')
form.addEventListener('submit', (event) => {
  event.preventDefault();


  const lastname = document.getElementById('lastname').value
  const firstname = document.getElementById('firstname').value
  const address = document.getElementById('address').value
  const zipcode = document.getElementById('zipcode').value
  const city = document.getElementById('city').value
  const phonenumber = document.getElementById('phonenumber').value
  const email = document.getElementById('email').value
  console.log(lastname);

  const newuser = {
    lastname,
    firstname,
    address,
    zipcode,
    city,
    phonenumber,
    email,
  }
  console.log(newuser)
  // exécute la requête : create user dans user controller
  const response = fetch("http://localhost:8000/register", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },

    // JSON.stringify () transforme en chaîne de caractères JSON l'objet transmis en paramètre. On peut ensuite stocker cette chaîne avec localStorage.
    body: JSON.stringify(newuser),

  })
  form.reset()

  window.location.reload()
});





var modale3 = document.getElementById("modale3");


// const form2 = document.getElementById('form2');
// form2.element["Nom"].value = user.Lastname;
// form2.element["Prénom"].value = user.Firstname;
// form2.element["Adresse"].value = user.Address;
// form2.element["Code Postal"].value = user.Zipcode;
// form2.element["Ville"].value = user.City;
// form2.element["Téléphone"].value = user.Phonenumber;
// form2.element["Email"].value = user.Email;

// const userId = user.id;
// form2.dataset.userId = userId;





// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id)
//   const {  lastname, firstname, address, city, zipcode, email, phonenumber } = request.body
// }


// let update = document.getElementById('update')
// update.addEventListener('click', () => {

//   const id = modale3.dataset.id

// fetch(`http://localhost:8000/user/${id}`, {
//     method: "GET",
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('modifié', data);
//     })

//     const form2 = document.getElementById('form2')

// const updatebtn = document.getElementById('updatebtn')
// form2.addEventListener('submit', (event) => {
//   event.preventDefault();


//   const lastname = document.getElementById('lastname').data
//   const firstname = document.getElementById('firstname').data
//   const address = document.getElementById('address').data
//   const zipcode = document.getElementById('zipcode').data
//   const city = document.getElementById('city').data
//   const email = document.getElementById('email').data
//   const phonenumber = document.getElementById('phonenumber').data
//   console.log(lastname);

//   const updatedUser = {
//     lastname,
//     firstname,
//     address,
//     zipcode,
//     city,
//     phonenumber,
//     email,
//   }
//   console.log(updateUser)
//   // exécute la requête : create user dans user controller
//   const response = fetch("http://localhost:8000/register", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },

//     // JSON.stringify () transforme en chaîne de caractères JSON l'objet transmis en paramètre. On peut ensuite stocker cette chaîne avec localStorage.
//     body: JSON.stringify(newuser),
//   })
//   })

//     window.location.reload()
// })







// headers: {
//   "content-type": "application/json",



// function updateUser(id){
// fetch((`http://localhost:8000/user/${id}`, {
//   method: "PUT",

// })

// .then(response => response.json())
// .then(data => {
//   console.log('modifié', data);


//    fetchUsers()


// })
// )}

// const updatebtn = document.getElementById('updatebtn')
// updatebtn.addEventListener('click', (event) => {
//   modal.style.display = "block";

// })



// const form2 = document.getElementById('form')
// form2.addEventListener('submit', (event) => {
//   event.preventDefault();


//   const lastname = document.getElementById('lastname').value
//   const firstname = document.getElementById('firstname').value
//   const address = document.getElementById('address').value
//   const zipcode = document.getElementById('zipcode').value
//   const city = document.getElementById('city').value
//   const phonenumber = document.getElementById('phonenumber').value
//   const email = document.getElementById('email').value
//   console.log(lastname);

//   const updatedUser = {
//     lastname,
//     firstname,
//     address,
//     zipcode,
//     city,
//     phonenumber,
//     email,
//   }
// }
// )
// ;



function openEditUserModal(event){
const userId = event.id;


fetch(`http://localhost:5500/user/${id}`)
.then ((response) => response.json())
.then((data) => {

  const user = data[0]; // chercher un user dans un tableau


  //vérifier si données du user sont définies
  if (
    user &&
    user.lastname &&
    user.firstname &&
    user.address &&
    user.zipcode &&
    user.city &&
    user.phonenumber && 
    user.email 
  ) {
document.getElementById('lastname2').value = user.lastname;
document.getElementById('firstname2').value = user.firstname;
document.getElementById('address2').value = user.address;
document.getElementById('zipcode2').value = user.zipcode;
document.getElementById('city2').value = user.city;
document.getElementById('phonenumber2').value = user.phonenumber;
document.getElementById('email2').value = user.email;
console.log(user);

const id = user.id;
document.getElementById('update').id = id;


}

  else {
    console.error("erreur dans modification");
  }
})
  .catch((error) => {
    console.error("Erreur lors de la récupération des données de l'utilisateur:", error);
});
  
}

