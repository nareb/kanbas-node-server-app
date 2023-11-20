// hello.js
const Hello = (app) => {

    app.get('/hello', (req, res) => { 
        res.send('Life Is Good!'); // http://localhost:4000/hello responds "Life is good"
    });

    app.get('/', (req, res) => {res.send ('Welcome to Full Stack Development!'); 
    });  // http://localhost:4000 responds "Welcome to Full Stack"
export default Hello;