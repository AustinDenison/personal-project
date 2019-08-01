insert into cart_laptops (cart_id, laptop_id)
values ($1, $2);

select * from cart_laptops
join laptops
on laptops.laptop_id = cart_laptops.laptop_id
join cart
on cart.cart_id = cart_laptops.cart_id
where cart_laptops.cart_id = $1;