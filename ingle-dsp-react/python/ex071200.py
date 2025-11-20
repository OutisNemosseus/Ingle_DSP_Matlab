#!/usr/bin/env python3
# Title: Chapter 07: Example 7.12 Differentiator design - Hamming window
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 07: Example 7.12 Differentiator design - Hamming window

# M = 21; alpha = (M-1)/2
n = 0:M-1
hd = (np.cos(np.pi*(n-alpha)))/(n-alpha); hd(alpha+1)=0
w_ham = (hamming(M))'
h = hd * w_ham
[Hr,w,P,L] = Hr_Type3(h)
# plots

plt.subplot(1, 1, 1)


plt.subplot(2, 2, 1)
 plt.plt.stem(n,hd); plt.title('Ideal Impulse Response')
plt.plt.axis([-1 M -1.2 1.2]); plt.xlabel('n')
 plt.ylabel('hd(n)')
plt.subplot(2, 2, 2)
 plt.plt.stem(n,w_ham);plt.title('Hamming Window')
plt.plt.axis([-1 M 0 1.2]); plt.xlabel('n')
 plt.ylabel('w(n)')
plt.subplot(2, 2, 3)
 plt.plt.stem(n,h);plt.title('Actual Impulse Response')
plt.plt.axis([-1 M -1.2 1.2]); plt.xlabel('n')
 plt.ylabel('h(n)')
plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi,Hr/np.pi)
 plt.title('Amplitude Response')
plt.grid(True)
plt.xlabel('frequency in np.pi units')
 plt.ylabel('slope in np.pi units')
plt.xlim(0, 1)
plt.ylim(0, 1)
set(gca,'XTickMode','manual','XTick',[0,0.2,0.4,0.6,0.8,1])

set(gca,'YTickMode','manual','YTick',[0,0.2,0.4,0.6,0.8,1])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
