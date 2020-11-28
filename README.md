# Your Critterpedia Website Plan:
## The MVP (Minimum Viable Product):
- A website that statically shows all the fish, bugs, and sea creatures with their respective price, location, times, picture, etc for the Northern Hemisphere
- Search bar and filters (either one works!) to change what is displayed.
- Filters include month, location, rarity, etc.
- The Home page displays the current bugs/fish that are accessible in this month (takes into account the current date)
- Cute UI based off of ACNH Style

How will it be divided?
Well, there are 4 categories of the museum, but two of which are different in the critterpedia
- Bugs
- Fish / Sea Creatures
- Fossils
- Art

Pages I know I want:
- Landing page
- Museum
- MyCritterpedia (logged in only)


## Dependencies:

### Frontend:
- axios
- react-router-dom
- redux
- react-redux
- redux-devtools-extension
- redux-promise-middleware

### Server:
- bcrypt
- dotenv
- express
- express-session
- massive


## Component tree:

### Front end:
src/
- components/
    - App/
        - App.js
        - App.sass
    - Entry/
        - Entry.js
        - Entry.sass
    - Home/
        - Home.js
        - Home.sass
    - Museum/
        - Museum.js
        - Museum.sass
        - Exhibits/
            - Exhibits.js
            - Exhibits.sass
    - YourCritterpedia/
        - YourCritterpedia.js
        - YourCritterpedia.sass
    - shared/
        - Exhibit/
            - ExhibitFilters/
                - ExhibitFilters.js
                - ExhibitFilters.sass
                - ExhibitOtherFilters/
                    - ExhibitOtherFilters.js
                    - ExhibitOtherFilters.sass
                - ExhibitTypeFilters/
                    - ExhibitTypeFilters.js
                    - ExhibitTypeFilters.sass
        - Header/
            - Header.js
            - Header.sass
            - Profile/
                - Profile.js
                - Profile.sass
        - Footer/
            - Footer.js
            - Footer.sass
    - redux/
        - reducers/
            - critterpediaReducer.js
            - userReducer.js
        - store.js
    - index.js
    - .gitignore
    - .env

### Server:
server/
- controllers/
    - authController.js
        * loginUser()
            - app.post(“/auth/login”)
        * registerUser()
            - app.post(“/auth/register”)
        * logoutUser()
            - app.post(“/auth/logout”)
    - userController.js
        * deleteUser()
            - app.delete(“/api/user”)
        * editUser()
            - app.put(“/api/user”)
        * getUser()
            - app.get(“/api/user“)
    - museumController.js
        * getExhibit()
            - app.get(“/api/exhibit”)
        * updateExhibit()
            - app.put(“/api/exhibit”)
        * addToExhibit()
            - app.post(“/api/exhibit/:id”)
- index.js

### Database:
db/
- user/
    - check_user.sql
    - create_user.sql
    - edit_user.sql
    - delete_user.sql
- critterpedia/
    - get_exhibit.sql
    - get_exhibits.sql
    - edit_exhibit.sql
    - add_critter.sql
    - remove_critter.sql
- init.sql
- seed.sql

## init.sql
### users table
```SQL
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username NOT NULL VARCHAR(50),
    email NOT NULL VARCHAR(250),
    password NOT NULL VARCHAR(200),
    profile_pic NOT NULL VARCHAR(2000),
    region NOT NULL BOOLEAN,
    birthday DATE,
    user_island VARCHAR(10),
    user_fruit INT,
    user_comment VARCHAR(24),
    register_date DATE NOT NULL DEFAULT CURRENT_DATE
);
```
### museum table
```SQL
CREATE TABLE museum (
    museum_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id)
);
```
### museum_bugs table
```SQL
CREATE TABLE museum_bugs (
    museum_bug_id SERIAL PRIMARY KEY,
    bug_id INT NOT NULL,
    museum_id INT REFERENCES museum(museum_id)
);
```
### museum_fish table
```SQL
CREATE TABLE museum_fish (
    museum_fish_id SERIAL PRIMARY KEY,
    fish_id INT NOT NULL,
    museum_id INT REFERENCES museum(museum_id)
);
```
### museum_sea table
```SQL
CREATE TABLE museum_sea (
    museum_sea_id SERIAL PRIMARY KEY,
    sea_creature_id INT NOT NULL,
    museum_id INT REFERENCES museum(museum_id)
);
```
## Icebox: 
### friends_list table
```SQL
CREATE TABLE friends_list (
    friends_list_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    friend_id INT NOT NULL
);
```
