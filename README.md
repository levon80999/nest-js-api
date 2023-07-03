
## Installation

1) Clone the project
```bash
$ git clone https://github.com/levon80999/nest-js-api.git

or if you use ssh connection

$ git clone git@github.com:levon80999/nest-js-api.git
```
2) Copy .env file
```bash
$ cd nest-js-api

$ cp .env.example .env
```

## Running the application

```bash
Up the application 

$ docker-compose up -d

Down the application

$ docker-compose down
```

## Postman documentation

```bash
https://documenter.getpostman.com/view/4041962/2s93zCa1dL
```

## Notes

Each time when you add new package of add new environment variable in .env file you need to restart container.

```bash
$ docker-compose down

$ docker-compose up -d
```
