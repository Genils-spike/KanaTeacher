var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://gitlab.com/genilsu/hiragana-trainer.git', // Update to point to your repository  
        user: {
            name: 'genilsu', // update to use your name
            email: 'Your Email address' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)