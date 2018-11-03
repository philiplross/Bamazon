CREATE TABLE products(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
product_id INT(100) NOT NULL,
product_name VARCHAR(30),
deparment_name VARCHAR(30),
price decimal (4,2),
stock_quanity INT(10),
 PRIMARY KEY (id)

);

INSERT INTO products (product_id, product_name, deparment_name, price, stock_quanity)
VALUES (001, 'Lego Block set', 'toys', 14.99, 15),
(002, 'Polly PLay Set', 'toys', 20.99, 4),
(003, '4 person tent', 'sports', 45.49, 2),
(004, '5 speed bike', 'sports', 99.99, 6),
(005, 'bag of torilla chips', 'food', 3.50, 49),
(006, 'hershys chopcolate', 'food', 1.49, 99),
(007, '55 inch samsung TV', 'electronics', 99.99, 10),
(008, 'Apple Iphone X', 'electronics', 80.00, 9),
(009, 'The catch in the Rye', 'books', 11.49, 3),
(010, 'Mysql for Dummies', 'books', 12.84, 2)