# TiendaConReact

## 🌐 Página

Puedes visitar la versión funcional del proyecto en el siguiente enlace:
[tienda-react-henna.vercel.app](https://tienda-react-henna.vercel.app/)

### Vista previa

![Vista previa del proyecto](https://github.com/user-attachments/assets/5e7e4050-149e-40c6-8810-1035f8e518e0)
<img src="![image](https://github.com/user-attachments/assets/be1c6f86-6e5b-45e2-93af-ad5317b84403)"/>
"

---

## 🔧 Paso a paso para crear la tienda

### 1. Instalación de Vite y TailwindCSS

#### Instalación de Vite

Ejecuta los siguientes comandos en tu terminal:

```bash
npm create vite@latest my-project -- --template react
cd my-project
```

#### Instalación de TailwindCSS

Sigue los pasos descritos en la [documentación oficial de TailwindCSS](https://tailwindcss.com/docs/installation/using-vite) para integrarlo con Vite.

---

### 2. Organización de carpetas

En la carpeta `src`:

* Crea una carpeta llamada `pages` para alojar las páginas de la aplicación.
* Dentro de `pages`, crea el archivo `Home/index.jsx`.

---

### 3. Creación de componentes y rutas

* Crea los componentes correspondientes para cada página:

  * Home
  * MyAccount
  * MyOrder
  * MyOrders
  * SignIn
  * NotFound

* Usa `useRoutes` para gestionar las rutas desde el archivo `App.jsx`.

---

### 4. Navbar

Crea el componente `Navbar` y utiliza `NavLink` para facilitar la navegación entre las páginas.

---

### 5. Layout

Crea el componente `Layout` para encapsular las páginas y aplicar estilos consistentes.

---

### 6. Tarjetas de productos (Cards)

#### Integración con la API

Usamos la API de Platzi con productos pre-cargados:

```javascript
export const apiUrl = 'https://api.escuelajs.co/api/v1';
```

* Estiliza las tarjetas con TailwindCSS.
* En el componente `Home`, crea una función que recorra la API, la convierta a JSON y extraiga la información necesaria para renderizar las tarjetas.

---

### 7. Detalle del producto

* Crea un componente lateral ("sidebar") para mostrar los detalles del producto seleccionado (precio, nombre, descripción, etc.).
* Usa íconos de [Heroicons](https://heroicons.com/outline).
* Cambia todos los íconos del proyecto, incluyendo los del carrito, agregar y cerrar ("X").

---

### 8. Carrito de compras

#### Actualización del carrito

* Al seleccionar un producto, actualiza el número en el ícono del carrito.

#### Órdenes en el carrito

* Crea el componente `OrderCard` para mostrar los productos seleccionados en el `CheckoutSideMenu`. Este funciona como el componente de detalle, pero aparece cuando se selecciona el botón "más" en una tarjeta.

#### Eliminación de productos

* Implementa la función de eliminación de productos en el componente `OrderCard`.

#### Cálculo del total

* Crea una función global para calcular el total de productos seleccionados. Aloja esta función en una carpeta llamada `utils` dentro de `src`.

---

### 9. Historial de compras

#### MyOrder

* Visualiza los productos comprados.

#### MyOrders

* Muestra un listado de todas las compras realizadas. Permite seleccionar una orden para visualizarla en detalle.

---

## 💪 Mejoras futuras

* Persistencia de los datos seleccionados en el carrito utilizando almacenamiento local o una base de datos.
* Incorporación de autenticación y registro para usuarios.
* Mejoras en el diseño responsivo.

---

## 🚀 Tecnologías usadas

* **Vite**: Entorno de desarrollo rápido.
* **React**: Biblioteca para la creación de interfaces de usuario.
* **TailwindCSS**: Framework CSS para estilos rápidos y eficientes.
* **Heroicons**: Íconos SVG.
* **API de Platzi**: Fuente de datos para los productos.

---

## 🔗 Sígueme y dale like

¡Si este proyecto te ha sido útil o inspirador, no olvides darle un ⭐ al repositorio y seguirme para más contenido interesante! 🚀
