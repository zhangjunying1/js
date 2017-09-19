window.onload = function(){
	let daohang=document.getElementsByClassName('cedaohang');
	let ul1=daohang[0].getElementsByTagName('ul')[0];
	let lis1=ul1.getElementsByTagName('li');
	let items=document.getElementsByClassName('item');
	let bottom=document.getElementsByClassName('bottom-list');
	let lis2=bottom[0].getElementsByTagName('li');
	let imgs=document.getElementsByClassName('img-list');
	let lis3=imgs[0].getElementsByTagName('li');
	let big=document.getElementsByClassName('bigg')[0];

	//自动改变banner图片
	let t=setInterval(move, 3000);
	let num=0;
	function move(){
		num++;
		if(num==lis3.length){
			num=0;
		}
		for(let i=0;i<lis3.length;i++){
			lis3[i].style.display='none';
			lis2[i].style.background='rgba(0, 0, 0, 0.4)';		
		}
		lis3[num].style.display='block';
		lis2[num].style.background='white';
	}

	//鼠标进入banner，图片停止滚动
	big.onmouseover=function(){
		clearInterval(t);
	}
	big.onmouseout=function(){
		t=setInterval(move,3000);
	}

	//点击轮播改变banner图片
	for(let i=0;i<lis2.length;i++){
		lis2[i].onclick=function(){
			for(let j=0;j<lis3.length;j++){
				lis3[j].style.display='none';
				lis2[j].style.background='rgba(0, 0, 0, 0.4)';
			}
			lis3[i].style.display='block';
			lis2[i].style.background='white';
			num=i;
		}				
	}

	//侧导航的鼠标移入的效果
	for(let i=0;i<lis1.length;i++){
		lis1[i].onmouseover=function(){
			items[i].style.display='block';
		}
		lis1[i].onmouseout=function(){
			items[i].style.display='none';
		}
	}

}
