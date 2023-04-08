#! /usr/bin/env node

var filePath = __dirname
var path= require('path')

var fs=require('fs')
var nunjucks =require('nunjucks')
var tpl=fs.readFileSync(path.join(filePath,'gen.tpl')).toString()

var compiledData=nunjucks.renderString(tpl,{username:'liuyi'})

console.log(compiledData)
fs.writeFileSync(path.join(filePath,'gen.html'),compiledData)