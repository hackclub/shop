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
    const { exists } = this.props
    const { added } = this.state
    return exists ? (
      <InStockProduct added={added} setAdded={this.setAdded} {...this.props} />
    ) : (
      <TrialProduct added={added} setAdded={this.setAdded} {...this.props} />
    )
  }
}

const InStockProduct = ({ added, variants, availableForSale, setAdded }) => (
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
              onClick={
                availableForSale
                  ? added
                    ? undefined
                    : handleSubmit
                  : undefined
              }
              type="submit"
              mt={3}
              size={32}
              bg={availableForSale ? (added ? 'success' : 'primary') : 'muted'}
              glyph="bag-add"
              is={LargeButton}
            >
              {availableForSale
                ? added
                  ? 'Added'
                  : 'Add to Bag'
                : 'Out of Stock'}
            </IconButton>
          </>
        )}
      </Formik>
    )}
  </StoreContext.Consumer>
)

const TrialProduct = ({ added, setAdded, id, title }) => (
  <>
    <Text f={3} mb={2}>
      This product is in trial and hasn’t been produced yet—you can signup below
      if you’re interested.
    </Text>
    <Formik
      initialValues={{ email: '' }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .required()
          .email()
      })}
      onSubmit={values => {
        const gFormPath =
          'https://proxyparty.hackclub.com/docs.google.com/forms/d/e/1FAIpQLSf6eo6fun_tGa_ziJ5s58EHTjU3FW8a3_toVq32b75N54PZMw/formResponse'
        const formData = new FormData()
        formData.append(trialProductFieldNames.email, values.email)
        formData.append(trialProductFieldNames.product_id, id)
        formData.append(trialProductFieldNames.product_name, title)
        axios.post(gFormPath, formData).then(_ => {
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
            {added ? 'Signed up' : 'I’m interested'}
          </IconButton>
        </>
      )}
    </Formik>
  </>
)
