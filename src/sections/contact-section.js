/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { Alert, Box, Button, Container, Grid, Input, Label, Spinner, Textarea } from 'theme-ui';
import theme from 'theme';
import { Controller, useForm } from 'react-hook-form';
import SectionHeader from 'components/section-header';
import axios from 'axios';

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [formMessageType, setFormMessageType] = useState('');

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(
        'https://foremostsolar.co.za/api/contact',
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) reset();
      setLoading(false);
      console.log(response.data);
      const { message, type } = response.data;
      setFormMessage(message);
      setFormMessageType(type);
    } catch (error) {
      setLoading(false);
      setFormMessage(error.message);
      setFormMessageType('danger');
    }
  };

  return (
    <section id="contact" sx={{ variant: 'section.contact' }}>
      <Container>
        <hr sx={theme.styles.hr} />

        <br />
        <SectionHeader slogan="LET US SOLVE YOUR PROBLEM" title="Contact Us" />
        <hr sx={theme.styles.hr} />
        <br />

        <Grid gap={2} columns={[1, 1, 1]}>
          {/*<form onSubmit={handleSubmit(handleFormSubmit)}> sx={styles.forms.label} htmlFor="name">
              Name:
            </Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, minLength: 5 }}
              render={({ field }) => <Input id="name" sx={styles.forms.input} mb={3} {...field} />}
            />
            {errors?.name?.type === 'required' && (
              <p sx={styles.forms.error}>Please enter your name.</p>
            )}
            {errors?.name?.type === 'minLength' && (
              <p sx={styles.forms.error}>Your name must at least consist of 5 characters.</p>
            )}     <Label sx={styles.forms.label} htmlFor="email">
              Email:
            </Label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                minLength: 7,
                pattern: /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/,
              }}
              render={({ field }) => (
                <Input id="email" type="email" sx={styles.forms.input} mb={3} {...field} />
              )}
            />
            {errors?.email?.type === 'required' && (
              <p sx={styles.forms.error}>Please enter your email.</p>
            )}
            {errors?.email?.type === 'minLength' && (
              <p sx={styles.forms.error}>Your email must at least consist of 7 characters.</p>
            )}
            {errors?.email?.type === 'pattern' && (
              <p sx={styles.forms.error}>Please enter a valid email address.</p>
            )}     <Label sx={styles.forms.label} htmlFor="phone">
              Phone:
            </Label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: true, minLength: 5, pattern: /([\d])/ }}
              render={({ field }) => (
                <Input id="phone" type="tel" sx={styles.forms.input} mb={3} {...field} />
              )}
            />
            {errors?.phone?.type === 'required' && (
              <p sx={styles.forms.error}>Please enter your phone number.</p>
            )}
            {errors?.phone?.type === 'minLength' && (
              <p sx={styles.forms.error}>Your email must at least consist of 10 digits.</p>
            )}
            {errors?.phone?.type === 'pattern' && (
              <p sx={styles.forms.error}>The phone number must contain digits only.</p>
            )}       <Label sx={styles.forms.label} htmlFor="subject">
              Subject:
            </Label>
            <Controller
              name="subject"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input id="subject" sx={styles.forms.input} mb={3} {...field} />
              )}
            />
            {errors?.subject?.type === 'required' && (
              <p sx={styles.forms.error}>Please fill in the subject.</p>
            )}       <Label sx={styles.forms.label} htmlFor="message">
              Message:
            </Label>
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea id="message" rows={6} mb={3} sx={styles.forms.textarea} {...field} />
              )}
            />
            {errors?.message?.type === 'required' && (
              <p sx={styles.forms.error}>Please fill in the message.</p>
            )}
            <hr sx={theme.styles.hr} />
            <Button type="submit">Send It</Button>
            {'  '}
            <Button type="reset" onClick={() => reset()} sx={{ variant: 'buttons.whiteButton' }}>
              Start Over
            </Button>

            <Box sx={{ margin: '1rem' }}>
              {loading ? (
                <>
                  <br />
                  <Spinner />
                </>
              ) : formMessage !== '' ? (
                <>
                  <br />
                  <Alert variant={formMessageType}>{formMessage}</Alert>
                </>
              ) : (
                <></>
              )}
            </Box>
          </form> */}

          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6348.193639993384!2d28.11535136303337!3d-26.103249912024694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9512afb295c51b%3A0x76d206b6ada73705!2sT%20Maboko%20IT%20Solutions!5e0!3m2!1sen!2sza!4v1661862122219!5m2!1sen!2sza"
              height="600"
              sx={styles.forms.map}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
    map: {
      width: '100%',
      border: '0',
    },
    error: {
      color: 'red',
    },
    icon: {
      color: '#fff',
    },
    alert: {
      marginTop: '1rem',
    },
  },
};
