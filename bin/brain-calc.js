#!/usr/bin/node
import engine from '../src/index.js';
import { brainCalc, description } from '../src/games/brain-calc.js';

engine(description, brainCalc);
