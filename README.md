# VisitApp

# Preámbulo

El registro de visitantes en una empresa en América Latina llega a ser un proceso tedioso y muchas veces de forma manual; lo común es que una persona esté en la recepción tomando nota - a veces con papel y lápiz - de cada visitante. Por razones de seguridad, usualmente piden a cada visitante dejar una identificación, con la cual se puede asegurar que el nombre proporcionado corresponde a la foto de la identificación. Una vez que se corrobora la identidad del visitante, se pide que espere, ya que se tiene que entrar en otro proceso igual de tedioso como lo es “notificar” a la persona visitada sobre la llegada del visitante, que normalmente se lleva a cabo a través de la búsqueda del número de teléfono de la persona visitada y esperar que la persona responda. Si vivimos en la era digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de pedir una identificación, tomamos una foto? ¿Qué tal si agilizamos la “notificación” con un simple mensaje de texto?

## **VisitApp (Solución - Registro de Visitantes)**

**VisitApp** es una web app, desarrollada principalmente para espacios de coworking que quieran cambiar y hacer más eficiente su proceso de registro de visitantes, brindando una experiencia de visita más rápida y cómoda; así como dando solución a la generación de reportes de las visitas y los visitantes.

Nuestra propuesta integra los siguientes elementos:

 - **Experiencia de Usuario:** Da la oportunidad de un registro previo el cual agilizará el ingreso del visitante, así como la generación de
   un “gafete” para cada visita. Además notificará a la persona
   visitada, instantáneamente, reduciendo los tiempos de espera de los
   visitantes en recepción.
   
 
 - **Desarrollo Tecnológico:** Propone una solución al registro de papel y lápiz, agilizando el proceso, además de reducir el uso de recursos 
   naturales. Al hacer uso de la tecnología, como lo es una página web, 
   se hace de este proceso, un proceso transferible y transparente para 
   todas las partes.

   

 - **Caso de Negocio:** Existen muchos lugares y estancias corporativas que aún no cuentan con una solución eficiente para el registro de sus
   visitantes, además, casi no existen soluciones que permitan al   
   usuario ser parte de este proceso.

   

 - **Usabilidad:** Interfaz intuitiva permitiendo que pueda ser manejada por diferentes perfiles de empleados, desde el guardia recepcionista,
   ejecutivos, etc.

## Motivaciones

Generar un cambio en la experiencia de reconocimiento y registro de visitantes en espacios compartidos (ya sea públicos o privados), desarrollando un proceso más amigable que involucre a las dos partes como participantes dando sentido de seguridad y personalización.

## Rename a file

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

## Historias de usuario
-   Yo como visitante quisiera poder ingresar a través de una URL - GitHub Pages
    
-   Yo como visitante quisiera poder elegir la opción de “Registro de Visitante”, para ingresar al formulario de registro. - Botón “Registro de Visita” en HTML principal que redirige al formulario.
    
-   Yo como usuario quisiera llenar el formulario con mis datos, además de poder elegir el nombre de la persona a la que visitaré. - Formulario con inputs y un menú para elegir nombre de persona visitada.
    
-   Yo como usuario quisiera recibir un id para cada registro que realice, mismo que podré entregar a la hora de mi visita para hacer el registro más rápido y eficiente. - Función que retorna el id de documento creado en una base de datos de registros en Firebase.
    
-   Yo como administrador quisiera tener una cuenta que me permitiera ingresar mi nombre de usuario y contraseña para acceder a las funcionalidades de admin.
    
-   Yo como administrador quisiera tener la posibilidad de ingresar el id de registro del visitante para que el sistema envíe una notificación a la persona visitada.
    
-   Yo como administrador quisiera tener la posibilidad de generar un reporte con la información de los registros que sea necesaria (Por día, Por Mes, por Año, Buscar una persona registrada por nombre, buscar un registro por id).
    
-   Yo como administrador quisiera poder generar un gafete de visitante por cada id que se registre.
    
-   Yo como administrador quisiera poder cerrar mi sesión.


## Benchmark

Entre las soluciones existentes para el registro de usuarios, se encontraron dos que brindan funcionalidades específicas para la agilización del registro.

**Sintel - Control y Registro de Visitantes Visitor Web.**
(https://sintel.com.mx/control-y-registro-de-visitantes/)

	Entre las características propuestas se encuentran:
	
![Características Principales](https://i.imgur.com/A2ozAyb.png)

![Más Características](https://i.imgur.com/WWDzxKP.png)




**Visitor Registration**

Las características propuestas se encuentran descritas en el video:
[https://envoy.com/visitor-registration/#video](https://envoy.com/visitor-registration/#video)

## Investigación de Mercado
Se realizó una encuesta a diferentes grupos de personas que visitan regularmente espacios donde se requiere registro.

  

Se descubrió que, aunque el proceso de registro se considera tedioso, también se le considera necesario, pero ninguno lo considera un proceso fácil.

![Gráfico de respuestas de formularios. Título de la pregunta: ¿Cuánto tiempo pasas esperando en recepción, cuando visitas a alguien más en alguno de estos lugares?. Número de respuestas: 7 respuestas.](https://lh5.googleusercontent.com/8xRMbDDn1QrxKGwzVIEVrxLAEeqa8i1TTJ885n9HuZKFmLqAUbg7oeCuLeZ_iGcaFmy7snAeAM2MuiMHnwAhuwN2lmlUy_9Ic-c_geCDGNpkTKHGS8eH6fbzQam7HFUkB-Gg2tdU)

**Casi el 50% de los visitantes consideran que esperan bastante tiempo en recepción.**
  

Al preguntar sobre la mejor experiencia como visitante de este tipo de lugares, se recibieron respuestas como las siguientes:

  

> “Cuando reservas con anticipación”
> 
> “No me registré, la recepcionista consultó las citas y como ya la
> tenia solo me dieron el gafete y me programaron el elevador para subir
> al piso que necesitaba, mi gafete ya decía que elevador y todo, muy
> rápido.”

  

Lo cual nos indica que los visitantes quieren ser una parte activa de este proceso, lo cual se confirma con el resultado de la siguiente pregunta.

  

![Gráfico de respuestas de formularios. Título de la pregunta: Si tuvieras la oportunidad de registrar tu visita a uno de estos lugares (antes de tu llegada), ¿lo harías?. Número de respuestas: 7 respuestas.](https://lh6.googleusercontent.com/FLAqUhTXoceuoMx8EAwZR0QSWwIHPPPUJwLtcOih8e2iUFZ66k2lVTAwqjjRdw5QK72BX4LRObxVKH9soBS8T7Q6k69ji1hslEKj0CMW-Dkpg7z01QlBNokkTF9UsaBbXZCDVlsi)