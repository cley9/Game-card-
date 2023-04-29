// inicio
var fondo;
var boton;
var intro = new Audio('audio/Intro.mp3');
var Portada = {
    
    preload: function(){
    //  para la imagen de portada 
    //    juego.load.image('bg','img/portada_del_juego.jpg');
       juego.load.image('bg','img/portada4.png');
        //  boton del play
       juego.load.image('boton', 'img/play.png');
    },
    // ...
    create: function(){
  		      
        fondo = juego.add.tileSprite(0,0,290,540,'bg'); 
        juego.add.text(20,20,"Cley Tornero Mondalgo ",{font:"20px Arial ",fill:"white"});
        boton = juego.add.button(50, 450, 'boton', this.startGame, this);
        
    },

   
    startGame: function(){
        juego.state.start('Juego');
        intro.play()
    }

    
   
};




