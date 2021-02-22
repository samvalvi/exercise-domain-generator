let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = ['.com', '.net', '.us', '.io'];

const domainNameGenerator = (a, b, c, d) => {
    let domain = ''

    for (let i = 0; i < a.length; i++)
    {
        for (let j = 0; j < b.length; j++)
        {
            domain += a[Math.floor(Math.random() * 2)] + b[Math.floor(Math.random() * 2)] + c[Math.floor(Math.random() * 2)] 
            + d[Math.floor(Math.random() * 4)];
        }
    }

    return domain;
}



let result = domainNameGenerator(pronoun, adj, noun, extension); 
console.log(result);