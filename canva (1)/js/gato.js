function animacion_con_canvas() 
{

  const mi_canvas = document.getElementById("canvas");
  
  const contexto = mi_canvas.getContext("2d");

  let array_para_bolitas = [];


  let img_bolita_roja = new Image();

  img_bolita_roja.src = "canvas/nyan-cat-scaled.png";

  img_bolita_roja.addEventListener('load', iniciar_animacion, false);


  function crea_bolita(velocidad, x_pos, y_pos) 
  {
  
    this.velocidad = velocidad;
  
    this.x_pos = x_pos;
  
    this.y_pos = y_pos;
    
  }


  crea_bolita.prototype.mover_bolita = function() 

  {
    
    if(this.x_pos<750)

    {
      this.x_pos = this.x_pos + this.velocidad;
        }
    else
    {
      this.x_pos = 0;
      
      this.y_pos = Math.round(Math.random() * 300); 
    }
    
    contexto.drawImage(img_bolita_roja, this.x_pos, this.y_pos);   
       
  
  };

  function crear_varias_bolitas() 
  {
    for (let i = 0; i < 10; i++)
    {
    
      let x_posicion_al_azar = Math.round(Math.random() * 750);
      
      let y_posicion_al_azar = Math.round(Math.random() * 300);
      
      let velocidad_al_azar = 0.2 + Math.random() * 3;
    
      let bolita_creada = new crea_bolita(velocidad_al_azar, x_posicion_al_azar, y_posicion_al_azar);
      
      array_para_bolitas.push(bolita_creada);
    }
  
    animar_bolitas();
  }



  function iniciar_animacion() 
  {

    crear_varias_bolitas();
  }


  function animar_bolitas() 
  {

    contexto.fillStyle = "black";

    contexto.fillRect(0, 0, 750, 300);


    for (let i = 0; i < array_para_bolitas.length; i++) 
    {
      let bolita_a_animar = array_para_bolitas[i];
    
      bolita_a_animar.mover_bolita();
    }
  
    const fx_animar_bolitas = requestAnimationFrame(animar_bolitas);  
  
  }
  
}

animacion_con_canvas();
