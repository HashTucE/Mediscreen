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



# Prerequisites
- Java 19
- Maven 4.0.0
- Spring Boot 3.0.2
- MySQL 8.0.29
- MongoDB 6.0.4
- Nexus Repository 3.49.0


# Install the project with the magic of Docker

This is the faster and the easier way to use this project but I will show you below how to start the application without docker.

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. Clone [Mediscreen](https://github.com/HashTucE/Mediscreen.git) on your local machine.
3. Clone each of the 5 microservices above at the root of Mediscreen like this :
<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224263030-d59df305-01d0-4e08-a57b-7c4ba3580a13.png>
</p>
If needed, don't forget to check the application.properties of Patient and the docker-compose.yml (patient.ms and patient.db) of Mediscreen to replace your credentials for MySQL.
You can do the same thing for Note even if on this project I have not set any credentials.

4. For all these microservices, generate a package as .jar running the following command to a prompt when you are located to the root of each project folder:
    ```
    mvn package
    ```

5. Install [Nexus](https://help.sonatype.com/repomanager3/installation-and-upgrades/installation-methods).
I recommend you to install it with [his](https://hub.docker.com/r/sonatype/nexus3/) Docker image.
- Keep in mind that on your local machine the port 8081 will be used with Patient so when installing Nexus, bind the port like this 8084:8081. Once installed and ran, click on the port as you can see below or go to http://localhost:8084 to be redirected to the Nexus interface user :
<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224268285-bc76f6de-5481-49a2-b50c-66041ea6a6f6.png>
</p>

- The first time you will sign in, you will be invit to change your admin password. Your credentials should be username : "admin" and password : "admin123" but it depends of your version of nexus so if it won't work, this command should show you the intitial password replacing ??? by the id of the nexus container as you can see above :
    ```
    docker exec -it ??? cat /nexus-data/admin.password 
    ```
    
- If it not exists, you will have to create a file named settings.xml on you maven configuration hidden folder ".m2". As you can see for this project I am using the already existing "maven-snapshots" repository, so you will just have to set your appropriate Nexus's username and password :
    ```
  <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      https://maven.apache.org/xsd/settings-1.0.0.xsd">
  <servers>
    <server>
      <id>maven-snapshots</id>
      <username>admin</username>
      <password>pass</password>
    </server>
  </servers>

  </settings>
    ```
    
- Finally, go to the root of "Library" with a prompt and run the command :
    ```
    mvn deploy
    ```
    And you should now see your .jar inside the repository "maven-snapshots" on your Nexus interface.

6. Now to build the images and ran containers of all microservices and their associated databases with the creation of patients and notes, run the following command once your are located to the root of Mediscreen :
    ```
    docker-compose up -d
    ```
    
7. And after 1 or 2 minutes, depending of your performances, you should be able to access to [Mediscreen App](http://localhost:8083/home)

<p align="center">
  <img src=https://user-images.githubusercontent.com/95872501/224282867-7c9e5771-60ac-4471-8fef-8a19eac6606a.png>
</p>


# Prepare the Database for Patient

- Install [MySQL](https://dev.mysql.com/downloads/mysql/)

- Open a command prompt to start MySQL server :
  - Enter this command replacing the `???` by your username : 
    ```
    mysql -u ??? -p
    ```
  - Type your password and press `enter` to start the server.
  
- Copy/paste SQL scripts :

  - Use this [script](https://github.com/HashTucE/Patient/blob/main/src/main/resources/static/schema.sql) to create the datatbase.

  - Use this [script](https://github.com/HashTucE/Patient/blob/main/src/main/resources/static/data.sql) to create an admin and a user.
  
  
  # Prepare the Database for Note

- Install [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)

- Open a command prompt to start the MongoDB shell :
  - Enter this command to select your database : 
    ```
    https://www.mongodb.com/docs/manual/administration/install-community/
    ```
  - Type your password and press `enter` to start the server.
  
- Copy/paste SQL scripts :

  - Use this [script](https://github.com/HashTucE/Patient/blob/main/src/main/resources/static/schema.sql) to create the datatbase.

  - Use this [script](https://github.com/HashTucE/Patient/blob/main/src/main/resources/static/data.sql) to create an admin and a user.


# Run the Application

- The datasource is set to `src/main/resources/application.properties` : 
```
spring.datasource.url=jdbc:mysql://localhost:3306/paymybuddy?serverTimezone=UTC
```

- Open a command prompt, once located to the root of the project, run the following command replacing `???` by your username and your password of datasource : 
```
mvn spring-boot:run -Dspring-boot.run.arguments="--spring.datasource.username=??? --spring.datasource.password=???"
```
- And finally open your browser to access to this URL : http://localhost:8080/
- Then you can create a new account or use an existing from data script, ENJOY !
- Stop the application in the command prompt with : `CTRL + C`

# UML Diagram
![uml](https://user-images.githubusercontent.com/95872501/209088546-ebcaa663-b75a-46ae-bece-fe31cd995b37.png)

# JaCoCo Code Coverage
![Capture d’écran 2022-12-22 à 09 19 43](https://user-images.githubusercontent.com/95872501/209089621-20ac00aa-46ea-466f-98a9-ac8d7be3ecbf.png)

# Technology Stack
![Capture d’écran 2022-12-05 à 01 19 56](https://user-images.githubusercontent.com/95872501/205524881-6a809029-414e-4a1f-b339-15154421f01a.png)
