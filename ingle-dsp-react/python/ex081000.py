#!/usr/bin/env python3
# Title: Chapter 8: Example 8.10
# Chapter: 08
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 8: Example 8.10

# Impulse Invariance Transformation

# Simple example

# plt.subplot(1, 1, 1)
 clg

c = [1,1]; d = [1,5,6]; T = 0.1; Fs = 1/T
[b,a] = imp_invr(c,d,T)

# # b =  1.0000   -0.8966

# # a =  1.0000   -1.5595    0.6065

# Impulse response of the analog filter

t = [0:0.01:3]; plt.subplot(2, 1, 1)
 impulse(c,d,t)
plt.plt.axis([0,3,-0.1,1]);# 
# Impulse response of the digital filter

n = [0:1:3/T]; hn = filter(b,a,impseq(0,0,3/T))
plt.plt.stem(n*T,hn); plt.xlabel('time in sec')
 title ('Impulse Responses')
# 
# Magnitude Response of the digital filter

[db,magd,pha,grd,wd] = freqz_m(b,a)
# magnitude response of the analog filter

[db,mags,pha,ws] = freqs_m(c,d,2*np.pi*Fs)
plt.subplot(2, 1, 2)
 plt.plt.plt.plot(ws/(2*np.pi)
,mags*Fs,wd/(2*np.pi)*Fs,magd)

plt.xlabel('frequency in Hz')
 plt.title('Magnitude Responses')


plt.ylabel('Magnitude')
 

text(1.4,.5,'Analog filter'); text(1.5,1.5,'Digital filter')
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
