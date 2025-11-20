#!/usr/bin/env python3
# Title: Chapter 05: Example 05.14: Circular convolution example
# Chapter: 05
# Source: Ingle DSP MATLAB Programs

# Chapter 05: Example 05.14: Circular convolution example

# # a) 5-point circular convolution

x1 = [1,2,2]; x2 = [1,2,3,4]
y = circonvt(x1,x2,5)

# b) 6-point circular convolution

x1 = [1,2,2]; x2 = [1,2,3,4]
y = circonvt(x1,x2,6)