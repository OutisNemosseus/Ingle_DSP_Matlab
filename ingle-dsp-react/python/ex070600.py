#!/usr/bin/env python3
# Title: Chapter 7: Example 7.6 Type-3 Linear phase FIR filter
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7: Example 7.6 Type-3 Linear phase FIR filter

# plt.subplot(1, 1, 1)
h = [-4,1,-1,-2,5,0,-5,2,1,-1,4]
M = len(h); n = 0:M-1
[Hr,w,c,L] = Hr_Type3(h)
cmax = np.max(c)+1; cmin = np.min(c)-1
plt.subplot(2, 2, 1)
 plt.plt.stem(n,h); plt.xlim(-1, 2*L+1)
plt.ylim(cmin, cmax)
plt.xlabel('n')
 plt.ylabel('h(n)')
 plt.title('Impulse Response')
plt.subplot(2, 2, 3)
 stemnp.arange(0, L,c + 1); plt.xlim(-1, 2*L+1)
plt.ylim(cmin, cmax)
plt.xlabel('n')
 plt.ylabel('c(n)')
 plt.title('c(n) coefficients')
plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi,Hr)
plt.grid(True)
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr')
plt.title('Type-3 Amplitude Response')
plt.subplot(2, 2, 4)
pzplotz(h,1)


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
