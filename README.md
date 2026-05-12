# JS: Filtro Dinámico de Productos

Aplicar lógica de programación y manipulación del DOM para filtrar datos en tiempo real.

### Instrucciones
1. Crea un página (sin frameworks) que muestre una lista de productos y permita filtrarlos dinámamente.
2. Puedes utilizar el API en https://fakestoreapi.com/ 

Debes partir de un arreglo de productos en JavaScript, por ejemplo:
Ejemplo: 
```javascript
const productos = [
  { nombre: "Laptop", categoria: "Tecnología" },
  { nombre: "Playera", categoria: "Ropa" },
  { nombre: "Celular", categoria: "Tecnología" },
  { nombre: "Zapatos", categoria: "Ropa" }
];
```
--- 

### Funcionalidades requeridas
1. Mostrar todos los productos en pantalla
2. Filtrar productos por:
Nombre (campo de texto)
Categoría (elemento select)
3. Mostrar un mensaje cuando no haya resultados


---

### Consideraciones
1. Utiliza el método filter() para manipular datos
2. Utiliza los eventos para manejar cuando el valor en el campo de texto cambia y la selección en el select
3. Render dinámico en el DOM (innerHTML o creación de elementos)
4. Separar:
lógica de datos
render de UI

--- 

### Consideraciones
1. La lista debe actualizarse en tiempo real sin redirigir al usuario 
2. Evita duplicar lógica
Mantén el código organizado

--- 


### Uso de IA
Puedes usar IA para mejorar la estructura del código, debes agregar un archivo PROMPTS.md con el prompt que utilizaste 
**Uso exclusivo en Github Copilot (revisa el repositorio que crea esta asignación en el apartado de Agentes)**

***Ejemplo de prompt**
"Optimiza este código JavaScript para hacerlo más limpio y modular"

---  

## Entregable
Archivo HTML
Archivo CSS
Archivo JS
README.md con:
Explicación de cómo funciona el filtro
Qué parte fue asistida por IA

El filtro lee lo que esta escrito en el campo de busqueda, y lee la categoria que esta seleccionada, luego ve si alguno de los nombres de los productros incluyen lo que se escribio en el campo de busqueda (no se pide el nombre exacto) y checa si si hay productos que lo incluyan, que esten dentro de la categoria seleccionada.

