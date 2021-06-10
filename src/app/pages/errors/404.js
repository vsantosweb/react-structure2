import React from 'react';

function Error404({ layout }) {

  React.useEffect(() => layout('ErrorLayout'));
  
  return (
    '404 | Not found'
  );
}

export default Error404;