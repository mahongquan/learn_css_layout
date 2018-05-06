# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
import time
import os
import re
import codecs
imports=[]
routes=[]
dic={}
dic[";div className"]=";div class"
pattern = re.compile(r"""   (//[^\r\n]*) # match a single line comment
                            | (/\*.*?\*/)      # match a multi line comment
                            | (;div\ className) #identifier
                        """
                           , re.X | re.S)

def mylistdir(p,f):
    a=os.listdir(p)
    fs=myfind(a,f)
    return(fs)
def myfind(l,p):
    lr=[];
    #print p
    p1=p.replace(".",r"\.")
    p2=p1.replace("*",".*")
    p2=p2+"$"
    p2="^"+p2
    for a in l:
        #print a
        if  re.search(p2,a,re.IGNORECASE)==None :
           pass
           #print "pass"
        else:
           lr.append(a)
       #print "append"
    return lr
def change(f):
    content=codecs.open(f,"r","utf-8").read()
    outstr=translateStr(content)
    file=codecs.open(f,"w","utf-8")
    file.write(outstr)
    file.close()
def main():
    fs=mylistdir(".","*.js")
    for f in fs:
        change(f)
def translateValue(old):
    print("translateValue======")
    print(old)
    new=dic.get(old)
    if new!=None:
        return new
    return old
def func(match):
    if match.group(1) or match.group(2):
        return match.group()
    if match.group(3):
        print(match)
        return  translateValue(match.group())#
        #raw_input()
    else:
        print("else")
        return match.group()
def translateStr(source):
  return re.sub(pattern,func,source)
if __name__=="__main__":
  main()
  #teste()