import { useState } from "react";

type FormType<T> = {
  [K in keyof T]: T[K];
};

type UseFormReturn<T> = [
  FormType<T>,
  (formType: keyof T | "reset", formValue?: T[keyof T]) => void
];

const useForm = <T extends Record<string, any>>(
  initialValues: T
): UseFormReturn<T> => {
  const [form, setForm] = useState<FormType<T>>(initialValues);

  const handleFormChange = (
    formType: keyof T | "reset",
    formValue?: T[keyof T]
  ) => {
    if (formType === "reset") {
      setForm(initialValues);
    } else {
      setForm((prevForm) => ({ ...prevForm, [formType]: formValue }));
    }
  };

  return [form, handleFormChange];
};

export default useForm;
