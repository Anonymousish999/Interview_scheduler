const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ishuguptaishu999:Ishu123456@cluster0.wdrdetl.mongodb.net/', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then((result) => {
    console.log('Database connected');
}).catch((e) => console.log(e))

module.exports = mongoose