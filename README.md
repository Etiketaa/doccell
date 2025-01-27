# Doc Cell

## 📱 Descripción
Doc Cell es una tienda en línea dedicada a la venta de teléfonos móviles y accesorios. Este proyecto fue desarrollado como parte de una práctica académica, implementando un sistema e-commerce funcional usando tecnologías web fundamentales.

## ⚡ Características Principales
- Página de inicio con presentación de productos destacados
- Catálogo de productos organizado por categorías
- Carrito de compras
- Formulario de contacto
- Diseño responsive adaptable a diferentes dispositivos
- Integración con WhatsApp Business para finalizar compras

## 🛠️ Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript
- Python
- Flask
- SQLite

## 🚀 Instalación y Configuración

1. Clonar el repositorio
```bash
git clone https://github.com/Etiketaa/doccell.git
cd doccell
```

2. Crear y activar entorno virtual
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

3. Instalar dependencias
```bash
pip install -r requirements.txt
```

4. Iniciar la aplicación
```bash
python app.py
```

## 📁 Estructura del Proyecto
```
doccell/
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
├── templates/
│   ├── inicio.html
│   ├── accesorios.html
│   ├── carrito.html
│   ├── celulares.html
│   ├── contacto.html
│   └── plantillas.html
├── app.py
├── requirements.txt
└── README.md
```

## 💻 Funcionalidades
- **Página de Inicio**: Presenta los productos destacados y navegación principal
- **Catálogo de Productos**: 
  - Sección de Celulares
  - Sección de Accesorios
- **Carrito de Compras**: 
  - Agregar/eliminar productos
  - Visualizar total
  - Finalizar compra vía WhatsApp
- **Formulario de Contacto**: Para consultas y soporte

## 🔧 Características Técnicas
- **Frontend**:
  - Diseño responsive con CSS Grid y Flexbox
  - JavaScript para interactividad del carrito
  - Integración con WhatsApp Business
- **Backend**:
  - Flask para el servidor web
  - SQLite para almacenamiento de datos
  - Rutas definidas para cada sección

## 📞 Contacto y Soporte
Para cualquier consulta o soporte, puedes:
- Usar el formulario de contacto en la página
- Abrir un issue en el repositorio
- Contactar vía WhatsApp Business

## 📄 Licencia
Este proyecto está disponible como código abierto bajo la Licencia MIT.
