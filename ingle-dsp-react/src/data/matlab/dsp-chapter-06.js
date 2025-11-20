// DSP Chapter 06 Programs
// Auto-generated from MATLAB files

const chapter06Programs = [
  {
    "id": "ex060100",
    "title": "ex060100",
    "displayName": "Chapter 6 : Example 6.1\r",
    "description": "Chapter 6 : Example 6.1\r",
    "category": "DSP - Chapter 06",
    "chapter": "06",
    "source": "matlab",
    "pythonCode": "import numpy as np\nfrom scipy import signal\n\n# Chapter 6 : Example 6.1\n# Cascade form conversion\n\n# Note: This example requires custom MATLAB functions (dir2cas, casfiltr, impseq)\n# which are not standard in Python. Here's a simplified version:\n\nb = np.array([1, -3, 11, -27, 18])\na = np.array([16, 12, 2, -4, -1])\n\n# Impulse sequence\ndef impseq(n0, n1, n2):\n    n = np.arange(n1, n2 + 1)\n    return (n == n0).astype(float)\n\ndelta = impseq(0, 0, 7)\nprint(f\"Impulse delta = {delta}\")\n\n# Direct form filter\nhdir = signal.lfilter(b, a, delta)\nprint(f\"\\nDirect form output hdir = {hdir}\")\n\n# For cascade form, we would need to factor the polynomials\n# into second-order sections (SOS)\nz, p, k = signal.tf2zpk(b, a)\nprint(f\"\\nZeros z = {z}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Gain k = {k}\")\n\nsos = signal.tf2sos(b, a)\nprint(f\"\\nSecond-order sections (SOS):\\n{sos}\")\n\n# Apply cascade (SOS) filter\nhpar = signal.sosfilt(sos, delta)\nprint(f\"\\nCascade form output hpar = {hpar}\")\n\n# Verify they're the same\nerror = np.max(np.abs(hdir - hpar))\nprint(f\"\\nMax error between direct and cascade forms: {error}\")\n",
    "matlabCode": "% Chapter 6 : Example 6.1\r\n\r\n%             Cascade form conversion\r\n\r\n%\r\n\r\nb = [1,-3,11,-27,18]; a = [16,12,2,-4,-1];\r\n\r\n[b0,B,A] = dir2cas(b,a)\r\n\r\nformat long; delta = impseq(0,0,7);\r\n\r\nhpar = casfiltr(b0,B,A,delta)\r\n\r\nhdir = filter(b,a,delta)",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter06",
      "dsp",
      "ex060100"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex060200",
    "title": "ex060200",
    "displayName": "Chapter 6 : Example 6.2\r",
    "description": "Chapter 6 : Example 6.2\r",
    "category": "DSP - Chapter 06",
    "chapter": "06",
    "source": "matlab",
    "pythonCode": "import numpy as np\nfrom scipy import signal\n\n# Chapter 6 : Example 6.2\n# Parallel form conversion\n\n# Note: This example requires custom MATLAB functions (dir2par, parfiltr, par2dir)\n# Python equivalent uses residuez for partial fraction expansion\n\nb = np.array([1, -3, 11, -27, 18])\na = np.array([16, 12, 2, -4, -1])\n\n# Impulse sequence\ndef impseq(n0, n1, n2):\n    n = np.arange(n1, n2 + 1)\n    return (n == n0).astype(float)\n\ndelta = impseq(0, 0, 7)\nprint(f\"Impulse delta = {delta}\")\n\n# Direct form filter\nhdir = signal.lfilter(b, a, delta)\nprint(f\"\\nDirect form output hdir = {hdir}\")\n\n# Parallel form using partial fraction expansion\nR, p, C = signal.residuez(b, a)\nprint(f\"\\nResidues R = {R}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Direct terms C = {C}\")\n\n# For parallel form implementation, we sum contributions from each pole\n# hpar[n] = sum(R[i] * p[i]^n) + C[n] * delta[n]\nn = np.arange(len(delta))\nhpar = np.zeros(len(delta))\nfor i in range(len(R)):\n    hpar += R[i] * (p[i] ** n)\nif len(C) > 0:\n    hpar[:len(C)] += C\n\nprint(f\"\\nParallel form output hpar = {hpar}\")\n\n# Verify they're the same\nerror = np.max(np.abs(hdir - hpar))\nprint(f\"\\nMax error between direct and parallel forms: {error}\")\n",
    "matlabCode": "% Chapter 6 : Example 6.2\r\n\r\n%             Parallel form conversion\r\n\r\n%\r\n\r\nb = [1,-3,11,-27,18]; a = [16,12,2,-4,-1];\r\n\r\n[C,B,A] = dir2par(b,a)\r\n\r\nformat long; delta = impseq(0,0,7);\r\n\r\nhpar = parfiltr(C,B,A,delta)\r\n\r\nhdir = filter(b,a,delta)\r\n\r\n[b1,a1] = par2dir(C,B,A)",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter06",
      "dsp",
      "ex060200"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex060300",
    "title": "ex060300",
    "displayName": "Chapter 6 : Example 6.3\r",
    "description": "Chapter 6 : Example 6.3\r",
    "category": "DSP - Chapter 06",
    "chapter": "06",
    "source": "matlab",
    "pythonCode": "# Chapter 6 : Example 6.3\r\n\r\n# Mixed form conversion\r\n\r\n# C = []; B1 = [2,4;3,1]; A1 = [1,1,0.9;1,0.4,-0.4]\nB2 = [0.5,0.7;1.5,2.5;0.8,1]; A2 = [1,-1,0.8;1,0.5,0.5;1,0,-0.5]\n[b1,a1] = par2dir(C,B1,A1)\r\n\r\n[b2,a2] = par2dir(C,B2,A2)\r\n\r\nb = conv(b1,b2)\r\n\r\na = conv(a1,a2)\r\n\r\n[b0,Bc,Ac] = dir2cas(b,a)\r\n\r\n[C,Bp,Ap] = dir2par(b,a)",
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
  },
  {
    "id": "ex060600",
    "title": "ex060600",
    "displayName": "Chapter 6 : Example 6.6 Frequency Sampling Form\r",
    "description": "Chapter 6 : Example 6.6 Frequency Sampling Form\r",
    "category": "DSP - Chapter 06",
    "chapter": "06",
    "source": "matlab",
    "pythonCode": "# Chapter 6 : Example 6.6 Frequency Sampling Form\r\n\r\n# given h(n)\r\n\r\n# h = [1,2,3,2,1]/9\n[C,B,A] = dir2fs(h)\r\n\r\n\r\n\r\n",
    "matlabCode": "% Chapter 6 : Example 6.6 Frequency Sampling Form\r\n\r\n%                           given h(n)\r\n\r\n%\r\n\r\nh = [1,2,3,2,1]/9;\r\n\r\n[C,B,A] = dir2fs(h)\r\n\r\n\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter06",
      "dsp",
      "ex060600"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex060700",
    "title": "ex060700",
    "displayName": "Chapter 6: Example 6.7\r",
    "description": "Chapter 6: Example 6.7\r",
    "category": "DSP - Chapter 06",
    "chapter": "06",
    "source": "matlab",
    "pythonCode": "import numpy as np\n# Chapter 6: Example 6.7\r\n\r\n# Freq. Samp. Form: given frequency samples\r\n\r\n# M = 32; alpha = (M-1)/2; k = 0:M-1; wk = (2*np.pi/M)*k\nmagHk = [1,1,1,0.5,zeros(1,25),0.5,1,1]\nk1 = 0:15; k2 = 16:M-1\nangHk = [-alpha*(2*np.pi)/M*k1, alpha*(2*np.pi)/M*(M-k2)]\nH = magHk*np.exp(j*angHk)\nh = real(ifft(H,M))\n[C,B,A] = dir2fs(h)",
    "matlabCode": "% Chapter 6: Example 6.7\r\n\r\n%            Freq. Samp. Form: given frequency samples\r\n\r\n%\r\n\r\nM = 32; alpha = (M-1)/2; k = 0:M-1; wk = (2*pi/M)*k;\r\n\r\nmagHk = [1,1,1,0.5,zeros(1,25),0.5,1,1];\r\n\r\nk1 = 0:15; k2 = 16:M-1;\r\n\r\nangHk = [-alpha*(2*pi)/M*k1, alpha*(2*pi)/M*(M-k2)];\r\n\r\nH = magHk.*exp(j*angHk);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[C,B,A] = dir2fs(h)",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter06",
      "dsp",
      "ex060700"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  }
]

export default chapter06Programs
