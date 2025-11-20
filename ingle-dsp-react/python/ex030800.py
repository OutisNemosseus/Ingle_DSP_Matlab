#!/usr/bin/env python3
# Title: signal shifted by two samples
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import numpy as np

x = np.random.rand(11)
n = np.arange(0, 11)  # 0 to 10
k = np.arange(0, 501)  # 0 to 500
w = (np.pi/500)*k

X = x @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x

# signal shifted by two samples
y = x
m = n + 2
Y = y @ (np.exp(-1j*np.pi/500) ** np.outer(m, k))  # DTFT of y

# verification
Y_check = (np.exp(-1j*2*w)) * X  # multiplication by np.exp(-j2w)
error = np.max(np.abs(Y - Y_check))  # Difference

print(f"Error: {error}")
