export function debounce(callback: Function, delay: number) {
  let timeoutId: undefined | ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}
