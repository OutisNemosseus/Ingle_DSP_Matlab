#!/usr/bin/env python3
# Title: Chapter 05: Example-5.17: Overlap and save
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

import numpy as np
# Chapter 05: Example-5.17: Overlap and save

# n = 0:9
x = n+1; Lenx = len(x)
h = [1,0,-1]; M = 3; M1 = M-1; L = N-M1
N = 6; h = [h np.zeros(1,N-M)]
# x = [np.zeros(1,M1), x, np.zeros(1,N-1)]
K = np.floor((Lenx+M1-1)/(L))
Y = np.zeros(K+1,N)
for k in range(0, K + 1):

	xk = xnp.arange(k*L+1, k*L+N + 1)
	Y(k+1,:) = circonvf(xk,h,N)
Y = Y(:,M:N)'
y = (Y(:))'