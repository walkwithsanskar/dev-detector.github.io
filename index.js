const completeMain=document.querySelector(".main");
const wrapper=document.querySelector(".wrapper");
const searchbox=document.querySelector(".search")
const avatarImage=document.querySelector("[useravatar]");
const naam=document.querySelector("[naam]");
const userName=document.querySelector("[username]");
const created=document.querySelector("[created]");
const bio=document.querySelector("[bio]");
const repoCount=document.querySelector("[repocount]");
const followCount=document.querySelector("[followcount]");
const followingCount=document.querySelector("[followingcount]");
const location1=document.querySelector("[location]");
const website=document.querySelector("[website]");
const twitter=document.querySelector("[twitter]");
const company=document.querySelector("[company]");
const searchUser=document.querySelector("[searchUser]");
const nextuser=document.querySelector("[newusername]");
const noimage=document.querySelector("[noimage]");
const mode=document.querySelector(".mode");
const modespan=document.querySelector(".modespan");
const modeimage=document.querySelector(".modeimage");
const highs=document.querySelector(".highlights")
const change=document.querySelector(".change")
const change1=document.querySelector(".change1")
const change2=document.querySelector(".change2")
const change3=document.querySelector(".change3")
const imhead=document.querySelector(".imhead");
const input1=document.querySelector(".input1")
let modeinitial="Light";
mode.addEventListener('click',(e)=>{
    e.preventDefault;
    if(modeinitial=="Light"){
    modespan.textContent="Dark";
    modeimage.src="./assets/images/moon-icon.svg"
    completeMain.classList.add("dark")
    wrapper.classList.add("dark")
    searchbox.classList.add("dark")
    userName.classList.add("dark");
    highs.classList.add("dark")
    change.classList.add("dark")
    change1.classList.add("dark")
    change2.classList.add("dark")
    change3.classList.add("dark")
    imhead.classList.add("dark")
    input1.classList.add("dark")
    modeinitial="Dark"

    }else{
        modespan.textContent="Light";
        modeimage.src="./assets/images/sun-icon.svg"
        modeinitial="Light";
        completeMain.classList.remove("dark");
        wrapper.classList.remove("dark");
        searchbox.classList.remove("dark")
        userName.classList.remove("dark");
        highs.classList.remove("dark");
        change.classList.remove("dark");
        change1.classList.remove("dark")
        change2.classList.remove("dark")
        change3.classList.remove("dark")
        imhead.classList.remove("dark")
        input1.classList.remove("dark")
    }
})

let user="walkwithsanskar";
let insidenouser=0;
fetchUserInfo(user);
async function fetchUserInfo(user){
    
    let response=await fetch(`https://api.github.com/users/${user}`);

    let data=await response.json();
    console.log(data);

    avatarImage.src=`${data?.avatar_url}`;
    naam.innerHTML=data?.name;
    userName.textContent=data?.login;
    userName.setAttribute('href',`https://github.com/${data?.login}`);
    created.textContent="Joined " + data?.created_at;
    bio.textContent=data?.bio;
    repoCount.textContent=data?.public_repos;
    followCount.textContent=data?.followers;
    followingCount.textContent=data?.following;
    location1.textContent=data?.location;
    website.textContent=data?.blog;
    twitter.textContent=data?.twitter_username;
    company.textContent=data?.company;

    if(data?.location==null){
        location1.textContent="Not Available";
    }else{
        location1.textContent=data?.location;
    }

    if(data?.blog==""){
        website.textContent="Not Available"
    }else{
        website.textContent=data?.blog;
    }
   
    if(data?.twitter_username==null){
        twitter.textContent="Not Available"
    }else{
        twitter.textContent=data?.twitter_username;
    }
   
    if(data?.company==null){
        company.textContent="Not Available"
    }else{
        company.textContent=data?.company;
    }
   






}

async function searchNewUser(newuser){
    const nouser=document.querySelector('[nouser]');
    nouser.textContent="";

    if(newuser==""){
        nouser.textContent="please enter a username before search";
        return;
    }

    console.log("inside function");

    let response=await fetch(`https://api.github.com/users/${newuser}`);

    let data=await response.json();
    console.log(data);

    if(data?.message=="Not Found"){
        
        nouser.textContent="user does not exist";
        insidenouser=1;
        return;
    }else{}
    
    avatarImage.src=data?.avatar_url;
    naam.innerHTML=data?.name;
    userName.textContent=data?.login;
    userName.setAttribute('href',`https://github.com/${data?.login}`);
    created.textContent="Joined " + data?.created_at;
    bio.textContent=data?.bio;
    repoCount.textContent=data?.public_repos;
    followCount.textContent=data?.followers;
    followingCount.textContent=data?.following;
    // location1.textContent=data?.location;
    // website.textContent=data?.blog;
    // twitter.textContent=data?.twitter_username;
    // company.textContent=data?.company;
   
    
    if(data?.location==null){
        location1.textContent="Not Available";
    }else{
        location1.textContent=data?.location;
    }

    if(data?.blog==""){
        website.textContent="Not Available"
    }else{
        website.textContent=data?.blog;
    }
   
    if(data?.twitter_username==null){
        twitter.textContent="Not Available"
    }else{
        twitter.textContent=data?.twitter_username;
    }
   
    if(data?.company==null){
        company.textContent="Not Available"
    }else{
        company.textContent=data?.company;
    }
   

    

}
searchUser.addEventListener('click',(e)=>{
    e.preventDefault;
    let newuser=nextuser.value;
    console.log(newuser);
    searchNewUser(newuser);
})
