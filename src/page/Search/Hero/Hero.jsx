import React from 'react';
import imgSearch from 'images/Search/imgSearch.png';
import { Contain, Image, FormBox, Form } from './Hero.styled';
import { TextField, Button, InputAdornment } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { NavLink } from 'react-router-dom';
import { fetchAppUrl } from 'api/Applications/Applications';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectorToken } from 'api/redux/auth/auth-selector';

const Hero = ({ setOpenModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isToken = useSelector(selectorToken);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = {
      url: data.get('url'),
    };
    fetchAppUrl(body).then(res => {
      setSearchParams({ id: res.id });
      setOpenModal(res.is_new);
    });
  };
  console.log(searchParams.get('id'));

  return (
    <Contain>
      <Image src={imgSearch} alt="cover search" width="600px" heigth="600px" />
      <FormBox>
        <h1>
          Analyse App <br />
          Reviews & Ratings
        </h1>

        <Form onSubmit={e => handleSubmit(e)}>
          <TextField
            margin="normal"
            fullWidth
            name="url"
            label="Enter the URL here"
            type="url"
            id="url"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
          />

          {!isToken && (
            <Button type="submit" variant="contained" sx={{ mt: 2, mb: 1 }}>
              analyses
            </Button>
          )}
          {isToken && (
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
