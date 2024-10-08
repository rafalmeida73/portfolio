'use client';
import React, { PropsWithChildren, Suspense, useEffect, useState } from 'react';

import { Loader } from '@react-three/drei';
import { Canvas as ThreeCanvas } from '@react-three/fiber';

import { ImageProfileNoJs } from '../ImageProfileNojs';
import styles from './Canvas.module.css';

export const Canvas = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className={styles.noJsContainer}>
        <noscript>
          <Suspense fallback={null}>
            <ImageProfileNoJs />
          </Suspense>
        </noscript>
      </div>
    );

  return (
    <>
      <ThreeCanvas
        className={styles.r3f}
        camera={{
          fov: 70,
          near: 0.1,
          far: 2000,
          position: [-2, 0.5, 4],
        }}
      >
        {children}
      </ThreeCanvas>
      <Loader />
    </>
  );
};
