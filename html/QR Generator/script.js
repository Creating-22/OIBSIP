const wrapper=document.getElementById('wrapper');
const qrInput=document.getElementById('input');
const button=document.getElementById('button');
const qrImg=document.getElementById('qr');
button.addEventListener("click",()=>{
    let qrValue=qrInput.value.trim();
    if(qrValue=="") return;
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  


});