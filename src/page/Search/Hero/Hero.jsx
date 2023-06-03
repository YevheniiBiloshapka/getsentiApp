import React, { useState } from 'react';
import imgSearch from 'images/Search/imgSearch.png';
import { Contain, Image, FormBox, Form } from './Hero.styled';
import { TextField, Button, InputAdornment } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { NavLink } from 'react-router-dom';
import { fetchAppUrl } from 'api/Applications/Applications';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorToken } from 'api/redux/auth/auth-selector';

import { string } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const urlSchema = string()
  .url('Please enter a valid URL.')
  .refine(value => {
    return true;
  }, 'Invalid URL');

const Hero = ({ setOpenModal, idSetter }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(null);
  const isToken = useSelector(selectorToken);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(urlSchema),
  });

  const handleClickSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      url: data.get('url'),
    };
    console.log('fetch_app_url', body);
    fetchAppUrl(body).then(res => {
      setSearchParams({ id: res.id });
      idSetter(res.id);
      setOpenModal(res.is_new);
    });
  };

  return (
    <Contain>
      <Image src={imgSearch} alt="cover search" width="600px" heigth="600px" />
      <FormBox>
        <h1>
          Analyse App <br />
          Reviews & Ratings
        </h1>

        <Form onSubmit={handleSubmit(handleClickSubmit)}>
          <TextField
            margin="normal"
            fullWidth
            name="url"
            label="Enter the URL here"
            type="url"
            id="url"
            {...register('url')}
            error={Boolean(errors?.url)}
            helperText={errors?.url?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
          />

          {isToken ? (
            <Button type="submit" variant="contained" sx={{ mt: 2, mb: 1 }}>
              analyse
            </Button>
          ) : (
            <Button
              type="submit"
              to={'/login'}
              component={NavLink}
              variant="contained"
              sx={{ mt: 2, mb: 1 }}
            >
              analyse
            </Button>
          )}
        </Form>
        <p>Senti saves teams hours every week with powerful integrations and automations.</p>
      </FormBox>
    </Contain>
  );
};

export default Hero;
