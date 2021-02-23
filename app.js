let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = ['.com', '.net', '.us', '.io'];

const domainNameGenerator = (a, b, c, d) => {

    for (let i = 0; i < a.length; i++)
    {
        for (let j = 0; j < b.length; j++)
        {
            console.log(a[Math.floor(Math.random() * 2)] + b[Math.floor(Math.random() * 2)] + c[Math.floor(Math.random() * 2)] 
            + d[Math.floor(Math.random() * 4)]);
        }
    }
}

domainNameGenerator(pronoun, adj, noun, extension); 
