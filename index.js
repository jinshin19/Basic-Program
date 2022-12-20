
const btn = document.querySelector('button');

const validate = /^[a-zA-Z0-9]{0,30}$/

const users = [];

const approved = (username, password) => {
  users.push({username, password});
}

let pending = [];

const signUp = () => {

  let getName = prompt('Create Username: Alphabets or with numbers only');

  if(getName.length > 0) {

    if(getName.match(validate)) {
      
      pending.push(getName);

      let createPass = prompt('Create a password');

      if(createPass.length > 0) {
        
        if(createPass.length > 8) {

          if(createPass.match(/\s/)) {

            alert('Password must not contain white spaces');

            createPass = prompt('Create a password: last chance');

            if(createPass.length > 8) {

              if(createPass.match(/\s/)) {

                alert('Password must not contain white spaces: Terminating the program');

              } else {

                pending.push(createPass);
            
                confirmPass = prompt('Confirm Your Password');

                if(confirmPass == pending[1]) {

                  value1 = pending[0];
                  value2 = pending[1];

                  userValue = approved (
                    value1,
                    value2
                  );

                  alert('Proceed to login');
                  login();

                } else {

                  alert('Password is not match');

                  confirmPass = prompt('Confirm Your Password: Last Chance');

                  if(confirmPass == pending[1]) {

                    value1 = pending[0];
                    value2 = pending[1];

                    userValue = approved (
                      value1,
                      value2
                    );

                    alert('Proceed to login');
                    login();

                  } else {

                    alert('Password is not match: Terminating the program');

                  }

                }
                  
              }

            } else {

              alert('Password must be 8 characters above: Terminating the program');

            }

          } else {
            
            pending.push(createPass);
            
            let confirmPass = prompt('Confirm Your Password');

            if(confirmPass == pending[1]) {

              value1 = pending[0];
              value2 = pending[1];

              userValue = approved (
                value1,
                value2
              );

              alert('Proceed to login');
              login();

            } else {

              alert('Password is not match');

              confirmPass = prompt('Confirm Your Password: Last Chance');

              if(confirmPass == pending[1]) {

                value1 = pending[0];
                value2 = pending[1];

                userValue = approved (
                  value1,
                  value2
                );

                alert('Proceed to login');
                login();

              } else {

                alert('Password is not match: Terminating the program');

              }

            }

          }

        } else {

          alert('Password must be 8 characters above, no white spaces');
          
          createPass = prompt('Create a password: last chance');

          if(createPass.length > 8) {

            if(createPass.match(/\s/)) {

              alert('Password must not contain white spaces: Terminating the program');

            } else {

              pending.push(createPass);
          
              confirmPass = prompt('Confirm Your Password');

              if(confirmPass == pending[1]) {

                value1 = pending[0];
                value2 = pending[1];

                userValue = approved (
                  value1,
                  value2
                );

                alert('Proceed to login');
                login();

              } else {

                alert('Password is not match');

                confirmPass = prompt('Confirm Your Password: Last Chance');

                if(confirmPass == pending[1]) {

                  value1 = pending[0];
                  value2 = pending[1];

                  userValue = approved (
                    value1,
                    value2
                  );

                  alert('Proceed to login');
                  login();

                } else {

                  alert('Password is not match: Terminating the program');

                }

              }
                
            }

          } else {

            alert('Password must be 8 characters above, no white spaces: Terminating the program');

          }

        }

      } else {

        alert('Password must not be empty');

        createPass = prompt('Create Password: Last Chance');

        if(createPass.length > 8) {

          if(createPass.match(/\s/)) {

            alert('Terminating the program');

          } else {

            pending.push(createPass);
        
            confirmPass = prompt('Confirm Your Password');

            if(confirmPass == pending[1]) {

              value1 = pending[0];
              value2 = pending[1];

              userValue = approved (
                value1,
                value2
              );

              alert('Proceed to login');
              login();

            } else {

              alert('Password is not match');

              confirmPass = prompt('Confirm Your Password: Last Chance');

              if(confirmPass == pending[1]) {

                value1 = pending[0];
                value2 = pending[1];

                userValue = approved (
                  value1,
                  value2
                );

                alert('Proceed to login');
                login();

              } else {

                alert('Terminating the program');

              }

            }
              
          }

        } else {
          alert('Password must be 8 characters above, no white spaces');
        }

      }

    } else {

      alert('Special Characters & White Spaces Are Not Allowed');

    }

  } else {

    alert('Username must not be empty: Terminating the program');

  }

}

const login = () => {

  pending = pending.filter(pend => pend === users);
  
  let username = prompt('Enter Username');

  userMatch = users.filter(user => user.username == username);

  if(userMatch.length > 0) {

    let userPass = prompt('Enter your password');

    if(userMatch[0].password == userPass) {

      alert('You\'ve successfully logged in ' + userMatch[0].username);
      alert('Thankyou!');

      userMatch.pop();

    } else {
      alert('Wrong Password');

      userPass = prompt('Enter your password: Last Chance');

      if(userMatch[0].password == userPass) {

        alert('You\'ve successfully logged in ' + userMatch[0].username);
        alert('Thankyou!');

        userMatch.pop();

      } else {
        alert('Wrong Password: Terminating the program');
      }

    }

  } else {

    alert('Username is required or maybe you put something does not exist: Terminating the program');

  }

}

const intro = () => {
  let dialog = confirm('I made a very basic program, kindly OK to proceed');

  if(dialog === true) {

    let ask = prompt('If you\'re going to sign-up put the number 1 but if you\'re going to login instead put number 2')

    if(ask == 1) {
      signUp();
    } else if (ask == 2) {
      login()
    } else if (ask !== 1 || ask !== 2) {
      alert('Invalid input, Empty or cancelled. Program will be terminated');
    } else {
      false;
    }

  } else {
    alert('You cancelled. Program will be terminated');
  }

}

btn.onclick = () => {
  intro();
}