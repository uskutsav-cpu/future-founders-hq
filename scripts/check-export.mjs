import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('out');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(f=>f.isDirectory()?walk(path.join(d,f.name)):path.join(d,f.name));
const pages=walk(root).filter(f=>f.endsWith('.html'));
const failures=[];let links=0;
for(const file of pages){const html=fs.readFileSync(file,'utf8');const base='https://local.test/'+path.relative(root,file).replace(/index\.html$/,'');for(const match of html.matchAll(/<(?:a|img|link|script)\b[^>]*?(?:href|src)="([^"]+)"/g)){const raw=match[1].replaceAll('&amp;','&');if(!raw.startsWith('/')&&!raw.startsWith('#'))continue;const url=new URL(raw,base);let target=path.join(root,decodeURIComponent(url.pathname));if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');links++;if(!fs.existsSync(target))failures.push({page:path.relative(root,file),missing:url.pathname});else if(url.hash&&target.endsWith('.html')){const targetHtml=fs.readFileSync(target,'utf8');if(!targetHtml.includes('id="'+decodeURIComponent(url.hash.slice(1))+'"'))failures.push({page:path.relative(root,file),missingAnchor:url.hash})}}if(!html.includes('<h1'))failures.push({page:path.relative(root,file),error:'Missing h1'});}
console.log(JSON.stringify({pages:pages.length,localReferencesChecked:links,failures},null,2));if(failures.length)process.exit(1);
