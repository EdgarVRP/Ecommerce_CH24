
var ligthMode = document.getElementById("light-mode");
ligthMode.onclick = function () {
    document.documentElement.style.setProperty('--primary', '#ff0000');
    document.documentElement.style.setProperty('--primary2', '#ff0000');
    document.documentElement.style.setProperty('--secondary', '#ff0000');
    document.documentElement.style.setProperty('--secondary2', '#ff0000');
    document.documentElement.style.setProperty('--white', '#ff0000');
    document.documentElement.style.setProperty('--black', '#ff0000');};


var darkMode = document.getElementById("dark-mode");
darkMode.onclick = function () {
    document.documentElement.style.setProperty('--primary', '#2a1e1e');
    document.documentElement.style.setProperty('--primary2', '#412c30');
    document.documentElement.style.setProperty('--secondary', '#EFB817');
    document.documentElement.style.setProperty('--secondary2', '#fff0e5');
    document.documentElement.style.setProperty('--white', '#FFFFFF');
    document.documentElement.style.setProperty('--black', '#000000');
};
