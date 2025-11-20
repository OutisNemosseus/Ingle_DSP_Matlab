#!/usr/bin/env python3
# Title: folding property
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import numpy as np

n = np.arange(-5, 11)  # -5 to 10
x = np.random.rand(len(n))
k = np.arange(-100, 101)  # -100 to 100
w = (np.pi/100)*k  # frequency between -pi and +pi

X = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x

# folding property
y = np.flip(x)
m = -np.flip(n)  # signal folding
Y = y @ (np.exp(-1j*np.pi/100) ** np.outer(m, k))  # DTFT of y

# verification
Y_check = np.flip(X)  # X(-w)
error = np.max(np.abs(Y - Y_check))  # Difference

print(f"Error: {error}")
