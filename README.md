## How to Install and Run the Project

1. `git clone git@github.com:riowilliam/back-nukerduit.git`
2. `docker compose up -d`
3. You can access PostgreSQL via pgAdmin `http://localhost:5050/` to register server

```
Tab General
name: server1

Tab Connection
host: db
user: postgres
password: postgres
```

4. `docker-compose exec app php artisan migrate:fresh --seed`
5. You can try base url app `http://localhost:8000/healthcheck`

## Sample account

```
pgAdmin / app
email: test@example.com
password: password
```

## Routes

```
# Public

POST   /api/auth/login
@body: email, password

POST   /api/auth/register
@body: name, email, password, password_confirmation


# Protected

POST    /api/auth/logout

GET    /api/currency/exchange
@Params: amount, from, to

GET    /api/transaction/currency
@Params: code, time
```
