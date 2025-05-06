# Auth-Temp

🛡️ Template de autenticación y registro usando NestJS, JWT, Bcrypt y PostgreSQL.

---

## 📝 Descripción

**Auth-Temp** es un proyecto backend en **NestJS** que implementa un sistema básico de autenticación con funcionalidades de:

- Registro de usuarios
- Login de usuarios
- Validación con JWT
- Hashing de contraseñas con Bcrypt
- Protección de rutas por roles
- Estructura modular lista para escalar

Ideal como base para cualquier aplicación que necesite un sistema de login/register robusto y mantenible.

---

## 🚀 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- TypeScript

---

## 📂 Estructura del proyecto

```
src/
├── auth/
│   ├── decorators/
│   ├── dto/
│   ├── entities/
│   ├── guards/
│   ├── interfaces/
│   ├── strategies/
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   └── auth.service.ts
├── users/
├── app.module.ts
├── main.ts
```

---

## ⚙️ Configuración del proyecto

### 1. Instalación de dependencias

```bash
npm install
```

### 2. Configuración de variables de entorno

Creá un archivo `.env` en la raíz del proyecto con tus credenciales de base de datos:

```env
# PostgreSQL Database Configuration
DB_HOST = localhost
DB_PORT = 5432
DB_USERNAME = postgres
DB_PASSWORD = tu_contraseña
DB_NAME = auth-login
```

---

## ▶️ Ejecución del proyecto

### Desarrollo

```bash
npm run start
```

### Watch mode (reinicio automático)

```bash
npm run start:dev
```

### Producción

```bash
npm run start:prod
```

---

## 🔐 Autenticación

El sistema de autenticación está basado en JWT. Incluye:

- Generación de token al iniciar sesión
- Protección de rutas mediante guards
- Roles personalizados con decoradores
- Interfaz JwtPayload para tipado seguro

---

## ❗ Requisitos

- Node.js v18 o superior
- PostgreSQL configurado y corriendo

---

## 🧩 Futuras mejoras sugeridas

- Documentación con Swagger
- Tests unitarios y de integración
- Recuperación de contraseña y verificación por correo
- Dockerización del entorno

---

## 📬 Contacto

Este proyecto fue desarrollado como base para futuros proyectos con NestJS.  
¿Tenés sugerencias o mejoras? ¡Abrí un issue o forkéalo!

---

## 📄 Licencia

Este proyecto está bajo licencia MIT.
