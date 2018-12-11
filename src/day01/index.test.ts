import { assert } from "chai";
import "mocha";
import { add } from ".";

describe("add:", () => {
    it("add(1 + 1) = 2", () => {
        assert.equal(add(1, 1), 2);
    });
});
