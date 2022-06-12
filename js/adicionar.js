function previewImagem(){
  var imagem = document.querySelector('input[name=imagem]').files[0];
  var preview = document.querySelector('.img');

  var reader = new FileReader();

  reader.onloadend = () => {
    preview.src = reader.result;
  }

  if(imagem){
    reader.readAsDataURL(imagem);
  }else{
    preview.src = ""
  }
}

class Anime {
  constructor(){
    this.id = 1;
    this.arrayAnimes = [];
  }

  salvar(){
    let anime = this.lerDados();
    if(this.validaCampos(anime)){
      this.adicionar(anime);
      if (localStorage.Animes){
        localStorage.Animes += localStorage.Animes = JSON.stringify(this.arrayAnimes)
      } else {
        localStorage.Animes = JSON.stringify(this.arrayAnimes)
      }
    }   
  }

  adicionar(anime){
    this.arrayAnimes.push(anime);
    this.id++;
  }

  lerDados(){
    let anime = {};

    anime.id = this.id;
    anime.titulo = document.querySelector('#titulo').value;
    anime.temporada = document.querySelector('#temporada').value
    anime.episodio = document.querySelector('#episodio').value;
    anime.img = document.querySelector('#img').getAttribute('src');

    return anime;
  }

  validaCampos(anime){
    let msg = '';
    if (anime.img === null) {
      msg += '- Adicione uma imagem \n'
    } 

    if (anime.titulo == '') {
      msg += '- Informe um título \n'
    }

    if (anime.temporada == '') {
      anime.temporada = 1
    }

    if (anime.episodio == '') {
      anime.episodio = 1
    }

    if (msg != '') {
      alert(msg);
      return false
    }
    return true;
  }

}

var anime = new Anime();