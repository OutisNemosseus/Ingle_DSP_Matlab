#!/usr/bin/env python3
# Title: verification
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import numpy as np

x1 = np.random.rand(11)
x2 = np.random.rand(11)
n = np.arange(0, 11)  # 0 to 10
alpha = 2
beta = 3
k = np.arange(0, 501)  # 0 to 500
w = (np.pi/500)*k

X1 = x1 @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x1
X2 = x2 @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x2

x = alpha*x1 + beta*x2  # Linear combination of x1 & x2
X = x @ (np.exp(-1j*np.pi/500) ** np.outer(n, k))  # DTFT of x

# verification
X_check = alpha*X1 + beta*X2  # Linear Combination of X1 & X2
error = np.max(np.abs(X - X_check))  # Difference

print(f"Error: {error}")
