<<<<<<< HEAD
=======
// Type Writer Script

var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('qui te fait matcher avec le travail adapté à ton handicap en 24h.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();
>>>>>>> 967bd4ebe08939eb8e18e062d6f4694255895d69
