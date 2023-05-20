import PropTypes from "prop-types"

const DefaultLayout = ({children, className = ""}) => {
  return (
    <div className={`default-layout ${className}`}>
        {children}
    </div>
  )
}

DefaultLayout.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string
}

export default DefaultLayout