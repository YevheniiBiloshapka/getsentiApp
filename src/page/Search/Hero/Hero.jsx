import React, { useState } from 'react';
import imgSearch from 'images/Search/imgSearch.png';
import { Contain, Image, FormBox, Form } from './Hero.styled';
import { TextField, Button, InputAdornment } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { NavLink } from 'react-router-dom';
import { fetchAppUrl } from 'api/Applications/Applications';
import { useSelector } from 'react-redux';
import { selectorToken } from 'api/redux/auth/auth-selector';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';


const Hero = ({ setOpenModal, idSetter }) => {
  const isToken = useSelector(selectorToken);
  const [_, setSearchParams] = useSearchParams();
  const [urlFormErrors, setUrlFormErrors] = useState();


  const handleClickSubmit = event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const body = { url: data.get('url') };

    const fetchAppUrl = async () => {
      try {
        const response = await axios.post('/api/applications/app-url/', body);
        setSearchParams({ id: response.id });
        idSetter(response.id);
        setOpenModal(response.is_new);
      } catch (error) {
        setUrlFormErrors(error.response.data);
      }
    };
    fetchAppUrl();
  };

  const handleInputChange = () => {
    setUrlFormErrors(null); // clear errors when the user types something
  };
  console.log(urlFormErrors);
  return (
    <Contain>
      <Image src={imgSearch} alt='cover search' width='600px' heigth='600px' />
      <FormBox>
        <h1>
          Analyse App <br />
          Reviews & Ratings
        </h1>

        <Form onSubmit={handleClickSubmit}>
          <TextField
            error={!!urlFormErrors}
            helperText={urlFormErrors && urlFormErrors.url ? urlFormErrors.url[0] : null}
            margin='normal'
            fullWidth
            name='url'
            label='Enter the URL here'
            type='url'
            id='url'
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiFormHelperText-root': {
                fontSize: '0.8rem',  // specify the font size you want
              },
            }}
          />
          {isToken ? (
            <Button type='submit' variant='contained' sx={{ mt: 2, mb: 1 }}>
              analyse
            </Button>
          ) : (
            <Button
              type='submit'
              to={'/login'}
              component={NavLink}
              variant='contained'
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
