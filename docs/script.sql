CREATE DATABASE destinosbd;
USE destinosbd;


CREATE TABLE provinces(
province_id  INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL, 
lat DECIMAL(10,8) NOT NULL,
lon DECIMAL(10,8) NOT NULL 

);


CREATE TABLE cities(
city_id  INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(30) NOT NULL, 
description VARCHAR(255) NOT NULL, 
lat DECIMAL(10,8) NOT NULL,
lon DECIMAL(10,8) NOT NULL, 
province_id INT,
FOREIGN KEY (province_id)
REFERENCES provinces(province_id)
);



CREATE TABLE users(
	user_id  INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    dni VARCHAR(8) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),
    photo VARCHAR(255),
    city_id INT,
    rol VARCHAR(6),
    FOREIGN KEY (city_id)
	REFERENCES cities(city_id)
);

CREATE TABLE destinations(
	destination_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL, 
	description VARCHAR(255) NOT NULL,
    information VARCHAR(255) NOT NULL,
    city_id INT,
    FOREIGN KEY (city_id) REFERENCES cities(city_id)
);

CREATE TABLE images(
	image_id INT PRIMARY KEY AUTO_INCREMENT,
    url VARCHAR(255) NOT NULL, 
    title VARCHAR(50) NOT NULL, 
    destination_id INT,
    FOREIGN KEY (destination_id) REFERENCES destinations(destination_id)
);

CREATE TABLE experiences(
	experience_id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL, 
	description VARCHAR(255) NOT NULL,
    price DOUBLE,
    destination_id INT,
    FOREIGN KEY (destination_id) REFERENCES destinations(destination_id)
);

CREATE TABLE packages(
	package_id INT PRIMARY KEY AUTO_INCREMENT,
    start_date DATE,
    end_date DATE,
    total_price DOUBLE,
    destination_id INT,
    experience_id INT,
    FOREIGN KEY (destination_id) REFERENCES destinations(destination_id),
    FOREIGN KEY (experience_id) REFERENCES experiences(experience_id)
);


CREATE TABLE payments(
	payment_id INT PRIMARY KEY AUTO_INCREMENT,
    amount DOUBLE,
    payment_method VARCHAR(5),
	payment_status VARCHAR(5)
    
    
);


CREATE TABLE orders(
	order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT, 
    package_id INT, 
    payment_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (package_id) REFERENCES packages(package_id),
    FOREIGN KEY (payment_id) REFERENCES payments(payment_id)

);
