# Use the node 18 alpine image
FROM node:18-alpine as builder

# Set the working directory to './frontend'
WORKDIR /app/frontend

# Install pnpm globally
RUN npm install -g pnpm

# Copy the files to the './frontend' directory
COPY ./frontend /app/frontend

# Run pnpm install with all the optimization flags for production
RUN pnpm install --prefer-frozen-lockfile --production

# Run the pnpm build command
RUN pnpm run build

# Use the production environment
FROM python:3.9-alpine as prod

# Set the working directory to /app
WORKDIR /app

#-------------------TODO-------------------
#TODO: Build django app
#RUN pip install --upgrade pip
#COPY requirements.txt .
#RUN pip install -r requirements.txt

#-------------------TODO-------------------
#TODO: Copy the built files into a static directory for django
#COPY --from=builder /app/frontend/dist /app

#-------------------TODO-------------------
# Copy the rest of the Django project to the working directory
#COPY ./backend/backend .

#-------------------TODO-------------------
# Set the command to run when the container starts
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
