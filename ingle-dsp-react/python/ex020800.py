#!/usr/bin/env python3
# Title: Example 2.8
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import numpy as np
from scipy.linalg import toeplitz

# Helper function
def conv_tp(h, x):
    """Convolution using Toeplitz matrix"""
    # Create Toeplitz matrix from h
    col = np.concatenate([h, np.zeros(len(x) - 1)])
    row = np.concatenate([hnp.arange(0, 2), np.zeros(len(x) - 1)])
    H = toeplitz(col, row)
    
    # Compute convolution
    y = H @ x
    
    return y, H

# Example 2.8
# x(n)=[3,11,7,0,-1,4,2]; nx = np.arange(-3, 4)
# h(n)=[2,3,0,-5,2,1]; nh = np.arange(-1, 5)
# y(n)=conv_tp(x,h)

x = np.array([3, 11, 7, 0, -1, 4, 2])
h = np.array([2, 3, 0, -5, 2, 1])
y, H = conv_tp(h, x)

print(f"y = {y}")
print(f"H = \
{H}")
