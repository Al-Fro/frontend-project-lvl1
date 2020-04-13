#!/usr/bin/node
import engine from '../src/index.js';
import { description, brainGcd } from '../src/games/brain-gcd.js';

engine(description, brainGcd);
