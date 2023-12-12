import React from 'react';
import Layout from '../Layout/Layout';
import { useForm } from 'react-hook-form';
import { Button, Grid, TextField } from '@mui/material';
import useHttp from '../hooks/useHttp';
import toast from 'react-hot-toast';

const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { sendRequest, isLoading, error } = useHttp();

  const login = data => {
    console.log(data);
    if (data?.status === 'fail') {
      return toast.error(data?.message);
    }
    if (data?.status === 'success') {
      toast.success(data?.message);
      reset();
    }
  };

  const loginHandler = async data => {
    sendRequest(
      {
        url: 'http://localhost:5000/api/users/login',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      },
      login
    );
  };

  const onSubmit = data => {
    loginHandler(data);
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
          <h2>Login</h2>
          <div>
            <TextField
              label="Username"
              variant="standard"
              type="text"
              {...register('identifier', { required: true })}
              style={{ width: '100%' }}
            />
            {errors.identifier && (
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

export default Login;
