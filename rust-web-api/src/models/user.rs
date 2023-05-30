use rocket::serde::{Deserialize};

#[derive(Debug, Deserialize)]
pub struct User {
    pub id: i64,
    pub email: String,
    pub password: String
}