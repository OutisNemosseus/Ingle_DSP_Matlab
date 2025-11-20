// Chapter 4: Example 4.11:
// Chapter 4: Example 4.11:

const ex041100 = {
  "id": "ex041100",
  "title": "ex041100",
  "displayName": "Chapter 4: Example 4.11:",
  "description": "Chapter 4: Example 4.11:",
  "category": "DSP - Chapter 04",
  "chapter": "04",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 4: Example 4.11:\n# Chapter: 04\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom scipy.signal import tf2zpk\nimport io\nimport base64\n\n# Chapter 4: Example 4.11:\n# zplane function - Pole-Zero plot\n\nb = np.array([1, 0])\na = np.array([1, -0.9])\n\n# Get zeros, poles, and gain\nz, p, k = tf2zpk(b, a)\n\n# Create pole-zero plot\nfig, ax = plt.subplots(figsize=(6, 6))\n\n# Plot unit circle\ntheta = np.linspace(0, 2*np.pi, 100)\nax.plt.plt.plot(np.cos(theta), np.sin(theta), 'k--', linewidth=0.5)\n\n# Plot zeros (o) and poles (x)\nif len(z) > 0:\n    ax.plt.plt.plot(np.real(z), np.imag(z), 'go', markersize=10, label='Zeros')\nif len(p) > 0:\n    ax.plt.plt.plot(np.real(p), np.imag(p), 'rx', markersize=10, markeredgewidth=2, label='Poles')\n\n# Add labels\nax.text(0.85, -0.1, '0.9')\nax.text(0.01, -0.1, '0')\n\nax.axhline(y=0, color='k', linewidth=0.5)\nax.axvline(x=0, color='k', linewidth=0.5)\nax.grid(True, alpha=0.3)\nax.set_xlabel('Real Part')\nax.set_ylabel('Imaginary Part')\nax.set_title('Pole-Zero Plot')\nax.legend()\nax.plt.plt.axis('equal')\nax.set_xlim([-1.5, 1.5])\nax.set_ylim([-1.5, 1.5])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
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
};

export default ex041100;
