import { create, all } from 'mathjs'

const math = create(all, {});

type VectorWrapper = {
  named: Record<string, number>;
  indexed: number[];
}
