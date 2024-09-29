import mongoose from "mongoose";

class Database {
    private db_url = 'mongodb://127.0.0.1:27017/prime_burguer';

    async createConnection(){
        try {
          await  mongoose.connect(this.db_url);
          console.log("conectou ao banco...");
        } catch(err) {
            console.log(err);
        }
    }
}


export default Database;