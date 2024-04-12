export function binaryToPriorityCode(binary) {
    let priorityCode = 0;
    let weight = 1;
  
    while (binary > 0) {
      const bit = binary % 2; 
      priorityCode += bit * weight;
      weight *= 2;
      binary = Math.floor(binary / 2); 
    }
  
    return priorityCode;
  }