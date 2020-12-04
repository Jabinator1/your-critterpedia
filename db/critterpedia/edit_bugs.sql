UPDATE critterpedia
SET bug_arr = $2
WHERE user_id = $1
RETURNING *;