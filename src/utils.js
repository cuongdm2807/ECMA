export const useParams = () => {
    const url = document.location.hash.toLowerCase();
    // console.log('url', url);
    const request = url.split("/");
    // console.log('request', request);
    return {
        resource: request[1],
        id: request[2],
        action: request[3]
    }
}
export const $ = selector =>{
    let elements= document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
}
export const reRender  = async (component, position = "") => {
    if(position){
        $(position).innerHTML = await component.render();
    }else{
        $("#root").innerHTML = await component.render()
    }
    await component.afterRender();
}
export const CheckLogin = (URL) =>{
    const user=JSON.parse(localStorage.getItem('user'));
    
    if(user){  
        if(user.role===1){
            console.log('role 1 ');
            return user;
        }else{
            console.log('role 0 ');
                window.location.hash='#/';  
                return user;        
        }       
    }else{
        window.location.hash='#/signin';
    }
}
export const getToken = ()=>{
    const token = JSON.parse(localStorage.getItem('token'));
    if (token)
        return token
    return null
}
export const getUserID = ()=>{
    const { _id : id }= JSON.parse(localStorage.getItem('user'))
    if(id)
        return id
    return null
}