Certainly! Here's the text formatted in Markdown:

### Entities:

#### 1. Admin (agent)
- **Primary Key:** (agent)

#### 2. User (userId, name, email, password, token, role)
- **Primary Key:** (userId)

#### 3. Purchase History (purchaseId, purchaseTime)
- **Primary Key:** (purchaseId)

#### 4. Product (productId, originalPrice, discountPrice, name, category, store, updateTime)
- **Primary Key:** (productId)

#### 5. Product Category (categoryId, categoryName)
- **Primary Key:** (categoryId)

#### 6. Management (agent, userId)
- **Primary Key:** (agent, userId)
- **Foreign Key1:** (agent) REFERENCES Admin (agent)
- **Foreign Key2:** (userId) REFERENCES User (userId)

#### 7. Addition (userId, purchaseId)
- **Primary Key:** (userId, purchaseId)
- **Foreign Key1:** (userId) REFERENCES User (userId)
- **Foreign Key2:** (purchaseId) REFERENCES Purchase History (purchaseId)

#### 8. Inclusion (purchaseId, productId)
- **Primary Key:** (purchaseId, productId)
- **Foreign Key1:** (purchaseId) REFERENCES Purchase History (purchaseId)
- **Foreign Key2:** (productId) REFERENCES Product (productId)

#### 9. Belonging (productId, categoryId)
- **Primary Key:** (productId, categoryId)
- **Foreign Key1:** (productId) REFERENCES Product (productId)
- **Foreign Key2:** (categoryId) REFERENCES Product Category (categoryId)

### SQL Statements:

```sql
-- Admin
CREATE TABLE admin (
  agent VARCHAR(255) PRIMARY KEY
);

-- User
CREATE TABLE user (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  token VARCHAR(255),
  role VARCHAR(50),
  INDEX idx_id(id),
  INDEX idx_name(name),
  INDEX idx_email(email),
  INDEX idx_isDeleted(isDeleted)
);

-- Purchase History
CREATE TABLE purchase_history (
  id VARCHAR(255) PRIMARY KEY,
  purchase_time TIMESTAMP,
  INDEX idx_purchase_time(purchase_time)
);

-- Product
CREATE TABLE product (
  id VARCHAR(255) PRIMARY KEY,
  original_price DECIMAL(10, 2),
  discount_price DECIMAL(10, 2),
  name VARCHAR(255),
  category VARCHAR(255),
  store VARCHAR(255),
  update_time TIMESTAMP,
  INDEX idx_id(id)
  INDEX idx_category(category),
  INDEX idx_isDeleted(isDeleted),
  INDEX idx_update_time(update_time)
);

-- Product Category
CREATE TABLE product_category (
  id VARCHAR(255) PRIMARY KEY,
  category_name VARCHAR(255)
);

-- Management
CREATE TABLE management (
  agent VARCHAR(255),
  user_id VARCHAR(255),
  PRIMARY KEY (agent, user_id),
  INDEX idx_management_user_id(user_id),
  FOREIGN KEY (agent) REFERENCES admin(agent),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Addition
CREATE TABLE addition (
  user_id VARCHAR(255),
  purchase_id VARCHAR(255),
  PRIMARY KEY (user_id, purchase_id),
  INDEX idx_addition_user_id(user_id),
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (purchase_id) REFERENCES purchase_history(id)
);

-- Inclusion
CREATE TABLE inclusion (
  purchase_id VARCHAR(255),
  product_id VARCHAR(255),
  PRIMARY KEY (purchase_id, product_id),
  INDEX idx_inclusion_purchase_id(purchase_id),
  FOREIGN KEY (purchase_id) REFERENCES purchase_history(id),
  FOREIGN KEY (product_id) REFERENCES product(id)
);

-- Belonging
CREATE TABLE belonging (
  product_id VARCHAR(255),
  category_id VARCHAR(255),
  PRIMARY KEY (product_id, category_id),
  INDEX idx_belonging_product_id(product_id),
  FOREIGN KEY (product_id) REFERENCES product(id),
  FOREIGN KEY (category_id) REFERENCES product_category(id)
);

ALTER TABLE user
ADD COLUMN email VARCHAR(255);
```

This Markdown structure should make the information clear and readable. Adjustments can be made based on your specific preferences or additional details you'd like to include.