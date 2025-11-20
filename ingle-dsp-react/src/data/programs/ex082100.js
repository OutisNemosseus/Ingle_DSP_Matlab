// Chapter 8: Example 8.21
// Chapter 8: Example 8.21

const ex082100 = {
  "id": "ex082100",
  "title": "ex082100",
  "displayName": "Chapter 8: Example 8.21",
  "description": "Chapter 8: Example 8.21",
  "category": "DSP - Chapter 08",
  "chapter": "08",
  "source": "matlab",
  "pythonCode": "#!/usr/bin/env python3\n# Title: Chapter 8: Example 8.21\n# Chapter: 08\n# Source: Ingle DSP MATLAB Programs\n\nimport numpy as np\n# Chapter 8: Example 8.21\r\n\r\n# Butterworth Lowpass Filter Design:\r\n\r\n# Use of the BUTTER function\r\n\r\n# # Digital Filter Specifications:\r\n\r\nwp = 0.2*np.pi;                         # digital Passband freq in Hz\r\n\r\nws = 0.3*np.pi;                         # digital Stopband freq in Hz\r\n\r\nRp = 1;                              # Passband ripple in dB\r\n\r\nAs = 15;                             # Stopband attenuation in dB\r\n\r\n\r\n\r\n# Analog Prototype Specifications:\r\n\r\nT = 1;                               # Set T=1\r\n\r\nOmegaP = (2/T)*np.tan(wp/2);            # Prewarp Prototype Passband freq\r\n\r\nOmegaS = (2/T)*np.tan(ws/2);            # Prewarp Prototype Stopband freq\r\n\r\nep = np.sqrt(10**(Rp/10)-1);             # Passband Ripple parameter\r\n\r\nRipple = np.sqrt(1/(1+ep*ep));          # Passband Ripple\r\n\r\nAttn = 1/(10**(As/20));               # Stopband Attenuation\r\n\r\n\r\n\r\n# Analog Prototype Order Calculation:\r\n\r\nN =np.ceil((np.log10((10**(Rp/10)-1)/(10**(As/10)-1)))/(2*np.log10(OmegaP/OmegaS)))\nfprintf('\\\n*** Butterworth Filter Order = # 2.0f \\\n',N)\r\n\r\n# # *** Butterworth Filter Order =  6 \r\n\r\nOmegaC = OmegaP/((10**(Rp/10)-1)**(1/(2*N))); # Analog BW prototype cutoff\r\n\r\nwn = 2*atan((OmegaC*T)/2);            # Digital BW cutoff freq\r\n\r\n\r\n\r\n# Digital Butterworth Filter Design:\r\n\r\nwn = wn/np.pi;                           # Digital Butter cutoff in np.pi units\r\n\r\n[b,a]=butter(N,wn)\n[b0,B,A] = dir2cas(b,a)\r\n\r\n# # C = 5.7969e-004\r\n\r\n# # B = 1.0000    2.0297    1.0300\r\n\r\n# # 1.0000    1.9997    1.0000\r\n\r\n# # 1.0000    1.9706    0.9709\r\n\r\n# # A = 1.0000   -0.9459    0.2342\r\n\r\n# # 1.0000   -1.0541    0.3753\r\n\r\n# # 1.0000   -1.3143    0.7149\r\n\r\n",
  "matlabCode": "% Chapter 8: Example 8.21\r\n\r\n%            Butterworth Lowpass Filter Design:\r\n\r\n%                Use of the BUTTER function\r\n\r\n%\r\n\r\n% Digital Filter Specifications:\r\n\r\nwp = 0.2*pi;                         %digital Passband freq in Hz\r\n\r\nws = 0.3*pi;                         %digital Stopband freq in Hz\r\n\r\nRp = 1;                              %Passband ripple in dB\r\n\r\nAs = 15;                             %Stopband attenuation in dB\r\n\r\n\r\n\r\n% Analog Prototype Specifications:\r\n\r\nT = 1;                               %Set T=1\r\n\r\nOmegaP = (2/T)*tan(wp/2);            %Prewarp Prototype Passband freq\r\n\r\nOmegaS = (2/T)*tan(ws/2);            %Prewarp Prototype Stopband freq\r\n\r\nep = sqrt(10^(Rp/10)-1);             % Passband Ripple parameter\r\n\r\nRipple = sqrt(1/(1+ep*ep));          % Passband Ripple\r\n\r\nAttn = 1/(10^(As/20));               % Stopband Attenuation\r\n\r\n\r\n\r\n% Analog Prototype Order Calculation:\r\n\r\nN =ceil((log10((10^(Rp/10)-1)/(10^(As/10)-1)))/(2*log10(OmegaP/OmegaS)));\r\n\r\nfprintf('\\n*** Butterworth Filter Order = %2.0f \\n',N)\r\n\r\n%%*** Butterworth Filter Order =  6 \r\n\r\nOmegaC = OmegaP/((10^(Rp/10)-1)^(1/(2*N))); %Analog BW prototype cutoff\r\n\r\nwn = 2*atan((OmegaC*T)/2);            %Digital BW cutoff freq\r\n\r\n\r\n\r\n% Digital Butterworth Filter Design:\r\n\r\nwn = wn/pi;                           %Digital Butter cutoff in pi units\r\n\r\n[b,a]=butter(N,wn);\r\n\r\n[b0,B,A] = dir2cas(b,a)\r\n\r\n%%C = 5.7969e-004\r\n\r\n%%B = 1.0000    2.0297    1.0300\r\n\r\n%%    1.0000    1.9997    1.0000\r\n\r\n%%    1.0000    1.9706    0.9709\r\n\r\n%%A = 1.0000   -0.9459    0.2342\r\n\r\n%%    1.0000   -1.0541    0.3753\r\n\r\n%%    1.0000   -1.3143    0.7149\r\n\r\n",
  "defaultParams": {},
  "params": [],
  "tags": [
    "chapter08",
    "dsp",
    "ex082100"
  ],
  "wikipediaLinks": [
    {
      "title": "Digital signal processing",
      "url": "https://en.wikipedia.org/wiki/Digital_signal_processing"
    }
  ]
};

export default ex082100;
