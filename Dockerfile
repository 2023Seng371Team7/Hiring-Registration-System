# Use the node 18 alpine image
FROM node:18-alpine as builder

# Set the working directory to './frontend'
WORKDIR /app/frontend

# Install pnpm globally
RUN npm install -g pnpm

# Copy the files to the './frontend' directory
COPY ./frontend /app/frontend

#Install npm deps
RUN pnpm install --prefer-frozen-lockfile

# Run the pnpm build command
RUN pnpm run build

# Separate env for building python/django
FROM python:3.9-alpine as django

# Set the working directory to /app
WORKDIR /app/backend/

#Install system requirements
RUN apk add build-base 
RUN apk add krb5-dev
RUN apk add snappy-dev

#Install python requirements
RUN pip install --upgrade pip
COPY backend/requirements.txt /app/backend/requirements.txt
RUN pip install --no-cache-dir -r /app/backend/requirements.txt

COPY backend /app/backend

# #Copy static files from the frontend build stage
COPY --from=builder /app/frontend/dist/index.html /app/backend/frontend/templates/frontend/index.html
COPY --from=builder /app/frontend/dist/assets/* /app/backend/static/assets/
COPY --from=builder /app/frontend/dist/* /app/backend/static/

ARG SECRET_KEY
ENV SECRET_KEY=$SECRET_KEY

ARG AI_KEY
ENV AI_KEY=$AI_KEY

ARG MongoConnectionString
ENV MongoConnectionString=$MONGOCONNECTIONSTRING

EXPOSE 80
CMD [ "python", "/app/backend/manage.py", "runserver", "0.0.0.0:80" ]
