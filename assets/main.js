$("document").ready(function() {

    // hidden response when click to question
    $(".FAQ h2").click(function() {
        // alert("kdjfkjls");
        $(".FAQ h2").not(this).next().addClass("hidden");


        if ($(this).next().hasClass("hidden")) {
            $(this).next().removeClass("hidden");
        } else {
            $(this).next().addClass("hidden");
        }

    });

});

// <1-fold SSSSS ALL FUNCTION SSSSS

// #2-fold SSSSS region SSSSS

// #/2-fold EEEEE endregion EEEEE

// </1-fold> EEEEE ALL FUNCTION EEEEE
