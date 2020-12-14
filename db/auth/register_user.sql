INSERT INTO users 
(username, email, password, profile_pic, region)
-- , birthday, island, fruit, comment)
VALUES 
(${username}, ${email}, ${password}, ${profile_pic}, ${region})
-- , ${birthday}, ${island}, ${fruit}, ${comment})
RETURNING user_id, username, email, profile_pic, region, register_date;
-- , birthday, island, fruit, comment;