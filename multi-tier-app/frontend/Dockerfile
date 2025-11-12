# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy custom Nginx config

COPY public /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend files into Nginx
# (change "build" to "dist" if your build output folder is different)


# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
