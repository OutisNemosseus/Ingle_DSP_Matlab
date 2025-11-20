// Example 2.8
// Example 2.8

const ex020800 = {
  "id": "ex020800",
  "title": "ex020800",
  "displayName": "Example 2.8",
  "description": "Example 2.8",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Example 2.8\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\nfrom scipy.linalg import toeplitz\n\n# Helper function\ndef conv_tp(h, x):\n    \"\"\"Convolution using Toeplitz matrix\"\"\"\n    # Create Toeplitz matrix from h\n    col = np.concatenate([h, np.zeros(len(x) - 1)])\n    row = np.concatenate([hnp.arange(0, 2), np.zeros(len(x) - 1)])\n    H = toeplitz(col, row)\n    \n    # Compute convolution\n    y = H @ x\n    \n    return y, H\n\n# Example 2.8\n# x(n)=[3,11,7,0,-1,4,2]; nx = np.arange(-3, 4)\n# h(n)=[2,3,0,-5,2,1]; nh = np.arange(-1, 5)\n# y(n)=conv_tp(x,h)\n\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nh = np.array([2, 3, 0, -5, 2, 1])\ny, H = conv_tp(h, x)\n\nprint(f\"y = {y}\")\nprint(f\"H = \\\n{H}\")\n",
  "matlabCode": "\r\n% Example 2.8\r\n\r\n%\r\n\r\n% x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\r\n\r\n% h(n)=[2,3,0,-5,2,1]; nh = [-1:4]\r\n\r\n% y(n)=conv_tp(x,h)\r\n\r\nx = [3, 11, 7, 0, -1, 4, 2]';\r\n\r\nh = [2, 3, 0, -5, 2, 1]';\r\n\r\n[y,H] = conv_tp(h,x)",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter02",
    "dsp",
    "ex020800"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex020800;
