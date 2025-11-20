#!/usr/bin/env python3
# Title: Chapter 05: Example 05.12: Circular shift example
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 05.12: Circular shift example

# plt.subplot(1, 1, 1)
# a) plot x((n-6))15

n = 0:10; x = 10*(0.8) ** n
y = cirshftt(x,6,15)
n = 0:14; x = [x, np.zeros(1,4)]
plt.subplot(2, 1, 1)
 plt.plt.stem(n,x); plt.title('Original sequence')
plt.xlabel('n')
 plt.ylabel('x(n)')
 plt.plt.axis([-1,15,-1,11])

plt.subplot(2, 1, 2)
 plt.plt.stem(n,y)
plt.title('Circularly shifted sequence, N=15')
plt.xlabel('n')
 plt.ylabel('x((n-6) mod 15)')
 

plt.plt.axis([-1,15,-1,11])

pause; print -deps2 me0512.eps
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
