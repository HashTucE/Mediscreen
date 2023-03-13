# Mediscreen

<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224155098-59ee106a-10cd-4189-a830-e957db28003c.png>
</p>



Medical webapp composed by the following microservices :
1. [Patient](https://github.com/HashTucE/Patient.git) is a rest Api that allows you to create, modify or delete clients from a medical practice stored in a mySQL database.
2. [Note](https://github.com/HashTucE/Note.git) is a rest Api that allows you to create, modify or delete notes to keep track of visits in a mongodb database.
3. [Assessment](https://github.com/HashTucE/Assessment.git) is a rest api that communicates with Patient and Note to retrieve data to assess the risk for a patient of contracting type 2 diabetes.
4. [Front](https://github.com/HashTucE/Front.git) is an interface user developed in html with thymeleaf and bootstrap.
5. [Library](https://github.com/HashTucE/Library.git) groups common objects that will be shared by the repository manager, Nexus.


# Install the project with Docker

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. Clone [Mediscreen](https://github.com/HashTucE/Mediscreen.git) on your local machine.
3. Check if environment variables, paths and binding ports into the docker-compose.yml fits to you and save changes if necessary.
4. Then build the project opening a prompt, locating to the root of Mediscreen folder and running the following command :
    ```
    docker-compose up -d
    ```
5. When all services are operationals, you should be able to access to [Mediscreen App](http://localhost:8083/home) 




# Home of Mediscreen App
<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224282867-7c9e5771-60ac-4471-8fef-8a19eac6606a.png>
</p>



# Project Structure
<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224289216-54e84251-12de-4559-8e5d-bf00b4d46267.png>
</p>



# JaCoCo Code Coverage
<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224291049-89ab3512-10df-4006-af61-78d42765efc6.png>
</p>

<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224291163-5eeb831c-e47b-4fac-b0a1-89e2e3bdbff4.png>
</p>


<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224291291-a5c11169-50e9-4e47-9c6f-a3710221dac7.png>
</p>


<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224291384-c99e972a-e7f0-408b-94f7-1d8b180e5e12.png>
</p>



# Technology Stack
<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224289092-fa6f6430-fcaa-42a9-a6cb-10505ac7007c.png>
</p>

