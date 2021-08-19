import * as test from './src'

(async ()=> {
  console.time()
  try{
    console.log(test.toWords(247))
    console.clear()
    console.log('done')
  }catch(e){
    console.clear()
    console.log(e.message)
  }
  console.timeEnd()
})()