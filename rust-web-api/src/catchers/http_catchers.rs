use rocket::Request;

#[catch(500)]
pub fn internal_error() -> String {
    format!("Issues on our side. Nice.")
}

#[catch(404)]
pub fn not_found(req: &Request) -> String {
    format!("404 my friend - Nothing here for you")
}

#[catch(422)]
pub fn unprocessable(req: &Request) -> String {
    format!("Your Request is unprocessable. Check your content")
}