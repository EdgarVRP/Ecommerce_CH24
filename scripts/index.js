let values = "";
let remove = false;

//const data = ["Bienvenid", "os queridos", "os consumidores", "as queridas", "as consumidoras", "es querides ", "es consumidores"];
const data = ["¡Bienvenidos ", " queridos!", " consumidores!"];
let iname = 0;
let ichar = 0;

function animation(){
    const textVideo = document.getElementById("text-p");
    
    if (remove){
        values = values.substring(0, values.length-1);
        if (values.length < 13){
            remove = false;

            //values = "Bienvenid";
            //12 o 13 dependiendo del contexto!

            values = "!Bienvenidos ";
        }

    } else {
        values += data[iname][ichar];
        ichar++;

        if (data[iname].length <= ichar){
            ichar = 0;
            iname++;
            iname %= data.length;
            if (iname == 0) {iname = 1;}
            remove = true;
            //values = "Bienvenidos";
        }
    }

    textVideo.innerHTML = values;
}

setInterval(animation, 200);