# Use lightweight JRE image
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the pre-built JAR into the container
COPY target/app.jar app.jar

# Expose the Spring Boot default port
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
