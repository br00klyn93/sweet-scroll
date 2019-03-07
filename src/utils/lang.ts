export const isString = (obj: any): obj is string => typeof obj === 'string';
export const isFunction = (obj: any): boolean => typeof obj === 'function';
export const isArray = (obj: any): obj is any[] => Array.isArray(obj);
export const isNumeric = (obj: any): boolean => !isArray(obj) && obj - parseFloat(obj) + 1 >= 0;

export const hasProp = (obj: any, key: string): boolean => obj && obj.hasOwnProperty(key);
