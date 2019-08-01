delete from cart_laptops
where laptop_id = $1;

select * from cart_laptops
join laptops
on laptops.laptop_id = cart_laptops.laptop_id
join cart
on cart.cart_id = cart_laptops.cart_id
where cart_laptops.cart_id = $2;
