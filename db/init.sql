create table users (
    user_id serial primary key,
    username varchar not null unique,
    email varchar not null unique,
    hash text not null
);