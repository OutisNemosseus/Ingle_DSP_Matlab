#!/usr/bin/env python3
# Title: Chapter 4: Example 4.4:
# Chapter: 04
# Source: Ingle DSP MATLAB Programs

import numpy as np
import sympy as sp

# Chapter 4: Example 4.4:
# X(z) using ztrans
# x(n) = (n-2)(0.5)^(n-2)cos[pi*(n-2)/3]u(n-2)

# Note: This example uses symbolic computation
# Using sympy for symbolic manipulation

n, z = sp.symbols('n z')
x = n * (sp.Rational(1, 2))**n * sp.np.cos(sp.pi*n/3)

# For Z-transform of the shifted and scaled sequence
print("Note: Symbolic Z-transform computation")
print(f"x(n) = n*(0.5)^n*np.cos(pi*n/3)")
print("This requires symbolic computation tools")
