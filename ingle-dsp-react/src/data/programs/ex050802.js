// Chapter 05: Example 05.08
// Chapter 05: Example 05.08

const ex050802 = {
  "id": "ex050802",
  "title": "ex050802",
  "displayName": "Chapter 05: Example 05.08",
  "description": "Chapter 05: Example 05.08",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 05.08\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 05.08\r\n\r\n# High density vs HiRes Spectrum\r\n\r\n# # signal x(n)\r\n\r\nplt.subplot(1, 1, 1)\n\r\n\r\nn = np.arange(0, 100); x = np.cos(0.48*np.pi*n)+np.cos(0.52*np.pi*n)\n# # Spectrum based on the first 10 samples of x(n)\r\n\r\nn1 = np.arange(0, 10); y1 = xnp.arange(1, 10 + 1, 1)\nplt.subplot(2, 3, 1)\n plt.plt.stem(n1,y1)\nplt.title('x(n), 0 <= n <= 9')\nplt.xlabel('n')\n\r\n\r\nplt.plt.axis([0,10,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nY1 = fft(y1); magY1 = np.abs(Y1np.arange(1, 6 + 1, 1))\nk1 = 0:1:5; w1 = 2*np.pi/10*k1\nplt.subplot(2, 3, 4)\nplt.plt.stem(w1/np.pi,magY1);plt.title('Samples of DTFT Magnitude')\n\r\n\r\nplt.xlabel('frequency in np.pi units')\n plt.plt.axis([0,1,0,10]); set(gca,'fontsize',10)\r\n\r\n# # High density spectrum (100 samples) based on the first 10 samples of x(n)\r\n\r\nn2= np.arange(0, 100); y2 = [xnp.arange(1, 10 + 1, 1) np.zeros(1,90)]\nplt.subplot(2, 3, 2)\n plt.plt.stem(n2,y2); plt.title('x(n), 0 <= n <= 9 + 90 zeros')\n plt.xlabel('n')\nplt.plt.axis([0,100,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nY2 = fft(y2);magY2=np.abs(Y2np.arange(1, 51 + 1, 1))\nk2 = 0:1:50; w2 = 2*np.pi/100*k2\nplt.subplot(2, 3, 5)\n plt.plt.plt.plot(w2/np.pi,magY2)\n plt.title('DTFT Magnitude')\n plt.xlabel('frequency in np.pi units')\nplt.plt.axis([0,1,0,10]); set(gca,'fontsize',10)\r\n\r\n# # High resolution spectrum based on 100 samples of the signal x(n)\r\n\r\nplt.subplot(2, 3, 3)\n plt.plt.stem(n,x); plt.title('x(n), 0 <= n <= 99')\nplt.xlabel('n')\nplt.plt.axis([0,100,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nX = fft(x); magX=np.abs(Xnp.arange(1, 51 + 1, 1))\nk = 0:1:50; w = 2*np.pi/100*k\nplt.subplot(2, 3, 6)\nplt.plt.plt.plot(w/np.pi,magX)\nplt.title('DTFT Magnitude')\nplt.xlabel('frequency in np.pi units')\nplt.plt.axis([0,1,0,60]); set(gca,'fontsize',10)\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 05: Example 05.08\r\n\r\n%             High density vs HiRes Spectrum\r\n\r\n%\r\n\r\n% signal x(n)\r\n\r\nsubplot(1,1,1);\r\n\r\nn = [0:1:99]; x = cos(0.48*pi*n)+cos(0.52*pi*n);\r\n\r\n%\r\n\r\n% Spectrum based on the first 10 samples of x(n)\r\n\r\nn1 = [0:1:9]; y1 = x(1:1:10);\r\n\r\nsubplot(2,3,1); stem(n1,y1);\r\n\r\ntitle('x(n), 0 <= n <= 9');xlabel('n');\r\n\r\naxis([0,10,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nY1 = fft(y1); magY1 = abs(Y1(1:1:6));\r\n\r\nk1 = 0:1:5; w1 = 2*pi/10*k1;\r\n\r\nsubplot(2,3,4);stem(w1/pi,magY1);title('Samples of DTFT Magnitude');\r\n\r\nxlabel('frequency in pi units'); axis([0,1,0,10]); set(gca,'fontsize',10)\r\n\r\n%\r\n\r\n% High density spectrum (100 samples) based on the first 10 samples of x(n)\r\n\r\nn2= [0:1:99]; y2 = [x(1:1:10) zeros(1,90)];\r\n\r\nsubplot(2,3,2); stem(n2,y2); title('x(n), 0 <= n <= 9 + 90 zeros'); xlabel('n')\r\n\r\naxis([0,100,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nY2 = fft(y2);magY2=abs(Y2(1:1:51));\r\n\r\nk2 = 0:1:50; w2 = 2*pi/100*k2;\r\n\r\nsubplot(2,3,5); plot(w2/pi,magY2); title('DTFT Magnitude'); xlabel('frequency in pi units')\r\n\r\naxis([0,1,0,10]); set(gca,'fontsize',10)\r\n\r\n%\r\n\r\n% High resolution spectrum based on 100 samples of the signal x(n)\r\n\r\nsubplot(2,3,3); stem(n,x); title('x(n), 0 <= n <= 99');xlabel('n')\r\n\r\naxis([0,100,-2.5,2.5]); set(gca,'fontsize',10)\r\n\r\nX = fft(x); magX=abs(X(1:1:51));\r\n\r\nk = 0:1:50; w = 2*pi/100*k;\r\n\r\nsubplot(2,3,6);plot(w/pi,magX);title('DTFT Magnitude');xlabel('frequency in pi units')\r\n\r\naxis([0,1,0,60]); set(gca,'fontsize',10)\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex050802"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex050802;
