#!/usr/bin/env python3
# Title: Chapter 05: Example 05.08: HiRes Spectrum
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# Chapter 05: Example 05.08: HiRes Spectrum

# # High resolution spectrum based on 100 samples of the signal x(n)

plt.subplot(1, 1, 1)
n=np.arange(0, 100)
x=np.cos(0.48*np.pi*n)+np.cos(0.52*np.pi*n)
plt.subplot(2, 1, 1)
plt.plt.stem(n,x);plt.title('signal x(n), 0 <= n <= 99')
plt.xlabel('n')
plt.plt.axis([0,100,-2.5,2.5])

X=fft(x);magX=np.abs(Xnp.arange(1, 51 + 1, 1))
k=0:1:50;w=2*np.pi/100*k
plt.subplot(2, 1, 2)
plt.plt.plt.plot(w/np.pi,magX)
plt.title('DTFT Magnitude')
plt.xlabel('frequency in np.pi units')
plt.plt.axis([0,1,0,60])

disp('Press RETURN to continue');pause
# print -deps2 me0508c.eps; subplot

# # Spectrum based on the first 10 samples of x(n)

n1=np.arange(0, 10);y1=xnp.arange(1, 10 + 1, 1)
plt.subplot(2, 1, 1)
plt.plt.stem(n1,y1);plt.title('signal x(n), 0 <= n <= 9')
plt.xlabel('n')
plt.plt.axis([0,10,-2.5,2.5])

Y1=fft(y1);magY1=np.abs(Y1np.arange(1, 6 + 1, 1))
k1=0:1:5;w1=2*np.pi/10*k1
plt.subplot(2, 1, 2)
plt.plt.stem(w1/np.pi,magY1);plt.title('Samples of DTFT Magnitude')


plt.xlabel('frequency in np.pi units')
plt.plt.axis([0,1,0,10])

disp('Press RETURN to continue');pause
print -deps2 me0508a.eps; subplot

# # high density Spectrum (50 samples) based on the first 10 samples of x(n)

n2=np.arange(0, 50);y2=[xnp.arange(1, 10 + 1, 1) np.zeros(1,40)]
plt.subplot(2, 1, 1)
plt.plt.stem(n2,y2);plt.title('signal x(n), 0 <= n <= 9 + 40 zeros')
plt.xlabel('n')
plt.plt.axis([0,50,-2.5,2.5])

Y2=fft(y2);magY2=np.abs(Y2np.arange(1, 26 + 1, 1))
k2=0:1:25;w2=2*np.pi/50*k2
plt.subplot(2, 1, 2)
plt.plt.plt.plot(w2/np.pi,magY2)
plt.title('DTFT Magnitude')
plt.xlabel('frequency in np.pi units')
plt.plt.axis([0,1,0,10])

disp('Press RETURN to continue');pause; subplot

# # High density spectrum (100 samples) based on the first 10 samples of x(n)

n3=np.arange(0, 100);y3=[xnp.arange(1, 10 + 1, 1) np.zeros(1,90)]
plt.subplot(2, 1, 1)
plt.plt.stem(n3,y3);plt.title('signal x(n), 0 <= n <= 9 + 90 zeros')
plt.xlabel('n')
plt.plt.axis([0,100,-2.5,2.5])

Y3=fft(y3);magY3=np.abs(Y3np.arange(1, 51 + 1, 1))
k3=0:1:50;w3=2*np.pi/100*k3
plt.subplot(2, 1, 2)
plt.plt.plt.plot(w3/np.pi,magY3)
plt.title('DTFT Magnitude')
plt.xlabel('frequency in np.pi units')
plt.plt.axis([0,1,0,10])

disp('Press RETURN to continue');pause
# print -deps2 me0508b.eps; subplot




# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
