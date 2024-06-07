// #[test_only]
// module hello_world::hello_world_tests {
//     // uncomment this line to import the module
//     use hello_world::example::{create_sword};
//     use sui::test_scenario;
//     // const ENotImplemented: u64 = 0;
//
//     #[test]
//     fun test_create_sword() {
//         let mut scenario = test_scenario::begin(@0xCAFEEEEEE);
//         {
//             // Initial balance of the sender
//             let initial_balance = scenario.ctx().balance();
//             // Call the create_sword function
//             create_sword(42, 7, &mut scenario.ctx());
//         }
//     }
// }
