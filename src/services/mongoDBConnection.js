const { MongoClient } = require('mongodb');

class MongoDBConnection {
    constructor() {
         
        this.username = 'aleste';
        this.password = '1104';
        this.connectionString = `mongodb+srv://${this.username}:${this.password}@cluster0.5onyz3j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    }

    async connect() {
 

        try {
            // Conectar ao MongoDB
            const client = new MongoClient(this.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();
            console.log('Conectado ao MongoDB com sucesso!');
            return client.db();
        } catch (error) {
            console.error('Falha ao conectar ao MongoDB:', error);
            throw error;
        }
    }
}

 module.exports = MongoDBConnection;