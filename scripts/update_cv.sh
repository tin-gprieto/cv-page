#!/bin/bash

pnpm run build
rendercv render config/Martín_González_Prieto_CV.yaml
mv config/rendercv_output/Martín_González_Prieto_CV.pdf public/pdf/Martín_González_Prieto_CV.pdf
rendercv render config/Martín_González_Prieto_CV_EN.yaml
mv config/rendercv_output/Martín_González_Prieto_CV.pdf public/pdf/Martín_González_Prieto_CV_EN.pdf
rm -rf config/rendercv_output