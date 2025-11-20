// DSP Chapter 04 Programs
// Auto-generated from MATLAB files

const chapter04Programs = [
  {
    "id": "ex040100",
    "title": "ex040100",
    "displayName": "Chapter 4: Example 4.1:\r",
    "description": "Chapter 4: Example 4.1:\r",
    "category": "DSP - Chapter 04",
    "chapter": "04",
    "source": "matlab",
    "pythonCode": "# Chapter 4: Example 4.1:\n# X(z) using ztrans\n# x(n) = a^n*u(n)\n\n# Note: This example uses symbolic computation (ztrans) which is available in MATLAB's Symbolic Math Toolbox\n# Python equivalent would use sympy library for symbolic Z-transform\n\nimport sympy as sp\n\nn, z, a = sp.symbols('n z a')\nx = a**n\nX = sp.summation(x * z**(-n), (n, 0, sp.oo))\nprint(f\"X(z) = {sp.simplify(X)}\")\n",
    "matlabCode": "% Chapter 4: Example 4.1:\r\n\r\n%  X(z) using ztrans\r\n\r\n%   x(n) = a^nu(n)\r\n\r\nx = 'a^n';\r\n\r\nX = ztrans(x)",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter04",
      "dsp",
      "ex040100"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex040400",
    "title": "ex040400",
    "displayName": "Chapter 4: Example 4.4:\r",
    "description": "Chapter 4: Example 4.4:\r",
    "category": "DSP - Chapter 04",
    "chapter": "04",
    "source": "matlab",
    "pythonCode": "import numpy as np\nimport sympy as sp\n\n# Chapter 4: Example 4.4:\n# X(z) using ztrans\n# x(n) = (n-2)(0.5)^(n-2)cos[pi*(n-2)/3]u(n-2)\n\n# Note: This example uses symbolic computation\n# Using sympy for symbolic manipulation\n\nn, z = sp.symbols('n z')\nx = n * (sp.Rational(1, 2))**n * sp.cos(sp.pi*n/3)\n\n# For Z-transform of the shifted and scaled sequence\nprint(\"Note: Symbolic Z-transform computation\")\nprint(f\"x(n) = n*(0.5)^n*cos(pi*n/3)\")\nprint(\"This requires symbolic computation tools\")\n",
    "matlabCode": "% Chapter 4: Example 4.4:\r\n\r\n%  X(z) using ztrans\r\n\r\n%   x(n) = (n-2)(0.5)^(n-2)cos[pi*(n-2)/3]u(n-2)\r\n\r\nx = 'n*((0.5)^n)*cos(pi*n/3)';\r\n\r\nX = ztrans(x);\r\n\r\n[nX,dX] = numden(X);\r\n\r\nexpand(nX), expand(dX);\r\n\r\ndX = symmul(dX,'z^2'); expand(dX)\r\n\r\n",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter04",
      "dsp",
      "ex040400"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex040800",
    "title": "ex040800",
    "displayName": "Chapter 4: Example 4.8:\r",
    "description": "Chapter 4: Example 4.8:\r",
    "category": "DSP - Chapter 04",
    "chapter": "04",
    "source": "matlab",
    "pythonCode": "import numpy as np\nfrom scipy.signal import residuez\n\n# Chapter 4: Example 4.8:\n# Check of residues in Example 4.7\n\nb = np.array([0, 1])\na = np.array([3, -4, 1])\n\nR, p, C = residuez(b, a)\nprint(f\"Residues R = {R}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Direct terms C = {C}\")\n\n# Reconstruct b, a from residues\n# Note: scipy doesn't have invresiduz, but we can verify\nprint(f\"\\nOriginal b = {b}\")\nprint(f\"Original a = {a}\")\n",
    "matlabCode": "% Chapter 4: Example 4.8:\r\n\r\n%  Check of residues in Example 4.7\r\n\r\n%\r\n\r\nb = [0,1]; a = [3,-4,1];\r\n\r\n[R,p,C] = residuez(b,a)\r\n\r\n%\r\n\r\n[b,a] = residuez(R,p,C)",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter04",
      "dsp",
      "ex040800"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex040900",
    "title": "ex040900",
    "displayName": "Chapter 4: Example 4.8:\r",
    "description": "Chapter 4: Example 4.8:\r",
    "category": "DSP - Chapter 04",
    "chapter": "04",
    "source": "matlab",
    "pythonCode": "import numpy as np\nfrom scipy.signal import residuez\n\n# Chapter 4: Example 4.9:\n# Check of residue functions\n\nb = np.array([1])\na = np.poly([0.9, 0.9, -0.9])\nprint(f\"a = {a}\")\n\nR, p, c = residuez(b, a)\nprint(f\"\\nResidues R = {R}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Direct terms c = {c}\")\n",
    "matlabCode": "% Chapter 4: Example 4.8:\r\n\r\n%  Check of residue functions rf2pfez and pfe2rfz\r\n\r\n%\r\n\r\nb = 1; a = poly([0.9,0.9,-0.9])\r\n\r\n[R,p,c] = residuez(b,a)",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter04",
      "dsp",
      "ex040900"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex041000",
    "title": "ex041000",
    "displayName": "Chapter 4: Example 4.10:\r",
    "description": "Chapter 4: Example 4.10:\r",
    "category": "DSP - Chapter 04",
    "chapter": "04",
    "source": "matlab",
    "pythonCode": "import numpy as np\nfrom scipy.signal import residuez\n\n# Chapter 4: Example 4.10:\n# Check of residue functions\n\nb = np.array([1, 0.4*np.sqrt(2)])\na = np.array([1, -0.8*np.sqrt(2), 0.64])\n\nR, p, C = residuez(b, a)\nprint(f\"Residues R = {R}\")\nprint(f\"Poles p = {p}\")\nprint(f\"Direct terms C = {C}\")\n\nMp = np.abs(p)  # pole magnitudes\nAp = np.angle(p) / np.pi  # pole angles in pi units\n\nprint(f\"\\nPole magnitudes Mp = {Mp}\")\nprint(f\"Pole angles Ap (in pi units) = {Ap}\")\n",
    "matlabCode": "% Chapter 4: Example 4.10:\r\n\r\n%  Check of residue functions rf2pfez and pfe2rfz\r\n\r\n%\r\n\r\nb = [1,0.4*sqrt(2)]; a=[1,-0.8*sqrt(2),0.64];\r\n\r\n[R,p,C] = residuez(b,a)\r\n\r\nMp=abs(p')   % pole magnitudes\r\n\r\nAp=angle(p')/pi   % pole angles in pi units",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter04",
      "dsp",
      "ex041000"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  },
  {
    "id": "ex041100",
    "title": "ex041100",
    "displayName": "Chapter 4: Example 4.11:\r",
    "description": "Chapter 4: Example 4.11:\r",
    "category": "DSP - Chapter 04",
    "chapter": "04",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.signal import tf2zpk\nimport io\nimport base64\n\n# Chapter 4: Example 4.11:\n# zplane function - Pole-Zero plot\n\nb = np.array([1, 0])\na = np.array([1, -0.9])\n\n# Get zeros, poles, and gain\nz, p, k = tf2zpk(b, a)\n\n# Create pole-zero plot\nfig, ax = plt.subplots(figsize=(6, 6))\n\n# Plot unit circle\ntheta = np.linspace(0, 2*np.pi, 100)\nax.plot(np.cos(theta), np.sin(theta), 'k--', linewidth=0.5)\n\n# Plot zeros (o) and poles (x)\nif len(z) > 0:\n    ax.plot(np.real(z), np.imag(z), 'go', markersize=10, label='Zeros')\nif len(p) > 0:\n    ax.plot(np.real(p), np.imag(p), 'rx', markersize=10, markeredgewidth=2, label='Poles')\n\n# Add labels\nax.text(0.85, -0.1, '0.9')\nax.text(0.01, -0.1, '0')\n\nax.axhline(y=0, color='k', linewidth=0.5)\nax.axvline(x=0, color='k', linewidth=0.5)\nax.grid(True, alpha=0.3)\nax.set_xlabel('Real Part')\nax.set_ylabel('Imaginary Part')\nax.set_title('Pole-Zero Plot')\nax.legend()\nax.axis('equal')\nax.set_xlim([-1.5, 1.5])\nax.set_ylim([-1.5, 1.5])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% Chapter 4: Example 4.11:\r\n\r\n%  zplane function:\r\n\r\n%\r\n\r\nb = [1,0]; a = [1, -0.9];\r\n\r\nzplane(b,a); title('Pole-Zero Plot');\r\n\r\ntext(0.85,-0.1,'0.9');text(0.01,-0.1,'0');",
    "defaultParams": {},
    "params": [],
    "tags": [
      "chapter04",
      "dsp",
      "ex041100"
    ],
    "wikipediaLinks": [
      {
        "title": "Digital signal processing",
        "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
      }
    ]
  }
]

export default chapter04Programs
