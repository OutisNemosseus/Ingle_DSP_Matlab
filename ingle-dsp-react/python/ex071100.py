#!/usr/bin/env python3
# Title: Chapter 07: Example 7.11 Bandstop filter design - Kaiser window
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 07: Example 7.11 Bandstop filter design - Kaiser window

# M = 45; As = 60; n=[0:1:M-1]
beta = 0.1102*(As-8.7)

w_kai = (kaiser(M,beta))'
wc1 = np.pi/3; wc2 = 2*np.pi/3
hd = ideal_lp(wc1,M) + ideal_lp(np.pi,M) - ideal_lp(wc2,M)
h = hd * w_kai
[db,mag,pha,grd,w] = freqz_m(h,[1])
# plt.subplot(1, 1, 1)
plt.subplot(2, 1, 2)
plt.plt.plt.plot(w/np.pi,db)


plt.title('Magnitude Response in dB')
plt.grid(True)
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Decibels')
plt.xlim(0, 1)
plt.ylim(-80, 10)
set(gca,'XTickMode','manual','XTick',[0;0.333;0.667;1])

set(gca,'XTickLabelMode','manual',...

    'XTickLabels',[' 0 ';'1/3';'2/3';' 1 '])

set(gca,'YTickMode','manual','YTick',[-60,0])

set(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])

# pause
print -deps2 ex071101.eps

# M = 45; As = 60; n=[0:1:M-1]
beta = 0.1102*(As-8.7)+.3

w_kai = (kaiser(M,beta))'
wc1 = np.pi/3; wc2 = 2*np.pi/3
hd = ideal_lp(wc1,M) + ideal_lp(np.pi,M) - ideal_lp(wc2,M)
h = hd * w_kai
[db,mag,pha,grd,w] = freqz_m(h,[1])
# # plots

plt.subplot(1, 1, 1)


plt.subplot(2, 2, 1)
 plt.plt.stem(n,hd); plt.title('Ideal Impulse Response')
plt.plt.axis([-1 M -0.2 0.8]); plt.xlabel('n')
 plt.ylabel('hd(n)')
plt.subplot(2, 2, 2)
 plt.plt.stem(n,w_kai);plt.title('Kaiser Window')
plt.plt.axis([-1 M 0 1.1]); plt.xlabel('n')
 plt.ylabel('w(n)')
plt.subplot(2, 2, 3)
 plt.plt.stem(n,h);plt.title('Actual Impulse Response')
plt.plt.axis([-1 M -0.2 0.8]); plt.xlabel('n')
 plt.ylabel('h(n)')
plt.subplot(2, 2, 4)
plt.plt.plt.plot(w/np.pi,db)


plt.title('Magnitude Response in dB')
plt.grid(True)
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Decibels')
plt.xlim(0, 1)
plt.ylim(-80, 10)
set(gca,'XTickMode','manual','XTick',[0;0.333;0.667;1])

set(gca,'XTickLabelMode','manual',...

    'XTickLabels',[' 0 ';'1/3';'2/3';' 1 '])

set(gca,'YTickMode','manual','YTick',[-60,0])

set(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0'])

print -deps2 ex071102.eps
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
