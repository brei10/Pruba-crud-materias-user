                !!! Crear Materia ¡¡¡

```http://localhost:8080/materia/crear-materia ```

    body JSON example: {
     "materia": "ingles",
      "semestre": 3,
     "carrera": "idiomas",
    }

actualizar una materia / id de la materia a actualizar   PUT 
http://localhost:8080/materia/actualizar/6369acf5ea6774c7ffffee81 ```  
!por el body se manda en formato JSON lo que se quiere actualizar. en la respuesta se muestran los cambios!


obtener una materia por medio de su id de mongo GET
http://localhost:8080/materia/obtener/6369ad68ea6774c7ffffee87 ``` 


obtener materias 
http://localhost:8080/materia/obtener?limite=10 ````


eliminar materia de la base de datos
http://localhost:8080/materia/borrar/636a5366323f2feba9528e4c```


                                         CRUD DE USUARIOS

CREAR USUARIO


DELETE- ELIMINAR USUARIO POR ID 
http://localhost:8080/user/delete/636a412f29012ef5f6e3069a

GET- OBTENER USUARIOS 
http://localhost:8080/user/obtener

GET- OBTENER UN USUARIO POR SU CORREO
http://localhost:8080/user/obtener/tes41@gmail.co (esta muestra en la response "soy hombre" o "soy mujer" y su fullname)

PUT- ACTUALIZAR USUARIO CON ID 
http://localhost:8080/user/actualizar/636a4164cf1424ff09cb4edc






