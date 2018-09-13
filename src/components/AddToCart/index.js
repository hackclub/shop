import React, { Component } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { LargeButton, Field, Text } from '@hackclub/design-system'
import StoreContext from '../../context/StoreContext'
import IconButton from '../IconButton'

const trialProductFieldNames = {
  product_id: 'entry.410110617',
  product_name: 'entry.1333192008',
  email: 'entry.1271490771'
}

const outOfStockProductFieldNames = {
  product_id: 'entry.510327508',
  product_name: 'entry.1383558744',
  email: 'entry.329361203'
}

export default class extends Component {
  state = {
    added: false
  }

  setAdded = () => {
    this.setState({
      added: true
    })
  }

  render() {
    const { exists, availableForSale } = this.props
    const { added } = this.state
    return exists ? (
      availableForSale ? (
        <InStockProductForm
          added={added}
          setAdded={this.setAdded}
          {...this.props}
        />
      ) : (
        <>
          <Text f={3} mb={2}>
            This product is currently out of stock—you can sign up to be
            notified when it’s available.
          </Text>
          <ProductWaitlistForm
            added={added}
            setAdded={this.setAdded}
            fieldNames={outOfStockProductFieldNames}
            gFormPath="https://proxyparty.hackclub.com/docs.google.com/forms/d/e/1FAIpQLSdgxusQFFxaRyb8UZzvjsAzQvpgHCWGWWXzFPIGAI8Z4GNu5A/formResponse"
            {...this.props}
          />
        </>
      )
    ) : (
      <>
        <Text f={3} mb={2}>
          This product is in trial and hasn’t been produced yet—you can sign up
          below if you’re interested.
        </Text>
        <ProductWaitlistForm
          added={added}
          setAdded={this.setAdded}
          fieldNames={trialProductFieldNames}
          gFormPath="https://proxyparty.hackclub.com/docs.google.com/forms/d/e/1FAIpQLSf6eo6fun_tGa_ziJ5s58EHTjU3FW8a3_toVq32b75N54PZMw/formResponse"
          {...this.props}
        />
      </>
    )
  }
}

const InStockProductForm = ({ added, variants, setAdded }) => (
  <StoreContext.Consumer>
    {({ addVariantToCart }) => (
      <Formik
        initialValues={{
          variant:
            variants.edges.length === 1
              ? variants.edges[0].node
                  .id /* if there’s only one variant, pre-fill that ID */
              : '',
          quantity: 1
        }}
        validationSchema={yup.object().shape({
          variant: yup.string().required(),
          quantity: yup
            .number()
            .required()
            .min(1, 'must be at least 1')
        })}
        onSubmit={values => {
          addVariantToCart(values.variant, values.quantity)
          setAdded()
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <>
            {variants.edges.length !== 1 && (
              <Field
                name="variant"
                value={values.variant}
                label="Choose a size"
                onChange={handleChange}
                type="select"
                error={errors.variant}
              >
                {variants.edges.map(variant => (
                  <option value={variant.node.id} key={variant.node.id}>
                    {variant.node.title}
                  </option>
                ))}
              </Field>
            )}
            <Field
              name="quantity"
              value={values.quantity}
              label="Choose a quantity"
              onChange={handleChange}
              type="number"
              error={errors.quantity}
            />
            <IconButton
              onClick={added ? undefined : handleSubmit}
              type="submit"
              mt={3}
              size={32}
              bg={added ? 'success' : 'primary'}
              glyph="bag-add"
              is={LargeButton}
            >
              {added ? 'Added' : 'Add to Bag'}
            </IconButton>
          </>
        )}
      </Formik>
    )}
  </StoreContext.Consumer>
)

const ProductWaitlistForm = ({
  added,
  setAdded,
  id,
  title,
  fieldNames,
  gFormPath
}) => (
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
      formData.append(fieldNames.product_id, id)
      formData.append(fieldNames.product_name, title)
      axios.post(gFormPath, formData).then(() => {
        setAdded()
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
          onClick={added ? undefined : handleSubmit}
          mt={3}
          size={32}
          bg={added ? 'success' : 'primary'}
          glyph="bag-add"
          is={LargeButton}
        >
          {added ? 'Signed Up' : 'Sign Up'}
        </IconButton>
      </>
    )}
  </Formik>
)
