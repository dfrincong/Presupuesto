# Presupuesto
Presupuesto es una página interactiva que permite visualizar el estado de las cuentas, teniendo en cuenta los ingresos, los gastos y si el saldo es positivo o negativo. Para poder realizarlo primero se deben registrar el valor y el tipo de transacción (ingreso o gasto) en un formulario, los cuales se visualizaran en una tabla donde se observará: (id, valor, el tipo de transacción, un botón de edición y un botón de eliminación). Con el botón de edición se podrá editar el valor y el tipo de la fila seleccionada y ccon el botón de eliminación se eliminará la fila seleccionada.

De acuerdo a los datos de la tabla se irá actualizando interactivamente los valores del estado de la cuenta.

> Formulario

![verPokemon](img/formulario.png)

> Tabla

![statsPokemon](img/tabla.png)

> Estado de la cuenta

![statsModificadas](img/estadoCuenta.png)

> [Ver proyecto](https://dfrincong.github.io/Presupuesto/) 

## Características

* Se observa el estado de la cuenta con los datos actuales.
* Se llena el formulario de forma simple.
* Se interactúa con la tabla de manera intuitiva.

## ¿Cómo utilizar?
> A continuación se detalla como usar la página.

### 1. Formulario
- Se ingresa el valor a registrar.
- Se selecciona el tipo de registro (ingreso o gasto).
- Se presiona el botón enviar para guardar la informacíon en una tabla.

### 2. Tabla
- Se agrega el registro a la tabla.
- Se lee el registro.
- Se puede editar el registro (modificando los datos en una caja de dialogo que se abre).
- Se puede eliminar el registro.

## ¿Cómo verlo?
1.	Se clona el repositorio
2.	Se abre el proyecto
3.	Se ejecuta index.html en la web

## Tecnologías usadas
-	html
-	css
-	javascript
-	boxicons (para los íconos de editar y eliminar).

## Funcionalidades
> A continuación se muestra que se utilizó para la gestión de los datos:
- Para enviar y/o guardar lod datos (method: "POST")
- Para editar los datos (method: "PUT")
- Para eliminar los datos (method: "DELETE")

## Autor
> Daniel Felipe Rincón Guerrero


