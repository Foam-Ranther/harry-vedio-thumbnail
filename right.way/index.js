function makevideo(image_link,title,channel_name,channel_link,views,months_old){
    let element=document.createElement('div');
    element.classList.add('container');

    let ele_left=document.createElement('div');
    ele_left.classList.add('left');

    let ele_image=document.createElement('img');
    ele_image.classList.add('image');
    ele_image.setAttribute('href',`${image_link}`);
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
   ele_channel_name.innerText=`${channel_name}`;


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
    ele_info.appendChild(ele_views);
    ele_info.appendChild(ele_monthsold);
}
document.addEventListener('DOMContentLoaded',()=>{
    makevideo();
    
});