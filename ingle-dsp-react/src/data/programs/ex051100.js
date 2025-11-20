// Chapter 05: Example 05.11: Circular shift graphical display
// Chapter 05: Example 05.11: Circular shift graphical display

const ex051100 = {
  "id": "ex051100",
  "title": "ex051100",
  "displayName": "Chapter 05: Example 05.11: Circular shift graphical display",
  "description": "Chapter 05: Example 05.11: Circular shift graphical display",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.11: Circular shift graphical display\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.11: Circular shift graphical display\r\n\r\n# plt.subplot(1, 1, 1)\n# a) plot x((n+4))11\r\n\r\nn = 0:10; x = 10*(0.8) ** n\nn1 = -11:21; x1 = [np.zeros(1,11), x, np.zeros(1,11)]\nplt.subplot(2, 2, 1)\n plt.plt.stem(n1,x1); plt.title('Original x(n)')\nplt.xlabel('n')\n plt.plt.axis([-6,17,-1,11])\r\n\r\nx2 = [x, x, x]\nplt.subplot(2, 2, 3)\n plt.plt.stem(n1,x2); plt.title('Periodic extention')\nplt.xlabel('n')\n plt.plt.axis([-6,17,-1,11])\r\n\r\nx3 = [x2np.arange(4+1, 33 + 1), xnp.arange(1, 4 + 1)]\nplt.subplot(2, 2, 2)\n plt.plt.stem(n1,x3); plt.title('Periodic shift')\nplt.xlabel('n')\n plt.plt.axis([-6,17,-1,11])\r\n\r\nx4 = x3 * [np.zeros(1,11), np.ones(1,11), np.zeros(1,11)]\nplt.subplot(2, 2, 4)\n plt.plt.stem(n1,x4); plt.title('Circular shift')\nplt.xlabel('n')\n plt.plt.axis([-6,17,-1,11])\r\n\r\npause\n# print -deps2 me0511a.eps\r\n\r\n# # b) plot x((n-3))15\r\n\r\nn = 0:10; x = [10*(0.8) ** n np.zeros(1,4)]\nn1 = -15:29; x1 = [np.zeros(1,15), x, np.zeros(1,15)]\nplt.subplot(2, 2, 1)\n plt.plt.stem(n1,x1); plt.title('Original x(n)')\nplt.xlabel('n')\n plt.plt.axis([-9,25,-1,11])\r\n\r\nx2 = [x, x, x]\nplt.subplot(2, 2, 3)\n plt.plt.stem(n1,x2); plt.title('Periodic extention')\nplt.xlabel('n')\n plt.plt.axis([-9,25,-1,11])\r\n\r\nx3 = [x2np.arange(43, 45 + 1),x2np.arange(1, 42 + 1)]\nplt.subplot(2, 2, 2)\n plt.plt.stem(n1,x3); plt.title('Periodic shift')\nplt.xlabel('n')\n plt.plt.axis([-9,25,-1,11])\r\n\r\nx4 = x3 * [np.zeros(1,15), np.ones(1,15), np.zeros(1,15)]\nplt.subplot(2, 2, 4)\n plt.plt.stem(n1,x4); plt.title('Circular shift')\nplt.xlabel('n')\n plt.plt.axis([-9,25,-1,11])\r\n\r\npause\n# print -deps2 me0511b.eps\r\n\r\n# \n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 05: Example 05.11: Circular shift graphical display\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% a) plot x((n+4))11\r\n\r\nn = 0:10; x = 10*(0.8) .^ n;\r\n\r\nn1 = -11:21; x1 = [zeros(1,11), x, zeros(1,11)];\r\n\r\nsubplot(2,2,1); stem(n1,x1); title('Original x(n)')\r\n\r\nxlabel('n'); axis([-6,17,-1,11])\r\n\r\nx2 = [x, x, x];\r\n\r\nsubplot(2,2,3); stem(n1,x2); title('Periodic extention')\r\n\r\nxlabel('n'); axis([-6,17,-1,11])\r\n\r\nx3 = [x2(4+1:33), x(1:4)];\r\n\r\nsubplot(2,2,2); stem(n1,x3); title('Periodic shift')\r\n\r\nxlabel('n'); axis([-6,17,-1,11])\r\n\r\nx4 = x3 .* [zeros(1,11), ones(1,11), zeros(1,11)];\r\n\r\nsubplot(2,2,4); stem(n1,x4); title('Circular shift')\r\n\r\nxlabel('n'); axis([-6,17,-1,11])\r\n\r\npause;\r\n\r\n%print -deps2 me0511a.eps\r\n\r\n%\r\n\r\n% b) plot x((n-3))15\r\n\r\nn = 0:10; x = [10*(0.8) .^ n zeros(1,4)];\r\n\r\nn1 = -15:29; x1 = [zeros(1,15), x, zeros(1,15)];\r\n\r\nsubplot(2,2,1); stem(n1,x1); title('Original x(n)')\r\n\r\nxlabel('n'); axis([-9,25,-1,11])\r\n\r\nx2 = [x, x, x];\r\n\r\nsubplot(2,2,3); stem(n1,x2); title('Periodic extention')\r\n\r\nxlabel('n'); axis([-9,25,-1,11])\r\n\r\nx3 = [x2(43:45),x2(1:42)];\r\n\r\nsubplot(2,2,2); stem(n1,x3); title('Periodic shift')\r\n\r\nxlabel('n'); axis([-9,25,-1,11])\r\n\r\nx4 = x3 .* [zeros(1,15), ones(1,15), zeros(1,15)];\r\n\r\nsubplot(2,2,4); stem(n1,x4); title('Circular shift')\r\n\r\nxlabel('n'); axis([-9,25,-1,11])\r\n\r\npause;\r\n\r\n%print -deps2 me0511b.eps\r\n\r\n%\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex051100"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex051100;
