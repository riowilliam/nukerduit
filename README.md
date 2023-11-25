## How to Install and Run the Project

1. `git clone git@github.com:riowilliam/back-nukerduit.git`
2. `docker compose up -d`
3. You can access postgreSql via pgAdmin `http://localhost:5050/` to register server

```
name: server1
host: db
user: postgres
password: postgres
```

4. `docker-compose exec app php artisan migrate:fresh --seed`
5. You can try base url app `http://localhost:8000/healthcheck`

## Sample account

```
pgAdmin
email: test@example.com
password: password

app
email: test@example.com
password: password
```

## Routes

```
# Public

POST   /api/login
@body: email, password

POST   /api/register
@body: name, email, password, password_confirmation


# Protected

POST    /api/logout
```
