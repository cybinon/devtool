import { writeFileSync } from 'fs';
import axios from 'axios';
export const GetErrorMessage = async () => {
  try {
    const data = await axios
      .get('https://raw.githubusercontent.com/cybinon/devtool/main/json/error.json')
      .then((res) => res.data);
    writeFileSync('./errors.json', data);
    console.log('Generated Errors');
  } catch (e) {
    console.log(e);
  }
};
