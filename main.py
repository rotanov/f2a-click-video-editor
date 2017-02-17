#!/usr/bin/python

from http.server import *
import socket
import sys
import os

HOST = 'localhost'
port = 4567

Handler = SimpleHTTPRequestHandler

def run(server_class=HTTPServer, handler_class=Handler):
    server_address = (HOST, port)
    httpd = server_class(server_address, handler_class)
    httpd.serve_forever()

def main():
  run()
  print(len(sys.argv))
  print(sys.argv[0])
  print(__file__)
  print(os.path.dirname(os.path.realpath(__file__)))

main()
