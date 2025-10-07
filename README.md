# 🎮 Mi Biblioteca de Juegos

Una aplicación web moderna desarrollada con **React** para gestionar y visualizar tu colección personal de videojuegos. Permite filtrar por estado, géneros y ver estadísticas detalladas de tiempo jugado.

## 🚀 Demo en Vivo

[Ver la aplicación en GitHub Pages](https://kur0h3i.github.io/myVideoGamesOnAWeb)

## ✨ Características

- **🎯 Filtros avanzados**: Filtra por estado (Jugando, Terminado, Locura, Todos)
- **🏷️ Filtros por género**: Filtrado dinámico por etiquetas/géneros
- **📊 Contador de juegos**: Visualiza cuántos juegos se muestran del total
- **📱 Diseño responsive**: Se adapta perfectamente a móviles y tablets
- **🎨 Interfaz moderna**: Diseño atractivo con gradientes y animaciones
- **⚡ Rápido y ligero**: Construido con React y optimizado para rendimiento

## 🛠️ Tecnologías Utilizadas

- **React 19**: Librería de JavaScript para la interfaz de usuario
- **CSS3**: Estilos modernos con gradientes y animaciones
- **GitHub Actions**: Deploy automático a GitHub Pages
- **JSON**: Base de datos local para los juegos

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/kur0h3i/myVideoGamesOnAWeb.git

# Entrar al directorio
cd myVideoGamesOnAWeb

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

### Build para producción
```bash
# Crear build optimizado
npm run build

# Deploy a GitHub Pages
npm run deploy
```

## 📋 Estructura del Proyecto

```
src/
├── components/
│   ├── GameCard.jsx      # Tarjeta individual de juego
│   ├── GameList.jsx      # Lista de juegos
│   └── Filters.jsx       # Componente de filtros
├── style/
│   ├── App.css          # Estilos principales
│   ├── GameCard.css     # Estilos de las tarjetas
│   └── GameList.css     # Estilos de la lista
├── utils/
│   └── sortByName.js    # Utilidad para ordenar
├── games.json           # Base de datos de juegos
├── App.jsx             # Componente principal
└── index.js            # Punto de entrada
```

## 🎮 Estados de Juego

- **🎮 Jugando**: Juegos actualmente en progreso
- **✅ Terminado**: Juegos completados
- **🔥 Locura**: Juegos con muchas horas jugadas
- **📋 Todos**: Mostrar toda la colección

## 🔧 Personalización

### Añadir un juego nuevo
Edita el archivo `src/games.json` y añade un nuevo objeto:

```json
{
  "id": 41,
  "name": "Nombre del Juego",
  "image": "/img/portadas/portadaJuego.jpg",
  "status": "jugando",
  "hoursPlayed": 10,
  "tags": ["RPG", "Indie"]
}
```

### Añadir nuevas imágenes
1. Coloca la imagen en `public/img/portadas/`
2. Actualiza la ruta en `games.json`

## 🚀 Deploy

### Opción 1: GitHub Actions (Automático)
El proyecto está configurado para deploy automático. Solo haz:
```bash
git add .
git commit -m "Actualización de la aplicación"
git push origin master
```

### Opción 2: Script de Deploy
```bash
./deploy.sh
```

### Opción 3: Manual con gh-pages
```bash
npm run deploy
```

## 📈 Funcionalidades Futuras

- [ ] Sistema de búsqueda por nombre
- [ ] Estadísticas avanzadas (tiempo total, promedio, etc.)
- [ ] Modo oscuro/claro
- [ ] Exportar/importar biblioteca
- [ ] Integración con APIs de juegos (IGDB, Steam)
- [ ] Sistema de calificaciones personales
- [ ] Gráficos de progreso

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la aplicación:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**kur0h3i** - [GitHub](https://github.com/kur0h3i)

---
⭐ ¡Dale una estrella si este proyecto te fue útil!
