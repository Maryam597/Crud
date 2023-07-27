const mysql = require('mysql');
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

})



// Register a new user 

const createUser = (req, res) => {
    // Utilise req.body de body.parser
   const { lastname, firstname, address, city, zipcode, email, phonenumber } = req.body;
   // Vérifier si les champs sont remplis

   if (!email || !lastname || !firstname || !address || !city || !zipcode || !phonenumber ) {
     return res.status(400).json({
        error: 'Données manquantes '
     }) 
   }

   const query = 'INSERT INTO user (email, lastname, firstname, address, city, zipcode, phonenumber) VALUES (?, ?, ?, ?, ?, ?, ?)';
   conn.query(query, [lastname, firstname, address, city, zipcode, email, phonenumber], (err) => {

    if(err) {
        console.error('Erreur lors de l\'insertion d\'un utilisateur :' + err);
        res.status(500).json({ error: 'Erreur lors de l\'insertion des données' });
    } else {
        res.status(200).json({ message: 'Utilisateur enregistré'});
    }
});
};

const deleteUser = (req, res) => {
    const query = `DELETE FROM user WHERE id = ?` // const query = `DELETE FROM user WHERE id = ?`
    
    conn.query(query,[req.params.id], (err, result) => {
        if(err) {
            console.error('Erreur lors de la récupération des données :' + err);
            res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        }
        else {
            res.status(200).json({ message: 'Utilisateur supprimé'});
        }

    })

}; 



// Get all users
const getAllUsers = (req, res) => {
    const query = 'SELECT * FROM user'; 
    conn.query(query, (err, result) => {
        if(err) {
            console.error('Erreur lors de la récupération des données :' + err);
            res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        }
        else {
            res.status(200).json(result);
        }

    })
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
};