window.addEventListener("DOMContentLoaded", init);

function init() {
    if (window.location.href.indexOf("about") > -1) {
        console.log("about")
        getAbout();

    } else if (window.location.href.indexOf("exhibition") > -1) {
        getExhibition();
        selectCollapsible();
        startSlides();
        console.log("exhibition")

    } else if (window.location.href.indexOf("artists") > -1) {
        getArtistsPage();
        getFullArtists();
        console.log("artists")
    } else {
        startSlides();
        getHome();
        getArtists();
    }
    getPages();
}

function getPages() {
    fetch("http://aivars.dk/wordpress/wp-json/wp/v2/exhibition_page")
        .then(res => res.json())
        .then(data => {
            data.forEach(addNav)
        })
}

function addNav(oneItem) {
    const linkPage = document.createElement("a");
    linkPage.classList.add("btn");
    linkPage.textContent = oneItem.title.rendered;
    linkPage.setAttribute("href", oneItem.title.rendered + ".html")
    document.querySelector("nav").appendChild(linkPage);
}


function getHome() {

    fetch("http://aivars.dk/wordpress/wp-json/wp/v2/exhibition_page/220")
        .then(res => res.json())
        .then(home)
}

function home(data) {
    //console.log(data)

    document.querySelector(".slideshow_1").style.cssText = "background-image: url(" + data.slideshow_1.guid + ")";
    document.querySelector(".slideshow_2").style.cssText = "background-image: url(" + data.slideshow_2.guid + ")";
    document.querySelector(".slideshow_3").style.cssText = "background-image: url(" + data.slideshow_3.guid + ")";
    document.querySelector(".slideshow_4").style.cssText = "background-image: url(" + data.slideshow_4.guid + ")";
    document.querySelector(".slideshow_5").style.cssText = "background-image: url(" + data.slideshow_5.guid + ")";
    document.querySelector(".exhibition_video").src = data.video;
    document.querySelector(".exhibition_title").innerHTML = data.exhibition_title;
    document.querySelector(".exhibition_description").innerHTML = data.content.rendered;

    document.querySelector(".poster").src = data.exhibition_poster.guid;

    document.querySelector(".opening_info").innerHTML = data.opening_info;

    document.querySelector(".title_1").innerHTML = data.title_1;

    document.querySelector(".poem_1").innerHTML = data.poem_1;

    document.querySelector(".poem_2").innerHTML = data.poem_2;

    document.querySelector(".audio_1").src = data.audio_1;

    document.querySelector(".audio_2").src = data.audio_2;

}

function getArtists() {
    fetch("http://aivars.dk/wordpress/wp-json/wp/v2/artist")
        .then(res => res.json())
        .then(data => {
            data.forEach(showArtists)
        })
}

function showArtists(data) {
    //console.log(data);

    const template = document.querySelector(".artistsTemplate").content;
    const postCopy = template.cloneNode(true);

    postCopy.querySelector(".artist_name").innerHTML = data.title.rendered;

    postCopy.querySelector(".artist_image").src = data.artist_image.guid;

    postCopy.querySelector(".artist_text").innerHTML = data.content.rendered;


    document.querySelector("#block_5").appendChild(postCopy)
}

function getFullArtists() {
    fetch("http://aivars.dk/wordpress/wp-json/wp/v2/artist_full")
        .then(res => res.json())
        .then(data => {
            data.forEach(showFullArtists)
        })
}

function showFullArtists(data) {
    //console.log(data);

    const template = document.querySelector(".artistsTemplate").content;
    const postCopy = template.cloneNode(true);

    postCopy.querySelector(".artist_name").innerHTML = data.title.rendered;

    postCopy.querySelector(".artist_image").src = data.artist_image.guid;

    postCopy.querySelector(".artist_text").innerHTML = data.content.rendered;

    postCopy.querySelector(".website").href = data.website;

    document.querySelector("#block_5").appendChild(postCopy)
}

function getExhibition() {

    fetch("http://aivars.dk/wordpress/wp-json/wp/v2/exhibition_page/260")
        .then(res => res.json())
        .then(exhibition)
}

function exhibition(data) {

    //console.log(data)

    document.querySelector(".exhibition_video").src = data.video;

    document.querySelector(".exhibition_title").innerHTML = data.exhibition_title;

    document.querySelector(".exhibition_description").innerHTML = data.content.rendered;
    document.querySelector(".exhibition_description_2").innerHTML = data.exhibition_description;

    document.querySelector(".slideshow_1").style.cssText = "background-image: url(" + data.slideshow_1.guid + ")";

    document.querySelector(".slideshow_2").style.cssText = "background-image: url(" + data.slideshow_2.guid + ")";

    document.querySelector(".slideshow_3").style.cssText = "background-image: url(" + data.slideshow_3.guid + ")";

    document.querySelector(".slideshow_4").style.cssText = "background-image: url(" + data.slideshow_4.guid + ")";

    document.querySelector(".slideshow_5").style.cssText = "background-image: url(" + data.slideshow_5.guid + ")";

    document.querySelector(".plastic_title").innerHTML = data.title_1;

    document.querySelector(".collapse_1").innerHTML = data.title_2;

    document.querySelector(".collapse_2").innerHTML = data.title_3;

    document.querySelector(".story").innerHTML = data.poem_1;

    document.querySelector(".story_2").innerHTML = data.poem_2;

    document.querySelector(".story_3").innerHTML = data.poem_3;

    document.querySelector(".story_4").innerHTML = data.poem_4;

    document.querySelector(".poem_author").innerHTML = data.poem_author;

    document.querySelector(".mix_title").innerHTML = data.title_4;

    document.querySelector(".audio_1").src = data.audio_1;

    document.querySelector(".audio_2").src = data.audio_2;

}

function getArtistsPage() {

    fetch("http://aivars.dk/wordpress/wp-json/wp/v2/exhibition_page/261")
        .then(res => res.json())
        .then(artists)
}

function artists(data){

    console.log(data)

    document.querySelector(".past_of_artists").innerHTML = data.content.rendered;


    document.querySelector(".lysstof").innerHTML = data.exhibition_title;

    document.querySelector(".lysstof_desc").innerHTML = data.exhibition_description;

    document.querySelector(".exhib_video").src = data.video;

    document.querySelector(".lysstof_img").src = data.exhibition_poster.guid;

    document.querySelector(".link_to_video").href = data.video_link;

    document.querySelector(".title_author").innerHTML = data.title_4;

    document.querySelector(".poem_author").innerHTML = data.poem_author;

    document.querySelector(".image_author").src = data.image_of_author.guid;

    document.querySelector(".desc_author").innerHTML = data.desc_author;
}

function getAbout() {

    fetch("http://aivars.dk/wordpress/wp-json/wp/v2/exhibition_page/262")
        .then(res => res.json())
        .then(about)
}

function about(data){

    console.log(data)

    document.querySelector(".poster").src = data.exhibition_poster.guid;

    document.querySelector(".opening_info").innerHTML = data.opening_info;

    document.querySelector(".title_contact").innerHTML = data.title_5;

    document.querySelector(".contact_1").innerHTML = data.contact_1;

    document.querySelector(".contact_2").innerHTML = data.contact_2;

    document.querySelector(".contact_3").innerHTML = data.contact_3;
}


// automatic & manual slideshow

var slideIndex = 1;

var myTimer;

var slideshowContainer;

function startSlides(){

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () {
        plusSlides(1)
    }, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = $('#top_block, #block_6')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})}

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
        myTimer = setInterval(function () {
            plusSlides(n + 2)
        }, 4000);
    } else {
        myTimer = setInterval(function () {
            plusSlides(n + 1)
        }, 4000);
    }
}

//Controls the current slide and resets interval if needed

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        plusSlides(n + 1)
    }, 2000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        plusSlides(slideIndex)
    }, 4000);
}

// arrow scrolling

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

// appearing arrow to get to top

myID = document.getElementById("myID");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        myID.className = "bottomMenu show"
    } else {
        myID.className = "bottomMenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);

// toggles burger animation on width under 600px

function changeBurger() {
    var burger = document.querySelector(".hamburger");
    burger.classList.toggle("is-active");

    var header = document.querySelector("header");
    header.classList.toggle("change-header");

    var nav = document.querySelector("nav");
    nav.classList.toggle("change-nav");
}

// style change on collapsible when clicked

function selectCollapsible() {
    document.querySelector(".collapse_1").addEventListener("click", collapsibleChange);
    document.querySelector(".collapse_2").addEventListener("click", collapsibleChange_2);
}

function collapsibleChange() {
    var summary = document.querySelector(".collapse_1")
    summary.classList.toggle("changeSummary")
}

function collapsibleChange_2() {
    var summary_2 = document.querySelector(".collapse_2")
    summary_2.classList.toggle("changeSummary")
}
