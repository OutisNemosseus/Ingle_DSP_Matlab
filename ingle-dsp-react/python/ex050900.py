#!/usr/bin/env python3
# Title: Chapter 05: Example 05.09: Circular symmetry property
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 05.09: Circular symmetry property

# plt.subplot(1, 1, 1)
# a) plot x((-n))N

n = 0:10; x = 10*(0.8) ** n
y = x(mod(-n,11)+1)
plt.subplot(2, 1, 1)
 plt.plt.stem(n,x); plt.title('Original sequence')
plt.xlabel('n')
 plt.ylabel('x(n)')
 plt.plt.axis([-0.5,10.5,-1,11])

plt.subplot(2, 1, 2)
 plt.plt.stem(n,y); plt.title('Circularly folded sequence')
plt.xlabel('n')
 plt.ylabel('x(-n mod 11)')
 plt.plt.axis([-0.5,10.5,-1,11])

pause
# print -deps2 me0509a.eps

# # b) verify property

X = dft(x,11); Y = dft(y,11)
plt.subplot(2, 2, 1)
 plt.plt.stem(n,np.real(X)); plt.plt.axis([-0.5,10.5,-5,50])

plt.title('Real{DFT[x(n)]}')
 plt.xlabel('k')


plt.subplot(2, 2, 2)
 plt.plt.stem(n,np.imag(X)); plt.plt.axis([-0.5,10.5,-20,20])

plt.title('Imag{DFT[x(n)]}')
 plt.xlabel('k')


plt.subplot(2, 2, 3)
 plt.plt.stem(n,np.real(Y)); plt.plt.axis([-0.5,10.5,-5,50])

plt.title('Real{DFT[x((-n))11]}')
 plt.xlabel('k')


plt.subplot(2, 2, 4)
 plt.plt.stem(n,np.imag(Y)); plt.plt.axis([-0.5,10.5,-20,20])

plt.title('Imag{DFT[x((-n))11]}')
 plt.xlabel('k')


# print -deps2 me0509b.eps


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
