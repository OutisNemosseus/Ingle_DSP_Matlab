// Chapter 05: Example 05.09: Circular symmetry property
// Chapter 05: Example 05.09: Circular symmetry property

const ex050900 = {
  "id": "ex050900",
  "title": "ex050900",
  "displayName": "Chapter 05: Example 05.09: Circular symmetry property",
  "description": "Chapter 05: Example 05.09: Circular symmetry property",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.09: Circular symmetry property\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.09: Circular symmetry property\r\n\r\n# plt.subplot(1, 1, 1)\n# a) plot x((-n))N\r\n\r\nn = 0:10; x = 10*(0.8) ** n\ny = x(mod(-n,11)+1)\nplt.subplot(2, 1, 1)\n plt.plt.stem(n,x); plt.title('Original sequence')\nplt.xlabel('n')\n plt.ylabel('x(n)')\n plt.plt.axis([-0.5,10.5,-1,11])\r\n\r\nplt.subplot(2, 1, 2)\n plt.plt.stem(n,y); plt.title('Circularly folded sequence')\nplt.xlabel('n')\n plt.ylabel('x(-n mod 11)')\n plt.plt.axis([-0.5,10.5,-1,11])\r\n\r\npause\n# print -deps2 me0509a.eps\r\n\r\n# # b) verify property\r\n\r\nX = dft(x,11); Y = dft(y,11)\nplt.subplot(2, 2, 1)\n plt.plt.stem(n,np.real(X)); plt.plt.axis([-0.5,10.5,-5,50])\r\n\r\nplt.title('Real{DFT[x(n)]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 2)\n plt.plt.stem(n,np.imag(X)); plt.plt.axis([-0.5,10.5,-20,20])\r\n\r\nplt.title('Imag{DFT[x(n)]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 3)\n plt.plt.stem(n,np.real(Y)); plt.plt.axis([-0.5,10.5,-5,50])\r\n\r\nplt.title('Real{DFT[x((-n))11]}')\n plt.xlabel('k')\n\r\n\r\nplt.subplot(2, 2, 4)\n plt.plt.stem(n,np.imag(Y)); plt.plt.axis([-0.5,10.5,-20,20])\r\n\r\nplt.title('Imag{DFT[x((-n))11]}')\n plt.xlabel('k')\n\r\n\r\n# print -deps2 me0509b.eps\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 05: Example 05.09: Circular symmetry property\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% a) plot x((-n))N\r\n\r\nn = 0:10; x = 10*(0.8) .^ n;\r\n\r\ny = x(mod(-n,11)+1);\r\n\r\nsubplot(2,1,1); stem(n,x); title('Original sequence')\r\n\r\nxlabel('n'); ylabel('x(n)'); axis([-0.5,10.5,-1,11])\r\n\r\nsubplot(2,1,2); stem(n,y); title('Circularly folded sequence')\r\n\r\nxlabel('n'); ylabel('x(-n mod 11)'); axis([-0.5,10.5,-1,11])\r\n\r\npause;\r\n\r\n%print -deps2 me0509a.eps\r\n\r\n%\r\n\r\n% b) verify property\r\n\r\nX = dft(x,11); Y = dft(y,11);\r\n\r\nsubplot(2,2,1); stem(n,real(X)); axis([-0.5,10.5,-5,50])\r\n\r\ntitle('Real{DFT[x(n)]}'); xlabel('k');\r\n\r\nsubplot(2,2,2); stem(n,imag(X)); axis([-0.5,10.5,-20,20])\r\n\r\ntitle('Imag{DFT[x(n)]}'); xlabel('k');\r\n\r\nsubplot(2,2,3); stem(n,real(Y)); axis([-0.5,10.5,-5,50])\r\n\r\ntitle('Real{DFT[x((-n))11]}'); xlabel('k');\r\n\r\nsubplot(2,2,4); stem(n,imag(Y)); axis([-0.5,10.5,-20,20])\r\n\r\ntitle('Imag{DFT[x((-n))11]}'); xlabel('k');\r\n\r\n%print -deps2 me0509b.eps\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex050900"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex050900;
