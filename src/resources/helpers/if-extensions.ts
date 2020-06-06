export const eq = (v1, v2) => v1 === v2;
export const ne = (v1, v2) => v1 !== v2;
export const lt = (v1, v2) => v1 < v2;
export const gt = (v1, v2) => v1 > v2;
export const lte = (v1, v2) => v1 <= v2;
export const gte = (v1, v2) => v1 >= v2;

export function and() {
  return Array.prototype.every.call(arguments, Boolean);
};

export function or() {
  return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
};
