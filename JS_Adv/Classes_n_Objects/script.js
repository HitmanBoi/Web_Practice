class TCar {
    constructor() {
        this.baseSpeed = '100';
        this.sound = 'vroom';
    }

    vroom() {
        console.log(this.sound);
    }
}


let KTM = new TCar();

KTM.vroom();

Data = 'Data Dekho'

class User {
    constructor(userName,userEmail) {
        this.uName = userName ;
        this.uMail = userEmail ;
    }

    viewData() {  
        console.log(Data);
    }
}

empObj = new User('kamal','k@k.com');

empObj.viewData();

class Admin extends User {
    updateData(newData) {
        Data = newData;
    }
}

AdminObj = new Admin();

AdminObj.updateData('nhi dekhne dunga');

empObj.viewData();
AdminObj.viewData();
empObj.viewData();