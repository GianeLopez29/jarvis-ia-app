# 📁 Estructura del Proyecto

```
Trabajo integrador/
│
├── 📄 README.md                    # Documentación principal
├── 📄 INSTRUCCIONES.md             # Guía de instalación
├── 📄 .gitignore                   # Archivos ignorados por Git
│
├── 📂 backend/                     # Servidor Node.js + Express
│   ├── 📂 config/
│   │   ├── db.js                   # Conexión MongoDB
│   │   └── email.js                # Configuración Nodemailer
│   │
│   ├── 📂 middleware/
│   │   ├── auth.js                 # Middleware JWT
│   │   └── validation.js           # Validaciones de formularios
│   │
│   ├── 📂 models/
│   │   ├── User.js                 # Modelo de Usuario (bcrypt)
│   │   ├── Cancha.js               # Modelo de Cancha
│   │   └── Reserva.js              # Modelo de Reserva
│   │
│   ├── 📂 routes/
│   │   ├── auth.js                 # Login y Registro
│   │   ├── canchas.js              # CRUD de Canchas
│   │   ├── reservas.js             # CRUD de Reservas (protegido)
│   │   └── user.js                 # Perfil de Usuario (protegido)
│   │
│   ├── server.js                   # Servidor principal
│   ├── seed.js                     # Script para poblar DB
│   ├── package.json                # Dependencias backend
│   ├── vercel.json                 # Config para Vercel
│   ├── .env.example                # Ejemplo de variables
│   └── README.md                   # Docs del backend
│
└── 📂 frontend/                    # Aplicación React
    ├── 📂 public/
    │   └── index.html              # HTML principal
    │
    ├── 📂 src/
    │   ├── 📂 components/
    │   │   ├── Navbar.js           # Barra de navegación
    │   │   ├── Navbar.css
    │   │   ├── CanchaCard.js       # Componente reutilizable
    │   │   └── CanchaCard.css
    │   │
    │   ├── 📂 hooks/
    │   │   └── useAuth.js          # Custom Hook (localStorage + auth)
    │   │
    │   ├── 📂 pages/
    │   │   ├── Home.js             # Página de inicio
    │   │   ├── Home.css
    │   │   ├── Login.js            # Formulario de login
    │   │   ├── Register.js         # Formulario con validación
    │   │   ├── Auth.css            # Estilos compartidos auth
    │   │   ├── Canchas.js          # Listado de canchas
    │   │   ├── Canchas.css
    │   │   ├── CanchaDetalle.js    # Detalle + Reserva (useParams)
    │   │   ├── CanchaDetalle.css
    │   │   ├── MisReservas.js      # Ruta protegida
    │   │   └── MisReservas.css
    │   │
    │   ├── App.js                  # Router principal
    │   ├── index.js                # Entry point
    │   └── index.css               # Estilos globales
    │
    ├── package.json                # Dependencias frontend
    └── README.md                   # Docs del frontend
```

## 🎨 Características de Diseño

### Paleta de Colores
- **Principal**: #2ecc71 (Verde deportivo)
- **Gradiente**: #667eea → #764ba2 (Morado/Azul)
- **Texto**: #333 (Oscuro) / #666 (Gris)
- **Fondo**: Blanco con sombras suaves

### Responsividad
- **Móvil**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px - 2000px

### Accesibilidad
- Contrastes WCAG AA
- Textos legibles sobre fondos
- Botones con estados hover claros

## 🔐 Seguridad Implementada

1. **Contraseñas**: Hasheadas con bcrypt (10 rounds)
2. **Tokens**: JWT con expiración de 7 días
3. **Variables sensibles**: En archivos .env
4. **CORS**: Configurado en backend
5. **Validaciones**: Frontend y backend

## 📊 Flujo de Datos

```
Usuario → Frontend (React)
    ↓
    Axios HTTP Request
    ↓
Backend (Express) → Middleware (Auth/Validation)
    ↓
MongoDB (Mongoose)
    ↓
Nodemailer → Email al usuario
    ↓
Response → Frontend → localStorage
```

## 🚀 Tecnologías Clave

### Frontend
- React 18
- React Router DOM 6
- Axios
- CSS3 (Grid + Flexbox)

### Backend
- Node.js
- Express 4
- MongoDB + Mongoose
- JWT + bcrypt
- Nodemailer

## 📝 Rutas de la Aplicación

| Ruta | Componente | Protegida | Descripción |
|------|-----------|-----------|-------------|
| `/` | Home | No | Página de inicio |
| `/login` | Login | No | Iniciar sesión |
| `/register` | Register | No | Registro con validación |
| `/canchas` | Canchas | No | Listado de canchas |
| `/canchas/:id` | CanchaDetalle | No* | Detalle (useParams) |
| `/mis-reservas` | MisReservas | Sí | Reservas del usuario |

*Requiere login para reservar

## 🎯 Requisitos Cumplidos

✅ **Frontend**: React, Responsivo, useState/useEffect, Custom Hook, Router, useParams, Formularios con validación, localStorage, Componentes reutilizables

✅ **Backend**: Express, JWT, bcrypt, Middlewares, Rutas protegidas, Emails, MongoDB, Variables de entorno

✅ **General**: README, Estructura organizada, Código limpio, Listo para deploy
