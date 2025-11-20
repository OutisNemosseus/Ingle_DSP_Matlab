// Chapter 6 : Example 6.3
// Chapter 6 : Example 6.3

const ex060300 = {
  "id": "ex060300",
  "title": "ex060300",
  "displayName": "Chapter 6 : Example 6.3",
  "description": "Chapter 6 : Example 6.3",
  "category": "DSP - Chapter 06",
  "chapter": "06",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 6 : Example 6.3\n# Chapter: 06\n# Source: Ingle DSP MATLAB Programs\n\n# Chapter 6 : Example 6.3\r\n\r\n# Mixed form conversion\r\n\r\n# C = []; B1 = [2,4;3,1]; A1 = [1,1,0.9;1,0.4,-0.4]\nB2 = [0.5,0.7;1.5,2.5;0.8,1]; A2 = [1,-1,0.8;1,0.5,0.5;1,0,-0.5]\n[b1,a1] = par2dir(C,B1,A1)\r\n\r\n[b2,a2] = par2dir(C,B2,A2)\r\n\r\nb = conv(b1,b2)\r\n\r\na = conv(a1,a2)\r\n\r\n[b0,Bc,Ac] = dir2cas(b,a)\r\n\r\n[C,Bp,Ap] = dir2par(b,a)",
  "matlabCode": "% Chapter 6 : Example 6.3\r\n\r\n%             Mixed form conversion\r\n\r\n%\r\n\r\nC = []; B1 = [2,4;3,1]; A1 = [1,1,0.9;1,0.4,-0.4];\r\n\r\nB2 = [0.5,0.7;1.5,2.5;0.8,1]; A2 = [1,-1,0.8;1,0.5,0.5;1,0,-0.5];\r\n\r\n[b1,a1] = par2dir(C,B1,A1)\r\n\r\n[b2,a2] = par2dir(C,B2,A2)\r\n\r\nb = conv(b1,b2)\r\n\r\na = conv(a1,a2)\r\n\r\n[b0,Bc,Ac] = dir2cas(b,a)\r\n\r\n[C,Bp,Ap] = dir2par(b,a)",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter06",
    "dsp",
    "ex060300"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex060300;
