function makevideo(image_link,title,channel_name,channel_link,views,months_old){
    let initial=views/1000;
    console.log(initial);
    if(initial<1){
        views=views;
    }
    else if (1<=initial && initial<1000){
        console.log(`this is the intitial value inside the if statement ${initial}`);
        
        views=`${initial}k`;
    }
    else if (1000<=initial && initial<1000000){
        console.log(`why are we not here ? ${initial}`);
        
        let second=initial/1000;
        views=`${second}M`;
    }
    else{
        initial=initial/1000000;
        views=`${initial}B`
    }

    let element=document.createElement('div');
    element.classList.add('container');

    let ele_left=document.createElement('div');
    ele_left.classList.add('left');

    let ele_image=document.createElement('img');
    ele_image.classList.add('image');
    ele_image.setAttribute('src',`${image_link}`);
    ele_image.setAttribute('alt',`the image `);

    let ele_right=document.createElement('div');
    ele_right.classList.add('right');

    let ele_title=document.createElement('div');
    ele_title.classList.add('title');
    ele_title.innerText=`${title}`;

    let ele_info=document.createElement('div');
    ele_info.classList.add('information');

    let ele_channel_name=document.createElement('a');
   ele_channel_name.setAttribute('href',`${channel_link}`);
   ele_channel_name.setAttribute('target','_blank')
   ele_channel_name.innerText=`${channel_name}`;

    let ele_svg=document.createElement('img');
    ele_svg.setAttribute('src','dot-small-svgrepo-com(1).svg')
    

    let ele_views=document.createElement('div');
    ele_views.innerText=`${views}`;


    let ele_monthsold=document.createElement('div');
    ele_monthsold.innerText=`${months_old}`;
    
    document.querySelector('.video_div').appendChild(element);
    element.appendChild(ele_left);
    element.appendChild(ele_right);
    ele_left.appendChild(ele_image);
    ele_right.appendChild(ele_title)
    ele_right.appendChild(ele_info);
    ele_info.appendChild(ele_channel_name);
    ele_info.appendChild(ele_svg);
    ele_info.appendChild(ele_views);
    ele_info.appendChild(ele_svg);
    ele_info.appendChild(ele_monthsold);
}
document.addEventListener('DOMContentLoaded',()=>{
    makevideo('imagesecond.webp','this is harry bhai second video','codeWithHarry','https://www.youtube.com/@CodeWithHarry','2000000000','7 months');
    
});