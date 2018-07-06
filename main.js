function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
            
        };
        reader.readAsDataURL(input.files[0]);
        
    }
    var circle = document.querySelector(".numberCircle");
    var container = document.querySelector(".img");
    container.addEventListener("click",getClickPosition, false);

    function getClickPosition(event){
        var x = event.clientX - (circle.offsetWidth / 2);
        var y = event.clientY - (circle.offsetHeight / 2);

        var translate3dValue = "translate3d(" + x +"px," + y + "px,0)";
        circle.style.transform = translate3dValue; 

    }
}

