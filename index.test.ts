import { toWords, GetErrorMessage } from './src';

(async () => {
  console.time();
  try {
    console.clear();
    GetErrorMessage();
  } catch (e) {
    console.clear();
    console.log(e.message);
  }
  console.timeEnd();
})();
