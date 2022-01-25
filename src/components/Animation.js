import React from 'react';

import { useRive } from 'rive-react';

function AnimationBackground() {
  const params = {
    src: 'animation.riv',
    autoplay: true,
    fit: 'cover'
  };
  const { RiveComponent, rive } = useRive(params);

  return (
    <RiveComponent
      onMouseEnter={() => rive && rive.play()}
      onMouseLeave={() => rive && rive.pause()}
    />
  );
}

export default AnimationBackground;
