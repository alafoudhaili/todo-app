const mongoose = require("mongoose");
module.exports = async() => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology : true,
        };
        await mongoose.connect("mongodb://localhost/todoapp",connectionParams);
        console.log("connected to database");
    } catch (error) {
        console.log("could not connect to database",error);
    }{

    }
}