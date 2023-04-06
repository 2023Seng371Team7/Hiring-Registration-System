# Hiring-Registration-System

# Frontend



```sh
pnpm install # Install dependencies
pnpm run dev # Run Development Server
```

or if you just have npm, not pnpm, then:

```sh
npm install
npm run dev
```

# Backend

## Pre-requisites
Ensure you have Django, PyMongo, Dnspython installed. If not, 

```sh
python3 -m pip install Django # to install Django
python3 -m pip install pymongo[snappy,gssapi,srv,tls] # to install pymongo
python3 -m pip install dnspython # to install dnspython
```
## Dev deployment

```
python3 manage.py runserver
```

## Run Tests

To run tests in the apis/tests folder, 

```
python3 manage.py test apis/tests -v 2
```


## For Grading TA
The deployed link to our app is available in the about section to this repo. For a demo of how our app works, feel free to view the accompanying video submitted to assignment 3 or check here: [video](https://drive.google.com/file/d/1Xhjq8AcL0mmuOs6iIhq6dVag4877Q88x/view?usp=sharing) . For all other documents, check wiki. 
