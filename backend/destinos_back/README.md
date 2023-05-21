## Clonando el repositorio
Eelegir el directorio de trabajo y ejecutar el siguiente comando
```
$ git clone https://github.com/FrancoGL/ISPC-FullStack.git
```
Luego, nos movemos a la carpeta del proyecto
```
$ cd ISPC-FullStack/backend/destinos_back/
```
***
## Dependencias
Para instalar las dependencias necesarias corremos el comando

```
$ pip install -r requirements.txt
```
*Si es de tu preferencia puedes crear un [entorno virtual](https://docs.python.org/es/3/library/venv.html)*
***
## Creación de la base de datos, migración

Para instalar la base de datos en la aplicacion creamos una carpeta llamada "settings" la cual contiene las configuraciones de nuestro proyecto en dos archivos "base.py" y "local.py" este ultimo archivos es en donde esta la configuración de la base de datos de cada colaborardor en particular, es por esto que para no generar conflictos con nuestras bbdd locales tenemos ingorado el archivo "local.py" 
```
destinos_back
├── settings
│   ├── local.py
│   └── base.py
├── __init__.py
├── asgi.py
├── urls.py
└── wsgi.py
```


Para conectar MySql el primer paso es tener la base de datos creada para poder conectarse a ella con Django, luego debemos crear el archivo 'local.py' previamente mencionado y copiar este bloque de código.

```
from .base import *
import os


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'nombre-de-la-base-de-datos',
        'USER': 'user',
        'PASSWORD': 'password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```
*Es importante verificar que tus credenciales estén correctas para evitar errores.* 

Por último, se deben realizar las migraciones necesarias para generar las tablas utilizando
```
$ python manage.py migrate 
```
***
## Superuser
Para crear un nuevo superuser procederemos de la siguiente manera:

Desde la terminal en la carpeta raiz ejecutamos :

```
$ python manage.py createsuperuser
```

El comando ejecutará un command-line que nos pedirá ingresar un usuario, un correo electrónico y una contraseña.

Si presionamos enter sin haber ingresado nada cuando nos pide un usuario, toma por defecto el nombre de usuario del sistema. Sino podemos ingresar el nombre de usuario deseado.

Luego, nos pide un correo, el cual puede estar en blanco, ya que no se usa para acceder al panel administrativo.

La contraseña puede ser arbitraria, aunque si Django detecta que es una contraseña muy sencilla(números consecutivos, todas letras minusculas, etc) nos mostrará un mensaje diciendonos que la contraseña es debil y si qeuremos continuar con la misma, si queremos seguir con esa contraseña presionamos "y" y si por el contrario queremos cambiarla por una más segura presionamos "n".
***

## Probando el Servidor
Por último nos queda comprobar que todo funcione correctamente al levanatar el servidor, para ello debemos porsicionarnos a la altura del archivos "manage.py" y ejecutar el siguiente comando:
```
$ python manage.py runserver
```
Este comando abre el servidor en la dirección http://127.0.0.1:8000/ ó http://localhost:8000

Y ya está corriendo nuestra API REST.

Para acceder a los modelos podemos ir al panel de administracion que nos provee Django, donde ingresaremos las credenciales de nuestro `superuser`:

http://localhost:8000/admin
