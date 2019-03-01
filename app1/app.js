require('./index.scss');
//获取屏幕宽度
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
//获取Html的Dom
let htmlDom = document.getElementsByTagName('html')[0];
//设置html的Fontsize
htmlDom.style.fontSize= htmlWidth / 10 + 'px'

window.addEventListener('resize',()=>{
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize= htmlWidth / 10 + 'px'
})