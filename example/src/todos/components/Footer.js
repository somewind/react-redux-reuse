import React from 'react'
import Link from './Link'

const Footer = ({filter, actions}) => (
  <p>
    Show:
    {" "}
    <Link active={filter === 'SHOW_ALL'} onClick={actions.setVisibilityFilter.bind(this, 'SHOW_ALL')}>
      All
    </Link>
    {", "}
    <Link active={filter === 'SHOW_ACTIVE'} onClick={actions.setVisibilityFilter.bind(this, 'SHOW_ACTIVE')}>
      Active
    </Link>
    {", "}
    <Link active={filter === 'SHOW_COMPLETED'} onClick={actions.setVisibilityFilter.bind(this, 'SHOW_COMPLETED')}>
      Completed
    </Link>
  </p>
)

export default Footer
