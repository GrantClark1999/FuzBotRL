#!/usr/bin/env bash
mkcert -install \
  -cert-file cert.pem \
  -key-file key.pem \
  localhost
mv cert.pem key.pem ./cert
