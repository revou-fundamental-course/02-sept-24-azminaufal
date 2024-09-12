// ini javascript

// Perhitungan Luas Segitiga
function calcluas() {
    let alas = document.getElementById("alas").value;
    let tinggi = document.getElementById("tinggi").value;
    
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert("Masukkan nilai angka yang valid untuk alas dan tinggi.");
        return;
    }

    let luas = 0.5 * alas * tinggi;

    document.getElementById("hasil").innerHTML = "Luas Segitiga: " + luas + " satuan luas.";
}


// Perhitungan keliling segitiga
function calckeliling() {
    let sisi1 = parseFloat(document.getElementById('sisi1').value);
    let sisi2 = parseFloat(document.getElementById('sisi2').value);
    let sisi3 = parseFloat(document.getElementById('sisi3').value);

    if ( isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
        alert('Harap masukkan semua nilai dengan benar.');
        return;
    }

    let keliling = sisi1 + sisi2 + sisi3;

    document.getElementById('hasil-keliling').textContent = `K = s + s + s = ${keliling}`;
}

// reset perhitungan
function resetluas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasil-luas').textContent = '0';
}

function resetkeliling() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('hasil-keliling').textContent = '0';
}