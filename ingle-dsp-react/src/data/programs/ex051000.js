// Chapter 05: Example 05.10: Circular even/odd property
// Chapter 05: Example 05.10: Circular even/odd property

const ex051000 = {
  "id": "ex051000",
  "title": "ex051000",
  "displayName": "Chapter 05: Example 05.10: Circular even/odd property",
  "description": "Chapter 05: Example 05.10: Circular even/odd property",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.10: Circular even/odd property\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.10: Circular even/odd property\r\n\r\n# plt.subplot(1, 1, 1)\n# a) plot xec(n) and xoc(n)\r\n\r\nn = 0:10; x = 10*(0.8) ** n\n[xec,xoc] = circevod(x)\nplt.subplot(2, 1, 1)\n plt.plt.stem(n,xec); plt.title('Circular-even component')\nplt.xlabel('n')\n plt.ylabel('xec(n)')\n plt.plt.axis([-0.5,10.5,-1,11])\r\n\r\nplt.subplot(2, 1, 2)\n plt.plt.stem(n,xoc); plt.title('Circular-odd component')\nplt.xlabel('n')\n plt.ylabel('xoc(n)')\n plt.plt.axis([-0.5,10.5,-4,4])\r\n\r\npause\nprint -deps2 me0510a.eps\r\n\r\n# # b) verify property\r\n\r\nX = dft(x,11); Xec = dft(xec,11); Xoc = dft(xoc,11)\nplt.subplot(2, 2, 1)\n plt.plt.stem(n,np.real(X)); plt.plt.axis([-0.5,10.5,-5,50])\r\n\r\nplt.title('Real{DFT[x(n)]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 2)\n plt.plt.stem(n,np.imag(X)); plt.plt.axis([-0.5,10.5,-20,20])\r\n\r\nplt.title('Imag{DFT[x(n)]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 3)\n plt.plt.stem(n,np.real(Xec)); plt.plt.axis([-0.5,10.5,-5,50])\r\n\r\nplt.title('DFT[xec(n)]')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 4)\n plt.plt.stem(n,np.imag(Xoc)); plt.plt.axis([-0.5,10.5,-20,20])\r\n\r\nplt.title('DFT[xoc(n)]')\n plt.xlabel('k')\n\r\n\r\nprint -deps2 me0510b.eps\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 05: Example 05.10: Circular even/odd property\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% a) plot xec(n) and xoc(n)\r\n\r\nn = 0:10; x = 10*(0.8) .^ n;\r\n\r\n[xec,xoc] = circevod(x);\r\n\r\nsubplot(2,1,1); stem(n,xec); title('Circular-even component')\r\n\r\nxlabel('n'); ylabel('xec(n)'); axis([-0.5,10.5,-1,11])\r\n\r\nsubplot(2,1,2); stem(n,xoc); title('Circular-odd component')\r\n\r\nxlabel('n'); ylabel('xoc(n)'); axis([-0.5,10.5,-4,4])\r\n\r\npause;\r\n\r\nprint -deps2 me0510a.eps\r\n\r\n%\r\n\r\n% b) verify property\r\n\r\nX = dft(x,11); Xec = dft(xec,11); Xoc = dft(xoc,11);\r\n\r\nsubplot(2,2,1); stem(n,real(X)); axis([-0.5,10.5,-5,50])\r\n\r\ntitle('Real{DFT[x(n)]}'); xlabel('k');\r\n\r\nsubplot(2,2,2); stem(n,imag(X)); axis([-0.5,10.5,-20,20])\r\n\r\ntitle('Imag{DFT[x(n)]}'); xlabel('k');\r\n\r\nsubplot(2,2,3); stem(n,real(Xec)); axis([-0.5,10.5,-5,50])\r\n\r\ntitle('DFT[xec(n)]'); xlabel('k');\r\n\r\nsubplot(2,2,4); stem(n,imag(Xoc)); axis([-0.5,10.5,-20,20])\r\n\r\ntitle('DFT[xoc(n)]'); xlabel('k');\r\n\r\nprint -deps2 me0510b.eps\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex051000"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex051000;
