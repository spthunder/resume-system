import {defineStore} from 'pinia'
const baseInfo = defineStore('main', {
    // 推荐使用 完整类型推断的箭头函数
    state: () => {
      return {
        // 所有这些属性都将自动推断其类型
        name: '姓名',
        tel: '电话',
        email: '邮箱',
        birth: '生日'
      }
    },
  })
export {
  baseInfo
}
