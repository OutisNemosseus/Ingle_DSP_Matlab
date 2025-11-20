#!/usr/bin/env python3
# Title: Example 2.7
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import numpy as np

# Helper function
def conv_m(x, nx, h, nh):
    """Linear convolution with index tracking"""
    ny_start = nx[0] + nh[0]
    ny_end = nx[-1] + nh[-1]
    ny = np.arange(ny_start, ny_end + 1)
    y = np.convolve(x, h)
    return y, ny

# Example 2.7
# x(n)=[3,11,7,0,-1,4,2]; nx = np.arange(-3, 4)
# h(n)=[2,3,0,-5,2,1]; nh = np.arange(-1, 5)
# y(n)=conv(x,h)

x = np.array([3, 11, 7, 0, -1, 4, 2])
nx = np.arange(-3, 4)
h = np.array([2, 3, 0, -5, 2, 1])
nh = np.arange(-1, 5)
y, ny = conv_m(x, nx, h, nh)

print(f"y = {y}")
print(f"ny = {ny}")
