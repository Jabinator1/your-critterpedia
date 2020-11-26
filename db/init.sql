CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username NOT NULL VARCHAR(50),
    email NOT NULL VARCHAR(250),
    password NOT NULL VARCHAR(200),
    profile_pic NOT NULL VARCHAR(2000),
    region NOT NULL BOOLEAN,
    register_date DATE NOT NULL DEFAULT CURRENT_DATE
    birthday DATE,
    island VARCHAR(10),
    fruit INT,
    comment VARCHAR(24),
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