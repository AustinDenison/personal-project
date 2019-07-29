create table users (
    user_id serial primary key,
    username varchar not null unique,
    email varchar not null unique,
    hash text not null
);

create table laptops (
    laptop_id serial primary key,
    model varchar not null,
    display varchar not null,
    processor varchar not null,
    video_card varchar not null,
    memory varchar not null,
    storage varchar not null,
    battery varchar not null,
    weight varchar not null,
    price integer not null
);

create table cart (
    cart_id serial primary key,
    user_id integer references users (user_id) on delete cascade
    laptop_id integer references laptops (laptop_id)
);

create table cart-laptops (
    cart_laptops_id serial primary key,
    cart_id integer references users (user_id) on delete cascade
    laptop_id integer references laptops (laptop_id)
)