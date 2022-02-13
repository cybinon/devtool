import { writeFileSync } from 'fs';
export const GetErrorMessage = () => {
  try {
    const file = writeFileSync('./errors.json', '');
  } catch (e) {
    console.log(e);
  }
};
