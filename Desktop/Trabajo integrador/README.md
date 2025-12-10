# ⚽ Sistema de Reservación de Canchas Deportivas

## 📋 Descripción del Proyecto

Aplicación web full-stack moderna para la gestión y reservación de canchas deportivas. Permite a los usuarios registrarse, autenticarse y realizar reservas de canchas de manera intuitiva y segura, con un sistema de precios dinámico y promociones especiales.

### 🎯 Características Principales

- **Autenticación completa** - Registro y login con JWT
- **Sistema de reservas inteligente** - Con validación de disponibilidad
- **Precios dinámicos** - Según tipo de cancha, duración y servicios
- **Servicios adicionales** - Indumentaria, buffet, árbitro, pelota
- **Instalaciones diferenciadas** - Vestidores vs vestidores + duchas
- **Promociones activas** - Descuentos por temporadas y eventos
- **Panel de usuario** - Gestión de reservas personales
- **Diseño responsivo** - Optimizado para móviles (320px - 2000px)
- **Notificaciones por email** - Confirmación automática
- **Interfaz moderna** - Diseño futbolero con animaciones

## 🛠️ Tecnologías y Librerías Utilizadas

### Frontend
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0", 
  "react-router-dom": "^6.20.1",
  "axios": "^1.6.2",
  "react-scripts": "5.0.1"
}
```

**Características técnicas:**
- **React Hooks** - useState, useEffect, custom hooks
- **React Router** - Navegación con useParams
- **Axios** - Peticiones HTTP al backend
- **CSS3 moderno** - Grid, Flexbox, animaciones
- **Google Fonts** - Poppins (títulos) e Inter (texto)
- **Responsive Design** - Mobile-first approach

### Backend
```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.3",
  "bcrypt": "^5.1.1",
  "jsonwebtoken": "^9.0.2",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "nodemailer": "^7.0.11"
}
```

**Características técnicas:**
- **Express.js** - Framework web robusto
- **MongoDB + Mongoose** - Base de datos NoSQL
- **JWT** - Autenticación stateless
- **bcrypt** - Encriptación de contraseñas
- **Nodemailer** - Envío de emails automático
- **CORS** - Configuración de seguridad

## 🏗️ Arquitectura del Proyecto

```
├── backend/                 # API REST con Express
│   ├── models/             # Modelos de datos (User, Cancha, Reserva)
│   ├── routes/             # Endpoints de la API
│   ├── middleware/         # Autenticación y validaciones
│   ├── config/             # Configuración DB y email
│   └── server.js           # Servidor principal
│
├── frontend/               # Aplicación React
│   ├── src/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/          # Páginas de la aplicación
│   │   ├── hooks/          # Custom hooks (useAuth)
│   │   └── App.js          # Configuración de rutas
│   └── public/
│
└── docs/                   # Documentación del proyecto
```

## 💰 Sistema de Precios Implementado

### Tipos de Canchas y Precios Base
- **Fútbol Papi**: $2,000/hora → $1,500 (25% OFF)
- **Futsal**: $1,800-2,500/hora → desde $1,260 (30% OFF)
- **Fútbol 5**: $3,000-3,500/hora → desde $2,870 (18% OFF)
- **Fútbol 7**: $4,500/hora → $4,050 (10% OFF)
- **Fútbol 11**: $8,000/hora → $6,400 (20% OFF)
- **Tenis**: $2,800/hora
- **Paddle**: $3,200/hora → $2,816 (12% OFF)
- **Básquet**: $3,500/hora

### Servicios Adicionales
- **Indumentaria**: $800 - $2,000
- **Buffet**: $800 - $3,000
- **Árbitro**: $1,500 - $4,000
- **Pelota**: $200 - $800

### Instalaciones Premium
- **Duchas**: +$500/hora adicional
- **Vestidores**: Incluido en todas

## 🎉 Promociones Activas

1. **Promo Mundial** - 15% OFF (Futsal Premium)
2. **Promo Verano** - 10% OFF (Fútbol 7)
3. **Promo Torneos** - 20% OFF (Fútbol 11)
4. **Promo Seniors** - 25% OFF (Fútbol Papi)
5. **Promo Invierno** - 12% OFF (Paddle)
6. **Promo Estudiantes** - 30% OFF (Futsal Económica)
7. **Promo Campeones** - 18% OFF (Fútbol 5 Premium)

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js (v14+)
- MongoDB (local o Atlas)
- Cuenta Gmail (para emails)

### Backend
```bash
cd backend
npm install

# Configurar .env
MONGODB_URI=tu_mongodb_uri
JWT_SECRET=tu_secreto_jwt
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_app

# Poblar base de datos
node seed.js

# Iniciar servidor
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 🌐 Despliegue

### Recomendado: Railway + Vercel
- **Backend**: Railway (ideal para Node.js + MongoDB)
- **Frontend**: Vercel (optimizado para React)

### Comandos de Deploy
```bash
# Frontend en Vercel
vercel --prod

# Backend en Railway
# 1. Conectar repo en railway.app
# 2. Configurar variables de entorno
# 3. Deploy automático
```

## 🎨 Diseño y UX

### Paleta de Colores
- **Verde principal**: #0FA958
- **Verde oscuro**: #0A7A42
- **Blanco**: #FFFFFF
- **Gris suave**: #F7F9F9
- **Negro gráfico**: #1A1A1A

### Tipografías
- **Títulos**: Poppins (700-900)
- **Cuerpo**: Inter (400-500)
- **Botones**: Poppins (600)

### Características UX
- **Animaciones suaves** - Hover effects y transiciones
- **Iconos modernos** - Outline style con backgrounds suaves
- **Menú hamburguesa** - Navegación móvil elegante
- **Calculadora en tiempo real** - Precio dinámico
- **Feedback visual** - Estados de carga y confirmación

## 🔧 Funcionalidades Técnicas

### Frontend
- **Custom Hook useAuth** - Manejo de autenticación y localStorage
- **Rutas protegidas** - Redirección automática
- **Validación de formularios** - En tiempo real
- **Responsive design** - Mobile-first con breakpoints
- **Optimización de imágenes** - Lazy loading y compresión

### Backend
- **Middleware de autenticación** - JWT verification
- **Validación de datos** - Sanitización y validación
- **Manejo de errores** - Responses consistentes
- **Seguridad** - CORS, bcrypt, variables de entorno
- **Email automático** - Confirmaciones y notificaciones

## 📊 Estadísticas del Proyecto

- **Líneas de código**: ~2,500
- **Componentes React**: 7
- **Endpoints API**: 8
- **Modelos de datos**: 3
- **Canchas disponibles**: 10
- **Tipos de deportes**: 8
- **Promociones activas**: 7

## 🎯 Dificultades y Aprendizajes

### 🚧 Principales Dificultades

1. **Cálculo de precios dinámico**
   - Integrar múltiples variables (duración, servicios, promociones)
   - Sincronizar cálculo entre frontend y backend
   - **Solución**: Lógica centralizada en backend con validación

2. **Gestión de estado complejo**
   - Manejo de autenticación persistente
   - Estado de formularios con múltiples servicios
   - **Solución**: Custom hooks y localStorage estratégico

3. **Diseño responsive avanzado**
   - Menú hamburguesa con animaciones
   - Grid layouts adaptativos
   - **Solución**: Mobile-first approach con CSS Grid/Flexbox

4. **Validación de disponibilidad**
   - Evitar reservas duplicadas en mismo horario
   - Validación en tiempo real
   - **Solución**: Middleware de validación en backend

### 🎓 Principales Aprendizajes

1. **Arquitectura Full-Stack**
   - Separación clara de responsabilidades
   - API RESTful bien estructurada
   - Comunicación eficiente frontend-backend

2. **Seguridad Web**
   - Implementación correcta de JWT
   - Encriptación de contraseñas con bcrypt
   - Validación y sanitización de datos

3. **UX/UI Moderno**
   - Diseño system con paleta consistente
   - Animaciones que mejoran la experiencia
   - Responsive design profesional

4. **Gestión de Proyectos**
   - Documentación completa y clara
   - Código limpio y mantenible
   - Deploy y configuración de producción

## 👨‍💻 Autor

Desarrollado como proyecto integrador académico, implementando las mejores prácticas de desarrollo web moderno.

## 📄 Licencia

MIT License - Proyecto educativo

---

## 🔗 Enlaces Útiles

- **Demo**: [Tu URL de deploy]
- **Repositorio**: [Tu GitHub repo]
- **Documentación técnica**: Ver carpeta `/docs`

---

⚽ **¡Gracias por revisar el proyecto!** Si tienes preguntas o sugerencias, no dudes en contactarme.

---

## 👩💻 Autora

**Desarrollado por:** Gianella Lopez  
**Institución:** Universidad Tecnológica Nacional (UTN)  
**Carrera:** Diplomatura en Desarrollo Web Full Stack  
**Tipo de proyecto:** Proyecto Final Integrador  

Este sistema fue desarrollado como proyecto final de la Diplomatura en Desarrollo Web Full Stack de la UTN, implementando las mejores prácticas de desarrollo web moderno y demostrando competencias en tecnologías frontend y backend.