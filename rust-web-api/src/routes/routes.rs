use crate::user::User;
use rocket::serde::json::Json;

#[get("/")]
pub fn index() -> &'static str {
    "Hello, world!"
}

#[get("/server-info")]
pub fn server_info () -> &'static str {
    "Test"
}

#[post("/", data = "<user_input>")]
pub fn incoming_request(user_input: Json<User>) {
    println!("Incoming User Request: {:?}", user_input);
}