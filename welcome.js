import os from 'os'
function OC (){
    console.log('Привет, юзер. Вижу ты зашел с ' + os.type())
}
OC()
 
export {OC};