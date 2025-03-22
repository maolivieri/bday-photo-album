type GridConfig = Record<number, 1 | 2>

const config3: GridConfig = {
  1: 2,
  2: 1,
  3: 1,
  4: 2,
}
const config4: GridConfig = {
  1: 2,
  2: 1,
  3: 1,
  4: 2,
}

const config5: GridConfig = {
  1: 1,
  2: 1,
  3: 2,
  4: 1,
  5: 1
}

const config6: GridConfig = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1
}


export function getGridConfig(length: number): GridConfig {
  switch (length) {
    case 4:
      return config4
    case 5:
      return config5
    case 6:
      return config6
    default:
      return config3
  }
}