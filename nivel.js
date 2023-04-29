// 
var fondo;
var carro;
var cursores;
var enemigos;
var timer;
var txtPuntos;
var gasolinas;
var puntos;
var timerGasolina;
var vidas;
var comerGas = new Audio('audio/disparo.mp3');
var choque = new Audio('audio/explosion.mp3');

var Nivel ={


    preload: function(){
       juego.load.image('bg','img/bg.png');
       juego.load.image('carro','img/carro.png');
       juego.load.image('carroMalo','img/carroMalo1.png');
       juego.load.image('gasolina','img/gas.png');
       juego.forceSingleUpdate=true;

    },

    create: function(){
        fondo = juego.add.tileSprite(0,0,290,540,'bg'); 
        carro=juego.add.sprite(juego.width/2, 496,'carro');
        carro.anchor.setTo(0.5);
        cursores=juego.input.keyboard.createCursorKeys();

        enemigos=juego.add.group();
        juego.physics.arcade.enable(enemigos,true);
        enemigos.enableBody = true;
        enemigos.createMultiple(100,'carroMalo');
        enemigos.setAll('anchor.x',0.5);
        enemigos.setAll('anchor.y',0.5);
        enemigos.setAll('outOfBoundsKill',true);
        enemigos.setAll('checkWorldBounds',true);
        juego.physics.arcade.enable(carro,true);
        gasolinas=juego.add.group();
        juego.physics.arcade.enable(gasolinas,true);
        gasolinas.enableBody = true;
        gasolinas.createMultiple(30,'gasolina');
        gasolinas.setAll('anchor.x',0.5);
        gasolinas.setAll('anchor.y',0.5);
        gasolinas.setAll('outOfBoundsKill',true);
        gasolinas.setAll('chekWorldBounds',true);

        timer = juego.time.events.loop(500,this.crearCarroMalo,this);
        timerGasolina = juego.time.events.loop(2000,this.crearGasolina,this);

        
        //definiendo el puntaje en pantalla
		puntos=0;
		juego.add.text(20,20,"Puntos: ",{font:"14px Arial",fill:"#FFF"});
		txtPuntos=juego.add.text(80,20,"0",{font:"14px Arial", fill:"#FFF"});

        //definiendo contador de vidas
		vidas=3;
		juego.add.text(200,20,"Vidas: ",{font:"14px Arial ",fill:"#FFF"});
		txtVidas=juego.add.text(250,20,"3",{font:"14px Arial", fill:"#FFF"});

    },

    update: function(){
        fondo.tilePosition.y +=3;
        if (cursores.right.isDown && carro.position.x<245)
        {
            carro.position.x +=5;
        }
        else if (cursores.left.isDown && carro.position.x>45)
        {
            carro.position.x -=5;
        }

       juego.physics.arcade.overlap(carro,gasolinas,this.colisionGasolina,null,this);
       juego.physics.arcade.overlap(carro,enemigos,this.colisionCarro,null,this);

    //contador de vidas

    enemigos.forEachAlive(function(b){
        if(b.position.y>520 && b.position.y < 521)
        {
            vidas -=1;
            txtVidas.text=vidas;
        }
    });
    if (vidas ==0)
    {
        juego.state.start('Terminado');
    }

    else if (puntos==3)
    {
        juego.state.start('Nivel2');
    }

       
    },

    crearCarroMalo: function(){
        var posicion = Math.floor(Math.random()*3)+1;
        var enemigo = enemigos.getFirstDead();
        enemigo.physicsBodyType = Phaser.Physics.ARCADE;
        enemigo.reset(posicion*73,0);
        enemigo.body.velocity.y=350;
        enemigo.anchor.setTo(0.5);
        enemigo.checkWorldBounds=true;
		enemigo.outOfBoundsKill=true;

    },
    
    crearGasolina: function(){
        var posicion = Math.floor(Math.random()*3)+1;
        var gasolina = gasolinas.getFirstDead();
        gasolina.physicsBodyType = Phaser.Physics.ARCADE;
        gasolina.reset(posicion*73, 0);
        gasolina.body.velocity.y=200;
        gasolina.anchor.setTo(0.5);
    },

    colisionGasolina: function(b,m){
		//b.kill();
		m.kill();
		puntos++;
		txtPuntos.text = puntos;
		comerGas.play();;
		
	},

    colisionCarro: function(b,m){
		//b.kill();
		m.kill();
		vidas--;
		txtVidas.text = vidas;
		choque.play();
		
	},

};