# TiendaConReact

Lo primero que hicimos fue intalar Vite y TailwindCSS 

<!-- codigo terminal para intalar Vite  -->

<!-- npm create vite@latest my-project -- --template react
cd my-project -->

Para instalar Tailwind hay que seguir los pasos de la pagina 
<!-- https://tailwindcss.com/docs/installation/using-vite -->

ORGANIZAMOS LAS CARPETAS EN SRC , CREAMOS UNA CARPETA PAGES DONDE VAN A ESTAR TODAS NUESTRAS PAGINAS Y CREAMOS HOME 

-----------------------------------------

Proximo paso es crear los archivos con los index.jsx , hacer los componentes de cada archivo y
Creamos los componentes y usamos UseRoutes para redirigir desde App .
Tenemos :
Home 
MyAccount
MyOrder
MyOrders
SingIn
NotFound 

---------------------------------------------------
Creamos el Navbar y utilizamos Navlink

---------------------------------------------------

Layout 
<!-- creamos el componente layout para poder encapsular nuestras 
paginas en ese componente y darle los estilos deseados -->

-----------------------------------------------------------

Creamos las card y usamos una Api de Platzi con productos ya cargados 
<!-- export const apiUrl = 'https://api.escuelajs.co/api/v1' -->

Hicimos el estilo de la card con tailwindcss y luego nos fijamos en la api para pasarle los titulos , precios , etc 
hicimos una funcion y creamos un estado en home para recorrer la api , convertirla en json y extraer la info 

----------------------------------------------------------------

Hicimos el detalle al abriri cada producto , que es :
una barrita lateral con las indicaciones del producto (precio, nombre, titulo, etc)
<!-- y colocamos un icono de https://heroicons.com/outline -->
Tambien aprovechamos a cambiar todos los iconos del proyecto , carrito , el de agregar , y las x


----------------------------------------------------
Hicimos que se muestre en el Detail el producto que se esta seleccionando y tambien hicimos que cada que se seleccione un producto se cambie el numero del carrito wn el Nav . 
Proximamente necesitamos que se guarden todos los seleccionados en el detail y en el local Storage . 

--------------------------------------------------