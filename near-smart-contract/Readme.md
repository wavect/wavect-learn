## Deploying a Smart Contract on the NEAR Protocol


Build your project
> cargo build --target wasm32-unknown-unknown --release

Login with your ID
> near login 
 
Deploy it
> near deploy --wasmFile target/wasm32-unknown-unknown/release/rust_counter_tutorial.wasm --accountId <YOUR_ACCOUNT_HERE>