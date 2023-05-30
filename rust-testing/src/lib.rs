
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(2+2, 4);
    }

    #[test]
    fn failing_test() {
        panic!("Destined to fail")
    }
}
