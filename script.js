let name = prompt("Siapakah nama anda?", "");
document.getElementById("name").innerHTML = name;

function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name").innerHTML = name;
}

document.getElementById("changeName").addEventListener("click", function () {
    replaceName();
});

      /*validateform*/

function validateForm() {
    if ('firstname !=' && lastname !='' ) {
        document.querySelector('#result').innerHTML = firstname + '' + lastname;
    } else {
        alert('Inputan ada yang kosong');
    }
}



   /*autoslide*/
   
let indexSlide = 1; // [0, 1, 2]
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
    console.log('IndexSlide kita tambah' + n);
    console.log(indexSlide + 'Ini NextSlide');
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('banner-item');
    if (n > listImage.length) indexSlide = 0;
    console.log(listImage.length + 'Ini Jumlah Gambar');
    console.log(n + 'Ini N di ShowSlide');

    let index = 0;
    while (index < listImage) {
        listImage[index].style.display = 'none';
        index++;
    }

    console.log(indexSlide + 'Ini indexSlide di ShowSlide');
    listImage[indexSlide].style.display = 'block';
}
