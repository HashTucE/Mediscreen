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

Knowing that :
- The 4 microservices's images required are stored into my `Docker Registry`
- The 2 databases's images required are stored into my `Docker Hub`
- The Library's package required is stored into my `distant Nexus repository`

You can follow the 5 steps below, to use straight the application.
But if you want to use your own images and library, feel free to check my repositories linked above to learn how to do it.

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. Clone [Mediscreen](https://github.com/HashTucE/Mediscreen.git) on your local machine.
3. Check if environment variables, paths and binding ports into the docker-compose.yml fits to you and save changes if necessary.
4. Then build the project opening a prompt, locating to the root of Mediscreen folder and running the following command :
    ```
    docker-compose up -d
    ```
5. When all services are operationals, you should be able to access to [Mediscreen App](http://localhost:8083/home) 


# What you can do

- Browse the list of registered patients.
- Create/update a patient with warning message when trying to validate empty mandatory fields.
- Delete a patient.
- Access to the record of a patient when clicking on his last name with his assessment and his visit's notes.
- The assessment change dynamically depending on trigger's words containing into the triggers.txt.
- Create/update a note with warning message when trying to validate empty mandatory field.
- Delete a note.

# How to modified triggers list 

1. First you need the id of the assessment.ms's container and there is 2 ways to find it :
- Execute the following command into a prompt :
    ```
    docker ps
    ```
- Or you can find it below "assessment.ms" container into Docker Desktop :
<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224640844-edf8b9f5-097e-469a-a7b9-5f93f3d3da2b.png>
</p>

2. Execute this command to access to the shell of assessment.ms's container :
    ```
    docker exec -it [replace by assessment_id] /bin/sh
    ```
3. Execute this command to access to triggers.txt folder :
    ```
    cd app/
    ```
3. Execute this command to open triggers.txt with "vi" editor :
    ```
    vi triggers.txt
    ```
4. Make your modifications :
- Use the `arrow keys` to navigate through the file.
- Press `i` to enter insert mode and start editing the file.
- Make the necessary changes.
- Press the `Esc` key to return to command mode.
- Type `:wq` to save changes and exit the "vi" editor.
- Press `Enter` to run the command.

    Extra information, there are 3 ways to quit the "vi" editor :
    - Type `:q` to exit the editor if you haven't made any changes.
    - type `:wq` to save the changes and exit the editor.
    - type `:q!` to exit the editor without saving changes.


# Home of Mediscreen App
<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224282867-7c9e5771-60ac-4471-8fef-8a19eac6606a.png>
</p>

# Project Structure
<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224648604-4607c4f2-610b-4f8c-be34-c115c7220040.png>
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

