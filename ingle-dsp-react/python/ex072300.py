#!/usr/bin/env python3
# Title: Chapter 7 Example 7.23
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7 Example 7.23

# Lowpass filter design using PM algorithm

# wp = 0.2*np.pi; ws = 0.3*np.pi; Rp = 0.25; As = 50
delta1 = (10**(Rp/20)-1)/(10**(Rp/20)+1)

delta2 = (1+delta1)*(10**(-As/20))

deltaH = np.max(delta1,delta2); deltaL = np.min(delta1,delta2)
weights = [delta2/delta1 1]

deltaf = (ws-wp)/(2*np.pi)

M = np.ceil((-20*np.log10(np.sqrt(delta1*delta2))-13)/(14.6*deltaf)+1)

f = [0 wp/np.pi ws/np.pi 1]

m = [1 1 0 0]
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
delta_w = 2*np.pi/1000; wsi=ws/delta_w+1; wpi = wp/delta_w
Asd = -np.max(dbnp.arange(wsi, 501 + 1, 1))

M = M+1
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
Asd = -np.max(dbnp.arange(wsi, 501 + 1, 1))

M = M+1
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
Asd = -np.max(dbnp.arange(wsi, 501 + 1, 1))

M = M+1
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
Asd = -np.max(dbnp.arange(wsi, 501 + 1, 1))

M = M+1
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
Asd = -np.max(dbnp.arange(wsi, 501 + 1, 1))

M

[Hr,omega,P,L] = ampl_res(h)
# # Plots

fig = plt.figure(1)
 plt.subplot(1, 1, 1)
plt.subplot(2, 2, 1)
 stemnp.arange([0, M-1],h + 1, 1); plt.title('Actual Impulse Response')
plt.plt.axis([0 M-1 -0.1 0.3]); plt.xlabel('n')
 plt.ylabel('h(n)')
set(gca,'XTickMode','manual','XTick',[0,M-1])

setnp.arange(gca,'YTickMode','manual','YTick',[-0.1, 0.3] + 0.1, 0.1)

plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi,db)
plt.title('Magnitude Response in dB')


plt.plt.axis([0,1,-80,10]); plt.xlabel('frequency in np.pi units')
 plt.ylabel('DECIBELS')
set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])

set(gca,'YTickMode','manual','YTick',[-50,0])
set(gca,'YTickLabelMode','manual','YTickLabels',['50';' 0']);plt.grid(True)
plt.subplot(2, 2, 3)
plt.plt.plt.plot(omega/np.pi,Hr)
plt.title('Amplitude Response')


plt.plt.axis([0 1 -0.1 1.1]); plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(w)')
set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])

set(gca,'YTickMode','manual','YTick',[0,1]);plt.grid(True)
plt.subplot(2, 2, 4)


pbw = omeganp.arange(1, wpi+1 + 1, 1)/np.pi; pbe = Hrnp.arange(1, wpi+1 + 1, 1)-1
sbw = omeganp.arange(wsi+1, 501 + 1)/np.pi; sbe = Hrnp.arange(wsi+1, 501 + 1)
plt.plt.plt.plot(pbw,pbe,sbw,sbe)


plt.plt.axis([0,1,-deltaH,deltaH]);plt.title('Error Response')


plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(w)')
set(gca,'XTickMode','manual','XTick',[0,0.2,0.3,1])

set(gca,'YTickMode','manual','YTick',[-deltaH,-deltaL,0,deltaL,deltaH])
set(gca,'XGrid','on')
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
