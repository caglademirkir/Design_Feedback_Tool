function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);

    }
    var container = document.querySelector(".img");
    container.addEventListener("click", getClickPosition, false);
}

function getClickPosition(event) {
    var pos = $(this).position();
    var newScore = $('#circleContent').children().last()[0].innerHTML;
    var value = parseInt(newScore, 10) + 1;
    var newDivId = "numberCircle" + value;

    var newDiv = document.createElement("div");
    newDiv.id = newDivId
    newDiv.className = "numberCircle";
    newDiv.innerHTML = value;
    document.getElementById("circleContent").appendChild(newDiv);

    circlePosition(event, newDivId, pos)
}

function circlePosition(event, id, position) {
    var circle = document.querySelector("#" + id);
    var imgWidth = document.getElementsByClassName("img")[0].offsetWidth;
    debugger
    var x = event.clientX - (circle.offsetWidth / 2) - ((imgWidth - 5) * 2.2);
    var y = event.clientY - (circle.offsetWidth / 2) - imgWidth + 25;
    var translate3dValue = "translate3d(" + x + "px," + y + "px,0)";
    circle.style.transform = translate3dValue;

    if (position) {
        $("#" + id).css({
            top: (position.top + 3) + "px"
        }).show();
    }
}


