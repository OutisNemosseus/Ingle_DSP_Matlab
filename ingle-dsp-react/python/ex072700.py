#!/usr/bin/env python3
# Title: Chapter 7 Example 7.27
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7 Example 7.27

# Differentiator design using PM algorithm

# f = [0 0.2 0.4 0.6 0.8 1];         # in w/np.pi unis

# m = [1 1 2 2 3 3];                 # in sam/cycle (old version)

m = [0,0.1,0.4,0.6,1.2,1.5];       # new Student Edition

h = remez(25,f,m,'differentiator')
[db,mag,pha,grd,w] = freqz_m(h,[1])
fig = plt.figure(1)
 plt.subplot(1, 1, 1)
plt.subplot(2, 1, 1)
 stemnp.arange([0, 25],h + 1); plt.title('Impulse Response')


plt.xlabel('n')
 plt.ylabel('h(n)')
 plt.plt.axis([0,25,-0.6,0.6])

set(gca,'XTickMode','manual','XTick',[0,25])

setnp.arange(gca,'YTickMode','manual','YTick',[-0.6, 0.6] + 0.2, 0.2)
plt.subplot(2, 1, 2)
 plt.plt.plt.plot(w/(2*np.pi)
,mag); plt.title('Magnitude Response')
plt.xlabel('Normalized frequency f')
 plt.ylabel('|H|')
set(gca,'XTickMode','manual','XTick',f/2)

set(gca,'YTickMode','manual','YTick',m)

plt.grid(True)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
