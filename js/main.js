Vue.config.devtools =  true;

const app = new Vue ({
   el: '#root',
   data: {
      contatoreFoto: 0,
      foto: [
         'img/image1.jpg',
         'img/image2.jpg',
         'img/image3.jpg',
         'img/image4.jpg',
      ]
   },
   methods: {
      fotoPrecedente() {
         console.log(this.contatoreFoto);
         // this.contatoreFoto -= 1;
         if(this.contatoreFoto == 0) {
            this.contatoreFoto = (this.foto.length - 1); 
         } else {
            this.contatoreFoto -= 1;
         }
      },
      fotoSuccessiva() {
         this.contatoreFoto += 1;
         if(this.contatoreFoto == (this.foto.length)) this.contatoreFoto = 0;
      }
   }
})