# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## setItems
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
term            | string    | not null
definition      | string    | not null
image           | string    |
audio           | string    |
set_id          | integer   | not null, foreign key (references sets), indexed

## sets
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
author_id       | integer   | not null, indexed
description     | text      |
term_language   | string    |
def_language    | string    |


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (references sets), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
