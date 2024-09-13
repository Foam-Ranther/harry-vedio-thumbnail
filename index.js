function make_video(){
    console.log('this is inside the submit button');
        let title=document.querySelector('#in_title');
        let channel_name=document.querySelector('#in_cName');
        let views=document.querySelector('#in_views');
        let monthOld=document.querySelector('#in_monthOld');
        let duration=document.querySelector('#in_duration');
        let image_link=document.querySelector('#in_image_link');
        let channel_link=document.querySelector('#in_channel_link')
        //elements for creation box
        console.log(`${image_link.value}`);
        
        let element=document.createElement('div')
        let ele_left=document.createElement('div')
        let ele_img=document.createElement('img')
        let ele_duration=document.createElement('p')
        let ele_right=document.createElement('div')
        let ele_title=document.createElement('div')
        let ele_information=document.createElement('div')
        
        element.classList.add('container');
        ele_left.classList.add('left')
        ele_right.classList.add('right')
        ele_duration.classList.add('duration')

        
        element.appendChild(ele_left);

        ele_left.appendChild(ele_img);
        ele_img.classList.add('image')
        ele_img.setAttribute('href',`${image_link.value}`)

        ele_left.appendChild(ele_duration);
        ele_duration.innerHTML=`${duration.value}`;

        element.appendChild(ele_right);

        ele_right.appendChild(ele_title);
        ele_title.innerText=`${title.value}`

        ele_right.appendChild(ele_information);
        ele_information.classList.add('information');
        let info_channel=document.createElement('a')
        info_channel.setAttribute('href',`${channel_link.value}`)
        info_channel.innerText=`${channel_name.value}`;
        ele_information.appendChild(info_channel);

        
        let info_views=document.createElement('div');
        info_views.innerText=`${views.value}`;
        ele_information.appendChild(info_views);

        let info_month_old=document.createElement('div')
        info_month_old.innerText=`${monthOld.value}`
        ele_information.appendChild(info_month_old);

        document.querySelector('.video_div').append(element);
}
document.addEventListener('DOMContentLoaded',()=>{
     document.querySelector('.user').addEventListener('submit',(event)=>{
        event.preventDefault();
        make_video();
    })
});