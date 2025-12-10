# 🚀 Instrucciones de Instalación y Ejecución

## Requisitos Previos
- Node.js (v14 o superior)
- MongoDB (local o MongoDB Atlas)
- Cuenta de Gmail para envío de emails

## 📦 Instalación

### 1. Backend

```bash
cd backend
npm install
```

### 2. Configurar Variables de Entorno

Crear archivo `backend/.env`:

```env
PORT=5000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/canchas
JWT_SECRET=mi_secreto_super_seguro_12345
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
FRONTEND_URL=http://localhost:3000
```

**Nota sobre EMAIL_PASS:**
- No uses tu contraseña de Gmail normal
- Genera una "Contraseña de aplicación" en tu cuenta de Google:
  1. Ve a tu cuenta de Google
  2. Seguridad → Verificación en dos pasos (actívala si no está)
  3. Contraseñas de aplicaciones → Generar
  4. Usa esa contraseña en EMAIL_PASS

### 3. Inicializar Base de Datos

```bash
cd backend
node seed.js
```

Esto creará 6 canchas de ejemplo.

### 4. Iniciar Backend

```bash
cd backend
npm start
```

El servidor estará en: http://localhost:5000

### 5. Frontend

En otra terminal:

```bash
cd frontend
npm install
npm start
```

La aplicación estará en: http://localhost:3000

## 🎯 Probar la Aplicación

1. **Registrarse**: Ve a http://localhost:3000/register
   - Completa el formulario (recibirás un email de bienvenida)
   
2. **Ver Canchas**: Navega a "Canchas" en el menú

3. **Reservar**: 
   - Haz clic en "Ver Detalles" de una cancha
   - Selecciona fecha y hora
   - Confirma (recibirás email de confirmación)

4. **Mis Reservas**: Ve a "Mis Reservas" para ver tus reservas

## 🌐 Despliegue

### Backend en Vercel

```bash
cd backend
vercel
```

### Frontend en Vercel

```bash
cd frontend
vercel
```

Recuerda configurar las variables de entorno en el dashboard de Vercel.

### Alternativas de Despliegue Backend
- **Render**: https://render.com
- **Railway**: https://railway.app
- **Heroku**: https://heroku.com

## ✅ Checklist de Requisitos Cumplidos

### General
- ✅ Frontend y Backend separados
- ✅ README.md completo
- ✅ Repositorio listo para GitHub

### Frontend
- ✅ React.js
- ✅ Responsivo (320px - 2000px)
- ✅ Contrastes accesibles
- ✅ useState y useEffect
- ✅ Custom Hook (useAuth)
- ✅ react-router-dom con 6 rutas
- ✅ useParams en /canchas/:id
- ✅ Formularios con validación
- ✅ localStorage
- ✅ Componentes reutilizables
- ✅ Código limpio (DRY, KISS, YAGNI)

### Backend
- ✅ Node.js + Express
- ✅ Rutas de autenticación (login/register)
- ✅ Rutas protegidas con JWT
- ✅ Middlewares de validación
- ✅ bcrypt para contraseñas
- ✅ JWT para autenticación
- ✅ Variables de entorno
- ✅ Envío de emails (nodemailer)
- ✅ MongoDB con Mongoose

## 🐛 Solución de Problemas

### Error de conexión a MongoDB
- Verifica que MONGODB_URI esté correcta
- Si usas MongoDB Atlas, permite tu IP en Network Access

### Emails no se envían
- Verifica EMAIL_USER y EMAIL_PASS
- Asegúrate de usar contraseña de aplicación de Google
- Revisa que la verificación en dos pasos esté activa

### CORS Error
- Verifica que el backend esté corriendo en puerto 5000
- El CORS ya está configurado en el backend

## 📝 Notas Adicionales

- El diseño usa gradientes morados/azules temáticos de deportes
- Las imágenes son de Unsplash (gratuitas)
- El sistema valida que no se reserven canchas en el mismo horario
- Los tokens JWT expiran en 7 días
