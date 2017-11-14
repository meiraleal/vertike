import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = (props) => {
  const { icon, pad, spin } = props;

  const iconClass = classNames({
    Icon: true,
    fa: true,
    'fa-spin': spin,
    'Icon--pad-left': pad === 'left',
    'Icon--pad-right': pad === 'right',
  });

  return (
    <i
      className={`${iconClass} fa-${icon}`}
      aria-hidden="true"
    />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  pad: PropTypes.string,
  spin: PropTypes.bool,
};

Icon.defaultProps = {
  pad: '',
  spin: false,
}

export default Icon;
