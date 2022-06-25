alert('Welcome! You\'re connected');

$(document).ready(function () {

    // Ripple Effect
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });



    // Progress Bar
    // const bars = document.querySelectorAll('.progress_bar');
    // bars.forEach(function (bar) {
    //     let percentage = bar.dataset.percent; //To fetch value from data-percent
    //     let tooltip = bar.children[0]; //To fetch value of their parent
    //     tooltip.innerText = percentage + '%';
    //     bar.style.width = percentage + '%'; // By Using this we can style any element in javascript
    // })

    // Counter 
    const counters = document.querySelectorAll('.counter');

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count; // by writting + with counter converts string into integer
            let step = target / 100; // to match animation speed

            //recursion function used
            let countIt = function () {
                let displayedCount = +counter.innerText;
                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step); //ceil decimal value
                    setTimeout(countIt, 1);
                } else {
                    counter.innerText = target;
                }
            }
            countIt();
        })
    }
    runCounter();

    let counterSection = document.querySelector('.counter_section');
    //IntersectionObserver not worked with the querySelectorAll()  Uncaught TypeError: Failed to execute 'observe' on 'IntersectionObserver': parameter 1 is not of type 'Element'

    let options = {
        rootMargin: '0px 0px -200px 0px'
    }
    let done = 0;
    const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter();
        }
    }, options)
    sectionObserver.observe(counterSection);

    // Image Filter    (Here we used jQuery)
    var $wrapper = $('.portfolio_wrapper');

    // Initialize isotope
    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    //To get upper links i.e. All, UI/UX Designer
    let links = document.querySelectorAll('.tabs a');
    links.forEach(link => {
        let selector = link.dataset.filter;
        link.addEventListener('click', function (e) {
            e.preventDefault();
            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            })
            e.target.classList.add('active');

        });
    })

    // Magnify Pop Up
    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enable: true
        }
    });

    // Slider
    $('.slider').slick({
        arrows: false,
        autoplay: true
    });
});


//Print Web Page Function 
function myfun() {
    window.print();
}

// Scroll Up
$('.count').counterUp({
    delay: 10,
    time: 3000
})
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



function changeTheme() {
    var icon = document.getElementById("icon");
    document.body.classList.toggle("Light-theme");
    if (document.body.classList.contains("Light-theme")) {
        icon.src = "./images/moon.png";
    } else {
        icon.src = "./images/sun.png";
    }
}

// Send Email
// function sendMail() {
//     var name1 = $('#Name').val();
//     var email = $('#Email').val();
//     var message = $('#Message').val();
//     var Body = 'Name: ' + name1 + '<br>Email: ' + email + '<br>Message: ' + message;



//     Email.send({
//         SecureToken:"df82ea14-5023-40cf-ad74-44d0a6482249",
//         To: 'divyanshu.gupta2110@gmail.com',
//         From: "divyanshubuddy.2000@gmail.com",
//         Subject: "New Enquery on Your CV From: " + name1,
//         Body: Body
//     }).then(
//         message => {
//             if (message == 'OK') {
//                 alert('Your mail has been sent! Thank You!');
//             } else {
//                 alert('Try Again! There is some error!');
//             }
//         }
//     );
// }