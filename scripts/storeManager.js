const LS_KEY = "services";

function save(service) {
    let data = read();

    data.push(service);
    console.log(service); // obj
    let val =  JSON.stringify(data);
    console.log(val);//JSON
    localStorage.setItem(LS_KEY, val);
}

function read() {
    let data = localStorage.getItem(LS_KEY);
    
    if(!data) {
        return [];
    }else{
        let list = JSON.parse(data);
        return list;
    }
}