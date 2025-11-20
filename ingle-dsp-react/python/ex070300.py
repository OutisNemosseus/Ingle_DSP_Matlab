#!/usr/bin/env python3
# Title: Chapter 7: Example 7.3 Amplitude vs Magnitude response
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7: Example 7.3 Amplitude vs Magnitude response

# h = [1,1,1]
w = np.arange(0, 501)*np.pi/500
H = freqz(h,1,w)
magH = np.abs(H); phaH = np.angle(H)
ampH = np.ones(1,501)+2*np.cos(w); angH = -w
plt.subplot(1, 1, 1)
plt.subplot(2, 2, 1)
 plt.plt.plt.plot(w/np.pi,magH)
 plt.title('Magnitude Response')


plt.xlabel('frequency in np.pi units')
 plt.ylabel('|H|')
 plt.grid(True)
plt.xlim(0, 1)
plt.ylim(-1.5, 3.5)
set(gca,'XTickMode','manual','XTick',[0;0.6667;1])

set(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])

set(gca,'YTickMode','manual','YTick',[0])

plt.subplot(2, 2, 3)
 plt.plt.plt.plot(w/np.pi,phaH/np.pi)
 plt.title('Piecewise Linear Phase Response')


plt.xlabel('frequency in np.pi units')
 plt.ylabel('angle in np.pi units')
 plt.grid(True)
plt.xlim(0, 1)
plt.ylim(-1, 1)
set(gca,'XTickMode','manual','XTick',[0;0.6667;1])

set(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])

set(gca,'YTickMode','manual','YTick',[-0.6667;0;0.3333])

set(gca,'YTickLabelMode','manual','YTickLabels',['-2/3';'   0';' 2/3'])

plt.subplot(2, 2, 2)
 plt.plt.plt.plot(w/np.pi,ampH)
 plt.title('Amplitude Response')


plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr')
 plt.grid(True)
plt.xlim(0, 1)
plt.ylim(-1.5, 3.5)
set(gca,'XTickMode','manual','XTick',[0;0.6667;1])

set(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])

set(gca,'YTickMode','manual','YTick',[0])

plt.subplot(2, 2, 4)
 plt.plt.plt.plot(w/np.pi,angH/np.pi)
 plt.title('Linear Phase Response')


plt.xlabel('frequency in np.pi units')
 plt.ylabel('angle in np.pi units')
 plt.grid(True)
plt.xlim(0, 1)
plt.ylim(-1, 1)
set(gca,'XTickMode','manual','XTick',[0;0.6667;1])

set(gca,'XTickLabelMode','manual','XTickLabels',[' 0 ';'2/3';' 1 '])

set(gca,'YTickMode','manual','YTick',[-0.6667;0])

set(gca,'YTickLabelMode','manual','YTickLabels',['-2/3';'   0'])


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
