function readImage(){
  if(this.file && this.file[0]){
    var file = new FileReader();
    file.onload = function(e){
      document.getElementById("preview").src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}
document.getElementById("img-input").addEventListener("change", readImage, false)