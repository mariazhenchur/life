const buttonIcecreamAlignmentLeft = document.querySelector(".carousel__button_icecream_alignment--left");
const buttonIcecreamAlignmentRight = document.querySelector(".carousel__button_icecream_alignment--right");

const icecreamAlignmentSlides = [
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/Jefferson.webp" alt="Jefferson"><h3 class="alignment__title">Mark Jefferson</h3><p class="alignment__description"> </p> <p class="alignment_price"> <span> A photographer and teacher at Blackwell Academy.</p></div>',
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/David.webp" alt="David"><h3 class="alignment__title">David Madsen</h3><p class="alignment__description"></p> <p class="alignment_price"> <span>Head of security at Blackwell Academy and is also Chloe Price`s step-dad. </p></div>',
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/Joyce.webp" alt="Joyce"><h3 class="alignment__title">Joyce Price</h3><p class="alignment__description"></p> <p class="alignment_price"> <span>A waitress at the Two Whales Diner in Arcadia Bay, Chloe`s mother. </p></div>',
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/Frank.webp" alt="Frank"><h3 class="alignment__title">Frank Bowers</h3><p class="alignment__description"></p> <p class="alignment_price"> <span>A drug dealer in Arcadia Bay that lives in a trailer. </p></div>',
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/Kate.webp" alt="Kate"><h3 class="alignment__title">Kate Marsh</h3><p class="alignment__description"></p> <p class="alignment_price"> <span>Classmate at Blackwell Academy and friend of Max Caulfield. </p></div>',
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/Nathan.webp" alt="Nathan"><h3 class="alignment__title">Nathan Prescott</h3><p class="alignment__description"></p> <p class="alignment_price"> <span>A student in Blackwell Academy, a troubled son of Sean Prescott that runs Arcadia Bay.</p></div>',
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/Rachel.webp" alt="Rachel"><h3 class="alignment__title">Rachel Amber</h3><p class="alignment__description"></p> <p class="alignment_price"> <span>19-year-old missing girl and best friend of Chloe. </p></div>',
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/Warren.webp" alt="Warren"><h3 class="alignment__title">Warren Graham</h3><p class="alignment__description"></p> <p class="alignment_price"> <span>A resident of Arcadia Bay and a student attending Blackwell Academy. </p></div>',
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/Victoria.webp" alt="Victoria"><h3 class="alignment__title">Victoria Chase</h3><p class="alignment__description"></p> <p class="alignment_price"> <span>Classmate of Max Caulfield and a total bitch. </p></div>',
    '<div class="carousel__icecream_alignment"><img class="alignment__image" src="img/Juliet.jpg" alt="Juliet"><h3 class="alignment__title">Juliet</h3><p class="alignment__description"></p> <p class="alignment_price"> <span>WHAT`S MY LAST NAME? A student journalist in Blackwell Academy.</p></div>',
]

let icecreamAlignmentSlidesIdx = 0;

function icecreamAlignmenRenderSlide() {
    const icecreamAlignmentContainer = document.querySelector('.carousel__icecream_alignment_conteiner');
    icecreamAlignmentContainer.innerHTML = icecreamAlignmentSlides[icecreamAlignmentSlidesIdx];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondIcecreamAlignmentSlidesIdx = icecreamAlignmentSlidesIdx + 1 >= icecreamAlignmentSlides.length ? 0 : icecreamAlignmentSlidesIdx + 1;
        icecreamAlignmentContainer.innerHTML += icecreamAlignmentSlides[secondIcecreamAlignmentSlidesIdx];
        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdIcecreamAlignmentSlidesIdx = secondIcecreamAlignmentSlidesIdx + 1 >= icecreamAlignmentSlides.length ? 0 : secondIcecreamAlignmentSlidesIdx + 1;
            icecreamAlignmentContainer.innerHTML += icecreamAlignmentSlides[thirdIcecreamAlignmentSlidesIdx];
            if (window.matchMedia('(min-width: 1198px)').matches) {
                const fourthIcecreamAlignmentSlidesIdx = thirdIcecreamAlignmentSlidesIdx + 1 >= icecreamAlignmentSlides.length ? 0 : thirdIcecreamAlignmentSlidesIdx + 1;
                icecreamAlignmentContainer.innerHTML += icecreamAlignmentSlides[fourthIcecreamAlignmentSlidesIdx];
            }
        }
    }
}

function icecreamAlignmenNextSlide() {
    icecreamAlignmentSlidesIdx = icecreamAlignmentSlidesIdx + 1 >= icecreamAlignmentSlides.length ? 0 : icecreamAlignmentSlidesIdx + 1;
    icecreamAlignmenRenderSlide();
}

function icecreamAlignmenPrevSlide() {
    icecreamAlignmentSlidesIdx = icecreamAlignmentSlidesIdx - 1 < 0 ? icecreamAlignmentSlides.length - 1 : icecreamAlignmentSlidesIdx - 1;
    icecreamAlignmenRenderSlide();
}

icecreamAlignmenRenderSlide()

buttonIcecreamAlignmentLeft.addEventListener("click", icecreamAlignmenPrevSlide);
buttonIcecreamAlignmentRight.addEventListener("click", icecreamAlignmenNextSlide);

window.addEventListener('resize', icecreamAlignmenRenderSlide);




// $(document).ready(function () {
//     screenCheck();

//     $('.scroll-control .one').click(function () {
//         $.scrollify.move('#s-one');
//     });
//     $('.scroll-control .two').click(function () {
//         $.scrollify.move('#s-two');
//     });
//     $('.scroll-control .three').click(function () {
//         $.scrollify.move('#s-three');
//     });
//     $('.scroll-control .four').click(function () {
//         $.scrollify.move('#s-four');
//     });
//     $('.scroll-control .five').click(function () {
//         $.scrollify.move('#s-five');
//     });
//     $('.scroll-control .six').click(function () {
//         $.scrollify.move('#s-six');
//     });
//     $('.scroll-control .seven').click(function () {
//         $.scrollify.move('#s-seven');
//     });
// });

// $(window).on('resize', function () {
//     screenCheck();
// });

// function applyScroll() {
//     $.scrollify({
//         section: '.scroll',
//         sectionName: 'section-name',
//         //standardScrollElements: 'section',
//         easing: 'easeOutExpo',
//         scrollSpeed: 800,
//         offset: 0,
//         scrollbars: true,
//         setHeights: true,
//         overflowScroll: true,
//         updateHash: false,
//         touchScroll: true,
//     });
// }

// function screenCheck() {
//     var deviceAgent = navigator.userAgent.toLowerCase();
//     var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
//     if (agentID || $(window).width() <= 1024) {
//         // its mobile screen
//         $.scrollify.destroy();
//         $('section').removeClass('scroll').removeAttr('style');
//         $.scrollify.disable();
//     } else {
//         // its desktop
//         $('section').addClass('scroll');
//         applyScroll();
//         $.scrollify.enable();
//     }
// }


const Victoria = document.querySelector(".Victoria");
const Jefferson = document.querySelector(".Jefferson");
const David = document.querySelector(".David");
const Nathan = document.querySelector(".Nathan");

Victoria.addEventListener('click', function(){
    alert("WRONG!!! She is actually nice when you don't piss her off");
});

Jefferson.addEventListener('click', function(){
    alert('SUCH A FUCKING DICK OH MY GOD I WANT TO SHOVE THAT CAMERA DOWN HIS THROAT');
});

David.addEventListener('click', function(){
    alert("WRONG!!! Saved Max's ass and is a good man");
});

Nathan.addEventListener('click', function(){
    alert("WRONG!!! Still piece of shit but mentaally ill so it's okay I guess");
});




