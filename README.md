# vota_coin


#### Nombre y resumen del proyecto
vota_coin, es un token hecho para ayudar a las personas en base a un crowdfunding por medio de votaciones


### Descripcion del proyecto:

Es una plataforma similar a un crowdfunding por votacion para solicitar una cantidad de vota_coin, los votantes eligen a quien apoyar, los votantes requieren holdear la moneda(similar al lockeo en las auctions de Polkadot) y si se cumple cierta cantidad de votos se entrega esa cantidad de votacoin al solicitante. 


* Un ejemplo de aplicacion:
En Mexico se hallan aproximadamente 8000 personas encarceladas por falta de traductor (Fuentes: Reporte de la Corte Interamericana de Derechos Humanos: [https://www.corteidh.or.cr/sitios/observaciones/OC-29/12_CIM.pdf ](https://www.corteidh.or.cr/sitios/observaciones/OC-29/12_CIM.pdf) pagina 15 seccion iii, 
[https://elpais.com/mexico/2021-07-16/encarcelados-por-no-hablar-espanol-la-agonia-de-los-indigenas-en-las-prisiones-de-mexico.html](https://elpais.com/mexico/2021-07-16/encarcelados-por-no-hablar-espanol-la-agonia-de-los-indigenas-en-las-prisiones-de-mexico.html)

Dada la inaccesibilidad a interpretes y la falta de salarios dignos  a los traductores durante los procesos legales, una aportacion economica podria ayudar al trascurso de los procesos en los que se encuentran al mismo tiempo que se concientiza respecto al problema del solicitante.



Para esto se crea una votacion(similar a un crowdfunding) en la que los holders de la moneda votan por que problema a apoyar, se realizara un minteo de moneda lo suficiente para poder otorgarselo al solicitante(para prevenir inflacion de la moneda, a futuro se planea que se queme una fraccion del gas de la transaccion para cada votacion y que este valor quemado sea el entregado al solicitante, al estar en la red de Moonbeam se requiere usar la moneda de dicha red DEV para pagar el gas, esto se cambiara a futuro).



Se divide entres estilos de votaciones:

* Votacion Libre:
No se almacena en blockchain, no requiere registro, cualquiera puede votar y el voto se almacena en un servidor central, esta votacion existe para poder viralizar e informar a la poblacion que no desea comprar criptomonedas, personalmente considero que esa es una limitante en el ecosistema cripto, al haber tantas estafas y tanta mala comunbicacion en los medios hay mucha gente que no planea invertir a corto plazo, pero pueden apoyar compartiendo informacion, el link de la votacion y atraer a mas participantes sin tener conocimientos de criptomonedas

* Votacion con registro:
No se almacena en blokchain, requiere registro, cualquier usuario con una cuenta verificada(al momento solo con email) puede votar, el voto se almacena en un servidor central que valida la cuenta, esta votacion existe para prevenir el uso de bots(que podrian inflar la votacion artificialmente como en Twitter) para usuarios que no poseen conocimientos de criptomonedas, puede o no limitarse a un solo voto por persona(al momento la cantidad de votos es ilimitada)

* Votacion para holders:
Se almacena en blockchain, no requiere registro, requiere tener una cuenta en la wallet(red Moonbase Alpha) con al menos 100 vota_coin, no se almacena en servidor central,el objetivo es propiamente registrar la cantidad de votaciones que posee el solicitante, y pasado cierta cantidad de votos(en este contrato puse 9 votos para testing) la votacion es exitosa y el dueño del contrato llama a la funcion manualmente para mintear la cantidad de votacoin requerida y entregarla a la direccion del solicitante, es la votacion decisiva ya que a partir de esta se entregaran los fondos




#### Categoría del proyecto:

Categoría 2: Smart Contract, Categoría 3: DeFi, Categoría 1: Web3/Blockchain Tooling

#### Link del github

https://github.com/okadath/hackathon_vota_coin


#### Link del video
[https://youtu.be/k2RvNxICaVk](https://youtu.be/k2RvNxICaVk)

demostracion de la plataforma:
[https://youtu.be/k2RvNxICaVk](https://youtu.be/k2RvNxICaVk)


#### icono![alt text](https://github.com/okadath/hackathon_vota_coin/blob/main/nodecore_vote_coin_with_V_in_a_golden_coin_background_white_log_13d0c9e5-58d5-42fa-986d-c989877a4596.png)


### Enlace de demostración del proyecto:
El servidor  de votaciones se halla en la URL
[https://vintaw.com/](https://vintaw.com/)

El smartcontract en Moonbase Alpha se puede visualizar en Moonscan:
[https://moonbase.moonscan.io/address/0x23c2060D32CD4f5B958b4d3D4d66B5C808312298](
https://moonbase.moonscan.io/address/0x23c2060D32CD4f5B958b4d3D4d66B5C808312298)

Para votar, debe tener la criptomoneda "DEV" (de la red de prueba Moonbeam) en su cuenta de billetera. 
Para configurar la cuenta en la red de Moonbase hay que agregar a la wallet de Metamask la red, como se indica en la siguiente pagina [https://docs.moonbeam.network/builders/get-started/networks/moonbase/#connect-metamask](https://docs.moonbeam.network/builders/get-started/networks/moonbase/#connect-metamask)
(tambien pueden hacer click en el boton connect del servidor de votaciones)

La relación entre DEV y Vota_coin es la misma relación entre las criptomonedas BNB y Cake. Para agregar la moneda DEV a su cuenta, haga clic en el siguiente enlace. [https://apps.moonbeam.network/moonbase-alpha/faucet/](https://apps.moonbeam.network/moonbase-alpha/faucet/)





#### Nombres/pseudónimos de los miembros del equipo;
* Gustavo Flores, Okadath, [https://twitter.com/okadath](https://twitter.com/okadath) , 
[https://www.tiktok.com/@nodecore](https://www.tiktok.com/@nodecore)
 


### Cómo utiliza el proyecto Substrate u otra tecnología:

Es un smart contract de solidity deployado sobre la red de pruebas de Moonbean, Moonbase Alpha, pero facilmente toda la integracion entre contratos, logica de las votaciones y demas puede ser reescrita en Rust(simplemente no me dio tiempo de aprender lo suficiente de Rust para hacerlo y al conocer previamente Python elegi ese lenguaje), prefiero con el tiempo convertirlo a substrate ya que la actualizacion  del estilo de votacion implica el desarrollo de un nuevo contrato, y substrate al permitir actualizaciones haria mas facil esta labor.





## Descripción del proyecto

### ¿Qué impacto y utilidad tiene la presentación en el ecosistema Polkadot/Kusama/Substrate?
Posee varias utilidades en el ecosistema, primero la concientizacion de un sinnumero de problemas que pueden ser resueltos si una comunidad decide difundir y  apoyar a una causa, sus votos se convierten tangiblemente en una solucion para alguien.
Al mismo tiempo darle la capacidad a usuarios no conocedores del tema cripto de integrarse con sencillez y sin una interfaz compleja al ecosistema cripto(personalmente el diseño y uso de la interfaz de polkadot js se me hace una pesadilla, posee una curva de aprendizaje gigantesca para novatos, ¿que se puede esperar de gente que cree que es una estafa las criptomonedas? hay que integrarlos suavenmente y que sientan que sus acciones producen un cambio, por ello trate de hacer la interfaz lo mas sencilla posible para la votacion).



### ¿Cómo contribuye la presentación a la Web 3.0 y la hace avanzar en su conjunto?
Contribuye como un elemento de difusion de como se puede utilizar la web3 para solucionar problemas entre muchas personas simplemente participando, ademas de tratar de guiar al usuario a esta tecnologia tan compleja de una manera sencilla y sobre todo tangible, al mismo tiempo que soluciona problemas tangibles de las personas.
la viralizacion de las votaciones asimismo puede atraer a nuevos usuarios de tecnologias cripto sin que tengan que entrar con aplicaciones de una gran complejidad.




### ¿En qué medida la presentación es nueva y novedosa con respecto a las tecnologías existentes?
No se de plataformas estilo crowdfunding en Polkadot, esta plataforma se inspiro en el sistema de Auctions para las parachains y es similar a este pero mas generico, en vez de votar para una parachain y lockear el dinero, basta con poseer una cantidad del token en la wallet pero de una manera mas sencilla, y con esto se puede presentar un voto que se almacena en la blockchain, con una interfaz menos agresiva para el usuario en la que uno ve directamente el voto y la popularidad de este
Al estar construido sobre la red de pruebas de Moonbase Alpha, se requiere el token DEV para su prueba pero a futuro y con la reescritura a Rust se usara la moneda nativa para transacciones



### ¿Cuál es el nivel de habilidad o conocimiento requerido para construir la presentación?
al momento se requiere para el proyecto el conocimiento de smart contracts en solidity, tanto en su desarrollo como en su levantamiento a produccion, con todo lo que conlleva como la conexion desde el frontend con los contratos 
Este proyecto lo presente con Python por que no conosco lo suficiente de Rust para enlazar el sistema de votaciones con la blockchain, asi como tampoco se como realizar la conexion con eventos emitidos desde el contrato y el frontend(por eso al terminar una votacion hay que recargar la pagina) todos estos detalles espero resolverlos a futuro, pasando todo el codigo de las votaciones de Python a Rust y Substrate, conectando los eventos con el frontend y con algo de suerte lanzando una Auction para una parachain
Asimismo como solo el owner del contrato puede mintear y quemar la moneda no le realice una interfaz a estas dos funciones, pero este sistema se agregara automaticamente a futuro.



### ¿Qué grado de viabilidad tiene la idea? ¿En qué medida es adaptable a otras integraciones? ¿Cómo de sólido es el modelo de negocio?

Al ser un smart contact es posible lanzarlo en cualquier plataforma que permita su integracion(Polygon, Ethereum, Solana, Moonbeam), y en el futuro al pasar el codigo de las votaciones a Rust/Substrate podra interconectarse con el ecosistema polkadot(por ejemplo usan XCM) 

La parte importante y crucial para la viabilidad de este proyecto es la division del sistema de votaciones de una sola votacion a tres para saber que tanta gente apoya una causa tengan o no la criptomoneda, es por ello que aun sin valor economico con el solo echo de difundir los problemas y regiustrarlos se puede realizar un impacto en la sociedad(al estilo change.org)

Es por ello que al ser mas importante la difusion que la especulacion respecto al valor de esta moneda y a que el unico costo es el del servidor central y a la mano de obra para el desarrollo los costos se mantienen bajos, sin necesidad de tener grandes capitales apuyando en una ICO o preventa es un modelo viable a largo plazo(podria lanzarlo en la red de Moonbeam en cuanto resuelva los detalles de los events y Javascript y agregue el minteo y quema automaticos al votar en cuestion de un par de semanas).

Los votantes deben de tener cierta cantidad de vota_coin(100) para que sus votos sean registrados en la blockchain, asi mientras mas personas la posean, mas incremente su valor y  
se quema de una menor cantidad de moneda en cada votacion, pero la cantidad de usuarios no es indispensable para el crecimiento y funcionamiento de las votaciones, minteos y quemas.




#### Pila Tecnologica:

Servidor: 
Python3.8/Django, libreria web3

Frontend:
Librerias de JS: ethers, web3, Metamask

Smartcontract: 
Solidity/Moonbase Alpha Network 


## DEVELOPMENT

en la carpeta 'scripts' se hallan los scripts de buildeo, deploy y prueba de python para el smartcontract, asi como los archivos .sol

buildear para el frontend ubicandose en la carpeta vota_coin/templates/

```sh
yarn init
yarn build
yarn watch 
```

el build creara la carpeta dist con los archivos minimizados, lista para servirse desde un webserver, el build de yarn esta escrito en la direccion en la que se suben los archivos en el servidor de back por medio de html


deshabilitar cache de desarrollo en navegador para evitar que se almacene la version anterior del bundle.js 

correr `yarn build` para exportar al bunlde.js ejecutar en otra consola `yarn watch` para recargar cambios



### ejecutar moonbeam en local

pullear el container y ejecutar
```sh
sudo docker run --rm --name moonbeam_development --network host purestake/moonbeam:v0.26.1 --dev
```

con esto se corre el servidor de prueba de moonbeam para realizar la compilacion del smart contract de una manera rapida, 
almacenar la direccion del contrato, y de la wallet que se usara para deployar el contrato en una variable de ambiente(un archivo .env o en variables de sistema en memoria)

Al ser un smart contract este se debe de buildear con el ide o entorno favorito(yo utilice los scripts de python en el repositorio con la libreria web3 de Python )


 para la ejecucion del servidor

```
secret=0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
address=0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
contract=0x23c2060D32CD4f5B958b4d3D4d66B5C808312298 
```

el entorno esta construido sobre python, hay que instalar python "3.8" y clonar el repositorio y ubicarse en la carpeta vota_coin


```
git clone https://github.com/okadath/hackathon_vota_coin
cd vota_coin/
pipenv shell
```

instalar con alguna de las dos alternativas(pip usa virtualenv, depende de el entorno de python a usar)
```
pipenv install
pip install -r requirements.txt
```

y ejecutar el servidor
```
python manage.py runserver
```
y abrir la direccion indicada en consola 127.0.0.1:8000 (es importante tener el puerto 8000 abierto si se desea utilizar en intranet)




recargar las variables del entorno cada vez que se cambie el contrato a usar saliendo del entorno de python y volviendo a entrar

```
pipenv shell
exit
```

y ejecutar python deploy.py


