#!/usr/bin/env python3
# Title: ex031500
# Chapter: 03
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
from scipy import signal
import io
import base64

b = [1]
a = [1, -0.8]
n = np.arange(0, 101)  # 0 to 100
x = np.cos(0.05*np.pi*n)
y = signal.lfilter(b, a, x)

plt.subplot(2, 1, 1)
plt.plt.plt.stem(n, x)
plt.xlabel('n')
plt.ylabel('x(n)')
plt.title('Input sequence')

plt.subplot(2, 1, 2)
plt.plt.plt.stem(n, y)
plt.xlabel('n')
plt.ylabel('y(n)')
plt.title('Output sequence')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
