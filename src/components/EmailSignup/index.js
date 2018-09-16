import React, { Component } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import Icon from '@hackclub/icons'
import { Box, Heading, Field, LargeButton } from '@hackclub/design-system'
import IconButton from '../IconButton'
import { Item } from './style'

const gFormPath =
  'https://proxyparty.hackclub.com/docs.google.com/forms/d/e/1FAIpQLSdvHegwKHC4aQVCA8GgOooAWInwpvOSthn3Xfpo4pNf5IcSrQ/formResponse'
const fieldNames = {
  email: 'entry.435587131'
}

export default class extends Component {
  state = {
    signedUp: false
  }

  render() {
    const { signedUp } = this.state
    return (
      <Item>
        <Box p={[3, 4]} color="info">
          <Icon glyph="email" size={48} />
          <Heading.h3 f={[4, 5]} mb={3} color="black">
            Sign up to get notified about new products.
          </Heading.h3>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .required()
                .email()
            })}
            onSubmit={values => {
              const formData = new FormData()
              formData.append(fieldNames.email, values.email)
              axios.post(gFormPath, formData).then(() => {
                this.setState({
                  signedUp: true
                })
              })
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <>
                <Field
                  name="email"
                  value={values.email}
                  label="Enter your email address"
                  onChange={handleChange}
                  type="email"
                  error={errors.email}
                  placeholder="you@email.com"
                />
                <IconButton
                  onClick={signedUp ? undefined : handleSubmit}
                  mt={3}
                  size={32}
                  bg={signedUp ? 'success' : 'info'}
                  glyph={signedUp ? 'notification-fill' : 'notification'}
                  is={LargeButton}
                >
                  {signedUp ? 'Signed Up' : 'Sign Up'}
                </IconButton>
              </>
            )}
          </Formik>
        </Box>
      </Item>
    )
  }
}
