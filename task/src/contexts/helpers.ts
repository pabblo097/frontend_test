export function getRandInt(min = 0, max = 100) {
   return Math.floor(Math.random() * Math.floor(max - Math.ceil(min) + 1) + min);
}
