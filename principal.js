var juego = new Phaser.Game(290, 540, Phaser.CANVAS, 'bloque_juego');
// 


juego.state.add('Juego',Juego);
juego.state.add('Nivel',Nivel);

juego.state.add('Terminado',Terminado);
juego.state.add('Final',Final);
juego.state.add('Portada',Portada);
juego.state.add('Nivel2',Nivel2);

juego.state.start('Portada');

