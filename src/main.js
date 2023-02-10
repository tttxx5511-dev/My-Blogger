import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'

// function getComponentRootDom(comp,props) {
//   const vm = new Vue ({
//     render: (h)=>h(comp,{props}),
//   });
//   vm.$mount();
//   console.log(vm);
//   return vm.$el;
// }
// import Icon from './components/Icon'
// var dom = getComponentRootDom(Icon,{type:"home"})
// console.log(dom);

// 测试一下纯dom操作
// import styles from "./styles/message.module.less";
// console.log(styles);
// const div = document.createElement('div');
// div.className = styles.message;
// div.innerText = "asdasd";
// document.body.appendChild(div);
import showMessage from './components/utils/showMessage'
window.showMessage = showMessage;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
