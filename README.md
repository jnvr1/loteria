# loteria APP

## Instalación primera vez

* Se debe de tener Node.JS, despues de esto correr los siguientes comandos

* Los archivos a cambiar se encuentran dentro de la caperta loteria/src/assets

* El fondo debe tener el nombre fondo.gif este se encuentra dentro de la carpeta de imagenes/fondo.

* Los botones de jugar y lanzar pueden ser modificados cambiandolos por otro .gif que sean nombrados de la misma manera, estos se encuentran en la caperta botones.

* El audio de fondo y de lanzamiento de carta deben ser modificados en la caperta audio y deben tener el nombre fondo.mp3 y lanzamiento.mp3

* Las cartas pueden ser cambiadas manteniendo el mismo nombre con un maximo de 54 cartas y deben tener terminacion .jpg, el nombre de las cartas deben de ir desde el 1 al 54.

*  La cantidad de cartas debe ser modificada en el archivo cantidadCartas.json.



```bash
 cd Loteria
 
 npm install -g ionic cordova
 
 npm install

```
```bash

 npm install jquery --save

```
```bash

 npm install electron -g --unsafe-perm=true --allow-root

 npm install electron-packager -g --unsafe-perm=true --allow-root

 npm install electron-installer-dmg -g --unsafe-perm=true --allow-root

```

```bash
 npm install --save-dev electron

 npm install --save-dev electron-packager

 npm install --save-dev electron-installer-dmg
```

```bash

 npm run windows-release

```

Despues de que se ejecuten los comandos se generara una carpeta llamada Ejecutable la cual a su vez tendra una carpeta llamada loteria, la cual es donde se encuentran todos los archivos y el ejecutable

## Segunda ejecución 

La segunda ejecución es mas sencilla dado que ya estan todas las librerias necesarias instaladas y simplemente despues de hacer los cambios de imagenes, audio, y textos que se van a decir al momento de lanzar la carta, se ejecuta el siguiente comando.

```bash

 npm run windows-release

```

## Autor

Jonathan Noe Viramontes Ramirez

jonathan.viramontes.ramirez@gmail.com

656-698-8971