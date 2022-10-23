# test_smart_contract



## DEV

ligth server

```sh
python3 -m http.server 8000
```

crear proyecto minimo JS


```sh
yarn init
yarn build
yarn watch 
```

el build creara la carpeta dist con los archivos minimizados, lista para servirse desde un webserver


deshabilitar cache de desarrollo en navegador, 

correr yarn build para exportar al bunlde.js ejecutar en otra consola yarn watch para recargar cambios



ejecutar moonbeam en local
pullear el container y ejecutar
```sh
sudo docker run --rm --name moonbeam_development --network host purestake/moonbeam:v0.26.1 --dev
```


en .env guardar las variables 
```sh
secret=0xXXXXXXXXXXXXXXXXXXXXXXX
address=0xXXXXXXXXXXXXXXXXXXXXXXX
contract=0xXXXXXXXXXXXXXXXXXXXXXXX
```

recargar las variables del entorno cada vez que se cambie el contrato a usar

```
pipenv shell
exit
```

y ejecutar python deploy.py


