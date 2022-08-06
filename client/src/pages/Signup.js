import React, { useState } from 'react';
// import { useMutation } from '@apollo/react-hooks';
// import Auth from "../utils/auth";
// import { ADD_USER } from "../utils/mutations";

const Signin = () => {
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [addUser] = useMutation(ADD_USER);

  // const handleFormSubmit = async event => {
  //   event.preventDefault();
  //   console.log({
  //     email: formState.email, password: formState.password,
  //     firstName: formState.firstName, lastName: formState.lastName
  //   })
  //   const mutationResponse = await addUser({
  //     variables: {
  //       email: formState.email, password: formState.password,
  //       firstName: formState.firstName, lastName: formState.lastName
  //     }
  //   });
  //   const token = mutationResponse.data.addUser.token;
  //   Auth.login(token);
  // };

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   console.log(event.target.type);
  //   setFormState({
  //     ...formState,
  //     [name]: value
  //   });
  // };

  return (

    <div>
      <h1> Welcome to the party</h1>
    </div>
  )
}


export default Signin;