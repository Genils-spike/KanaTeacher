var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'git@github.com:Genils-spike/KanaTeacher.git', // Update to point to your repository  
        user: {
            name: 'genils-spike', // update to use your name
            email: 'alexandrebeauverger@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)