const loopTimes = (n) => {
  console.log("n ===", n);
  if (n <= 1) {
    return "complete";
  }
  return loopTimes(n - 1);
};

loopTimes(3);
