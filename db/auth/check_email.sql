SELECT 
    u.user_id,
    u.username, 
    u.email, 
    u.profile_pic, 
    u.region,
    u.register_date, 
    u.birthday, 
    u.island, 
    u.fruit, 
    u.comment 
FROM users AS u
WHERE email = $1;