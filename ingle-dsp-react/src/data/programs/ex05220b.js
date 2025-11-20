// Chapter 05: Example 5.22 Ploting of FFT execution times
// Chapter 05: Example 5.22 Ploting of FFT execution times

const ex05220b = {
  "id": "ex05220b",
  "title": "ex05220b",
  "displayName": "Chapter 05: Example 5.22 Ploting of FFT execution times",
  "description": "Chapter 05: Example 5.22 Ploting of FFT execution times",
  "category": "DSP - Chapter 05",
  "chapter": "05",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 05: Example 5.22 Ploting of FFT execution times\n# Chapter: 05\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 05: Example 5.22 Ploting of FFT execution times\r\n\r\n# load fft_time.mat\ntop = np.ceil(np.max(fft_time))\n# n = 1:2048\nsubplot\r\n\r\nclg\r\n\r\nplt.plt.plt.plot(n,fft_time,'.')\nplt.plt.axis([0,2500,0,50])\r\n\r\nplt.xlabel('N')\nplt.ylabel('Time in Sec.')\nplt.title('FFT execution times')\ntext(2100,top,'o(N*N)')\r\n\r\ntext(2100,top/2,'o(N*N/2)')\r\n\r\ntext(2100,top/3,'o(N*N/3)')\r\n\r\ntext(2100,top/4,'o(N*N/4)')\r\n\r\ntext(2100,1,'o(N*logN)')\r\n\r\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 05: Example 5.22 Ploting of FFT execution times\r\n\r\n%\r\n\r\nload fft_time.mat;\r\n\r\ntop = ceil(max(fft_time));\r\n\r\n%n = 1:2048;\r\n\r\nsubplot\r\n\r\nclg\r\n\r\nplot(n,fft_time,'.');axis([0,2500,0,50])\r\n\r\nxlabel('N');ylabel('Time in Sec.')\r\n\r\ntitle('FFT execution times')\r\n\r\ntext(2100,top,'o(N*N)')\r\n\r\ntext(2100,top/2,'o(N*N/2)')\r\n\r\ntext(2100,top/3,'o(N*N/3)')\r\n\r\ntext(2100,top/4,'o(N*N/4)')\r\n\r\ntext(2100,1,'o(N*logN)')\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter05",
    "dsp",
    "ex05220b"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex05220b;
