let qrcode=document.getElementById('qrimg');
let qrtext=document.getElementById('text');
let btn=document.getElementById('btn');
console.log(qrtext);
console.log(qrcode);
function generateqr(){
    let size='1000x1000';
    let data=qrtext.value;
    let baseurl='http://api.qrserver.com/v1/create-qr-code/';
    let url=`${baseurl}?data=${data}&size=${size}`;
    qrcode.src=url;
}

btn.addEventListener('click',generateqr);