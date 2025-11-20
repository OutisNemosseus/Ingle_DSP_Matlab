#!/usr/bin/env python3
# Title: Chapter 3 : Example 3.21
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 3 : Example 3.21
# Reconstruction using the stairs and plot functions

# Discrete-time Signal x1(n) : Ts = 0.0002
Ts = 0.0002
n = np.arange(-25, 26)  # -25 to 25
nTs = n*Ts
x = np.exp(-1000*np.abs(nTs))

# Analog Signal reconstruction using stairs
plt.subplot(2, 1, 1)
plt.step(nTs*1000, x, where='post')
plt.xlabel('t in msec.')
plt.ylabel('xa(t)')
plt.title('Reconstructed Signal from x1(n) using zero-order-hold')
plt.plt.plt.stem(n*Ts*1000, x)

# Analog Signal reconstruction using plot
plt.subplot(2, 1, 2)
plt.plt.plt.plot(nTs*1000, x)
plt.xlabel('t in msec.')
plt.ylabel('xa(t)')
plt.title('Reconstructed Signal from x1(n) using first-order-hold')
plt.plt.plt.stem(n*Ts*1000, x)

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
