import React from 'react';
import classNames from 'classnames';

export default ({ isWide, children }) => {

  const containerClass = classNames('Container', {
    'Container--wide': isWide,
  });

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
}
