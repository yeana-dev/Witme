![image](https://user-images.githubusercontent.com/78275456/135881918-51e8632d-62d0-495a-a3d7-2920a07d809b.png)

# PROJECT 4 : 'WITME' README<!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

## MVP

Witme is a platform for developers and designers to create a team for their side-project or study group. Users can create a post describing their current team and project (if they already have one) or create a study group. In addition, the list can be categorized by role(Front-end, Back-end, Designer) they are recruiting.

***

### Goals

- CRUD on `Posts` table
- User authentication/authorization
- Categorized (filter) list by role (or programming langauge)

***

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Create a front-end view |
|   React Router   | Assign different screens to each routes  |
| Material UI | Responsive navigation, forms, and buttons |
|     JWT      | To pass logged in user's information and create token |
|  Bcrypt  | Password-hashing |
|  Pry  | Ruby REPL |

***

### Client (Front End)

#### Wireframes

![image](https://user-images.githubusercontent.com/78275456/135876366-7eced0dc-9442-4c62-8c29-cb202f83c968.png)
![image](https://user-images.githubusercontent.com/78275456/135876413-69b3f1db-20aa-46b4-93c8-c35a863bfb7f.png)
![image](https://user-images.githubusercontent.com/78275456/135876435-06cffc90-5e2a-4cce-aa9c-66fabd3b3d9d.png)
![image](https://user-images.githubusercontent.com/78275456/135876462-b7ed4fc0-32ee-464c-b280-f756601c7350.png)
![image](https://user-images.githubusercontent.com/78275456/135876477-e5e13ad3-8706-4cac-9d48-8a49cdff53b7.png)


#### Component Tree

![witme-component-tree](https://user-images.githubusercontent.com/78275456/135735218-d015d42d-d1ba-4b70-a820-a619ba3bbecc.png)

***

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ style
          |__ Nav.css
          |__ Footer.css
          |__ PostForm.css
          |__ PostList.css
      |__ layout
          |__ Layout.jsx
          |__ Nav.jsx
          |__ Footer.jsx
      |__ PostForm.jsx
      |__ PostList.jsx
      |__ PostDetail.jsx
      |__ CommentInput.jsx
      |__ Comments.jsx
|__ services/
      |__ apiConfig.js
      |__ auth.js
      |__ posts.js
      |__ comments.js
      |__ projects.js
|__ containers
      |__ MainContainer.jsx
|__ screens/
      |__ style
          |__ Home.css
          |__ Lookingfor.css
          |__ Ask.css          
          |__ Login.css
          |__ Signup.css
      |__ Home.jsx
      |__ PostList.jsx (Filtered by categories (Ask, Join, Recruit))
      |__ PostDetail.jsx
      |__ CreatePost.jsx
      |__ UpdatePost.jsx
      |__ ProjectList.jsx
      |__ ProjectDetail.jsx
      |__ CreateProject.jsx
      |__ UpdateProject.jsx
      |__ Login.jsx
      |__ Signup.jsx
      

```

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Set up back-end (Ruby) |    H     |     4 hrs      |     - hrs     |    - hrs    |
| Set up front-end (React) |    H     |     4 hrs      |     - hrs     |    - hrs    |
| Create SQL database tables |    H     |     3 hrs      |     - hrs     |    - hrs    |
| Add controllers and routes |    H     |     6 hrs      |     - hrs     |    - hrs    |
| Authorization/Authentication (JWT/Bcrypt)    |    H     |     6 hrs      |     - hrs     |    - hrs    |
| Fetch API data from back-end    |    H     |     6 hrs      |     - hrs     |    - hrs    |
| Create react components    |    H     |     20 hrs      |     - hrs     |    - hrs    |
| Create screens |    H     |     12 hrs      |     0 hrs     |    - hrs    |
| CSS |    L     |     24 hrs      |     - hrs     |    - hrs    |
| TOTAL               |          |     85 hrs      |     - hrs     |     TBD     |

***

### Server (Back End)

#### ERD Model

![ERD-witme](https://user-images.githubusercontent.com/78275456/135768812-d2a18004-82db-41b9-92ec-51a77e1d70c4.png)

***

## Post-MVP

- User's public profile: Their role, programming language, projects, their posts and comments.
- Enable user comments on projects
- Responsive web-design

***

## Code Showcase

## Code Issues & Resolutions
