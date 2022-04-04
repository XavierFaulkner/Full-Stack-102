$(document).ready(function() {
    const name = $("#name");
    const email = $("#email");
    const phone = $("#phone");
    const message = $("p");
    const required = [name, email, phone];

    $("#submit").click(function() {
        for(let i = 0; i < required.length; i++) {
            if(required[i].val() == "") {
                message.text("Please Fill Out Required Fields");
                message.addClass("warning");
                required[i].prev().addClass("warning");
            }
        }
        if(!($("label").hasClass("warning"))) {
            $("#form").remove();
            $("h2").text("Thanks for your feedback!");
        }
    });

    for(let i = 0; i < required.length; i++) {
        required[i].on("input", function() {
            $(this).prev().removeClass("warning");
        });
    }

});