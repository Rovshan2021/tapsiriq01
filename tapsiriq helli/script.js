// function yoxla(test) {
//     let mail = document.getElementById("mail");
//     mail.value = test;
//     let sifre = document.getElementById("sifre");
//     sifre.value = test;
// }

function Yoxla(){
    let mail = "rvn777wen.az@mail.ru";
    let sifre = "1234567890";
    
    let mail1 = document.getElementById("mail").value;
    

    let sifre1 = document.getElementById("sifre").value;

    if (mail == mail1 && sifre == sifre1){
        alert("Tebrikler email ve sifre duzgundur");
    }else{
        alert("Mail veya sifre uygun deyil");
    }
}

function Yukselt(){
    let quvvet = document.getElementById("quvvet").value;
    let quvvet2 = document.getElementById("quvvet2").value;

    let cavab = (quvvet**quvvet2);
    alert(cavab)

}



