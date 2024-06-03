// 在项目中创建一个 typings.d.ts 文件
declare module 'classnames' {
  type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;
  interface ClassDictionary {
    [id: string]: any;
  }
  interface ClassArray extends Array<ClassValue> {}

  export default function classNames(...classes: ClassValue[]): string;
}
