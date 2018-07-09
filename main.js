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
    container.addEventListener("click",getClickPosition, false);

    function getClickPosition(event){
        for(var i=0; i < 5; i++){
            var circle = document.querySelector("#numberCircle");
            var pos = $(this).position();
            var x = event.clientX - (circle.offsetWidth / 2);
            var y = event.clientY - (circle.offsetHeight / 2);
            var translate3dValue = "translate3d(" + x +"px," + y + "px,0)";
            circle.style.transform = translate3dValue;

            $("#numberCircle").css({
                top : (pos.top + 3  ) + "px"
            }).show();
            
            var newScore = document.getElementById("numberCircle").innerHTML;
            var value = parseInt(newScore,10) + 1;
            document.getElementById("numberCircle").innerHTML = value;
            
            break;
        }
    }
}

