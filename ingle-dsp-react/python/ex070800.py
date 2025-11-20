#!/usr/bin/env python3
# Title: Chapter 07: Example 7.8 Lowpass filter design - Hamming window
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 07: Example 7.8 Lowpass filter design - Hamming window

# wp = 0.2*np.pi; ws = 0.3*np.pi
tr_width = ws - wp

M = np.ceil(6.6*np.pi/tr_width) + 1

n=[0:1:M-1]
wc = (ws+wp)/2

hd = ideal_lp(wc,M)
w_ham = (hamming(M))'
h = hd * w_ham
[db,mag,pha,grd,w] = freqz_m(h,[1])
delta_w = 2*np.pi/1000
Rp = -(np.min(dbnp.arange(1, wp/delta_w+1 + 1, 1)))        # Passband Ripple

As = -np.round(np.max(dbnp.arange(ws/delta_w+1, 501 + 1, 1))) # Min Stopband attenuation

# plots

plt.subplot(1, 1, 1)
plt.subplot(2, 2, 1)
 plt.plt.stem(n,hd); plt.title('Ideal Impulse Response')
plt.plt.axis([0 M-1 -0.1 0.3]); plt.xlabel('n')
 plt.ylabel('hd(n)')
plt.subplot(2, 2, 2)
 plt.plt.stem(n,w_ham);plt.title('Hamming Window')
plt.plt.axis([0 M-1 0 1.1]); plt.xlabel('n')
 plt.ylabel('w(n)')
plt.subplot(2, 2, 3)
 plt.plt.stem(n,h);plt.title('Actual Impulse Response')
plt.plt.axis([0 M-1 -0.1 0.3]); plt.xlabel('n')
 plt.ylabel('h(n)')
plt.subplot(2, 2, 4)
 plt.plt.plt.plot(w/np.pi,db)
plt.title('Magnitude Response in dB')
plt.grid(True)
plt.plt.axis([0 1 -100 10]); plt.xlabel('frequency in np.pi units')
 plt.ylabel('Decibels')
set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])

set(gca,'YTickMode','manual','YTick',[-50,0])

set(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
