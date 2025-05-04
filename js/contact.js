let artist = document.getElementById("artist");
let programmer = document.getElementById("programmer");

if (window.innerWidth < 600) {
    artist.src='images/artist2.png';
    programmer.src='images/programmer2.png';
    const cat = document.getElementById('cat');
    function blinkCat() {
        
        cat.src = 'images/cat1.png';
        setTimeout(function() {
          
          cat.src = 'images/cat2.png';
          setTimeout(blinkCat, 300); 
        }, 2000);
    }
    blinkCat();
} else {
    artist.src='images/artist.png';
    programmer.src='images/programmer.png';
}