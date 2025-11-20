#!/usr/bin/env python3
# Title: Chapter 05: Example 05.11: Circular shift graphical display
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 05.11: Circular shift graphical display

# plt.subplot(1, 1, 1)
# a) plot x((n+4))11

n = 0:10; x = 10*(0.8) ** n
n1 = -11:21; x1 = [np.zeros(1,11), x, np.zeros(1,11)]
plt.subplot(2, 2, 1)
 plt.plt.stem(n1,x1); plt.title('Original x(n)')
plt.xlabel('n')
 plt.plt.axis([-6,17,-1,11])

x2 = [x, x, x]
plt.subplot(2, 2, 3)
 plt.plt.stem(n1,x2); plt.title('Periodic extention')
plt.xlabel('n')
 plt.plt.axis([-6,17,-1,11])

x3 = [x2np.arange(4+1, 33 + 1), xnp.arange(1, 4 + 1)]
plt.subplot(2, 2, 2)
 plt.plt.stem(n1,x3); plt.title('Periodic shift')
plt.xlabel('n')
 plt.plt.axis([-6,17,-1,11])

x4 = x3 * [np.zeros(1,11), np.ones(1,11), np.zeros(1,11)]
plt.subplot(2, 2, 4)
 plt.plt.stem(n1,x4); plt.title('Circular shift')
plt.xlabel('n')
 plt.plt.axis([-6,17,-1,11])

pause
# print -deps2 me0511a.eps

# # b) plot x((n-3))15

n = 0:10; x = [10*(0.8) ** n np.zeros(1,4)]
n1 = -15:29; x1 = [np.zeros(1,15), x, np.zeros(1,15)]
plt.subplot(2, 2, 1)
 plt.plt.stem(n1,x1); plt.title('Original x(n)')
plt.xlabel('n')
 plt.plt.axis([-9,25,-1,11])

x2 = [x, x, x]
plt.subplot(2, 2, 3)
 plt.plt.stem(n1,x2); plt.title('Periodic extention')
plt.xlabel('n')
 plt.plt.axis([-9,25,-1,11])

x3 = [x2np.arange(43, 45 + 1),x2np.arange(1, 42 + 1)]
plt.subplot(2, 2, 2)
 plt.plt.stem(n1,x3); plt.title('Periodic shift')
plt.xlabel('n')
 plt.plt.axis([-9,25,-1,11])

x4 = x3 * [np.zeros(1,15), np.ones(1,15), np.zeros(1,15)]
plt.subplot(2, 2, 4)
 plt.plt.stem(n1,x4); plt.title('Circular shift')
plt.xlabel('n')
 plt.plt.axis([-9,25,-1,11])

pause
# print -deps2 me0511b.eps

# 
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
