window.onload = function(){
	let aside=document.getElementsByTagName('aside');
	let ul1=aside[0].getElementsByTagName('ul')[0];
	let lis1=ul1.getElementsByTagName('li');
	let iteams=document.getElementsByClassName('iteams');
	let navcen=document.getElementsByClassName('nav-center');
	let a1=navcen[0].getElementsByTagName('a');
	let uls=navcen[0].getElementsByTagName('ul');
	let imgs=document.getElementsByClassName('img-list')[0];
	let imgli=imgs.getElementsByClassName('li-img');
	let banners=document.getElementsByClassName('banner')[0];
	let yuans=document.getElementsByClassName('yuan')[0];
	let smalls=yuans.getElementsByClassName('small-yuan');
	let bannerleft=banners.getElementsByClassName('banner-left');
	let iconleft=bannerleft[0].getElementsByClassName('icon-zuo');
	let bannerright=banners.getElementsByClassName('banner-right');
	let iconright=bannerright[0].getElementsByClassName('icon-you');


	//自动改变banner图片
	let t=setInterval(move, 3000);
	let num=0;
	function move(){
		num++;
		if(num==imgli.length){
			num=0;
		}
		for(let i=0;i<imgli.length;i++){
			imgli[i].style.display='none';
			smalls[i].style.background='#16161c';		
		}
		imgli[num].style.display='block';
		smalls[num].style.background='#9c9ca2';
	}
	function movel(){
		num--;
		if(num<0){
			num=imgli.length-1;
		}
		for(let i=0;i<imgli.length;i++){
			imgli[i].style.display='none';
			smalls[i].style.background='#16161c';		
		}
		imgli[num].style.display='block';
		smalls[num].style.background='#9c9ca2';
	}

	//鼠标进入banner，图片停止滚动
	banners.onmouseover=function(){
		clearInterval(t);
	}
	banners.onmouseout=function(){
		t=setInterval(move,3000);
	}

	//点击轮波改变banner图片
	for(let i=0;i<smalls.length;i++){
		smalls[i].onclick=function(){
			for(let j=0;j<imgli.length;j++){
				imgli[j].style.display='none';
				smalls[j].style.background='rgba(0, 0, 0, 0.4)';
			}
			imgli[i].style.display='block';
			smalls[i].style.background='white';
			num=i;
		}				
	}

	//左右边小箭头鼠标点击移入效果
	for(let i=0;i<smalls.length;i++){
		iconleft[0].onclick=function(){
			movel();
		}
		iconright[0].onclick=function(){
			move();
		}
	}

	//侧导航的鼠标移入的效果
	for(let i=0;i<lis1.length;i++){
		lis1[i].onmouseover=function(){
			iteams[i].style.display='block';
		}
		lis1[i].onmouseout=function(){
			iteams[i].style.display='none';
		}
	}
	//头部点击下拉出现框
	for(let i=0;i<a1.length;i++){
		a1[i].onmouseover=function(){
			uls[i].style.display='block';
		}
		a1[i].onmouseout=function(){
			uls[i].style.display='none';
		}
	}
}