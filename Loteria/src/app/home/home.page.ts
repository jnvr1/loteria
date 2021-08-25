'use strict';
import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  url:any="./assets/imagenes/cartas/1.jpg"
  textoDeImagene
 jugar=false
 cantidad; auto=0
 
  ran=0; audioDeFondo = new Audio();
 audioLanzamiento = new Audio()
 usados = new Array();
 primer_auto=true
 IDIOMAS_PREFERIDOS = ["es-MX", "es-ES"];
 vocesDisponibles = []; 
 inter
 
 imagenesBase = {
    0:{
      url: "./assets/imagenes/cartas/1.jpg",
      mostrar:false
    },
    1:{
      url: "./assets/imagenes/cartas/1.jpg",
      mostrar:false
    },
    2:{
      url: "./assets/imagenes/cartas/2.jpg",
      mostrar:false
    },
    3:{
      url: "./assets/imagenes/cartas/3.jpg",
      mostrar:false
    },
    4:{
      url: "./assets/imagenes/cartas/4.jpg",
      mostrar:false
    },
    5:{
      url: "./assets/imagenes/cartas/5.jpg",
      mostrar:false
    },
    6:{
      url: "./assets/imagenes/cartas/6.jpg",
      mostrar:false
    },
    7:{
      url: "./assets/imagenes/cartas/7.jpg",
      mostrar:false
    },
    8:{
      url: "./assets/imagenes/cartas/8.jpg",
      mostrar:false
    },
    9:{
      url: "./assets/imagenes/cartas/9.jpg",
      mostrar:false
    },
    10:{
      url: "./assets/imagenes/cartas/10.jpg",
      mostrar:false
    },
    11:{
      url: "./assets/imagenes/cartas/11.jpg",
      mostrar:false
    },
    12:{
      url: "./assets/imagenes/cartas/12.jpg",
      mostrar:false
    },
    13:{
      url: "./assets/imagenes/cartas/13.jpg",
      mostrar:false
    },
    14:{
      url: "./assets/imagenes/cartas/14.jpg",
      mostrar:false
    },
    15:{
      url: "./assets/imagenes/cartas/15.jpg",
      mostrar:false
    },
    16:{
      url: "./assets/imagenes/cartas/16.jpg",
      mostrar:false
    },
    17:{
      url: "./assets/imagenes/cartas/17.jpg",
      mostrar:false
    },
    18:{
      url: "./assets/imagenes/cartas/18.jpg",
      mostrar:false
    },
    19:{
      url: "./assets/imagenes/cartas/19.jpg",
      mostrar:false
    },
    20:{
      url: "./assets/imagenes/cartas/20.jpg",
      mostrar:false
    },
    21:{
      url: "./assets/imagenes/cartas/21.jpg",
      mostrar:false
    },
    22:{
      url: "./assets/imagenes/cartas/22.jpg",
      mostrar:false
    },
    23:{
      url: "./assets/imagenes/cartas/23.jpg",
      mostrar:false
    },
    24:{
      url: "./assets/imagenes/cartas/24.jpg",
      mostrar:false
    },
    25:{
      url: "./assets/imagenes/cartas/25.jpg",
      mostrar:false
    },
    26:{
      url: "./assets/imagenes/cartas/26.jpg",
      mostrar:false
    },
    27:{
      url: "./assets/imagenes/cartas/27.jpg",
      mostrar:false
    },
    28:{
      url: "./assets/imagenes/cartas/28.jpg",
      mostrar:false
    },
    29:{
      url: "./assets/imagenes/cartas/29.jpg",
      mostrar:false
    },
    30:{
      url: "./assets/imagenes/cartas/30.jpg",
      mostrar:false
    },
    31:{
      url: "./assets/imagenes/cartas/31.jpg",
      mostrar:false
    },
    32:{
      url: "./assets/imagenes/cartas/32.jpg",
      mostrar:false
    },
    33:{
      url: "./assets/imagenes/cartas/33.jpg",
      mostrar:false
    },
    34:{
      url: "./assets/imagenes/cartas/34.jpg",
      mostrar:false
    },
    35:{
      url: "./assets/imagenes/cartas/35.jpg",
      mostrar:false
    },
    36:{
      url: "./assets/imagenes/cartas/36.jpg",
      mostrar:false
    },
    37:{
      url: "./assets/imagenes/cartas/37.jpg",
      mostrar:false
    },
    38:{
      url: "./assets/imagenes/cartas/38.jpg",
      mostrar:false
    },
    39:{
      url: "./assets/imagenes/cartas/39.jpg",
      mostrar:false
    },
    40:{
      url: "./assets/imagenes/cartas/40.jpg",
      mostrar:false
    },
    41:{
      url: "./assets/imagenes/cartas/41.jpg",
      mostrar:false
    },
    42:{
      url: "./assets/imagenes/cartas/42.jpg",
      mostrar:false
    },
    43:{
      url: "./assets/imagenes/cartas/43.jpg",
      mostrar:false
    },
    44:{
      url: "./assets/imagenes/cartas/44.jpg",
      mostrar:false
    },
    45:{
      url: "./assets/imagenes/cartas/45.jpg",
      mostrar:false
    },
    46:{
      url: "./assets/imagenes/cartas/46.jpg",
      mostrar:false
    },
    47:{
      url: "./assets/imagenes/cartas/47.jpg",
      mostrar:false
    },
    48:{
      url: "./assets/imagenes/cartas/48.jpg",
      mostrar:false
    },
    49:{
      url: "./assets/imagenes/cartas/49.jpg",
      mostrar:false
    },
    50:{
      url: "./assets/imagenes/cartas/50.jpg",
      mostrar:false
    },
    51:{
      url: "./assets/imagenes/cartas/51.jpg",
      mostrar:false
    },
    52:{
      url: "./assets/imagenes/cartas/52.jpg",
      mostrar:false
    },
    53:{
      url: "./assets/imagenes/cartas/53.jpg",
      mostrar:false
    },
    54:{
      url: "./assets/imagenes/cartas/54.jpg",
      mostrar:false
    },
  }
  imagenesCopia ={
    0:{
      url: "./assets/imagenes/cartas/1.jpg",
      mostrar:false
    }
  }
  constructor() {
    
  }
  async ngOnInit(){ 
    
    document.getElementsByClassName("apagado")
    window.addEventListener("keydown",a=>{
      if(a.key=="0"){
        if(this.auto==1){
          clearInterval(this.inter)
          this.auto=0
          this.mezclar()
        }else{
          this.mezclar() 
        }
      }
      if(a.key=="1"){
        this.automatico()
      }
      if(a.key == "r"){
        this.reiniciar()
      }
      if(a.key == "Escape"){
        this.cerrar()
      }
    })
    $.getJSON("./assets/Texto para las imagenes.json",a=>{
      this.textoDeImagene = a
    })
    $.getJSON("./assets/cantidadCartas.json",a=>{
      this.cantidad= a.cantidad+1
    }).then(a=>{
    
    
    
    for (var i=0; i<this.cantidad; i++){
      this.imagenesCopia[i] = this.imagenesBase[i]; 
      
    }    
    })
    
    this.audioDeFondo = new Audio()
    this.audioDeFondo.src = "./assets/Audio/fondo.mp3"
    this.audioDeFondo.loop = true
    this.audioDeFondo.volume = 0.5
    this.audioLanzamiento.src = "./assets/Audio/lanzamiento.mp3"
    this.audioDeFondo.play()
    this.audioLanzamiento.volume = 0.5
    let a = await this.getVoice()
    

  }

  
  mezclar(){
   
    
    
    if(this.jugar == false){
      setTimeout(a=>{
        this.audioDeFondo.pause()
      }, 120)
      this.jugar = true
    }else{
      this.ran = this.aleatorio()
      if(this.ran != 0){
        this.lanzar()
      }else{
        clearInterval(this.inter)
        this.reiniciar()
      }
    }
    
      
    
  }

  cerrar(){
    close()
  }

  async lanzar(){
    this.audioLanzamiento.play()
    this.imagenesBase[this.ran].mostrar=true
    setTimeout(a=>{
      this.hablar()
    }, 500)
  }
  

  async hablar(){
    var a = await this.getVoice()
    var mensaje  = new SpeechSynthesisUtterance();
    mensaje.text = this.obtenerTexto(this.ran)
    this.obtenerTexto(this.ran)
   //console.log(this.vocesDisponibles)
    mensaje.voice = this.vocesDisponibles[10]
    mensaje.rate = 1
    mensaje.volume = 1
    mensaje.pitch = 1
    speechSynthesis.speak(mensaje)
  }

  reiniciar(){
    if(this.jugar){
      this.audioDeFondo.pause()
      var video = document.createElement('video');
      var juego = document.getElementById("juego")
      var ganador = document.getElementById("ganador")
      juego.style.visibility = "hidden"
      ganador.style.visibility = "visible"
      ganador.style.opacity = "1"
      ganador.appendChild(video)
      var source = document.createElement('source');

      source.src = "./assets/Ganador/ganador.mp4";
      source.type = "video/mp4";

      video.appendChild(source);
      video.play()
      video.addEventListener("ended",(event)=>{
      var juego = document.getElementById("juego")
      var ganador = document.getElementById("ganador")
      juego.style.visibility = "visible"
      ganador.style.visibility = "hidden"
      this.audioDeFondo.play()
      this.jugar=false
      clearInterval(this.inter)
      speechSynthesis.cancel()
      this.auto=0
      this.primer_auto=true
      
      
      for(let i in this.imagenesBase){
        this.imagenesBase[i].mostrar=false
        
      }
      this.usados=[]
      for(let i in this.imagenesCopia){
        this.imagenesCopia[i].mostrar=false
      }
      },false)
    }
    
    
    

  }
  

  obtenerTexto(num){
    
    return this.textoDeImagene[num].texto

  }

  aleatorio():number{
    if(this.usados.length!=(this.cantidad-1)){
      var num:number
      var repe:boolean =false
      do{
        num =Math.floor(Math.random()* (this.cantidad-1))+1
        repe = this.repetido(num) 
      }while (repe != false);
        this.usados.push(num);
        return num;
      } else {
        
        return 0;
      }
    }
    
  

  repetido(num:Number):boolean{
    var repe: boolean = false;
    for(var i = 0; i< this.usados.length; i++){
      if(num == this.usados[i]){
        repe = true 
      }
    }
    return repe
  }

  getVoice(){
    let posibleIndice= 0
      this.vocesDisponibles = speechSynthesis.getVoices();
      posibleIndice = this.vocesDisponibles.findIndex(voz => this.IDIOMAS_PREFERIDOS.includes(voz.lang));
      return this.vocesDisponibles
  }

  automatico(){
    if(this.auto==0){
      
      if(this.primer_auto){
        this.mezclar()
        this.primer_auto=false
        this.automatico()
      }else{
        this.auto=1
        this.inter=setInterval(a=>{
          this.mezclar()
          
        },4000)
      }
      
    }
     

  }

 

}
