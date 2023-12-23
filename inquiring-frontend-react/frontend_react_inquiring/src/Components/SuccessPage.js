import React, { useEffect, useState } from 'react';

function SuccessPage() {
  const [name, setName] = useState('');

  useEffect(() => {
    // Get the query parameters from the URL
    const queryParams = new URLSearchParams(window.location.search);
    
    // Retrieve the values using the parameter names
    const nameParam = queryParams.get('name');
    
    // Update the state with the retrieved name
    setName(nameParam);
  }, []);

  return (
    <div className='container shadow p-0 mt-5 bg-body rounded mb-5'>
      <div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Thanks {name} successfully submitted !!!</h4>
        <p>Hi {name}, your inquiry has been recorded. Our team will be auto-forwarded to the respective department. To get updates on your inquiry, please sign up and log in. Then you can view your message.</p>
        <hr/>
        <p className="mb-0">Please contact us again if you have any further inquiry.</p>
      </div>
    </div>
  );
}

export default SuccessPage;
// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

// function SuccessPage() {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const name = queryParams.get('name');
//   const email = queryParams.get('email');

//   useEffect(() => {
//     console.log('Name:', name);
//     console.log('Email:', email);
//   }, [name, email]);

//   return (
//     <div className="container">
//       <h1>Success Page</h1>
//       <p>Name: {name}</p>
//       <p>Email: {email}</p>
//     </div>
//   );
// }

// export default SuccessPage;
