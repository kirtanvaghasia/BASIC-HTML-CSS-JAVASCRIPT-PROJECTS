let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrimg");
let qrText = document.getElementById("qrText");



function generateQr(){
    if(qrText.value.length > 0){
        imgBox.classList.remove("hide");
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        imgBox.classList.add('hide');
        setTimeout(() =>{
            qrText.classList.remove('error');
            // imgBox.classList.remove('hide');
        },1000);
    }
}