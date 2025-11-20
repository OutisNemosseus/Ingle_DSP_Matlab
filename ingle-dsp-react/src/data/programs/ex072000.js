// Chapter 7: Example 7.20
// Chapter 7: Example 7.20

const ex072000 = {
  "id": "ex072000",
  "title": "ex072000",
  "displayName": "Chapter 7: Example 7.20",
  "description": "Chapter 7: Example 7.20",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 7: Example 7.20\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7: Example 7.20\r\n\r\n# Freq. Samp. Tech.: Hilbert Transformer\r\n\r\n# M = 51; alpha = (M-1)/2; Dw = 2*np.pi/M\nl = 0:M-1; wl = Dw*l\nk1 = 0:np.floor((M-1)/2); k2 = np.floor((M-1)/2)+1:M-1\nHrs = [0,-1j*np.ones(1,(M-3)/2),-0.39j,0.39j,1j*np.ones(1,(M-3)/2)]\nangH = [-alpha*Dw*k1, alpha*Dw*(M-k2)]\nH = Hrs*np.exp(1j*angH)\nh = np.real(ifft(H,M))\n[Hr,ww,a,P]=Hr_Type3(h)\n# # plots\r\n\r\nplt.subplot(1, 1, 1)\nplt.subplot(2, 1, 1)\n k = 1:(M+1)/2\nplt.plt.plt.plot(ww/np.pi,-Hr,wl(k)np.pi,np.abs(H(k)),'o')\nplt.title('Hilbert Transformer, frequency sampling design, M = 51')\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.ylabel('Amplitude response')\nsetnp.arange(gca,'XTickMode','manual','XTick',[0, 1] + 0.2, 0.2)\r\n\r\nset(gca,'YTickMode','manual','YTick',[0;0.39;1]);plt.grid(True)\nplt.subplot(2, 1, 2)\n plt.plt.stem(l,h); plt.plt.axis([-1,M,-1,1])\nplt.title('Impulse response')\n plt.xlabel('n')\n plt.ylabel('h(n)')\n\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;alpha;M-1])\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 7: Example 7.20\r\n\r\n%            Freq. Samp. Tech.: Hilbert Transformer\r\n\r\n%\r\n\r\nM = 51; alpha = (M-1)/2; Dw = 2*pi/M;\r\n\r\nl = 0:M-1; wl = Dw*l;\r\n\r\nk1 = 0:floor((M-1)/2); k2 = floor((M-1)/2)+1:M-1;\r\n\r\nHrs = [0,-j*ones(1,(M-3)/2),-0.39j,0.39j,j*ones(1,(M-3)/2)];\r\n\r\nangH = [-alpha*Dw*k1, alpha*Dw*(M-k2)];\r\n\r\nH = Hrs.*exp(j*angH);\r\n\r\nh = real(ifft(H,M));\r\n\r\n[Hr,ww,a,P]=Hr_Type3(h);\r\n\r\n%\r\n\r\n% plots\r\n\r\nsubplot(1,1,1)\r\n\r\nsubplot(2,1,1); k = 1:(M+1)/2;\r\n\r\nplot(ww/pi,-Hr,wl(k)/pi,abs(H(k)),'o');\r\n\r\ntitle('Hilbert Transformer, frequency sampling design : M = 51')\r\n\r\nxlabel('frequency in pi units'); ylabel('Amplitude response')\r\n\r\nset(gca,'XTickMode','manual','XTick',[0:0.2:1])\r\n\r\nset(gca,'YTickMode','manual','YTick',[0;0.39;1]);grid\r\n\r\nsubplot(2,1,2); stem(l,h); axis([-1,M,-1,1]);\r\n\r\ntitle('Impulse response'); xlabel('n'); ylabel('h(n)');\r\n\r\nset(gca,'XTickMode','manual','XTick',[0;alpha;M-1])\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter07",
    "dsp",
    "ex072000"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex072000;
