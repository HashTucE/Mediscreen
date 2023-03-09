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
