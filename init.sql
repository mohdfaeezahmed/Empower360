-- Schema for Empower360

DROP TABLE IF EXISTS policies;
DROP TABLE IF EXISTS categories;

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(64) UNIQUE NOT NULL,
  name VARCHAR(120) NOT NULL,
  description TEXT,
  icon VARCHAR(64) DEFAULT NULL
);

CREATE TABLE policies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  summary TEXT,
  eligibility TEXT,
  benefits TEXT,
  doc_url VARCHAR(500),
  state VARCHAR(64) DEFAULT 'National',
  tags TEXT,
  image_url VARCHAR(500),
  popularity INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- categories
INSERT INTO categories (slug, name, description, icon) VALUES
('finance', 'Finance Policies', 'Schemes providing direct financial assistance, subsidies, and income support.', 'Wallet'),
('education', 'Education Policies', 'Scholarships, loans, and school/college support.', 'Book'),
('age', 'Age Policies', 'Support for youth and senior citizens.', 'Clock'),
('gender', 'Gender Policies', 'Schemes for women, transgender and other gender-focused initiatives.', 'Users'),
('healthcare', 'Healthcare Policies', 'Insurance, treatment support and health missions.', 'HeartPulse'),
('workers', 'Workers Right Related Policies', 'Worker welfare, skilling and protections.', 'Briefcase');
