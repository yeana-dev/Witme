# PROJECT 4 README<!-- omit in toc -->

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

<br>

## Overview

**WITME**

## MVP

Witme is a platform for developers and designers to create a team for their side-project or study group. Users can create a post describing their current team and project (if they already have one) or create a study group, either local or remote. In addition, the list can be categorized by programming skill or role(Front-end, Back-end, Designer).

### Goals

- CRUD on two tables (Team Project or Study group)
- Comments on each post
- Categorized (filter) list by programming skill or role

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Create a front-end view |
|   React Router   | Assign different screens to each routes  |
| Material UI | Responsive navigation, forms, and buttons |
|     JWT      | To pass logged in user's information and create token |
|  Bcrypt  | Password-hashing |
|  Pry  | Ruby REPL |


### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

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
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |


### Server (Back End)

#### ERD Model

![ERD-witme](https://i.imgur.com/efMWGbj.png)

***

## Post-MVP

- User's public profile: Their role, programming language, projects, their posts and comments.
- Responsive web-design

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
