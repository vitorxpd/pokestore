export function delay(ms: number = 600) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
