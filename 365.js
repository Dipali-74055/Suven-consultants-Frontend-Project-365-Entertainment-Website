  $(".dropdown-content a").click(function () {
    var icon_text = $(this).html();
    $(".dropbtn").html(icon_text);
  });


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  }

  var currentGenre = "Genre";
  var movieTitle;


 /* function showNoResultsText(totalcount) {

    if (totalcount == 1) {
      document.getElementById("no-results").style.display = "block";
      console.log('totalcount in showNoResultsText' + totalcount);
    } else {
      document.getElementById("no-results").style.display = "none";
    }
  
  }*/


  function getMediaPosters(selectedGenre) {
    var countMovies = 0;
    var mediaCarousel;
    currentGenre = selectedGenre;
    document.getElementsByClassName("dropbtn").innerHTML = selectedGenre;
  
    if (selectedGenre == 'All') {
      document.getElementsByClassName('movies-action')[0].style.display = "flex";
      document.getElementsByClassName('movies-drama')[0].style.display = "flex";
      document.getElementsByClassName('movies-scifi')[0].style.display = "flex";
      mediaCarousel = document.getElementsByid("media-holder-action");
    }
    if (selectedGenre == 'Action') {
      document.getElementsByClassName('movies-action')[0].style.display = "flex";
      document.getElementsByClassName('movies-drama')[0].style.display = "none";
      document.getElementsByClassName('movies-scifi')[0].style.display = "none";
      mediaCarousel = document.getElementsByid('image-container-action');
    }
    if (selectedGenre == 'Drama') {
      document.getElementsByClassName('movies-action')[0].style.display = "none";
      document.getElementsByClassName('movies-drama')[0].style.display = "flex";
      document.getElementsByClassName('movies-scifi')[0].style.display = "none";
      mediaCarousel = document.getElementsByid('image-container-drama');
    }
    if (selectedGenre == 'Sci-Fi') {
      document.getElementsByClassName('movies-action')[0].style.display = "none";
      document.getElementsByClassName('movies-drama')[0].style.display = "none";
      document.getElementsByClassName('movies-scifi')[0].style.display = "flex";
      mediaCarousel = document.getElementsByid('image-container-scifi');
    }
  
  
    var mediaCarouselCount = mediaCarousel.length;
  
    for (var count = 0; count < mediaCarouselCount; count++) {
      if (mediaCarousel[count].style.display == "none")
        countMovies++;
    }
    console.log(countMovies);
  
   // showNoResultsText(countMovies);
  }
  


  
  function updateResults() {
    var query = document.getElementsByClassName('search-query')[0].value.trim().toLowerCase();
    var counter = 0;
  
    if (currentGenre == 'All' || currentGenre == 'Genre') {
      movieTitle = document.getElementsByClassName('movie-title');
    }
    if (currentGenre == 'Action') {
      movieTitle = document.getElementsByClassName('movies-action')[0].getElementsByClassName('movie-title');
    }
    if (currentGenre == 'Drama') {
      movieTitle = document.getElementsByClassName('movies-drama')[0].getElementsByClassName('movie-title');
    }
    if (currentGenre == 'Sci-Fi') {
      movieTitle = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName('movie-title');
    }
  
  
    for (var name = 0; name < movieTitle.length; name++) {
      var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();
  
      if (compareMovieTitles.indexOf(query) === -1) {
        movieTitle[name].closest('div.media-carousel').style.display = "none";
      } else {
        movieTitle[name].closest('div.media-carousel').style.display = "block";
        counter++;
      }
    }
  
    showNoResultsText(counter);
  }
  

  



