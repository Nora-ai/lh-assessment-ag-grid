import mongoose from 'mongoose'

const connection = {}

//checks to see if there is a connection to the db, if not then create a connection

async function dbConnect() {
    if (connection.isConnected) {
        return
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connection.isConnected = db.connections[0].readyState
    console.log(connection.isConnected)
}

export default dbConnect