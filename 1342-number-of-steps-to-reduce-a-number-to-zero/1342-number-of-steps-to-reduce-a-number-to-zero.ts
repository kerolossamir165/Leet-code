function numberOfSteps(num: number): number {
  let step = 0;

  while (num > 0) {
    if (num % 2 === 0) {
      step++;
      num = num / 2;
    } else {
      step++;
      num = num - 1;
    }
  }

  return step;
};