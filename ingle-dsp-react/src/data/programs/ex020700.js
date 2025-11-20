// Example 2.7
// Example 2.7

const ex020700 = {
  "id": "ex020700",
  "title": "ex020700",
  "displayName": "Example 2.7",
  "description": "Example 2.7",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Example 2.7\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n\n# Helper function\ndef conv_m(x, nx, h, nh):\n    \"\"\"Linear convolution with index tracking\"\"\"\n    ny_start = nx[0] + nh[0]\n    ny_end = nx[-1] + nh[-1]\n    ny = np.arange(ny_start, ny_end + 1)\n    y = np.convolve(x, h)\n    return y, ny\n\n# Example 2.7\n# x(n)=[3,11,7,0,-1,4,2]; nx = np.arange(-3, 4)\n# h(n)=[2,3,0,-5,2,1]; nh = np.arange(-1, 5)\n# y(n)=conv(x,h)\n\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nnx = np.arange(-3, 4)\nh = np.array([2, 3, 0, -5, 2, 1])\nnh = np.arange(-1, 5)\ny, ny = conv_m(x, nx, h, nh)\n\nprint(f\"y = {y}\")\nprint(f\"ny = {ny}\")\n",
  "matlabCode": "\r\n% Example 2.7\r\n\r\n%\r\n\r\n% x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\r\n\r\n% h(n)=[2,3,0,-5,2,1]; nh = [-1:4]\r\n\r\n% y(n)=conv(x,h)\r\n\r\nx = [3, 11, 7, 0, -1, 4, 2]; nx = [-3: 3];\r\n\r\nh = [2, 3, 0, -5, 2, 1]; nh = [-1: 4];\r\n\r\n[y,ny] = conv_m(x,nx,h,nh)\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter02",
    "dsp",
    "ex020700"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex020700;
