#!/usr/bin/env python3
# Title: Chapter 3 : Example 3.22
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
from scipy.interpolate import CubicSpline
import io
import base64

# Chapter 3 : Example 3.22
# Reconstruction using cubic splines

# a) Discrete-time Signal x1(n): Ts = 0.0002
Ts = 0.0002
n = np.arange(-25, 26)  # -25 to 25
nTs = n*Ts
x = np.exp(-1000*np.abs(nTs))

# Analog Signal reconstruction
Dt = 0.00005
t = np.arange(-0.005, 0.005 + Dt, Dt)
cs = CubicSpline(nTs, x)
xa = cs(t)

# check
error = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))
print(f"Error x1: {error}")

# Plots
plt.subplot(2, 1, 1)
plt.plt.plt.plot(t*1000, xa)
plt.xlabel('t in msec.')
plt.ylabel('xa(t)')
plt.title('Reconstructed Signal from x1(n) using cubic spline function')
plt.plt.plt.stem(n*Ts*1000, x)

# Discrete-time Signal x2(n): Ts = 0.001
Ts = 0.001
n = np.arange(-5, 6)  # -5 to 5
nTs = n*Ts
x = np.exp(-1000*np.abs(nTs))

# Analog Signal reconstruction
Dt = 0.00005
t = np.arange(-0.005, 0.005 + Dt, Dt)
cs = CubicSpline(nTs, x)
xa = cs(t)

# check
error = np.max(np.abs(xa - np.exp(-1000*np.abs(t))))
print(f"Error x2: {error}")

# Plots
plt.subplot(2, 1, 2)
plt.plt.plt.plot(t*1000, xa)
plt.xlabel('t in msec.')
plt.ylabel('xa(t)')
plt.title('Reconstructed Signal from x2(n) using cubic spline function')
plt.plt.plt.stem(n*Ts*1000, x)

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
