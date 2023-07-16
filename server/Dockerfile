# Define la imagen base adecuada para tu aplicación (por ejemplo, node:14)
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app/server

# Copia los archivos del servidor a la imagen del contenedor
COPY ./server/package*.json ./

# Instala las dependencias del servidor
RUN npm install

# Copia el código fuente del servidor a la imagen del contenedor
COPY ./server .

# Establece una variable de entorno para el puerto del servidor
ENV PORT=3000

# Establece una variable de entorno para la URL de conexión a MongoDB
ARG DB_URL_ATLAS
ENV DB_URL_ATLAS=${DB_URL_ATLAS}

# Expone el puerto en el que se ejecutará el servidor
EXPOSE $PORT

# Comando para iniciar el servidor
CMD ["npm", "start"]
