insert into users (username, email, hash)
values ($1, $2, $3)
returning *;