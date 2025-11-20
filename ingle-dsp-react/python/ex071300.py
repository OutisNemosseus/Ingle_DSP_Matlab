#!/usr/bin/env python3
# Title: Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window

# M = 25; alpha = (M-1)/2
n = 0:M-1
hd = (2/np.pi)*((np.sin((np.pi/2)*(n-alpha))**2)/(n-alpha)); hd(alpha+1)=0
w_han = (hanning(M))'
h = hd * w_han
[Hr,w,P,L] = Hr_Type3(h)
# plots

plt.subplot(1, 1, 1)


plt.subplot(2, 2, 1)
 plt.plt.stem(n,hd); plt.title('Ideal Impulse Response')
plt.plt.axis([-1 M -1.2 1.2]); plt.xlabel('n')
 plt.ylabel('hd(n)')
plt.subplot(2, 2, 2)
 plt.plt.stem(n,w_han);plt.title('Hanning Window')
plt.plt.axis([-1 M 0 1.2]); plt.xlabel('n')
 plt.ylabel('w(n)')
plt.subplot(2, 2, 3)
 plt.plt.stem(n,h);plt.title('Actual Impulse Response')
plt.plt.axis([-1 M -1.2 1.2]); plt.xlabel('n')
 plt.ylabel('h(n)')
w = w'; Hr = Hr'
w = [-np.flip(w), wnp.arange(2, 501 + 1)]; Hr = [-np.flip(Hr), Hrnp.arange(2, 501 + 1)]
plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi,Hr)
 plt.title('Amplitude Response')
plt.grid(True)
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr')
plt.xlim(-1, 1)
plt.ylim(-1.1, 1.1)
set(gca,'XTickMode','manual','XTick',[-1,0,1])

set(gca,'YTickMode','manual','YTick',[-1,0,1])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
