const {MongoClient}=require('mongodb');
const url="mongodb+srv://NodejsUser:jjoulcWcgKH29XqU@namastenodejs.mq8cm.mongodb.net/";
// 7CK3yC7MZ1E7EV9z
// mongodb+srv://namastenodejs:7CK3yC7MZ1E7EV9z@namastenodejs.mq8cm.mongodb.net/
// VNUWRpoa1Kk0K2ZY
// jjoulcWcgKH29XqU
const client=new MongoClient(url);
const dbName="user";

async function main(){
    await client.connect();
    
    console.log("connect successfully to server");
    const db=client.db(dbName);
    const collection=db.collection('documents');
    
    return 'done.';
}

main()
.then(console.log)
.catch(console.log)
.finally(()=>client.close());
