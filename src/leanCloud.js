import AV from 'leancloud-storage'

var APP_ID = 你的ID
var APP_KEY = 你的KEY
AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

export default AV
