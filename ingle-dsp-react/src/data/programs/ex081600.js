// Chapter 8: Example 8.16
// Chapter 8: Example 8.16

const ex081600 = {
  "id": "ex081600",
  "title": "ex081600",
  "displayName": "Chapter 8: Example 8.16",
  "description": "Chapter 8: Example 8.16",
  "category": "DSP - Chapter 08",
  "chapter": "08",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 8: Example 8.16\n# Chapter: 08\n# Source: Ingle DSP MATLAB Programs\n\n# Chapter 8: Example 8.16\r\n\r\n# Bilinear Transformation\r\n\r\n# Simple example\r\n\r\n# c = [1,1]; d = [1,5,6]; T = 1\n[b,a] = bilinear(c,d,T)\r\n\r\n# # b = 0.1500    0.1000   -0.0500\r\n\r\n# # a = 1.0000    0.2000    0.0000",
  "matlabCode": "% Chapter 8: Example 8.16\r\n\r\n%            Bilinear Transformation\r\n\r\n%                  Simple example\r\n\r\n%\r\n\r\nc = [1,1]; d = [1,5,6]; T = 1;\r\n\r\n[b,a] = bilinear(c,d,T)\r\n\r\n%%b = 0.1500    0.1000   -0.0500\r\n\r\n%%a = 1.0000    0.2000    0.0000",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter08",
    "dsp",
    "ex081600"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex081600;
