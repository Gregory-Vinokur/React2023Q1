export interface IFormData {
  name: string;
  surname: string;
  date: string;
  select: string;
  checkbox: string | boolean;
  radio: string;
  desc: string;
  file: File | null;
}
