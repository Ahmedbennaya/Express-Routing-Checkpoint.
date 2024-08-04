
const express = require('express');
const path = require('path');
const app = express();

const AppTime = (req, res, next) => {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const hour = currentDate.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 21) {
        next();
    } else {
        res.send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
};

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(AppTime);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/privacy', (req, res) => {
    res.render('privacy');
});

app.get('/terms', (req, res) => {
    res.render('terms');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
