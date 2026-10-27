-- Schema inferred from RepositorioContactsSQL::saveInBDD (positional INSERT).
CREATE TABLE IF NOT EXISTS contacts (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  comments TEXT NULL,
  newsletter VARCHAR(3) NOT NULL DEFAULT 'No',
  origin VARCHAR(255) NULL,
  utm_source VARCHAR(255) NULL,
  utm_medium VARCHAR(255) NULL,
  utm_campaign VARCHAR(255) NULL,
  utm_content VARCHAR(255) NULL,
  date VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
