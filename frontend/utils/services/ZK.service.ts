import { initialize } from "zokrates-js";

const zkConstraints = "def main(private field age) {assert(age >= 18);return;}"
const provingKey = require('./proving.key')

export const getProof = async (age: number) => {
    const zokratesProvider = await initialize()
    const artifacts = zokratesProvider.compile(zkConstraints)
    const {witness, output} = zokratesProvider.computeWitness(artifacts, [age.toString()])
    //const keypair = zokratesProvider.setup(artifacts.program);

    const proof = zokratesProvider.generateProof(
        artifacts.program,
        witness,
        provingKey,
    )

    console.log("Proof: ", proof)
    return proof;
}