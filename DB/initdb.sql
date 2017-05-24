DROP DATABASE IF EXISTS torrent;
CREATE DATABASE torrent;
USE torrent;
SET SQL_MODE = '';
CREATE TABLE permissions
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    access_level INTEGER  NOT NULL,
    name VARCHAR(32) NOT NULL
);

CREATE TABLE categories
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(64) NOT NULL,
    permission_id INT NOT NULL,
    parent_category_id INT,
    CONSTRAINT fk_categories_permissions_permission_id FOREIGN KEY (permission_id) REFERENCES permissions (id),
    CONSTRAINT fk_categories_categories_parent_id FOREIGN KEY (parent_category_id) REFERENCES categories (id)
);
CREATE UNIQUE INDEX categories_id_uindex ON categories (id);

CREATE TABLE users
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    more_information VARCHAR(512),
    sex ENUM('male', 'female'),
    birthday DATE,
    permission INT DEFAULT 0 NOT NULL,
    CONSTRAINT fk_users_permissions_permission FOREIGN KEY (permission) REFERENCES permissions (id)
);
CREATE UNIQUE INDEX Users_id_uindex ON users (id);
CREATE UNIQUE INDEX Users_name_uindex ON users (name);
CREATE UNIQUE INDEX Users_email_uindex ON users (email);
CREATE UNIQUE INDEX Users_password_uindex ON users (password);

CREATE TABLE private_messages
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    message VARCHAR(1024) NOT NULL,
    send_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    sender_id INT NOT NULL,
    reciever_id INT NOT NULL,
    CONSTRAINT fk_pm_users_sender_id FOREIGN KEY (sender_id) REFERENCES users (id),
    CONSTRAINT fk_pm_users_reciever_id FOREIGN KEY (reciever_id) REFERENCES users (id)
);
CREATE UNIQUE INDEX private_messages_id_uindex ON private_messages (id);
CREATE UNIQUE INDEX permissions_id_uindex ON permissions (id);
CREATE UNIQUE INDEX permissions_access_level_uindex ON permissions (access_level);

# ('published','deleted')
CREATE TABLE torrents
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(128) NOT NULL,
    description VARCHAR(2048) NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    edit_date TIMESTAMP,
    status ENUM('published','deleted') NOT NULL,
    permission_id INT NOT NULL,
    user_id INT NOT NULL,
    category_id INT NOT NULL,
    CONSTRAINT fk_torrents_permissions_torrent_id FOREIGN KEY (permission_id) REFERENCES permissions (id),
    CONSTRAINT fk_torrents_users_user_id FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT fk_torrents_categories_category_id FOREIGN KEY (category_id) REFERENCES categories (id)
);
CREATE UNIQUE INDEX torrents_id_uindex ON torrents (id)



CREATE TABLE comments
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    comment VARCHAR(1024) NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    torrent_id INT NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_comments_users_user_id FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT fk_comments_torrents_torrent_id FOREIGN KEY (torrent_id) REFERENCES torrents (id)
);
CREATE UNIQUE INDEX comments_id_uindex ON comments (id);

CREATE TABLE files
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL,
    file BLOB NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_date TIMESTAMP NOT NULL,
    type ENUM('file', 'image') NOT NULL,
    torrent_id INT NOT NULL,
    CONSTRAINT fk_torrents_files_torrent_id FOREIGN KEY (torrent_id) REFERENCES torrents (id)
);
CREATE UNIQUE INDEX files_id_uindex ON files (id);

CREATE TABLE downloads
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    download_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    file_id INT NOT NULL,
    CONSTRAINT fk_downloads_users_user_id FOREIGN KEY (user_id) REFERENCES users (id),
    CONSTRAINT fk_downloads_files_file_id FOREIGN KEY (file_id) REFERENCES files (id)
);
CREATE UNIQUE INDEX downloads_id_uindex ON downloads (id);

INSERT INTO permissions (access_level, name) VALUES
    ('0', 'guest'),
    ('1', 'user'),
    ('2', 'admin');

INSERT INTO categories (id, name, permission_id, parent_category_id) VALUES
    (1, 'Anime', 1, NULL),
    (2, 'TV', 1, 1),
    (3, 'AMV', 1, 1),
    (4, 'BD RIP', 1, 1),

    (5, 'Games', 1, NULL),

    (6, 'Steam RIP', 1, 5),
    (7, 'FPS', 1, 6),
    (8, 'TPS', 1, 6),
    (9, 'Denuvo Hacked', 2, 6),

    (10, 'GOG Releases', 1, 5),
    (11, 'FPS', 1, 10),
    (12, 'TPS', 1, 10),
    (13, 'AAA class', 2, 10),

    (14, 'Anthology', 1, 5),
    (15, 'FPS', 1, 14),
    (16, 'TPS', 1, 14),
    (17, 'Old games', 2, 14),

    (18, 'Movies', 1, NULL),
    (19, 'Action', 1, 18),
    (20, 'Documentary', 1, 18),
    (21, 'Fictional', 1, 18),

    (22, 'Old films', 1, 18),
    (23, 'Action', 1, 22),
    (24, 'Documentary', 1, 22),
    (25, 'Fictional', 1, 22),

    (26, 'Literature', 1, NULL),
    (27, 'Classic', 1, 26),
    (28, 'LitRPG', 1, 26),
    (29, 'Cyberpunk', 1, 26),
    (30, 'Noir', 1, 26),

    (31, 'Software', 1, NULL),
    (32, 'DB', 1, 31),
    (33, 'DevTools', 1, 31),
    (34, 'nix', 1, 31)
;

INSERT INTO users (id, name, email, password, reg_date, more_information, sex, birthday, permission) VALUES
    (1, 'OriginAdmin', 'admin_example@example.com', 'admin_password', DEFAULT, 'some info bro', 'male', DATE('1985-12-21'), 3),
    (2, 'OriginUser', 'user@example.com', 'password', DEFAULT, 'some info bro', 'male', DATE('1990-09-21'), 1)
;

INSERT INTO private_messages (id, message, send_time, sender_id, reciever_id) VALUES
    (1, 'from admin with ban <3', DEFAULT, 1, 2),
    (2, 'YA TEBYA NAIDU', DEFAULT, 2, 1)
;

INSERT INTO torrents (id, name, description, creation_date, edit_date, status, permission_id, user_id, torrent.torrents.category_id) VALUES
    (1, 'Boku no Pico', 'Some awesome anime here!', DEFAULT, null, 'published', 1, 1, 2),
    (2, 'Boku no Pico 2', 'Epic comeback', DEFAULT, null, 'published', 1, 1, 2)
;