
var Final = {
    
    preload: function(){
        
    },
    
    create: function(){
  		juego.stage.backgroundColor = "82ED9E";
        juego.add.text(40,220,"GANASTE !!",{
                            font:"35px Arial ",
                            fill:"white" 
                        });
  		
    },
    // testing
     avance: function(){
    juego.stage.backgroundColor="1000";
    juego.add.text(50,210, "Nuevo avance ...",{font:"33px"});
     }
    
   
};