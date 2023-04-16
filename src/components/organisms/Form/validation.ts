export const nameValidation = (value: string): string | true => {
  if (!value) {
    return 'Name is required';
  }
  if (!/^[A-Z]/.test(value)) {
    return 'Name must start with an uppercase letter';
  }
  if (value.trim().length === 0) {
    return 'Name cannot be only spaces';
  }
  return true;
};

export const surnameValidation = (value: string): string | true => {
  if (!value) {
    return 'Surname is required';
  }
  if (!/^[A-Z]/.test(value)) {
    return 'Surname must start with an uppercase letter';
  }
  if (value.trim().length === 0) {
    return 'Surname cannot be only spaces';
  }
  return true;
};

export const fileValidation = (value: FileList) => {
  const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
  const file = value[0];

  if (!file) {
    return 'Choose a file';
  }

  if (!allowedImageTypes.includes(file.type)) {
    return 'Only image files are allowed';
  }

  return true;
};

export const descriptionValidation = (value: string): string | true => {
  if (!value) {
    return 'Please, write something';
  }
  if (!/^\S.*$/.test(value)) {
    return 'Description must not start with a space';
  }
  return true;
};
