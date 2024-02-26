<h1 align="center">Tv Maze</h1>
<div align="center">

![React](https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Create React App](https://img.shields.io/badge/Create%20react%20app-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-0081CB?style=for-the-badge&logo=mui&logoColor=white)
![MUI](https://img.shields.io/badge/👩‍🎤%20Emotion-d26ac2?style=for-the-badge&logoColor=white)
![MUI](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
</div>

This project is a simple application made in React using the [Tv Maze API](http://api.tvmaze.com), its goal is to apply the best practices for the development of an application in React.

This application searches for series and shows some information about them, as well as episode information.

This application is also available on [github pages](https://carloshrabelo.dev/tvmaze/)

## Preview
| Home                   | Show                           | Episode                           |
| ------------------------- | -------------------------------- | -------------------------------- |
| ![Desktop Home](./docs/desk_home.png) | ![Desktop Show](./docs/desk_show.png) | ![Desktop Episode](./docs/desk_episode.png) |
| ![Tablet Home](./docs/tablet_home.png) | ![Tablet Show](./docs/tablet_show.png) | ![Tablet Episode](./docs/tablet_episode.png) |
| ![Mobile Home](./docs/mob_home.png) | ![Mobile Show](./docs/mob_show.png) | ![Mobile Episode](./docs/mob_episode.png) |

## Installation

You need the [node](https://nodejs.org/en/download/) to run this project, this example was created for the version `v20.9.0`. Dependencies was installed with [yarn](https://classic.yarnpkg.com/en/)

### Install yarn
```bash
npm -g yarn
```

### Install dependencies
```bash
yarn install
```

## Run application

Before running the application you will need to create a `.env.development` file in the project root, you can rename `.env.development.sample` without needing to make any changes

### Dev

```bash
yarn start
```

### Prod

Before deploying the application you will need to create a `.env.production` file in the project root, you can rename `.env.production.sample` without needing to make any changes

```bash
yarn build

npm install -g serve
serve -s build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder structure

```
📂 docs - Files referring to documentation
📂 public - Static file serving
📂 src/
┣━╾📂 components - UI components
┣━╾📂 hook  - React Hooks
┣━╾📂 lib - Libraries configuration
┣━╾📂 mock - Mocks files to be used in test files
┣━╾📂 page - Pages that will be displayed
┣━╾📂 store - Storage configuration
┣━╾📂 types - Types
┗━╾📂 utils - Functions helpers
```

## Licença

The [MIT License]() (MIT)

Copyright :copyright: 2024
