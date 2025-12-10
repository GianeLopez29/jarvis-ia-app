# 🚀 INICIO RÁPIDO - 3 PASOS

## ⚠️ IMPORTANTE: Configurar MongoDB Primero

### Opción 1: MongoDB Local
Si tienes MongoDB instalado localmente, el `.env` ya está configurado:
```
MONGODB_URI=mongodb://localhost:27017/canchas
```

### Opción 2: MongoDB Atlas (Recomendado)
1. Ve a https://www.mongodb.com/cloud/atlas
2. Crea una cuenta gratuita
3. Crea un cluster gratuito
4. Obtén tu connection string
5. Edita `backend/.env` y reemplaza la línea MONGODB_URI:
```
MONGODB_URI=mongodb+srv://TU_USUARIO:TU_PASSWORD@cluster.mongodb.net/canchas
```

## 📦 PASO 1: Instalar Dependencias

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## 🗄️ PASO 2: Crear Canchas en la Base de Datos

```bash
cd backend
node seed.js
```

**Resultado esperado:**
```
Conectado a MongoDB
Canchas anteriores eliminadas
10 canchas creadas exitosamente con servicios y promociones
```

## ▶️ PASO 3: Iniciar la Aplicación

### Terminal 1 - Backend
```bash
cd backend
npm start
```
**Debe mostrar:** `Servidor corriendo en puerto 5000`

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```
**Se abrirá automáticamente:** http://localhost:3000

## ✅ VERIFICACIÓN RÁPIDA

1. **Ver Canchas**: Clic en "Canchas" en el menú
   - Deberías ver 10 canchas con imágenes
   - Algunas tienen badges de descuento (15% OFF, 20% OFF, etc.)
   - Cada cancha muestra iconos: 🚪 🚿 🅿️ 💡

2. **Ver Detalle**: Clic en "Ver Detalles" de cualquier cancha
   - Verás imagen grande
   - Instalaciones disponibles
   - Precio base
   - Servicios adicionales (indumentaria, buffet, árbitro, pelota)
   - Calculadora de precio en tiempo real

3. **Registrarse**: Clic en "Registrarse"
   - Completa el formulario
   - Las validaciones funcionan en tiempo real

4. **Hacer Reserva**: 
   - Inicia sesión
   - Ve a una cancha
   - Selecciona fecha, hora, duración
   - Marca servicios adicionales
   - Observa cómo cambia el precio total
   - Confirma la reserva

5. **Ver Mis Reservas**: Clic en "Mis Reservas"
   - Verás tu reserva con todos los detalles
   - Precio total pagado
   - Servicios contratados

## 🎯 CARACTERÍSTICAS DESTACADAS

### Precios Dinámicos
- **Fútbol Papi**: $2000/h → $1500/h (25% OFF Promo Seniors)
- **Futsal Premium**: $2500/h → $2125/h (15% OFF Promo Mundial)
- **Fútbol 11**: $8000/h → $6400/h (20% OFF Promo Torneos)

### Servicios Adicionales
- Indumentaria: $800-$2000
- Buffet: $800-$3000
- Árbitro: $1500-$4000
- Pelota: $200-$800

### Instalaciones Premium
- Canchas con duchas: +$500/hora adicional
- Todas tienen vestidores incluidos

## 🐛 Solución de Problemas

### Error: "Cannot connect to MongoDB"
- Verifica que MongoDB esté corriendo (si es local)
- Verifica tu connection string en `.env` (si es Atlas)
- En Atlas, asegúrate de permitir tu IP en Network Access

### Error: "Port 5000 already in use"
- Cambia el puerto en `backend/.env`: `PORT=5001`
- Reinicia el backend

### Error: "CORS"
- Verifica que el backend esté en puerto 5000
- El CORS ya está configurado para localhost:3000

### No se ven las canchas
- Verifica que ejecutaste `node seed.js`
- Verifica que el backend esté corriendo
- Abre la consola del navegador (F12) para ver errores

## 📧 Configurar Emails (Opcional)

Para recibir emails de confirmación:

1. Usa una cuenta de Gmail
2. Activa verificación en 2 pasos
3. Genera una "Contraseña de aplicación"
4. Edita `backend/.env`:
```
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
```

Si no configuras esto, la app funciona igual pero no envía emails.

## 🎉 ¡LISTO!

Tu aplicación de reservación de canchas está funcionando con:
- ✅ 10 canchas con imágenes reales
- ✅ 8 tipos de deportes
- ✅ 7 promociones activas
- ✅ Servicios adicionales
- ✅ Cálculo de precios dinámico
- ✅ Sistema completo de reservas

**¡Disfruta tu aplicación!** 🏆⚽🎾🏀
