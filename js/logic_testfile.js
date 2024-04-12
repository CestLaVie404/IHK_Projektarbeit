export function logic(b1, b2, mode) {
    switch (mode) {
      case "and":
        return b1 && b2;
      case "not":
        return !b1;
      case "or":
        return b1 || b2;
      case "nand":
        return !(b1 && b2);
      case "nor":
        return !(b1 || b2);
      case "xor":
        return (b1 && !b2) || (!b1 && b2);
    }
  };