#!/usr/bin/env python3
# Title: Chapter 7 Example 7.28
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7 Example 7.28

# Hilbert transformer design using PM algorithm

# f = [0.05,0.95]; m = [1 1]; M = 51; N = M-1
h = remez(N,f,m,'hilbert')
[db,mag,pha,grd,w] = freqz_m(h,[1])
fig = plt.figure(1)
 plt.subplot(1, 1, 1)
plt.subplot(2, 1, 1)
 stemnp.arange([0, N],h + 1); plt.title('Impulse Response')


plt.xlabel('n')
 plt.ylabel('h(n)')
 plt.plt.axis([0,N,-0.8,0.8])

set(gca,'XTickMode','manual','XTick',[0,N])

setnp.arange(gca,'YTickMode','manual','YTick',[-0.8, 0.8] + 0.2, 0.2)
plt.subplot(2, 1, 2)
 plt.plt.plt.plot(w/np.pi,mag)
 plt.title('Magnitude Response')
plt.xlabel('frequency in np.pi units')
 plt.ylabel('|H|')
set(gca,'XTickMode','manual','XTick',[0,f,1])

set(gca,'YTickMode','manual','YTick',[0,1]);plt.grid(True)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
