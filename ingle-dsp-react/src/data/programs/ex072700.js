// Chapter 7 Example 7.27
// Chapter 7 Example 7.27

const ex072700 = {
  "id": "ex072700",
  "title": "ex072700",
  "displayName": "Chapter 7 Example 7.27",
  "description": "Chapter 7 Example 7.27",
  "category": "DSP - Chapter 07",
  "chapter": "07",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 7 Example 7.27\n# Chapter: 07\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Chapter 7 Example 7.27\r\n\r\n# Differentiator design using PM algorithm\r\n\r\n# f = [0 0.2 0.4 0.6 0.8 1];         # in w/np.pi unis\r\n\r\n# m = [1 1 2 2 3 3];                 # in sam/cycle (old version)\r\n\r\nm = [0,0.1,0.4,0.6,1.2,1.5];       # new Student Edition\r\n\r\nh = remez(25,f,m,'differentiator')\n[db,mag,pha,grd,w] = freqz_m(h,[1])\nfig = plt.figure(1)\n plt.subplot(1, 1, 1)\nplt.subplot(2, 1, 1)\n stemnp.arange([0, 25],h + 1); plt.title('Impulse Response')\n\r\n\r\nplt.xlabel('n')\n plt.ylabel('h(n)')\n plt.plt.axis([0,25,-0.6,0.6])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,25])\r\n\r\nsetnp.arange(gca,'YTickMode','manual','YTick',[-0.6, 0.6] + 0.2, 0.2)\nplt.subplot(2, 1, 2)\n plt.plt.plt.plot(w/(2*np.pi)\n,mag); plt.title('Magnitude Response')\nplt.xlabel('Normalized frequency f')\n plt.ylabel('|H|')\nset(gca,'XTickMode','manual','XTick',f/2)\r\n\r\nset(gca,'YTickMode','manual','YTick',m)\r\n\r\nplt.grid(True)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Chapter 7 Example 7.27\r\n\r\n%           Differentiator design using PM algorithm\r\n\r\n%\r\n\r\nf = [0 0.2 0.4 0.6 0.8 1];         % in w/pi unis\r\n\r\n%m = [1 1 2 2 3 3];                 % in sam/cycle (old version)\r\n\r\nm = [0,0.1,0.4,0.6,1.2,1.5];       % new Student Edition\r\n\r\nh = remez(25,f,m,'differentiator');\r\n\r\n[db,mag,pha,grd,w] = freqz_m(h,[1]);\r\n\r\nfigure(1); subplot(1,1,1)\r\n\r\nsubplot(2,1,1); stem([0:25],h); title('Impulse Response');\r\n\r\nxlabel('n'); ylabel('h(n)'); axis([0,25,-0.6,0.6])\r\n\r\nset(gca,'XTickMode','manual','XTick',[0,25])\r\n\r\nset(gca,'YTickMode','manual','YTick',[-0.6:0.2:0.6]);\r\n\r\nsubplot(2,1,2); plot(w/(2*pi),mag); title('Magnitude Response')\r\n\r\nxlabel('Normalized frequency f'); ylabel('|H|')\r\n\r\nset(gca,'XTickMode','manual','XTick',f/2)\r\n\r\nset(gca,'YTickMode','manual','YTick',m)\r\n\r\ngrid",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter07",
    "dsp",
    "ex072700"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex072700;
