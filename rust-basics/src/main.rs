use std::any::Any;
use std::net::IpAddr::V4;

// enums can include primitives or other data types
enum IpAddr {
    V4(i32, i32, i32, i32),
    V6(String)
}

struct Addr {
    ip_type: IpAddr,
}

fn main() {

    let addrV4 = IpAddr::V4(127,0,0,1);
    let addrV6 = IpAddr::V6(String::from("::1"));

    // the same
    let addr_struct = Addr {
        ip_type: IpAddr::V4(127,0,0,1)
    };


}
