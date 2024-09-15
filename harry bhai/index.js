function makeDiv(image_link,duration,title,channel_name,channel_link,views,months_old){
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
    element.classList.add('box');
    element.innerHTML=`<div class="image">
            <img src="${image_link}" alt="image">
            <div class="duration">${duration}</div>
        </div>
        <div class="text">
            <h2>${title}</h2>
            <div class="information">
                <a href="${channel_link}">${channel_name}</a>
                <img src="dot.svg" alt="." class="svg">
                <div>${views} views</div>
                <img src="dot.svg" alt="." class="svg">
                <div>${months_old} months ago</div>
            </div>
        </div>
    </div>`
    document.querySelector('body').appendChild(element);
}
document.addEventListener('DOMContentLoaded',()=>{
    console.log('this is inside dom');
    makeDiv('https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCMQBEG5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB2CBsdfdhlYA7kZwtSfre44-Wx_g','23:12',"this is the second video","codeWithHarry","https://www.youtube.com/@CodeWithHarry",231,4);
    
});