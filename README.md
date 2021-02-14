# Software
Debemos asegurarnos que tenemos mongoDB en nuestra computadora para eso nos dirigimos a la pagina oficial 
y descargamos el instalador (https://www.mongodb.com/try/download/community) de mongoDB server y lo instalamos.

# Configuraciones 
Una vez instalado esta sera la ruta por defecto de instalación  por defecto C:\Program Files\MongoDB\Server\4.4 aqui
encontraremos una carpeta bin que contiene nuestros apps llamada mongo y mongod entonces para que funcionen y poderlos
ejecutar debemos agregarlos a nuestro path para eso haremos lo siguiente:
 1. Nos dirigiremos a variables de entorno de nuestra pc 
 2. Una vez en nuestras variables nos dirigiremos en la variable path 
 3. Agregaremos una ruta que será esta C:\Program Files\MongoDB\Server\4.4\bin
 4. Ahora ejecutamos en la consola mongod --version y funciona, sin embargo para que se mantenga ejecutando debemos.
 5. Dirigirnos a la unidad C y ahi crearemos una carpeta con el nombre data y dentro de ella otra con el nombre db 
 6. Enotonces quedaria de esta manera C:\data\db y ahora ejecutamos de nuevo el comando anterior y funciona perfectamente.

# Ejecución de MongoDb 
 1. Ejecutamos el comando mongod para correr el servidor local
 2. En otra consola ejecutamos el comando mongo para conectarse al nuestro servidor local
