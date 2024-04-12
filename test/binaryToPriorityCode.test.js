import {binaryToPriorityCode} from "../js/binaryToPriorityCode_testfile.js";
import { expect } from "chai";


describe('binaryToPriorityCode', () => {
    it('should convert binary to priority code', () => {
      expect(binaryToPriorityCode('0b0000')).to.equal(0); // Binärwert '0000' sollte 0 entsprechen
      expect(binaryToPriorityCode('0b0001')).to.equal(1); // Binärwert '0001' sollte 1 entsprechen
      expect(binaryToPriorityCode('0b0010')).to.equal(2); // Binärwert '0010' sollte 2 entsprechen
      expect(binaryToPriorityCode('0b0011')).to.equal(3); // Binärwert '0011' sollte 3 entsprechen
      expect(binaryToPriorityCode('0b0100')).to.equal(4); 
      expect(binaryToPriorityCode('0b0101')).to.equal(5); 
      expect(binaryToPriorityCode('0b0110')).to.equal(6); 
      expect(binaryToPriorityCode('0b0111')).to.equal(7); 
      expect(binaryToPriorityCode('0b1000')).to.equal(8); 
      expect(binaryToPriorityCode('0b1001')).to.equal(9); 
      
    });
  });

