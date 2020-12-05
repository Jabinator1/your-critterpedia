DO
$do$
    BEGIN
        IF 'bug_arr' = $2 THEN 
            UPDATE critterpedia 
            SET bug_arr = $3 
            WHERE user_id = $1;
        ELSIF 'fish_arr' = $2 THEN
            UPDATE critterpedia 
            SET fish_arr = $3 
            WHERE user_id = $1;
        ELSE
            UPDATE critterpedia 
            SET sea_arr = $3 
            WHERE user_id = $1;
        END IF;
    END
$do$