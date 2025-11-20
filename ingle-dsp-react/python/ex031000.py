#!/usr/bin/env python3
# Title: conjugation property
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import numpy as np

n = np.arange(-5, 11)  # -5 to 10
x = np.random.rand(len(n)) + 1j*np.random.rand(len(n))
k = np.arange(-100, 101)  # -100 to 100
w = (np.pi/100)*k  # frequency between -pi and +pi

X = x @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of x

# conjugation property
y = np.conj(x)  # signal conjugation
Y = y @ (np.exp(-1j*np.pi/100) ** np.outer(n, k))  # DTFT of y

# verification
Y_check = np.conj(np.flip(X))  # np.conj(X(-w))
error = np.max(np.abs(Y - Y_check))  # Difference

print(f"Error: {error}")
