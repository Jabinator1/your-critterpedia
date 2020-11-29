-- meh way
UPDATE users
SET username = ${username},
    email = ${email},
    profile_pic = ${profile_pic},
    region = ${region},
    register_date = ${register_date},
    birthday = ${birthday},
    island = ${island},
    fruit = ${fruit},
    comment = ${comment}
WHERE user_id = ${user_id};


-- -- test
-- UPDATE users
-- SET ${column_name} = ${column_value}
-- WHERE user_id = ${user_id}

-- -- passed in object would look something like this:
-- {
--     user_id: 1,
--     column_name: "email",
--     column_value: "tes@test.com"
-- }

-- UPDATE users
-- FOR item IN $1 LOOP
--     SET item.column_name = item.column_value
--     WHERE user_id = item.user_id
-- END LOOP;