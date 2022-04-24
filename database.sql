CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    fname VARCHAR(255),
    lname VARCHAR(255)
)

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    lname VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
)