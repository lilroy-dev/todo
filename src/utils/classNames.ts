// classNames.ts

type ClassNames = string | Record<string, boolean | undefined | null>;

export function classNames(...args: ClassNames[]): string {
  return args
    .map((arg) => {
      if (typeof arg === 'string') {
        return arg;
      } // Если строка, просто добавляем
      if (typeof arg === 'object') {
        return Object.keys(arg)
          .filter((key) => arg[key])
          .join(' ');
      }
      return '';
    })
    .join(' ');
}
