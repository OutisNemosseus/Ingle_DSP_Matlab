#!/usr/bin/env python3
# Title: Example 2.6
# Chapter: 02
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Example 2.6
# x(n)=[3,11,7,0,-1,4,2]; nx = np.arange(-3, 4)
# h(n)=[2,3,0,-5,2,1]; nh = np.arange(-1, 5)
# y(n)=conv(x,h)

# input x(n)
x = np.array([3, 11, 7, 0, -1, 4, 2])
nx = np.arange(-3, 4)

# impulse response h(n)
h = np.array([2, 3, 0, -5, 2, 1])
nh = np.arange(-1, 5)

fig = plt.figure(figsize=(12, 10))

# plot x(k) and h(k)
plt.subplot(2, 2, 1)
markerline, stemlines, baseline = plt.plt.plt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')
plt.plt.plt.stem(nh + 0.05, h, linefmt='r:', markerfmt='r^', basefmt='r-')
plt.plt.plt.axis([-5, 5, -6, 12])
plt.title('x(k) and h(k)')
plt.xlabel('k')
plt.text(-0.5, 11, 'solid: x    dashed: h')

# plot x(k) and h(-k)
plt.subplot(2, 2, 2)
plt.plt.plt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')
plt.plt.plt.stem(-np.flip(nh) + 0.05, np.flip(h), linefmt='r:', markerfmt='r^', basefmt='r-')
plt.plt.plt.axis([-5, 5, -6, 12])
plt.title('x(k) and h(-k)')
plt.xlabel('k')
plt.text(-0.5, -1, 'n=0')
plt.text(-0.5, 11, 'solid: x    dashed: h')

# plot x(k) and h(-1-k)
plt.subplot(2, 2, 3)
plt.plt.plt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')
plt.plt.plt.stem(-np.flip(nh) + 0.05 - 1, np.flip(h), linefmt='r:', markerfmt='r^', basefmt='r-')
plt.plt.plt.axis([-5, 5, -6, 12])
plt.title('x(k) and h(-1-k)')
plt.xlabel('k')
plt.text(-1.5, -1, 'n=-1')
plt.text(-0.5, 11, 'solid: x    dashed: h')

# plot x(k) and h(2-k)
plt.subplot(2, 2, 4)
plt.plt.plt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')
plt.plt.plt.stem(-np.flip(nh) + 0.05 + 2, np.flip(h), linefmt='r:', markerfmt='r^', basefmt='r-')
plt.plt.plt.axis([-5, 5, -6, 12])
plt.title('x(k) and h(2-k)')
plt.xlabel('k')
plt.text(2 - 0.5, -1, 'n=2')
plt.text(-0.5, 11, 'solid: x    dashed: h')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
