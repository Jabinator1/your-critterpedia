UPDATE users
SET username = $2,
    email = $3,
    password = $4,
    profile_pic = $5,
    region = $6,
    register_date = $7,
    birthday = $8,
    island = $9,
    fruit = $10,
    comment = $11
WHERE user_id = $1


-- test
UPDATE users
SET ${column_name} = $2
WHERE user_id = ${user_id}

-- passed in object would look something like this:
{
    user_id: 1,
    column_name: "email"
}