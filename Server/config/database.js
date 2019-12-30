let password = 'contactusCONOGO';
let username = 'contactUs';
let db_name = 'contactUs';
let db_port = 27017;

module.exports = {
    //Local storage  mongoURI: `mongodb://127.0.0.1:${db_port}/${db_name}`
    mongoURI: `mongodb+srv://${username}:${password}@contactus-wfhif.mongodb.net/${db_name}?retryWrites=true&w=majority`
}