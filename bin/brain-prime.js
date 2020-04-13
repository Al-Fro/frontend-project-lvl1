#!/usr/bin/node
import engine from '../src/index.js';
import { description, brainPrime } from '../src/games/brain-prime.js';

engine(description, brainPrime);
