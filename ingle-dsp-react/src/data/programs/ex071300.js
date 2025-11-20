// Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window
// Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window

const ex071300 = {
  "id": "ex071300",
  "title": "ex071300",
  "displayName": "Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window",
  "description": "Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window\r\n\r\n# M = 25; alpha = (M-1)/2\nn = 0:M-1\nhd = (2/np.pi)*((np.sin((np.pi/2)*(n-alpha))**2)/(n-alpha)); hd(alpha+1)=0\nw_han = (hanning(M))'\nh = hd * w_han\n[Hr,w,P,L] = Hr_Type3(h)\n# plots\r\n\r\nplt.subplot(1, 1, 1)\n\r\n\r\nplt.subplot(2, 2, 1)\n plt.plt.stem(n,hd); plt.title('Ideal Impulse Response')\nplt.plt.axis([-1 M -1.2 1.2]); plt.xlabel('n')\n plt.ylabel('hd(n)')\nplt.subplot(2, 2, 2)\n plt.plt.stem(n,w_han);plt.title('Hanning Window')\nplt.plt.axis([-1 M 0 1.2]); plt.xlabel('n')\n plt.ylabel('w(n)')\nplt.subplot(2, 2, 3)\n plt.plt.stem(n,h);plt.title('Actual Impulse Response')\nplt.plt.axis([-1 M -1.2 1.2]); plt.xlabel('n')\n plt.ylabel('h(n)')\nw = w'; Hr = Hr'\nw = [-np.flip(w), wnp.arange(2, 501 + 1)]; Hr = [-np.flip(Hr), Hrnp.arange(2, 501 + 1)]\nplt.subplot(2, 2, 4)\nplt.plt.plt.plot(w/np.pi,Hr)\n plt.title('Amplitude Response')\nplt.grid(True)\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Hr')\nplt.xlim(-1, 1)\nplt.ylim(-1.1, 1.1)\nset(gca,'XTickMode','manual','XTick',[-1,0,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-1,0,1])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 07: Example 7.13 Hilbert Transformer design - Hanning window\r\n\r\n%\r\n\r\nM = 25; alpha = (M-1)/2;\r\n\r\nn = 0:M-1;\r\n\r\nhd = (2/pi)*((sin((pi/2)*(n-alpha)).^2)./(n-alpha)); hd(alpha+1)=0;\r\n\r\nw_han = (hanning(M))';\r\n\r\nh = hd .* w_han;\r\n\r\n[Hr,w,P,L] = Hr_Type3(h);\r\n\r\n% plots\r\n\r\nsubplot(1,1,1);\r\n\r\nsubplot(2,2,1); stem(n,hd); title('Ideal Impulse Response')\r\n\r\naxis([-1 M -1.2 1.2]); xlabel('n'); ylabel('hd(n)')\r\n\r\nsubplot(2,2,2); stem(n,w_han);title('Hanning Window')\r\n\r\naxis([-1 M 0 1.2]); xlabel('n'); ylabel('w(n)')\r\n\r\nsubplot(2,2,3); stem(n,h);title('Actual Impulse Response')\r\n\r\naxis([-1 M -1.2 1.2]); xlabel('n'); ylabel('h(n)')\r\n\r\nw = w'; Hr = Hr';\r\n\r\nw = [-fliplr(w), w(2:501)]; Hr = [-fliplr(Hr), Hr(2:501)];\r\n\r\nsubplot(2,2,4);plot(w/pi,Hr); title('Amplitude Response');grid;\r\n\r\nxlabel('frequency in pi units'); ylabel('Hr')\r\n\r\naxis([-1 1 -1.1 1.1]); \r\n\r\nset(gca,'XTickMode','manual','XTick',[-1,0,1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-1,0,1])",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter07",
    "dsp",
    "ex071300"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex071300;
