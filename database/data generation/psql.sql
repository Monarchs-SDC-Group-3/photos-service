-- psql.sql

DROP DATABASE IF EXISTS photos;

CREATE DATABASE photos;

-- make sure using photos database
\c photos;

-- Create items table
CREATE TABLE listings (
  listing_id INT,
  listing_url VARCHAR,
  listing_key INT,
  listing_description VARCHAR
);
