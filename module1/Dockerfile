FROM node
WORKDIR /app
COPY build /app/build
RUN npm install -g serve
EXPOSE 3000
ENTRYPOINT ["serve","-s","build"]