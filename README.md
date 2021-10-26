<p align="center">
  <img src="https://user-images.githubusercontent.com/78275456/135881918-51e8632d-62d0-495a-a3d7-2920a07d809b.png" /><br />
  Final Project from <a href="https://generalassemb.ly" target="blank">General Assembly</a> Software engineering immersive bootcamp
</p>

# PROJECT 4 : 'WITME' README<!-- omit in toc -->

<a href="https://www.youtube.com/watch?v=nsBQCncReNA" target="_blank"><img src="https://img.youtube.com/vi/nsBQCncReNA/0.jpg" align="right" alt="witme_youtube" /></a>

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

---

### Goals

- CRUD on `Posts` table
- User authentication/authorization
- Categorized (filter) list by role (or programming langauge)

---

### Libraries and Dependencies

|      Library      | Description                                                                         |
| :---------------: | :---------------------------------------------------------------------------------- |
|       React       | Create a front-end view                                                             |
|   React Router    | Assign different screens to each routes                                             |
|     Bootstrap     | Responsive navigation, forms, and buttons                                           |
|        JWT        | To pass logged in user's information and create token                               |
|      Bcrypt       | Password-hashing                                                                    |
|        Pry        | Ruby REPL                                                                           |
|     CK Editor     | WYSIWYG Text editor. Allows users to generate HTML content without writing in HTML. |
| HTML-React-Parser | Convert and render HTML element (user wrote with CK Editor)                         |

---

### Client (Front End)

#### Wireframes

| ![image](https://user-images.githubusercontent.com/78275456/135876366-7eced0dc-9442-4c62-8c29-cb202f83c968.png) | ![image](https://user-images.githubusercontent.com/78275456/135876413-69b3f1db-20aa-46b4-93c8-c35a863bfb7f.png) |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/78275456/135888396-a0f5410c-de56-433c-bf2d-bdc76ad7649a.png) | ![image](https://user-images.githubusercontent.com/78275456/135888402-e5afa3aa-58a5-4944-bbb7-ea323646f523.png) |
| ![image](https://user-images.githubusercontent.com/78275456/135876462-b7ed4fc0-32ee-464c-b280-f756601c7350.png) | ![image](https://user-images.githubusercontent.com/78275456/135876477-e5e13ad3-8706-4cac-9d48-8a49cdff53b7.png) |

#### Component Tree

![witme-component-tree](https://user-images.githubusercontent.com/78275456/135735218-d015d42d-d1ba-4b70-a820-a619ba3bbecc.png)

---

#### Component Architecture

```structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ style
          |__ Comment.css
          |__ CommentForm.css
          |__ Navigation.css
          |__ PostCard.css
      |__ layout
          |__ Layout.jsx
          |__ Navigation.jsx
      |__ Comment.jsx
      |__ CommentForm.jsx
      |__ PostCard.jsx
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
          |__ Login.css
          |__ PageNotFound.css
          |__ PostDetail.css
          |__ PostForm.css
          |__ Register.css
          |__ SideProjectPosts.css
          |__ StudyPosts.css
          |__ User.css
      |__ Home.jsx
      |__ Login.jsx
      |__ PageNotFount.jsx
      |__ PostDetail.jsx
      |__ PostForm.jsx
      |__ Register.jsx
      |__ SideProjectPosts.jsx
      |__ StudyPosts.jsx
      |__ User.jsx
```

#### Time Estimates

| Task                                      | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Set up back-end (Ruby)                    |    H     |     4 hrs      |     5 hrs     |    5 hrs    |
| Set up front-end (React)                  |    H     |     4 hrs      |     3 hrs     |    3 hrs    |
| Create SQL database tables                |    H     |     3 hrs      |     5 hrs     |    5 hrs    |
| Add controllers and routes                |    H     |     6 hrs      |    10 hrs     |   10 hrs    |
| Authorization/Authentication (JWT/Bcrypt) |    H     |     6 hrs      |     8 hrs     |    8 hrs    |
| Fetch API data from back-end              |    H     |     6 hrs      |     4 hrs     |    4 hrs    |
| Create react components                   |    H     |     20 hrs     |    18 hrs     |   18 hrs    |
| Create screens                            |    H     |     12 hrs     |    15 hrs     |   15 hrs    |
| CSS                                       |    L     |     24 hrs     |    30 hrs     |   30 hrs    |
| TOTAL                                     |          |     85 hrs     |    98 hrs     |   98 hrs    |

---

### Server (Back End)

#### ERD Model

![erd-image](https://user-images.githubusercontent.com/78275456/135905622-b2704927-1dbc-4454-a0db-6384c6498e15.png)

---

## Post-MVP

- [ ] User's public profile: Their role, programming language, projects, their posts and comments.
- [x] Enable user comments on projects
- [x] Responsive web-design

---

## Code Showcase

## Code Issues & Resolutions
