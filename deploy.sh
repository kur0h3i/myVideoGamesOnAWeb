#!/bin/bash

# Script de deploy para GitHub Pages
echo "🚀 Iniciando deploy a GitHub Pages..."

# Verificar que estemos en la rama correcta
current_branch=$(git branch --show-current)
if [ "$current_branch" != "master" ] && [ "$current_branch" != "main" ]; then
    echo "⚠️  Advertencia: No estás en la rama master/main"
    read -p "¿Continuar de todas formas? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Build del proyecto
echo "📦 Creando build de producción..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completado exitosamente"
    
    # Deploy a GitHub Pages (si gh-pages está instalado)
    if command -v gh-pages &> /dev/null; then
        echo "🌐 Desplegando a GitHub Pages..."
        npm run deploy
        echo "🎉 ¡Deploy completado! Tu sitio estará disponible en unos minutos."
    else
        echo "📤 Build listo. Haz commit y push para activar GitHub Actions."
    fi
else
    echo "❌ Error en el build. Revisa los errores arriba."
    exit 1
fi