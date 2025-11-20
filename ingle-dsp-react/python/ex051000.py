#!/usr/bin/env python3
# Title: Chapter 05: Example 05.10: Circular even/odd property
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 05.10: Circular even/odd property

# plt.subplot(1, 1, 1)
# a) plot xec(n) and xoc(n)

n = 0:10; x = 10*(0.8) ** n
[xec,xoc] = circevod(x)
plt.subplot(2, 1, 1)
 plt.plt.stem(n,xec); plt.title('Circular-even component')
plt.xlabel('n')
 plt.ylabel('xec(n)')
 plt.plt.axis([-0.5,10.5,-1,11])

plt.subplot(2, 1, 2)
 plt.plt.stem(n,xoc); plt.title('Circular-odd component')
plt.xlabel('n')
 plt.ylabel('xoc(n)')
 plt.plt.axis([-0.5,10.5,-4,4])

pause
print -deps2 me0510a.eps

# # b) verify property

X = dft(x,11); Xec = dft(xec,11); Xoc = dft(xoc,11)
plt.subplot(2, 2, 1)
 plt.plt.stem(n,np.real(X)); plt.plt.axis([-0.5,10.5,-5,50])

plt.title('Real{DFT[x(n)]}')
 plt.xlabel('k')


plt.subplot(2, 2, 2)
 plt.plt.stem(n,np.imag(X)); plt.plt.axis([-0.5,10.5,-20,20])

plt.title('Imag{DFT[x(n)]}')
 plt.xlabel('k')


plt.subplot(2, 2, 3)
 plt.plt.stem(n,np.real(Xec)); plt.plt.axis([-0.5,10.5,-5,50])

plt.title('DFT[xec(n)]')
 plt.xlabel('k')


plt.subplot(2, 2, 4)
 plt.plt.stem(n,np.imag(Xoc)); plt.plt.axis([-0.5,10.5,-20,20])

plt.title('DFT[xoc(n)]')
 plt.xlabel('k')


print -deps2 me0510b.eps


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
