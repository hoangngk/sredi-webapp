export function createRandomColorArray(length: number): string[] {
  const colors = [];
  for (let i = 0; i < length; i++) {
    colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  
  return colors;
}