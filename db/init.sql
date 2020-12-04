CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(200) NOT NULL,
    profile_pic VARCHAR(2000) NOT NULL,
    region VARCHAR(8) NOT NULL,
    register_date DATE DEFAULT CURRENT_DATE,
    birthday DATE,
    island VARCHAR(10),
    fruit INT,
    comment VARCHAR(24)
);

CREATE TABLE museum (
    museum_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE bugs (
    bugs_table_id SERIAL PRIMARY KEY,
    bug_id INT NOT NULL,
    museum_id INT REFERENCES museum(museum_id) ON DELETE CASCADE
);

CREATE TABLE fish (
    fish_table_id SERIAL PRIMARY KEY,
    fish_id INT NOT NULL,
    museum_id INT REFERENCES museum(museum_id) ON DELETE CASCADE
);

CREATE TABLE sea (
    sea_table_id SERIAL PRIMARY KEY,
    sea_creature_id INT NOT NULL,
    museum_id INT REFERENCES museum(museum_id) ON DELETE CASCADE
);

-- Icebox
CREATE TABLE friends_list (
    friends_list_id SERIAL PRIMARY KEY,
    friend_id INT NOT NULL,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);


-- UPDATING TABLES

ALTER TABLE bugs
DROP COLUMN bug_id
ADD COLUMN bug_arr INT ARRAY NOT NULL;

ALTER TABLE fish
DROP COLUMN fish_id
ADD COLUMN fish_arr INT ARRAY NOT NULL;

ALTER TABLE sea
DROP COLUMN sea_creature_id
ADD COLUMN sea_arr INT ARRAY NOT NULL;

CREATE TABLE critterpedia (
    critterpedia_id SERIAL PRIMARY KEY,
    bug_arr INT ARRAY,
    fish_arr INT ARRAY,
    sea_arr INT ARRAY,
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

INSERT INTO critterpedia (bug_arr, fish_arr, sea_arr, user_id)
VALUES ('{1, 2, 3, 4, 5, 10, 18, 20, 21, 34}', '{1, 3, 4, 6, 11, 12, 13, 14, 15, 20, 40, 50, 55, 56, 58, 80}', '{1, 2, 3, 4, 6, 7, 8, 9, 14, 15, 21, 40}', 4);