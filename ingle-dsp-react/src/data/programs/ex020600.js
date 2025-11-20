// Example 2.6
// Example 2.6

const ex020600 = {
  "id": "ex020600",
  "title": "ex020600",
  "displayName": "Example 2.6",
  "description": "Example 2.6",
  "category": "DSP - Chapter 02",
  "chapter": "02",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Example 2.6\n# Chapter: 02\n# Source: Ingle DSP MATLAB Programs\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# Example 2.6\n# x(n)=[3,11,7,0,-1,4,2]; nx = np.arange(-3, 4)\n# h(n)=[2,3,0,-5,2,1]; nh = np.arange(-1, 5)\n# y(n)=conv(x,h)\n\n# input x(n)\nx = np.array([3, 11, 7, 0, -1, 4, 2])\nnx = np.arange(-3, 4)\n\n# impulse response h(n)\nh = np.array([2, 3, 0, -5, 2, 1])\nnh = np.arange(-1, 5)\n\nfig = plt.figure(figsize=(12, 10))\n\n# plot x(k) and h(k)\nplt.subplot(2, 2, 1)\nmarkerline, stemlines, baseline = plt.plt.plt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')\nplt.plt.plt.stem(nh + 0.05, h, linefmt='r:', markerfmt='r^', basefmt='r-')\nplt.plt.plt.axis([-5, 5, -6, 12])\nplt.title('x(k) and h(k)')\nplt.xlabel('k')\nplt.text(-0.5, 11, 'solid: x    dashed: h')\n\n# plot x(k) and h(-k)\nplt.subplot(2, 2, 2)\nplt.plt.plt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')\nplt.plt.plt.stem(-np.flip(nh) + 0.05, np.flip(h), linefmt='r:', markerfmt='r^', basefmt='r-')\nplt.plt.plt.axis([-5, 5, -6, 12])\nplt.title('x(k) and h(-k)')\nplt.xlabel('k')\nplt.text(-0.5, -1, 'n=0')\nplt.text(-0.5, 11, 'solid: x    dashed: h')\n\n# plot x(k) and h(-1-k)\nplt.subplot(2, 2, 3)\nplt.plt.plt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')\nplt.plt.plt.stem(-np.flip(nh) + 0.05 - 1, np.flip(h), linefmt='r:', markerfmt='r^', basefmt='r-')\nplt.plt.plt.axis([-5, 5, -6, 12])\nplt.title('x(k) and h(-1-k)')\nplt.xlabel('k')\nplt.text(-1.5, -1, 'n=-1')\nplt.text(-0.5, 11, 'solid: x    dashed: h')\n\n# plot x(k) and h(2-k)\nplt.subplot(2, 2, 4)\nplt.plt.plt.stem(nx - 0.05, x, linefmt='b-', markerfmt='bo', basefmt='r-')\nplt.plt.plt.stem(-np.flip(nh) + 0.05 + 2, np.flip(h), linefmt='r:', markerfmt='r^', basefmt='r-')\nplt.plt.plt.axis([-5, 5, -6, 12])\nplt.title('x(k) and h(2-k)')\nplt.xlabel('k')\nplt.text(2 - 0.5, -1, 'n=2')\nplt.text(-0.5, 11, 'solid: x    dashed: h')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
  "matlabCode": "% Example 2.6\r\n\r\n%\r\n\r\n% x(n)=[3,11,7,0,-1,4,2]; nx = [-3:3]\r\n\r\n% h(n)=[2,3,0,-5,2,1]; nh = [-1:4]\r\n\r\n% y(n)=conv(x,h)\r\n\r\n% input x(n)\r\n\r\nx = [3,11,7,0,-1,4,2]; nx = [-3:3];\r\n\r\n% impulse response h(n)\r\n\r\nh = [2,3,0,-5,2,1]; nh = [-1:4];\r\n\r\nsubplot(1,1,1)\r\n\r\n% plot x(k) and h(k)\r\n\r\nsubplot(2,2,1); stem(nx-0.05,x); axis([-5,5,-6,12]);\r\n\r\nhold on; stem(nh+0.05,h,':')\r\n\r\ntitle('x(k) and h(k)');xlabel('k');\r\n\r\ntext(-0.5,11,'solid: x    dashed: h'); hold off\r\n\r\n% plot x(k) and h(-k)\r\n\r\nsubplot(2,2,2); stem(nx-0.05,x); axis([-5,5,-6,12]);\r\n\r\nhold on; stem(-fliplr(nh)+0.05,fliplr(h),':')\r\n\r\ntitle('x(k) and h(-k)');xlabel('k');\r\n\r\ntext(-0.5,-1,'n=0')\r\n\r\ntext(-0.5,11,'solid: x    dashed: h'); hold off\r\n\r\n% plot x(k) and h(-1-k)\r\n\r\nsubplot(2,2,3); stem(nx-0.05,x); axis([-5,5,-6,12]);\r\n\r\nhold on; stem(-fliplr(nh)+0.05-1,fliplr(h),':')\r\n\r\ntitle('x(k) and h(-1-k)');xlabel('k');\r\n\r\ntext(-1.5,-1,'n=-1')\r\n\r\ntext(-0.5,11,'solid: x    dashed: h'); hold off\r\n\r\n% plot x(k) and h(2-k)\r\n\r\nsubplot(2,2,4); stem(nx-0.05,x); axis([-5,5,-6,12]);\r\n\r\nhold on; stem(-fliplr(nh)+0.05+2,fliplr(h),':')\r\n\r\ntitle('x(k) and h(2-k)');xlabel('k');\r\n\r\ntext(2-0.5,-1,'n=2')\r\n\r\ntext(-0.5,11,'solid: x    dashed: h'); hold off\r\n\r\n%print -deps2 ex020600.eps",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter02",
    "dsp",
    "ex020600"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex020600;
