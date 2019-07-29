select * from cart-laptops
join laptops
on laptops.id = cart-laptops.laptop-id
where cart_laptops.cart_id = $1.cart_id