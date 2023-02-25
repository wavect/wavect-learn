
export enum ESplitTest {
    // Not using 0 on purpose, bc. !!0 = false
    A = 1, B = 2, C = 3,
}

// Naive approach for now, just change split version here
export const SPLIT_TEST: ESplitTest = ESplitTest.A;