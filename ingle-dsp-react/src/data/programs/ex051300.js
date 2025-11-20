// Chapter 05: Example 05.12: Circular shift example
// Chapter 05: Example 05.12: Circular shift example

const ex051300 = {
  "id": "ex051300",
  "title": "ex051300",
  "displayName": "Chapter 05: Example 05.12: Circular shift example",
  "description": "Chapter 05: Example 05.12: Circular shift example",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.12: Circular shift example\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.12: Circular shift example\r\n\r\n# plt.subplot(1, 1, 1)\n# a) plot x((n-6))15\r\n\r\nn = 0:10; x = 10*(0.8) ** n\ny = cirshftt(x,6,15)\nn = 0:14; x = [x, np.zeros(1,4)]\nplt.subplot(2, 1, 1)\n plt.plt.stem(n,x); plt.title('Original sequence')\nplt.xlabel('n')\n plt.ylabel('x(n)')\n plt.plt.axis([-1,15,-1,11])\r\n\r\nplt.subplot(2, 1, 2)\n plt.plt.stem(n,y)\nplt.title('Circularly shifted sequence, N=15')\nplt.xlabel('n')\n plt.ylabel('x((n-6) mod 15)')\n \r\n\r\nplt.plt.axis([-1,15,-1,11])\r\n\r\npause; print -deps2 me0512.eps\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 05: Example 05.12: Circular shift example\r\n\r\n%\r\n\r\nsubplot(1,1,1)\r\n\r\n% a) plot x((n-6))15\r\n\r\nn = 0:10; x = 10*(0.8) .^ n;\r\n\r\ny = cirshftt(x,6,15); \r\n\r\nn = 0:14; x = [x, zeros(1,4)];\r\n\r\nsubplot(2,1,1); stem(n,x); title('Original sequence')\r\n\r\nxlabel('n'); ylabel('x(n)'); axis([-1,15,-1,11])\r\n\r\nsubplot(2,1,2); stem(n,y); \r\n\r\ntitle('Circularly shifted sequence, N=15')\r\n\r\nxlabel('n'); ylabel('x((n-6) mod 15)'); \r\n\r\naxis([-1,15,-1,11])\r\n\r\npause; print -deps2 me0512.eps",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex051300"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex051300;
