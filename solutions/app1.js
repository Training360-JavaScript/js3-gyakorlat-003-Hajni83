const setCookie =(token) =>{
    let now = new Date();
    let minutes = 15;
    let expireTime = now.getTime() + (minutes*60*1000);
    document.cookie = `token=${token}; expires=${new Date(expireTime)}`;
    
};
setCookie('token');







export default setCookie;
