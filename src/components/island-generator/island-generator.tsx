import { useRef, useState } from 'react';

import type { Params } from '../../types/island.types';
import { generateIslandMap } from '../../utils/island-generation';
import IslandGeneratorForm from '../island-generator-form/island-generator-form';
import styles from './island-generator.module.css';

export default function IslandGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [params, setParams] = useState<Params>({
    largeCount: 3,
    mediumCount: 5,
    smallCount: 10,
    islandSize: 100,
    groupChance: 40,
    seaLevel: 0.38,
    roughness: 100,
    seed: '',
  });

  const updateParam = <K extends keyof Params>(key: K, value: Params[K]): void => {
    setParams(prev => ({ ...prev, [key]: value }));
  };

  const handleGenerateMap = (): void => {
    if (!canvasRef.current) {
      return;
    }

    generateIslandMap(canvasRef.current, params, newSeed => {
      setParams(prev => ({ ...prev, seed: newSeed }));
    });
  };

  return (
    <div className={styles.container}>
      <IslandGeneratorForm
        params={params}
        updateParam={updateParam}
        generateMap={handleGenerateMap}
      />

      <div className={styles.canvasContainer}>
        <canvas ref={canvasRef} className={styles.canvas} width='600' height='600' />
      </div>
    </div>
  );
}
