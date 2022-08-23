// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello world!';

// let iceCream = 'chocolate';
// if (iceCream === 'chocolate'){
//     alert('我最喜欢巧克力冰激凌了。')
// }else {
//     alert('但是巧克力才是我的最爱呀。。。。')
// }
// alert() 函数在浏览器窗口内弹出一个警告框

// function multiply(num1, num2){
//     let result =num1 * num2;
//     return result;
// }
// alert(multiply(1, 2));
// multiply(3,4);
// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

// 事件能为网页添加真实的交互能力。

// document.querySelector('html').onclick = function(){
//     alert('别戳我，我怕疼。')
// }

// document.querySelector('html').addEventListener('click', () =>{
//     alert('别戳我，我怕疼。');
// });
// 这里首先把 <img> 元素的引用存放在 myImage 变量里。然后将这个变量的 onclick 事件与一个匿名函数绑定

// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.jpeg') {
    myImage.setAttribute ('src','images/firefox-icon2.jpeg');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.jpeg');
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 调用 localStorage API，它可以将数据存储在浏览器中供后续获取。这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。最后将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
};
Footer
