function getRandomDuck() {
    var random = Math.floor(Math.random() * 279);
    var url = "https://random-d.uk/api/" + random + ".jpg";
    var duck = document.getElementById("duck");
    duck.src = url;
}