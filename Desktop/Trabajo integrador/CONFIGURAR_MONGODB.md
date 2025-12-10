# 🗄️ CONFIGURAR MONGODB - GUÍA RÁPIDA

## ⚠️ ERROR ACTUAL
```
Error conectando a MongoDB: connect ECONNREFUSED ::1:27017
```

Esto significa que no tienes MongoDB instalado localmente.

---

## ✅ SOLUCIÓN RECOMENDADA: MongoDB Atlas (Gratis)

### Paso 1: Crear Cuenta
1. Ve a: https://www.mongodb.com/cloud/atlas/register
2. Regístrate con email o Google
3. Es **100% GRATIS** para el plan básico

### Paso 2: Crear Cluster
1. Selecciona **M0 Sandbox** (FREE)
2. Elige una región cercana (ej: AWS - São Paulo)
3. Clic en "Create Cluster"
4. Espera 3-5 minutos mientras se crea

### Paso 3: Configurar Acceso
1. **Database Access:**
   - Clic en "Database Access" (menú izquierdo)
   - Clic en "Add New Database User"
   - Username: `admin` (o el que quieras)
   - Password: Genera una contraseña segura (guárdala)
   - Clic en "Add User"

2. **Network Access:**
   - Clic en "Network Access" (menú izquierdo)
   - Clic en "Add IP Address"
   - Clic en "Allow Access from Anywhere" (0.0.0.0/0)
   - Clic en "Confirm"

### Paso 4: Obtener Connection String
1. Vuelve a "Database" (menú izquierdo)
2. Clic en "Connect" en tu cluster
3. Clic en "Connect your application"
4. Copia el string (se ve así):
   ```
   mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### Paso 5: Actualizar .env
Edita `backend/.env` y reemplaza la línea MONGODB_URI:

```env
MONGODB_URI=mongodb+srv://admin:TU_PASSWORD_AQUI@cluster0.xxxxx.mongodb.net/canchas?retryWrites=true&w=majority
```

**IMPORTANTE:** 
- Reemplaza `<password>` con tu contraseña real
- Agrega `/canchas` antes del `?` para especificar la base de datos

### Paso 6: Reiniciar Backend
```bash
cd backend
npm start
```

Deberías ver: `MongoDB conectado exitosamente`

### Paso 7: Poblar Base de Datos
```bash
cd backend
node seed.js
```

Deberías ver: `10 canchas creadas exitosamente`

---

## 🔄 ALTERNATIVA: MongoDB Local (Más Complejo)

Si prefieres instalar MongoDB localmente:

### Windows
1. Descarga: https://www.mongodb.com/try/download/community
2. Instala MongoDB Community Server
3. Inicia el servicio MongoDB
4. Mantén `MONGODB_URI=mongodb://localhost:27017/canchas` en `.env`

### Verificar que MongoDB está corriendo:
```bash
mongosh
```

Si funciona, MongoDB está instalado correctamente.

---

## ✅ VERIFICACIÓN

Después de configurar, deberías ver en la consola del backend:

```
Servidor corriendo en puerto 5000
MongoDB conectado exitosamente
```

Si ves esto, ¡estás listo! Continúa con:
```bash
node seed.js
```

---

## 🐛 PROBLEMAS COMUNES

### "Authentication failed"
- Verifica que la contraseña en el connection string sea correcta
- No uses caracteres especiales en la contraseña (o codifícalos)

### "IP not whitelisted"
- Ve a Network Access en Atlas
- Agrega 0.0.0.0/0 para permitir todas las IPs

### "Cannot connect to cluster"
- Verifica tu conexión a internet
- Espera unos minutos, el cluster puede estar iniciándose

---

## 📝 EJEMPLO COMPLETO DE .env

```env
PORT=5000
MONGODB_URI=mongodb+srv://admin:MiPassword123@cluster0.abc123.mongodb.net/canchas?retryWrites=true&w=majority
JWT_SECRET=mi_secreto_super_seguro_12345_cambiar_en_produccion
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
FRONTEND_URL=http://localhost:3000
```

---

## 🎯 RESUMEN RÁPIDO

1. Crea cuenta en MongoDB Atlas
2. Crea cluster gratuito M0
3. Crea usuario de base de datos
4. Permite acceso desde cualquier IP
5. Copia connection string
6. Pega en `backend/.env` (línea MONGODB_URI)
7. Reinicia backend
8. Ejecuta `node seed.js`

**Tiempo estimado: 5-10 minutos**

---

## ✅ SIGUIENTE PASO

Una vez que veas "MongoDB conectado exitosamente", ejecuta:

```bash
cd backend
node seed.js
```

Luego inicia el frontend:
```bash
cd frontend
npm start
```

¡Y listo! Tu aplicación estará funcionando en http://localhost:3000
