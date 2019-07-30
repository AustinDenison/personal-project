select * from users
join cart
on cart.user_id = users.user_id
where username = $1
or email = $2