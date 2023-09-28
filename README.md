# # Project Description "Tyt Naturalnoye Vino"

## About

The "WineShop" project is a web application for wine sales that provides a unique experience for choosing 
and purchasing the finest wines.
It is developed using cutting-edge technologies such as Next.js, Docker, Yarn, React, and SCSS.

This app is based on a template - https://github.com/evgenytryzo/Layout-App

## Key Features

### 1. Wine Collections

- The website offers diverse wine collections with descriptions for each wine, including the grape variety, country of origin, vintage year, and other characteristics.
- Users can browse the collections and select wines that match their tastes and preferences.

![slider.gif](public%2Fslider.gif)

### 2. Wine Slider

- The website includes an interactive slider that allows users to easily scroll through the available wines.
- Users can view images of wines, their names, and brief descriptions, helping them make informed purchase decisions.

![sorting.gif](public%2Fsorting.gif)
### 3. Newsletter Subscription

- Users have the option to subscribe to newsletters and updates to stay informed about the latest events and offers from WineShop.

![email.gif](public%2Femail.gif)
## Start

- ### First, copy the repository:

```
git clone git@github.com:evgenytryzo/Tyt-naturalnoye-vino-project.git
```

- ### Install dependencies using Yarn:

```
yarn install
```
- ### Then run the command on the command line:

```
docker compose up
```

With this command, you will launch the container with the application.

For installing all dependencies type `yarn`
> If you get some error delete `.node_modules` and try again **or** create an issue about that

- ### Open a browser window and navigate to a local host with port 4000:

```
http://localhost:4000/
```
## Documentation:

#### To change the port, you should change the port in the 'package.json' file:

```
"scripts": {
    "dev": "next dev -p YOUR PORT",
    "build": "next build",
    "start": "next start -p YOUR PORT",
    "lint": "next lint"
  }
```

#### And you should also change the port in the 'docker-compose.yml' file:

```
    ports:
      - "YOUR PORT:PORT"
```

## Technologies:

- **Next.js:**  Next.js provides fast and scalable web application development with React. It offers server-side rendering, performance optimization, and routing.

- **Docker:** Docker is used for containerizing the application, making it portable and manageable while providing an isolated environment.

- **Yarn:** Yarn is used for managing project dependencies and ensures quick package installations.

- **React:** React is used for building the application's interface, creating components, and enabling user interaction.

- **SCSS:** SCSS is used for styling components and creating an elegant website design.

## Tasks for this project:

- Create a 'sh' file to automatically configure dependencies in the project.
- Change the 'export' and 'import' in the components for convenient work with them.
- Install 'Babel'.

## Contribution and Development

We welcome contributions and improvements from the community. If you have ideas, suggestions, or want
to report a bug, please create an Issue or Pull Request on GitHub.


#### Interesting ideas and comments on the project are accepted for the kidney: g0022@inbox.ru
