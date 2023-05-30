#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use] extern crate rocket;

#[path = "catchers/http_catchers.rs"] mod http_catchers;
#[path = "routes/routes.rs"] mod routes;
#[path = "models/user.rs"] mod user;

use rocket::form::Form;
use rocket::Request;

#[rocket::main]
async fn main() {

    let rocket = rocket::build()
        .mount("/", routes![
            routes::index,
            routes::server_info,
            routes::incoming_request
        ])
        .register("/", catchers![
            http_catchers::internal_error,
            http_catchers::not_found,
            http_catchers::unprocessable
        ])
        .launch()
        .await
        .expect("Something went wrong while booting Rocket");
}