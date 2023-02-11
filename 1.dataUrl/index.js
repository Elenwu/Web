const  inp = document.querySelector('input');
inp.onchange = function(){
    const reader = new FileReader();
    reader.onload = function(e){
        preview.src  = e.target.result;
        console.log("上传服务器.....")
    }
    reader.readAsDataURL(this.files[0]);
}