import React from 'react';
import Layout from '../Layout/Layout';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField } from '@mui/material';
import useHttp from '../hooks/useHttp';
import toast from 'react-hot-toast';

const Signup = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { sendRequest, isLoading, error } = useHttp();

  const signup = data => {
    console.log(data);
    if (data?.errors && data?.errors.length > 0) {
      return data.errors.map(err => toast.error(err.message));
    }
    if (data?.status === 'success') {
      reset();
      toast.success(data?.message);
    }
  };

  const signupHandler = async data => {
    sendRequest(
      {
        url: 'http://localhost:5000/api/users/signup',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      },
      signup
    );
  };

  const onSubmit = data => {
    signupHandler(data);
    console.log(data);
  };

  return (
    <Layout>
      <Grid
        container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '85vh',
          backgroundColor: 'lightblue',
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            backgroundColor: '#f2f2f2',
            width: '50%',
            padding: '1.5rem',
            borderRadius: '.5rem',
            boxShadow: '1px 4px 14px -2px rgba(0,0,0,0.75)',
          }}
        >
          <h2>Signup</h2>
          <div>
            <TextField
              label="Username"
              variant="standard"
              type="text"
              {...register('username', { required: true })}
              style={{ width: '100%' }}
            />
            {errors.username && (
              <p style={{ color: 'crimson', fontWeight: '500' }}>This field is required</p>
            )}
          </div>
          <div>
            <TextField
              label="Email"
              variant="standard"
              type="email"
              {...register('email', { required: true })}
              style={{ width: '100%', margin: '1rem 0' }}
            />
            {errors.email && (
              <p style={{ color: 'crimson', fontWeight: '500' }}>This field is required</p>
            )}
          </div>
          <div>
            <TextField
              label="Password"
              variant="standard"
              type="password"
              {...register('password', { required: true })}
              style={{ width: '100%', margin: '1rem 0' }}
            />
            {errors.password && (
              <p style={{ color: 'crimson', fontWeight: '500' }}>This field is required</p>
            )}
          </div>
          <div>
            <TextField
              label="Confirm password"
              variant="standard"
              type="password"
              {...register('confirmPassword', { required: true })}
              style={{ width: '100%' }}
            />
            {errors.confirmPassword && (
              <p style={{ color: 'crimson', fontWeight: '500' }}>This field is required</p>
            )}
          </div>
          {error && <p style={{ color: 'crimson', fontWeight: '500' }}>{error}</p>}
          <Button
            disabled={isLoading}
            type="submit"
            variant="contained"
            style={{ marginTop: '2rem', cursor: isLoading && 'not-allowed' }}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Grid>
    </Layout>
  );
};

export default Signup;
