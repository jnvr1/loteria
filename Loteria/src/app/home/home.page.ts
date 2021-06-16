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
  cantidad=0
 imagenesCopia; ran=0; audioDeFondo = new Audio();
 audioLanzamiento = new Audio()
 usados = new Array();
 IDIOMAS_PREFERIDOS = ["es-MX", "es-US", "es-ES", "es_US", "es_ES"];
 vocesDisponibles = []; 
  
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
  }
  constructor() {
    
  }
  async ngOnInit(){
    $.getJSON("./assets/Texto para las imagenes.json",a=>{
      this.textoDeImagene = a
    })
    $.getJSON("./assets/cantidad.json",a=>{
      this.cantidad= a.cantidad
    })
    this.imagenesCopia = this.imagenesBase 
    this.audioDeFondo.src = "./assets/Audio/fondo.mp3"
    this.audioDeFondo.loop = true
    this.audioDeFondo.volume = 0.5
    this.audioLanzamiento.src = "./assets/Audio/lanzamiento.mp3"
    this.audioDeFondo.play()
    this.audioLanzamiento.volume = 0.5
    let a = await this.getVoice()
    

  }

  
  mezclar(){
    setTimeout(a=>{
      this.audioDeFondo.pause()
    }, 120)

    this.ran = this.aleatorio()
      if(this.ran != 0){
        this.lanzar()
      }else{
        this.reiniciar()
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
    mensaje.voice = this.vocesDisponibles[this.vocesDisponibles.length-1]
    mensaje.rate = 1
    mensaje.volume = 3
    mensaje.pitch = 1.5
    speechSynthesis.speak(mensaje)
  }

  reiniciar(){
    this.jugar=!this.jugar
    this.audioDeFondo.play()
    for(let i in this.imagenesBase){
      this.imagenesBase[i].mostrar=false
      
    }
    this.usados=[]
    this.imagenesCopia=this.imagenesBase

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
        console.log(this.usados)
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

}
