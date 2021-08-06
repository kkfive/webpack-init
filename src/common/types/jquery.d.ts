/* eslint-disable no-unused-vars */
declare global {
  interface JQueryStatic {
    /**
     * 显示提示框函数
     * @param { string } 提示框内容
     * @param { number } 提示框显示时长，默认1.2秒
     * @param { callback } 提示框关闭时的回调函数
     * @returns {Function} destory函数销毁提示框
     */
    alert: (
      content: string,
      type: number,
      callback: Function
    ) => {
      // 销毁对话框方法
      destroy: Function
    }
  }
}
export default global
