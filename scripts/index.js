let values = "Bienvenidos";
let remove = true;


const data = [" querido", " consumidor"]
let iname = 0;
let ichar = 0;

function animation(){
    const textVideo = document.getElementById("text-p");

    if (remove){
        values = values.substring(0, values.length-1);
        if (values.length < 12){
            remove = false;
        }
    } else {
        values += data[iname][ichar];
        ichar++;

        if (data[iname].length <= ichar){
            ichar = 0;
            iname++;
            iname %= data.length;
            remove = true;
        }
    }

    textVideo.innerHTML = values;
}

setInterval(animation, 300);
