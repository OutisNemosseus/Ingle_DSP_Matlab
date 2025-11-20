#!/usr/bin/env python3
# Title: Example 2.9
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Helper functions
def sigshift(x, n, n0):
    """Shift signal x(n) by n0"""
    return x, n + n0

def sigadd(x1, n1, x2, n2):
    """Add two signals"""
    n_start = np.min(n1[0], n2[0])
    n_end = np.max(n1[-1], n2[-1])
    n = np.arange(n_start, n_end + 1)
    y = np.zeros(len(n))
    
    idx1 = np.where((n >= n1[0]) & (n <= n1[-1]))[0]
    idx1_orig = np.arange(len(x1))
    y[idx1] += x1[idx1_orig]
    
    idx2 = np.where((n >= n2[0]) & (n <= n2[-1]))[0]
    idx2_orig = np.arange(len(x2))
    y[idx2] += x2[idx2_orig]
    
    return y, n

def sigfold(x, n):
    """Fold signal x(n) to get x(-n)"""
    return np.flip(x), -np.flip(n)

def conv_m(x, nx, h, nh):
    """Linear convolution with index tracking"""
    ny_start = nx[0] + nh[0]
    ny_end = nx[-1] + nh[-1]
    ny = np.arange(ny_start, ny_end + 1)
    y = np.convolve(x, h)
    return y, ny

# Example 2.9
# x(n)=[3,11,7,0,-1,4,2]; nx = np.arange(-3, 4)
# y(n)=x(n-2)+w(n)
# ryx = cross(y,x)

fig = plt.figure(figsize=(10, 10))

# noise sequence 1
x = np.array([3, 11, 7, 0, -1, 4, 2])
nx = np.arange(-3, 4)  # given signal x(n)

y, ny = sigshift(x, nx, 2)  # obtain x(n-2)

w = np.random.randn(len(y))
nw = ny  # generate w(n)

y, ny = sigadd(y, ny, w, nw)  # obtain y(n) = x(n-2) + w(n)

x_temp, nx_temp = sigfold(x, nx)  # obtain x(-n)

rxy, nrxy = conv_m(y, ny, x_temp, nx_temp)  # cross-correlation

plt.subplot(2, 1, 1)
plt.plt.plt.stem(nrxy, rxy)
plt.plt.plt.axis([-4, 8, -50, 250])
plt.xlabel('lag variable l')
plt.ylabel('rxy')
plt.title('Crosscorrelation: noise sequence 1')
max_idx = np.argmax(rxy)
plt.text(nrxy[max_idx], rxy[max_idx], 'Maximum', ha='center', va='bottom')

# noise sequence 2
x = np.array([3, 11, 7, 0, -1, 4, 2])
nx = np.arange(-3, 4)  # given signal x(n)

y, ny = sigshift(x, nx, 2)  # obtain x(n-2)

w = np.random.randn(len(y))
nw = ny  # generate w(n)

y, ny = sigadd(y, ny, w, nw)  # obtain y(n) = x(n-2) + w(n)

x_temp, nx_temp = sigfold(x, nx)  # obtain x(-n)

rxy, nrxy = conv_m(y, ny, x_temp, nx_temp)  # cross-correlation

plt.subplot(2, 1, 2)
plt.plt.plt.stem(nrxy, rxy)
plt.plt.plt.axis([-4, 8, -50, 250])
plt.xlabel('lag variable l')
plt.ylabel('rxy')
plt.title('Crosscorrelation: noise sequence 2')
max_idx = np.argmax(rxy)
plt.text(nrxy[max_idx], rxy[max_idx], 'Maximum', ha='center', va='bottom')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
