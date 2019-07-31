select * from cart_laptops
join laptops
on laptops.laptop_id = cart_laptops.laptop_id
where cart_laptops.cart_id = $1