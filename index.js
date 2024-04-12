// Add your code here
function submitData(name, email) {
    const userData = {
      name: name,
      email: email
    };
  
    const url = 'http://localhost:3000/users';
  
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit data');
        }
        return response.json();
      })
      .then(data => {
        const id = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${id}`;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  
  
  submitData('Reagan mariera', 'mariera.reagan@moringaschool.com');
  