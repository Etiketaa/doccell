# Doc Cell E-commerce

## 📱 Descripción
Doc Cell es una plataforma de comercio electrónico especializada en la venta de teléfonos móviles y accesorios. El proyecto está construido utilizando tecnologías modernas y ofrece una experiencia de compra intuitiva y segura para los usuarios.

## ⚡ Características Principales
- Catálogo de productos con filtros y búsqueda
- Carrito de compras
- Sistema de autenticación de usuarios
- Panel de administración para gestión de productos
- Proceso de pago seguro
- Historial de pedidos
- Diseño responsive

## 🛠️ Tecnologías Utilizadas
- React.js - Framework Frontend
- Node.js - Runtime de JavaScript
- Express - Framework Backend
- MongoDB - Base de datos
- Firebase Authentication - Sistema de autenticación
- Tailwind CSS - Framework de estilos
- Stripe - Procesamiento de pagos

## 📋 Prerrequisitos
```bash
Node.js >= 14.0.0
MongoDB >= 4.0.0
npm >= 6.0.0
```

## 🚀 Instalación y Configuración

1. Clonar el repositorio
```bash
git clone https://github.com/your-username/doc-cell-ecommerce.git
cd doc-cell-ecommerce
```

2. Instalar dependencias
```bash
# Instalar dependencias del backend
cd backend
npm install

# Instalar dependencias del frontend
cd ../frontend
npm install
```

3. Configurar variables de entorno
```bash
# Backend (.env)
PORT=5000
MONGODB_URI=tu_uri_de_mongodb
JWT_SECRET=tu_jwt_secret
STRIPE_SECRET_KEY=tu_stripe_secret_key

# Frontend (.env)
REACT_APP_API_URL=http://localhost:5000
REACT_APP_FIREBASE_CONFIG=tu_firebase_config
```

4. Iniciar la aplicación
```bash
# Iniciar backend
cd backend
npm run dev

# Iniciar frontend
cd frontend
npm start
```

## 📁 Estructura del Proyecto
```
doc-cell-ecommerce/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   └── utils/
│   └── package.json
└── README.md
```

## 🔑 Funcionalidades Principales

### Para Usuarios
- Registro y login de usuarios
- Navegación por categorías de productos
- Búsqueda avanzada de productos
- Gestión del carrito de compras
- Proceso de checkout
- Seguimiento de pedidos

### Para Administradores
- Gestión de productos (CRUD)
- Gestión de usuarios
- Visualización de estadísticas
- Control de inventario
- Gestión de pedidos

## 🤝 Contribución
Las contribuciones son bienvenidas. Para cambios importantes, por favor abre primero un issue para discutir qué te gustaría cambiar.

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Contacto
- Nombre del Desarrollador - [@tu_twitter](https://twitter.com/tu_twitter)
- Email - tu_email@ejemplo.com
- Link del Proyecto: [https://github.com/your-username/doc-cell-ecommerce](https://github.com/your-username/doc-cell-ecommerce)
