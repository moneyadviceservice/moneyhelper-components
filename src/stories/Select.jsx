import React from "react";
import PropTypes from "prop-types";
import "./select.scss";
import classNames from "classnames";

/**
 * Select component
 */
export const Select = ({
  id,
  name,
  defaultValue,
  label,
  emptyItemText,
  required,
  options,
  onChange,
  location,
}) => {
  const search = location && location.search ? location.search : "?";
  const valueSetInSearch = new URLSearchParams(search).get(name);

  const [value, setValue] = React.useState(valueSetInSearch || defaultValue);

  let errors = [];
  if (required && !value) {
    errors = ["is required"];
  }

  return (
    <div
      className={classNames(
        "select-outer-container",
        errors.length ? "error" : null
      )}
    >
      {label && <label htmlFor={id}>{label}</label>}
      {errors.map((error) => (
        <div className="error">Error: {error}</div>
      ))}

      <div className="select-inner-container">
        <div className="select-inner-container-border">
          <span className="arrow">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              stroke="current"
              fill="current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_45_392)">
                <path d="M16 8L14 6L10.1 9.9C9.5 10.5 8.6 10.5 8 9.9L4 6L2 8L6.2 12.2C7.8 13.8 10.3 13.8 11.9 12.2L16 8Z" />
              </g>
              <defs>
                <clipPath id="clip0_45_392">
                  <rect width="18" height="18" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <select
            id={id}
            name={name}
            defaultValue={defaultValue}
            required={required}
            onChange={(e) => {
              setValue(e.target.value);
              if (onChange) {
                onChange(e.target.value);
              }
            }}
          >
            <option>{emptyItemText}</option>
            {options.map(({ text, value }) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  emptyItemText: PropTypes.string.isRequired,
  required: PropTypes.bool,
  options: PropTypes.object,
};

Select.propTypes = {
  /**
   * The id
   */
  id: PropTypes.string.isRequired,
  /**
   * The name
   */
  name: PropTypes.string.isRequired,
  /**
   * The label
   */
  label: PropTypes.string.isRequired,
  /**
   * The default selected value
   */
  defaultValue: PropTypes.string,
  /**
   * Text for the first empty item
   */
  emptyItemText: PropTypes.string.isRequired,
  /**
   * Is the select optional or required?
   */
  required: PropTypes.bool,
  /**
   * The options
   */
  options: PropTypes.object,
};

Select.defaultProps = {};
