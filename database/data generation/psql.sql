-- psql.sql

DROP DATABASE IF EXISTS photos;

CREATE DATABASE photos;

-- make sure using photos database
\c photos;

-- Create items table
CREATE TABLE listings (
  listing_id INT,
  url VARCHAR,
  key INT,
  description VARCHAR
);
