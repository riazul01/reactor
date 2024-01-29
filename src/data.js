let users = [];

for (let i = 1; i <= 10000; i ++) {
    let gender = ['male', 'female'];
    let category = ['adult', 'child'];
    let country = ['Bangladesh', 'Maldives', 'Thailand', 'Africa', 'Singapur', 'Malaysia', 'USA', 'Canada', 'England', 'Egypt'];
    
    let obj = {
        id: i,
        username: `user${i}`,
        email: `mail${i}@examp.com`,
        phone: Math.floor(Math.random() * 9000000000 + 1000000000),
        gender: gender[Math.floor(Math.random() * 2)],
        category: category[Math.floor(Math.random() * 2)],
        country: country[Math.floor(Math.random() * 10)]
    }
    
    users.push(obj);
}

export {users};