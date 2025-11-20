// Chapter 8: Example 8.22
// Chapter 8: Example 8.22

const ex082200 = {
  "id": "ex082200",
  "title": "ex082200",
  "displayName": "Chapter 8: Example 8.22",
  "description": "Chapter 8: Example 8.22",
  "category": "DSP - Chapter 08",
  "chapter": "08",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 8: Example 8.22\n# Chapter: 08\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n# Chapter 8: Example 8.22\r\n\r\n# Butterworth Lowpass Filter Design:\r\n\r\n# Use of the CHEBY1 function\r\n\r\n# # Digital Filter Specifications:\r\n\r\nwp = 0.2*np.pi;                         # digital Passband freq in Hz\r\n\r\nws = 0.3*np.pi;                         # digital Stopband freq in Hz\r\n\r\nRp = 1;                              # Passband ripple in dB\r\n\r\nAs = 15;                             # Stopband attenuation in dB\r\n\r\n\r\n\r\n# Analog Prototype Specifications:\r\n\r\nT = 1;                               # Set T=1\r\n\r\nOmegaP = (2/T)*np.tan(wp/2);            # Prewarp Prototype Passband freq\r\n\r\nOmegaS = (2/T)*np.tan(ws/2);            # Prewarp Prototype Stopband freq\r\n\r\nep = np.sqrt(10**(Rp/10)-1);             # Passband Ripple parameter\r\n\r\nRipple = np.sqrt(1/(1+ep*ep));          # Passband Ripple\r\n\r\nAttn = 1/(10**(As/20));               # Stopband Attenuation\r\n\r\n\r\n\r\n# Analog Prototype Order Calculation:\r\n\r\nep = np.sqrt(10**(Rp/10)-1);             # Passband Ripple Factor\r\n\r\nA = 10**(As/20);                      # Stopband Attenuation Factor\r\n\r\nOmegaC = OmegaP;                     # Analog Prototype Cutoff freq\r\n\r\nOmegaR = OmegaS/OmegaP;              # Analog Prototype Transition Ratio\r\n\r\ng = np.sqrt(A*A-1)/ep;                  # Analog Prototype Intermediate cal.\r\n\r\nN = np.ceil(np.log10(g+np.sqrt(g*g-1))/np.log10(OmegaR+np.sqrt(OmegaR*OmegaR-1)))\nfprintf('\\\n*** Chebyshev-1 Filter Order = # 2.0f \\\n',N)\r\n\r\n# # *** Chebyshev-1 Filter Order =  4 \r\n\r\n\r\n\r\n# Digital Chebyshev-I Filter Design:\r\n\r\nwn = wp/np.pi;                          # Digital Passband freq in np.pi units\r\n\r\n[b,a]=cheby1(N,Rp,wn)\n[b0,B,A] = dir2cas(b,a)\r\n\r\n# # b0 = 0.0018\r\n\r\n# # B = 1.0000    2.0000    1.0000\r\n\r\n# # 1.0000    2.0000    1.0000\r\n\r\n# # A = 1.0000   -1.4996    0.8482\r\n\r\n# # 1.0000   -1.5548    0.6493\r\n\r\n\r\n\r\n",
  "matlabCode": "% Chapter 8: Example 8.22\r\n\r\n%            Butterworth Lowpass Filter Design:\r\n\r\n%                Use of the CHEBY1 function\r\n\r\n%\r\n\r\n% Digital Filter Specifications:\r\n\r\nwp = 0.2*pi;                         %digital Passband freq in Hz\r\n\r\nws = 0.3*pi;                         %digital Stopband freq in Hz\r\n\r\nRp = 1;                              %Passband ripple in dB\r\n\r\nAs = 15;                             %Stopband attenuation in dB\r\n\r\n\r\n\r\n% Analog Prototype Specifications:\r\n\r\nT = 1;                               %Set T=1\r\n\r\nOmegaP = (2/T)*tan(wp/2);            %Prewarp Prototype Passband freq\r\n\r\nOmegaS = (2/T)*tan(ws/2);            %Prewarp Prototype Stopband freq\r\n\r\nep = sqrt(10^(Rp/10)-1);             % Passband Ripple parameter\r\n\r\nRipple = sqrt(1/(1+ep*ep));          % Passband Ripple\r\n\r\nAttn = 1/(10^(As/20));               % Stopband Attenuation\r\n\r\n\r\n\r\n% Analog Prototype Order Calculation:\r\n\r\nep = sqrt(10^(Rp/10)-1);             %Passband Ripple Factor\r\n\r\nA = 10^(As/20);                      %Stopband Attenuation Factor\r\n\r\nOmegaC = OmegaP;                     %Analog Prototype Cutoff freq\r\n\r\nOmegaR = OmegaS/OmegaP;              %Analog Prototype Transition Ratio\r\n\r\ng = sqrt(A*A-1)/ep;                  %Analog Prototype Intermediate cal.\r\n\r\nN = ceil(log10(g+sqrt(g*g-1))/log10(OmegaR+sqrt(OmegaR*OmegaR-1)));\r\n\r\nfprintf('\\n*** Chebyshev-1 Filter Order = %2.0f \\n',N)\r\n\r\n%%*** Chebyshev-1 Filter Order =  4 \r\n\r\n\r\n\r\n% Digital Chebyshev-I Filter Design:\r\n\r\nwn = wp/pi;                          %Digital Passband freq in pi units\r\n\r\n[b,a]=cheby1(N,Rp,wn);\r\n\r\n[b0,B,A] = dir2cas(b,a)\r\n\r\n%%b0 = 0.0018\r\n\r\n%%B = 1.0000    2.0000    1.0000\r\n\r\n%%    1.0000    2.0000    1.0000\r\n\r\n%%A = 1.0000   -1.4996    0.8482\r\n\r\n%%    1.0000   -1.5548    0.6493\r\n\r\n\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter08",
    "dsp",
    "ex082200"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex082200;
