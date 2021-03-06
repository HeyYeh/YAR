$(document).ready(function () {


    $(function () {
        var body = $('.sparklesCont'),
            template = $('.shine'),
            stars = 500,
            sparkle = 20;


        var size = 'small';
        var createStar = function () {
            template.clone().removeAttr('id').css({
                top: (Math.random() * 100) + '%',
                left: (Math.random() * 100) + '%',
                webkitAnimationDelay: (Math.random() * sparkle) + 's',
                mozAnimationDelay: (Math.random() * sparkle) + 's'
            }).addClass(size).appendTo(body);
        };

        for (var i = 0; i < stars; i++) {
            if (i % 2 === 0) {
                size = 'small';
            } else if (i % 3 === 0) {
                size = 'medium';
            } else {
                size = 'large';
            }

            createStar();
        }
    });









    var initialSound = true;

    var sound = false;

    function soundSwitch() {

        if (sound) {

            $("#backTrack").get(0).pause();

            $("#sound").removeClass("displayBlock").addClass("displayNone");
            $("#mute").removeClass("displayNone").addClass("displayBlock");
        }

        if (!sound) {

            $("#backTrack").get([0]).play();

            $("#mute").removeClass("displayBlock").addClass("displayNone");
            $("#sound").removeClass("displayNone").addClass("displayBlock");
        }

        sound = !sound;
        console.log("sound = " + sound);

    }


    $(".soundButton").click(function () {

        soundSwitch();

    })


    $("html").click(function () {

        if (initialSound) {

            soundSwitch();

            initialSound = false;
            console.log("init = " + initialSound)

        }
    })


    //This is for the blackout thing. I make it appear, then fade up the opacity to make a blackening effect happen
    //Look, I'm not proud of how I put this together. It's ugly and inefficient.
    //Sometimes, ugly and innefficient is the right way to do something
    //Perfection is a myth.
    //We're all just trying our best.
    //Ugh.

    var blackoutBool = false;
    var item = 0;

    //For all of these, the logic is as simple as: click on the thing, set the blackout bool to true and fade in the blackout curtain, then set item to the correct number so we know what to close later, then make the relevant thing have a presence by changing its delat and fade it in.

    //CREDITS
    $("#popupTriggerCredits").click(function () {

        $("#blackoutCurtain").removeClass("displayNone").addClass("displayBlock");
        blackoutBool = true;

        $('#blackoutCurtain').animate({
            opacity: 0.8
        }, 500, function () {
            item = 4;
            $("#creditsCont").removeClass("displayNone").addClass("displayBlock");
            $('#creditsCont').animate({
                opacity: 1
            }, 200, function () {});
        });

    });

    //POSTER
    $("#popupTriggerPoster").click(function () {

        $("#blackoutCurtain").removeClass("displayNone").addClass("displayBlock");
        blackoutBool = true;

        $('#blackoutCurtain').animate({
            opacity: 0.8
        }, 500, function () {
            item = 6;
            $("#poster").removeClass("displayNone").addClass("displayBlock");
            $('#poster').animate({
                opacity: 1
            }, 200, function () {});
        });

    });

    //TRAILER
    $("#popupTriggerTrailer").click(function () {

        if (initialSound) {

            initialSound = false;
            soundSwitch();
            sound = true;

            $("#mute").removeClass("displayBlock").addClass("displayNone");
            $("#sound").removeClass("displayNone").addClass("displayBlock");
            console.log("trailerinit");

        }

        if (sound) {
            console.log("trailerclick");
            $("#backTrack").get(0).pause();

        };



        console.log("trailer sound = " + sound);

        $("#blackoutCurtain").removeClass("displayNone").addClass("displayBlock");
        blackoutBool = true;

        $('#blackoutCurtain').animate({
            opacity: 0.8
        }, 500, function () {
            item = 2;
            $("#trailerBigCont").removeClass("displayNone").addClass("displayBlock");
            $('#trailerBigCont').animate({
                opacity: 1
            }, 200, function () {


                $("#trailerMidCont").append("<iframe id=\"video\" src=\"https://player.vimeo.com/video/714719574?h=17fa25261e\" style=\"\" frameborder=\"0\" allow=\" fullscreen; picture-in-picture\" allowfullscreen></iframe>");



            });
        });

    });


    //FULL FILM
    $("#watchFilmCont").click(function () {

        if (initialSound) {

            initialSound = false;
            soundSwitch();
            sound = true;

            $("#mute").removeClass("displayBlock").addClass("displayNone");
            $("#sound").removeClass("displayNone").addClass("displayBlock");
            console.log("trailerinit");

        }

        if (sound) {
            console.log("trailerclick");
            $("#backTrack").get(0).pause();

        };

        $("#blackoutCurtain").removeClass("displayNone").addClass("displayBlock");
        blackoutBool = true;

        $('#blackoutCurtain').animate({
            opacity: 0.8
        }, 500, function () {
            item = 7;
            $("#filmBigCont").removeClass("displayNone").addClass("displayBlock");
            $('#filmBigCont').animate({
                opacity: 1
            }, 200, function () {


                $("#filmMidCont").append("<iframe id=\"video\" src=\"https://player.vimeo.com/video/702055416?h=d10235695a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\" style=\"\" frameborder=\"0\" allow=\" fullscreen; picture-in-picture\" allowfullscreen></iframe>");



            });
        });

    });

    //CONTACT
    $("#popupTriggerContact").click(function () {

        $("#blackoutCurtain").removeClass("displayNone").addClass("displayBlock");
        blackoutBool = true;

        $('#blackoutCurtain').animate({
            opacity: 0.8
        }, 500, function () {
            item = 3;
            $("#complaintsCont").removeClass("displayNone").addClass("displayBlock");
            $('#complaintsCont').animate({
                opacity: 1
            }, 200, function () {});
        });

    });


    //ABOUT
    $("#popupTriggerAbout").click(function () {

        $("#blackoutCurtain").removeClass("displayNone").addClass("displayBlock");
        blackoutBool = true;

        $('#blackoutCurtain').animate({
            opacity: 0.8
        }, 500, function () {
            item = 5;
            $("#aboutCont").removeClass("displayNone").addClass("displayBlock");
            $('#aboutCont').animate({
                opacity: 1
            }, 200, function () {});
        });

    });

    //PICTURES
    $("#popupTriggerPictures").click(function () {

        $("#blackoutCurtain").removeClass("displayNone").addClass("displayBlock");
        blackoutBool = true;
        $('#blackoutCurtain').animate({
            opacity: 0.8
        }, 500, function () {
            item = 1;
            $("#picturesCont").removeClass("displayNone").addClass("displayBlock");
            $('#picturesCont').animate({
                opacity: 1
            }, 200, function () {});
        });

    });

    //Logic for the below section: when you clickn on the black background it establishes enumbs for the different popup types, then the for function checks all of those enums to see which popup is currently open. When it finds it, it animates it to invisible and gets rid of it, then does the same for the blackout.

    $("#blackoutCurtain").click(function () {

        console.log("blackout sound = " + sound);

        if (sound == true) {

            $("#backTrack").get(0).play();

        }

        var popup = {
            bts: 1,
            advertisement: 2,
            complaints: 3,
            operators: 4,
            about: 5,
            poster: 6,
            film: 7
        }

        for (i = 0; i < 8; i++) {

            //CREDITS
            if (i === popup.operators) {
                $('#creditsCont').animate({
                    opacity: 0
                }, 200, function () {

                    $("#creditsCont").removeClass("displayBlock").addClass("displayNone");

                });
            }

            //POSTER
            if (i === popup.poster) {
                $('#poster').animate({
                    opacity: 0
                }, 200, function () {

                    $("#poster").removeClass("displayBlock").addClass("displayNone");

                });
            }

            //TRAILER
            if (i === popup.advertisement) {
                $('#trailerBigCont').animate({
                    opacity: 0
                }, 200, function () {

                    $("#trailerBigCont").removeClass("displayBlock").addClass("displayNone");
                    $("#video").remove();
                });
            }

            //COMPLAINTS
            if (i === popup.complaints) {
                $('#complaintsCont').animate({
                    opacity: 0
                }, 200, function () {

                    $("#complaintsCont").removeClass("displayBlock").addClass("displayNone");
                    $("#video").remove();
                });
            }

            //FULL FILM
            if (i === popup.film) {
                $('#filmBigCont').animate({
                    opacity: 0
                }, 200, function () {

                    $("#filmBigCont").removeClass("displayBlock").addClass("displayNone");
                    $("#video").remove();
                });
            }

            //ABOUT
            if (i === popup.about) {
                $('#poster').animate({
                    opacity: 0
                }, 200, function () {

                    $("#aboutCont").removeClass("displayBlock").addClass("displayNone");

                });
            }

            //PICTURES
            if (i === popup.about) {
                $('#picturesCont').animate({
                    opacity: 0
                }, 200, function () {

                    $("#picturesCont").removeClass("displayBlock").addClass("displayNone");

                });
            }

        };







        if (blackoutBool) {
            $('#blackoutCurtain').animate({
                opacity: 0
            }, 500, function () {

                $("#blackoutCurtain").removeClass("displayBlock").addClass("displayNone");

            });

        };

    });


    $("#picturesRow").click(function () {


        $('#picturesCont').animate({
            opacity: 0
        }, 200, function () {

            $("#picturesCont").removeClass("displayBlock").addClass("displayNone");

        });

        if (blackoutBool) {
            $('#blackoutCurtain').animate({
                opacity: 0
            }, 500, function () {

                $("#blackoutCurtain").removeClass("displayBlock").addClass("displayNone");

            });

        };

    });






});
