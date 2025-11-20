#!/usr/bin/env python3
# Title: Chapter 7 Example 7.24
# Chapter: 07
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 7 Example 7.24

# Bandpass filter design using PM algorithm

# ws1 = 0.2*np.pi; wp1 = 0.35*np.pi; wp2 = 0.65*np.pi; ws2 = 0.8*np.pi
Rp = 1.0; As = 60
delta1 = (10**(Rp/20)-1)/(10**(Rp/20)+1)
delta2 = (1+delta1)*(10**(-As/20))
deltaH = np.max(delta1,delta2); deltaL = np.min(delta1,delta2)
weights = [1 delta2/delta1 1]
delta_f =np.min((ws2-wp2)/(2*np.pi), (wp1-ws1)/(2*np.pi))
M = np.ceil((-20*np.log10(np.sqrt(delta1*delta2))-13)/(14.6*delta_f)+1)

f = [0 ws1/np.pi wp1/np.pi wp2/np.pi ws2/np.pi 1]
m = [0 0 1 1 0 0]
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
delta_w=2*np.pi/1000
ws1i=np.floor(ws1/delta_w)+1; wp1i = np.floor(wp1/delta_w)+1
ws2i=np.floor(ws2/delta_w)+1; wp2i = np.floor(wp2/delta_w)+1
Asd = -np.max(dbnp.arange(1, ws1i + 1, 1))

M = M+1
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
Asd = -np.max(dbnp.arange(1, ws1/delta_w + 1, 1))

M = M+1
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
Asd = -np.max(dbnp.arange(1, ws1/delta_w + 1, 1))

M = M+1
h = remez(M-1,f,m,weights)
[db,mag,pha,grd,w] = freqz_m(h,[1])
Asd = -np.max(dbnp.arange(1, ws1/delta_w + 1, 1))

M

[Hr,omega,P,L] = ampl_res(h)
# # Plots

fig = plt.figure(1)
 plt.subplot(1, 1, 1)
plt.subplot(2, 2, 1)
 stemnp.arange([0, M-1],h + 1, 1); plt.title('Actual Impulse Response')
plt.plt.axis([0,M-1,-0.4,0.5]); plt.xlabel('n')
 plt.ylabel('h(n)')
set(gca,'XTickMode','manual','XTick',[0,M-1])

setnp.arange(gca,'YTickMode','manual','YTick',[-0.4, 0.5] + 0.2, 0.2)

plt.subplot(2, 2, 2)
plt.plt.plt.plot(w/np.pi,db)
plt.title('Magnitude Response in dB')


plt.plt.axis([0,1,-80,10]); plt.xlabel('frequency in np.pi units')
 plt.ylabel('DECIBELS')
set(gca,'XTickMode','manual','XTick',f)

set(gca,'YTickMode','manual','YTick',[-60,0])
set(gca,'YTickLabelMode','manual','YTickLabels',['60';' 0']);plt.grid(True)
plt.subplot(2, 2, 3)
plt.plt.plt.plot(omega/np.pi,Hr)
plt.title('Amplitude Response')


plt.plt.axis([0 1 -0.1 1.1]); plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(w)')
set(gca,'XTickMode','manual','XTick',f)

set(gca,'YTickMode','manual','YTick',[0,1]);plt.grid(True)
delta_w = 2*np.pi/1000; sp_edge1 = ws1/delta_w+1; sp_edge2 = ws2/delta_w+1
plt.subplot(2, 2, 4)


sb1w = omeganp.arange(1, ws1i + 1, 1)/np.pi; sb1e = Hrnp.arange(1, ws1i + 1, 1)
pbw = omeganp.arange(wp1i, wp2i + 1)/np.pi; pbe = Hrnp.arange(wp1i, wp2i + 1)-1
sb2w = omeganp.arange(ws2i, 501 + 1)/np.pi; sb2e = Hrnp.arange(ws2i, 501 + 1)
plt.plt.plt.plot(sb1w,sb1e,pbw,pbe*(delta2/delta1)
,sb2w,sb2e)
plt.title('Weighted Error')


plt.plt.axis([0,1,-deltaL,deltaL])
plt.xlabel('frequency in np.pi units')
 plt.ylabel('Hr(w)')
set(gca,'XTickMode','manual','XTick',f)

set(gca,'YTickMode','manual','YTick',[-deltaL,0,deltaL])
set(gca,'XGrid','on','YGrid','on')


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
