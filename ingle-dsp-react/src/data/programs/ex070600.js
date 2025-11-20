// Chapter 7: Example 7.6 Type-3 Linear phase FIR filter
// Chapter 7: Example 7.6 Type-3 Linear phase FIR filter

const ex070600 = {
  "id": "ex070600",
  "title": "ex070600",
  "displayName": "Chapter 7: Example 7.6 Type-3 Linear phase FIR filter",
  "description": "Chapter 7: Example 7.6 Type-3 Linear phase FIR filter",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 7: Example 7.6 Type-3 Linear phase FIR filter\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.6 Type-3 Linear phase FIR filter\r\n\r\n# plt.subplot(1, 1, 1)\nh = [-4,1,-1,-2,5,0,-5,2,1,-1,4]\nM = len(h); n = 0:M-1\n[Hr,w,c,L] = Hr_Type3(h)\ncmax = np.max(c)+1; cmin = np.min(c)-1\nplt.subplot(2, 2, 1)\n plt.plt.stem(n,h); plt.xlim(-1, 2*L+1)\nplt.ylim(cmin, cmax)\nplt.xlabel('n')\n plt.ylabel('h(n)')\n plt.title('Impulse Response')\nplt.subplot(2, 2, 3)\n stemnp.arange(0, L,c + 1); plt.xlim(-1, 2*L+1)\nplt.ylim(cmin, cmax)\nplt.xlabel('n')\n plt.ylabel('c(n)')\n plt.title('c(n) coefficients')\nplt.subplot(2, 2, 2)\nplt.plt.plt.plot(w/np.pi,Hr)\nplt.grid(True)\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr')\nplt.title('Type-3 Amplitude Response')\nplt.subplot(2, 2, 4)\npzplotz(h,1)\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 7: Example 7.6 Type-3 Linear phase FIR filter\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\nh = [-4,1,-1,-2,5,0,-5,2,1,-1,4];\r\n\r\nM = length(h); n = 0:M-1;\r\n\r\n[Hr,w,c,L] = Hr_Type3(h);\r\n\r\ncmax = max(c)+1; cmin = min(c)-1;\r\n\r\nsubplot(2,2,1); stem(n,h); axis([-1 2*L+1 cmin cmax])\r\n\r\nxlabel('n'); ylabel('h(n)'); title('Impulse Response')\r\n\r\nsubplot(2,2,3); stem(0:L,c); axis([-1 2*L+1 cmin cmax])\r\n\r\nxlabel('n'); ylabel('c(n)'); title('c(n) coefficients')\r\n\r\nsubplot(2,2,2);plot(w/pi,Hr);grid\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr')\r\n\r\ntitle('Type-3 Amplitude Response')\r\n\r\nsubplot(2,2,4);pzplotz(h,1)\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter07",
    "dsp",
    "ex070600"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex070600;
