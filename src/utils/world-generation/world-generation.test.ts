import { describe, expect } from 'vitest';

import { generateWorldMap } from './world-generation';

describe('generateWorldMap', () => {
  it('should generate world map without errors', () => {
    const mockCanvas = document.createElement('canvas');
    mockCanvas.width = 600;
    mockCanvas.height = 600;

    const mockParams = {
      largeCount: 3,
      mediumCount: 5,
      smallCount: 10,
      islandSize: 100,
      groupChance: 40,
      seaLevel: 0.38,
      roughness: 100,
      seed: '12345',
    };

    expect(() => generateWorldMap(mockCanvas, mockParams)).not.toThrow();
  });
});
