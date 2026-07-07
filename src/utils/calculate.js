export const OPERATORS = ['+', '-', '*', '/'];

export function calculate(a, b, operator) {
  const numA = Number(a);
  const numB = Number(b);

  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    throw new Error('กรุณากรอกตัวเลขให้ครบทั้งสองช่อง');
  }

  switch (operator) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    case '*':
      return numA * numB;
    case '/':
      if (numB === 0) {
        throw new Error('ไม่สามารถหารด้วย 0 ได้');
      }
      return numA / numB;
    default:
      throw new Error('กรุณาเลือกเครื่องหมายคำนวณ');
  }
}
