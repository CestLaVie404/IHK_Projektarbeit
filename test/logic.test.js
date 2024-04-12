import { expect } from "chai";
import { logic } from "../js/logic_testfile.js";

describe('logic', () => {
    it('should perform logical operations correctly', () => {
        // Testfall für AND-Operation
        expect(logic(true, true, 'and')).to.equal(true);
        expect(logic(true, false, 'and')).to.equal(false);
        expect(logic(false, true, 'and')).to.equal(false);
        expect(logic(false, false, 'and')).to.equal(false);

        // Testfall für NOT-Operation
        expect(logic(true, undefined, 'not')).to.equal(false);
        expect(logic(false, undefined, 'not')).to.equal(true);

        // Weitere Testfälle für andere Operationen
        // ...

    });
});
