/*function btnFunction() {
    
    var opened = window.open("");
    opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
    */

//Yeni sayfa oluşturuyor.
/* var myWindow = window.open("", "_self");
myWindow.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>"); 
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);


*/

/* var openFile = function (file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function () {
        var dataURL = reader.result;
        var output = document.getElementById('output');
        output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);

    var myWindow = window.open("", "_self");
    myWindow.document.write("<img id='output'>");

}; */
// 1- click event
// 2- tıkladığında tıkladığın alanın x ve y değerlerini al.
// 3- tıklandığında bir tane dom objesi(numaralandırma) oluştur.
// 4- oluşturduğun dom u x ve y koordinatlarını baz alarak pozisyonlandır.
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
            // document.getElementById("blah").addEventListener("click", imageEvent)
                /* .width(150)
                .height(200); */
            
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



        // var circle = $('.numberCircle');
        /* var d = document.getElementById('numberCircle');

        var coords = "X coords: " + x + ", Y coords: " + y;
        document.getElementById("demo").innerHTML = coords;
   

        d.style.left = x + "px";
        d.style.top = y + "px";
         */
        /* circle.css({
            left: x + 'px',
            top: y + 'px'
        }); */
       

    }
}

