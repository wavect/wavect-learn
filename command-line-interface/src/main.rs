use std::env::{args, Args};


fn main() {
    println!("Project 0: Command Line Interface");

    let mut args: Args = args();

    let first = args.nth(1).unwrap();
    let operator = args.nth(0).unwrap().chars().next().unwrap();
    let second = args.nth(0).unwrap();

    // defining the types, either way possible
    let first_number = first.parse::<f32>().unwrap();
    let second_number: f32 = second.parse().unwrap();

    let result = operate_rust_way(operator, first_number, second_number);

    println!("{}", output(first_number, operator, second_number, result));
}

fn operate_rust_way(operator: char, first_number: f32, second_number: f32) -> f32 {
    match operator {
        '+' => first_number + second_number,
        '-' => first_number - second_number,
        '/' => first_number / second_number,
        '*' | 'x' | 'X' => first_number * second_number,
        _ => panic!("Oh boy, invalid operator!")
    }
}

fn operate_classic(operator: char, first_number: f32, second_number: f32) -> f32 {
    if operator == '+' {
        first_number + second_number
    } else if operator == '-' {
        first_number + second_number
    } else if operator == '*' {
        first_number * second_number
    } else if operator == '/' {
        first_number / second_number
    } else {
        panic!("Invalid operator")
    }
}

fn output(first: f32, op: char, second: f32, result: f32) -> String {
    format!("{} {} {} = {}", first, op, second, result)
}