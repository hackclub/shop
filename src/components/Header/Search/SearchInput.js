import React from 'react'

import { SearchInput } from './style'

export default ({ value, placeholder, label, onChange, shadow, ...props }) => (
  <SearchInput
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    type="search"
    aria-label={label}
    shadow={shadow}
    {...props}
  />
)
