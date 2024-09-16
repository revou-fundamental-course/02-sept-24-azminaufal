// Script JS

function hitungluassegitiga() {
    let alas = parseFloat(document.getElementById("alas").value);
    let tinggi = parseFloat(document.getElementById("tinggi").value);

    if  (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert ("harap masukkan semua nilai dengan benar");
        return;
    }

    let luas = 0.5 * alas * tinggi;

    document.getElementById("hasil").innerHTML = "Luas Segitiga: " + luas +  " cm.";
}


function resetluassegitiga() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasil").innerHTML = "";
}



function hitungkelilingsegitiga() {
    let sisi1 = parseFloat(document.getElementById("sisi1").value);
    let sisi2 = parseFloat(document.getElementById("sisi2").value);
    let sisi3 = parseFloat(document.getElementById("sisi3").value);

    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3) || sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        alert("Harap masukkan semua nilai dengan benar");
        return;
    }

    let keliling = sisi1 + sisi2 + sisi3;
    document.getElementById("hasil-keliling").innerHTML =  keliling + " cm";
}

function resetkelilingsegitiga() {
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("hasil-keliling").innerHTML = "Hasil Perhitungan:";
}