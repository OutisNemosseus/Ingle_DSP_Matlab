#!/usr/bin/env python3
# Title: Chapter 6: Example 6.7
# Chapter: 06
# Source: Ingle DSP MATLAB Programs

import numpy as np
# Chapter 6: Example 6.7

# Freq. Samp. Form: given frequency samples

# M = 32; alpha = (M-1)/2; k = 0:M-1; wk = (2*np.pi/M)*k
magHk = [1,1,1,0.5,np.zeros(1,25),0.5,1,1]
k1 = 0:15; k2 = 16:M-1
angHk = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]
H = magHk*np.exp(1j*angHk)
h = np.real(ifft(H,M))
[C,B,A] = dir2fs(h)