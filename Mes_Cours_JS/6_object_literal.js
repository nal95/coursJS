//Object literal

/*
let utilisateur = {
    nom : 'Musole',
    age : 25,
    email : 'musole@gmail.com',
    location : 'DR Congo'
};

console.log(utilisateur);
*/

let utilisateur = {
    nom : 'Musole',
    age : 25,
    email : 'musole@gmail.com',
    location : 'DR Congo',
    blogs : [
        {
            titre : 'Javascript pour débutants',
            likes : 30
        },
        {
            titre : 'Kotlin pour débutants',
            likes : 70
        }
    ],
    afficherBlogs(){
        console.log('cet utilisateur a ecrit ces blogs : ');
        this.blogs.forEach(blog => {
            console.log(blog.titre, blog.likes);
        })
    }
};

console.log(utilisateur);
console.log(utilisateur.afficherBlogs());
console.log(utilisateur,utilisateur.afficherBlogs());