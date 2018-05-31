// @flow

import * as React from 'react';

export default (decoratedHref: string, decoratedText: string, key: number, target: string = "_blank"): React.Node => {
  return (
    <a href={decoratedHref} key={key} target={target}>
      {decoratedText}
    </a>
  );
};
