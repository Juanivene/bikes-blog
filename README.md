# Blog de Motos

Este es un proyecto de un blog de motos desarrollado con **Next.js** y **Tailwind CSS**. El proyecto utiliza **JSON Server** para gestionar los datos de las motos y permite la incorporación de archivos **Markdown**, que se transforman a HTML para su visualización.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para la creación de aplicaciones web con renderizado del lado del servidor (SSR) y generación estática de sitios (SSG).
- **Tailwind CSS**: Framework de CSS basado en clases utilitarias para diseñar interfaces web personalizadas y responsivas rápidamente.
- **JSON Server**: Simulador de una API RESTful para manejar los datos de las motos de manera sencilla.
- **Markdown**: Lenguaje de marcado ligero utilizado para describir los detalles de cada moto en formato texto, que luego se convierte a HTML.

## Instalación y Ejecución

Para instalar y ejecutar el proyecto, sigue estos pasos:

1. **Instalar las dependencias**:

   Usa uno de los siguientes comandos dependiendo del gestor de paquetes que uses:

   - Si usas **pnpm**:

     ```bash
     pnpm install
     ```

   - Si usas **npm**:
     ```bash
     npm install
     ```

   Este comando instalará todas las dependencias necesarias para el funcionamiento del proyecto, incluyendo Next.js, Tailwind CSS y otras librerías necesarias.

2. **Ejecutar el servidor de datos**:

   Después de instalar las dependencias, necesitas iniciar el servidor de **JSON Server** para gestionar los datos de las motos. Usa uno de los siguientes comandos:

   - Si usas **pnpm**:

     ```bash
     pnpm run server
     ```

   - Si usas **npm**:
     ```bash
     npm run server
     ```

   Este comando iniciará el servidor local de **JSON Server**, simulando una API RESTful para manejar los datos de las motos.

3. **Ejecutar la aplicación en desarrollo**:

   Finalmente, para ejecutar la aplicación web en modo desarrollo, usa uno de los siguientes comandos:

   - Si usas **pnpm**:

     ```bash
     pnpm dev
     ```

   - Si usas **npm**:
     ```bash
     npm run dev
     ```

   Este comando iniciará el servidor de desarrollo de Next.js. Podrás acceder a la aplicación en tu navegador en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

- **pages/**: Contiene las páginas principales de la aplicación, como la página de inicio y las páginas de detalles de las motos.
- **public/**: Contiene los archivos estáticos de la aplicación, como imágenes y fuentes.
- **styles/**: Contiene los archivos de estilo personalizados, junto con la configuración de Tailwind CSS.
- **data/**: Contiene los archivos Markdown con los detalles de cada moto que se muestran en el blog.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un **fork** y enviar un **pull request** con tus mejoras o correcciones.

## Licencia

Este proyecto está bajo la licencia MIT.
