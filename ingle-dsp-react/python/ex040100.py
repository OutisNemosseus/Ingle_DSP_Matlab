#!/usr/bin/env python3
# Title: Chapter 4: Example 4.1:
# Chapter: 04
# Source: Ingle DSP MATLAB Programs

# Chapter 4: Example 4.1:
# X(z) using ztrans
# x(n) = a^n*u(n)

# Note: This example uses symbolic computation (ztrans) which is available in MATLAB's Symbolic Math Toolbox
# Python equivalent would use sympy library for symbolic Z-transform

import sympy as sp

n, z, a = sp.symbols('n z a')
x = a**n
X = sp.summation(x * z**(-n), (n, 0, sp.oo))
print(f"X(z) = {sp.simplify(X)}")
