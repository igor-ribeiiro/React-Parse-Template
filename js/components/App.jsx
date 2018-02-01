import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        const user = new Parse.User();
        user.save({
            username: 'sampeusername',
            email: 'sample@email.com',
            password: '123456'
        }, {
            success: function(response) {
                alert('New object create with success! ObjectId: ' + response.id + `, ` + user.get('username'));
            },
            error: function(response, error) {
                alert('Error: ' + error.message);
            }
        });
    }


    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }


}

export default App;