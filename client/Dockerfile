# Define la imagen base adecuada para tu aplicación de frontend (por ejemplo, node:14)
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app/client

# Copia los archivos del cliente a la imagen del contenedor
COPY ./client/package*.json ./

# Instala las dependencias del cliente
RUN npm install

# Copia el código fuente del cliente a la imagen del contenedor
COPY ./client .

# Establece una variable de entorno para el puerto del cliente
ENV PORT=5173

# Expone el puerto en el que se ejecutará el cliente
EXPOSE $PORT

# Comando para iniciar el entorno de desarrollo del cliente
CMD ["sh", "-c", "npm run dev -- --port $PORT --host 0.0.0.0"]
