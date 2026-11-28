import{y as h,f as u,z as x}from"./index-DDxhR5-9.js";function l(i){return String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function v(i,s,a="",n=!1){const t=n?"size: A4 landscape; margin: 0;":"size: A4 portrait; margin: 0;";return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8" />
<title>${l(i)}</title>
<style>
  @page { ${t} }
  * { box-sizing: border-box; }
  html, body {
    margin: 0;
    padding: 0;
    background: #fff;
    color: #1a2421;
    font-family: "PingFang SC", "Noto Sans SC", "Microsoft YaHei", "Songti SC", serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .ws-page {
    width: ${n?"297mm":"210mm"};
    margin: 0 auto;
    padding: ${n?"11mm 13mm":"12mm 14mm"};
  }
  .ws-header {
    text-align: center;
    margin-bottom: 5mm;
    padding-bottom: 3mm;
    border-bottom: 1.5px solid #2f5d4e;
  }
  .ws-title {
    margin: 0;
    font-size: 16pt;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: #162b24;
  }
  .ws-sub {
    margin: 2mm 0 0;
    font-size: 9.8pt;
    color: #4b5d56;
  }
  .ws-stu-bar {
    display: flex;
    justify-content: center;
    gap: 10mm;
    margin-top: 3mm;
    font-size: 10.5pt;
  }
  .ws-stu-line {
    display: inline-block;
    border-bottom: 1px solid #334155;
    min-width: 28mm;
    height: 1.1em;
    vertical-align: bottom;
  }
  .q-tail-nowrap { white-space: nowrap; }
  .q-choice-blank { display: inline-block; min-width: 12.5mm; text-align: center; white-space: nowrap; font-family: "Noto Serif SC", "Songti SC", "STSong", "SimSun", serif; }
  .q-fill-underline { display: inline-block; min-width: 16mm; border-bottom: 0.85pt solid #1e293b; vertical-align: baseline; height: 1em; margin: 0 1.5mm; }
  .q-fill-underline.fill-medium { min-width: 24mm; }
  .q-fill-underline.fill-long { min-width: 36mm; }
  .q-fill-underline.fill-poem { min-width: 52mm; }
  .math-tall-frac { display: inline-block; padding: 2px 1px; line-height: 1.9; vertical-align: middle; }
  .page-break { break-before: page; page-break-before: always; }
  ${a}
</style>
</head>
<body>${s}</body>
</html>`}function z(i){const s=i.days.slice(0,4).map(e=>{const o=e.questions.map((d,r)=>{const c=d.subjectId===3,m=h(d.stem,c,{blankTier:"short"}),p=(d.type==="single"||d.type==="multiple")&&Array.isArray(d.options)&&d.options.length>0?`<div class="sp-opts">${d.options.map((g,b)=>`<span>${String.fromCharCode(65+b)}. ${h(String(g).replace(/^[A-F][.、．\s]+/,""),c)}</span>`).join("")}</div>`:"",f=d.type==="short_answer"||d.type==="calculation"?'<div class="sp-work"></div>':"";return`<div class="sp-q">
            <div class="sp-q-stem"><strong>${r+1}.</strong> ${m}</div>
            ${p}
            ${f}
          </div>`}).join("");return`<section class="sp-cell">
        <div class="sp-cell-head">
          <strong>${l(e.dayLabel)}</strong>
          <span>${l(e.focusHint)}</span>
          <span class="sp-date">月 日 · 评定：☆☆☆☆☆</span>
        </div>
        <div class="sp-cell-body">${o||'<p class="sp-empty">本栏可由教师手写补充 1–2 道课堂延伸题</p>'}</div>
      </section>`}).join(""),a=`<div class="ws-page page-break">
          <div class="ws-header">
            <h1 class="ws-title">${l(i.title)} · 速查参考答案</h1>
            <p class="ws-sub">${l(i.volumeLabel)} · ${l(i.currentUnitTitle)}</p>
          </div>
          <div class="sp-ans-grid">
            ${i.days.slice(0,4).map(e=>`<div class="sp-ans-card">
                  <h3>${l(e.dayLabel)}</h3>
                  ${e.questions.map((o,d)=>`<div class="sp-ans-line"><b>${d+1}.</b> ${l(u(o.answer,{type:o.type,options:o.options})||"略")}</div>`).join("")}
                </div>`).join("")}
          </div>
        </div>`,n=`<div class="ws-page">
    <div class="ws-header">
      <h1 class="ws-title">${l(i.title)}</h1>
      <p class="ws-sub">${l(i.volumeLabel)} · 当前进度：${l(i.currentUnitTitle)} · 60% 已学防遗忘 + 40% 新知巩固</p>
      <div class="ws-stu-bar">
        <span>班级：<i class="ws-stu-line"></i></span>
        <span>姓名：<i class="ws-stu-line"></i></span>
        <span>周次：<i class="ws-stu-line" style="min-width:16mm"></i></span>
      </div>
    </div>
    <div class="sp-grid">${s}</div>
  </div>${a}`;return v(i.title,n,`
    .sp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4.5mm; }
    .sp-cell { border: 1.2px solid #2f5d4e; border-radius: 3mm; padding: 3.5mm 4mm; min-height: 112mm; display: flex; flex-direction: column; break-inside: avoid; }
    .sp-cell-head { display: flex; align-items: baseline; justify-content: space-between; gap: 2mm; padding-bottom: 2mm; margin-bottom: 2.5mm; border-bottom: 1px dashed #94a3b8; font-size: 9.5pt; }
    .sp-cell-head strong { font-size: 11.5pt; color: #1f3a30; }
    .sp-cell-head span { color: #52675f; font-size: 8.5pt; }
    .sp-date { white-space: nowrap; }
    .sp-cell-body { display: flex; flex-direction: column; gap: 3.5mm; font-size: 10pt; line-height: 1.55; flex: 1; }
    .sp-q-stem { word-break: break-word; }
    .sp-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 1mm 3mm; margin-top: 1.2mm; padding-left: 4mm; font-size: 9.5pt; }
    .sp-work { height: 11mm; border-bottom: 1px dotted #cbd5e1; margin-top: 1mm; }
    .sp-ans-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5mm; }
    .sp-ans-card { border: 1px solid #cbd5e1; border-radius: 2.5mm; padding: 3.5mm 4.5mm; }
    .sp-ans-card h3 { margin: 0 0 2mm; font-size: 11pt; color: #1f3a30; }
    .sp-ans-line { font-size: 10pt; line-height: 1.6; }
  `,!1)}function j(i){const s=(i.questions??[]).slice(0,2),a=e=>{const o=i.mode==="quiz"&&s.length>0?s.map((d,r)=>{const c=d.subjectId===3,m=(d.type==="single"||d.type==="multiple")&&Array.isArray(d.options)?`<div class="et-opts">${d.options.map((p,f)=>`<span>${String.fromCharCode(65+f)}. ${h(String(p).replace(/^[A-F][.、．\s]+/,""),c)}</span>`).join("")}</div>`:'<div class="et-ans-line"></div>';return`<div class="et-q">
                <div><b>${r+1}.</b> ${h(d.stem,c,{blankTier:"short"})}</div>
                ${m}
              </div>`}).join(""):`<div class="et-refl">
            <div class="et-refl-row"><span class="et-badge">3</span><div><strong>本节课我学会了哪几个要点？</strong><div class="et-line"></div><div class="et-line"></div></div></div>
            <div class="et-refl-row"><span class="et-badge">2</span><div><strong>我印象最深的例题或好词佳句：</strong><div class="et-line"></div></div></div>
            <div class="et-refl-row"><span class="et-badge">1</span><div><strong>我还有一点疑问的地方：</strong><div class="et-line"></div></div></div>
          </div>`;return`<article class="et-card">
      <div class="et-head">
        <div>
          <div class="et-title">${l(i.title)}</div>
          <div class="et-sub">${l(i.volumeLabel)}${i.topicPrompt?` · ${l(i.topicPrompt)}`:""}</div>
        </div>
        <span class="et-no">第 ${e} 联</span>
      </div>
      <div class="et-stu">姓名：<i class="et-stu-line"></i>&emsp;学号：<i class="et-stu-line sm"></i></div>
      <div class="et-body">${o}</div>
      <div class="et-foot">
        <span>自我掌握度打勾：</span>
        <span>[&ensp;] 完全掌握</span>
        <span>[&ensp;] 基本明白</span>
        <span>[&ensp;] 需再辅导</span>
      </div>
    </article>`},n=`<div class="ws-page et-sheet">
    ${[1,2,3,4].map(e=>a(e)).join("")}
  </div>`;return v(i.title,n,`
    .et-sheet { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 0; height: 292mm; }
    .et-card { border: 1px dashed #64748b; padding: 5mm 5.5mm; display: flex; flex-direction: column; justify-content: space-between; break-inside: avoid; }
    .et-head { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1.5px solid #2f5d4e; padding-bottom: 2mm; }
    .et-title { font-size: 12pt; font-weight: 800; color: #162b24; }
    .et-sub { font-size: 8.5pt; color: #52675f; margin-top: 0.8mm; }
    .et-no { font-size: 8pt; padding: 1px 6px; border-radius: 99px; border: 1px solid #94a3b8; color: #475569; white-space: nowrap; }
    .et-stu { font-size: 9.5pt; margin: 2.5mm 0 2mm; }
    .et-stu-line { display: inline-block; border-bottom: 1px solid #334155; width: 22mm; }
    .et-stu-line.sm { width: 12mm; }
    .et-body { flex: 1; font-size: 9.8pt; line-height: 1.55; display: flex; flex-direction: column; gap: 3mm; }
    .et-opts { display: grid; grid-template-columns: 1fr 1fr; gap: 1mm 3mm; margin-top: 1.5mm; padding-left: 3mm; font-size: 9.2pt; }
    .et-ans-line { height: 14mm; border-bottom: 1px dotted #94a3b8; }
    .et-refl { display: flex; flex-direction: column; gap: 4mm; }
    .et-refl-row { display: flex; gap: 2.5mm; align-items: flex-start; }
    .et-refl-row > div { flex: 1; }
    .et-badge { width: 5.5mm; height: 5.5mm; border-radius: 50%; border: 1.4px solid #2f5d4e; color: #2f5d4e; font-weight: 800; font-size: 9.5pt; display: inline-flex; align-items: center; justify-content: center; flex: none; margin-top: 0.5mm; }
    .et-line { height: 7.5mm; border-bottom: 1px solid #cbd5e1; }
    .et-foot { border-top: 1px dashed #cbd5e1; padding-top: 2mm; font-size: 8.5pt; color: #475569; display: flex; justify-content: space-between; }
  `,!1)}function y(i,s,a){const n=a?2:1,t=13,e=8,o=n*(t*5)+(n-1)*e+4,d=t*2+4,r=[];let c=0;for(let m=0;m<n;m+=1){const p=2+m*(t*5+e);r.push(`<rect x="${p}" y="2" width="${t*5}" height="${t*2}" fill="#fff" stroke="#1f3a30" stroke-width="1.3"/>`);for(let f=0;f<2;f+=1)for(let g=0;g<5;g+=1){const b=p+g*t,w=2+f*t;g>0&&r.push(`<line x1="${b}" y1="2" x2="${b}" y2="${2+t*2}" stroke="#64748b" stroke-width="0.7"/>`),f===1&&g===0&&r.push(`<line x1="${p}" y1="${w}" x2="${p+t*5}" y2="${w}" stroke="#64748b" stroke-width="0.7"/>`),c<i?r.push(`<circle cx="${b+t/2}" cy="${w+t/2}" r="4.3" fill="#2f5d4e"/>`):c<i+s&&r.push(`<circle cx="${b+t/2}" cy="${w+t/2}" r="4.3" fill="#fff" stroke="#b8643f" stroke-width="1.6"/>`),c+=1}}return`<svg width="${o}" height="${d}" viewBox="0 0 ${o} ${d}" xmlns="http://www.w3.org/2000/svg">${r.join("")}</svg>`}function $(i,s,a){return`<svg width="78" height="54" viewBox="0 0 78 54" xmlns="http://www.w3.org/2000/svg">
    <line x1="39" y1="22" x2="20" y2="36" stroke="#334155" stroke-width="1.3"/>
    <line x1="39" y1="22" x2="58" y2="36" stroke="#334155" stroke-width="1.3"/>
    <circle cx="39" cy="13" r="11" fill="#fff" stroke="#2f5d4e" stroke-width="1.5"/>
    <circle cx="18" cy="41" r="10.5" fill="#fff" stroke="#475569" stroke-width="1.3"/>
    <circle cx="60" cy="41" r="10.5" fill="#fff" stroke="#475569" stroke-width="1.3"/>
    <text x="39" y="17" text-anchor="middle" font-size="11" font-weight="700" fill="#1f3a30">${l(i)}</text>
    <text x="18" y="45" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1f3a30">${l(s)}</text>
    <text x="60" y="45" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1f3a30">${l(a)}</text>
  </svg>`}function S(i){const s=i.maxSum===20,a=i.problems.slice(0,8).map((e,o)=>{const d=e.mode==="add"?"":String(e.a),r=e.mode==="add"?String(e.a):String(e.b),c=e.mode==="add"?String(e.b):"",m=e.mode==="add"?`${e.a} + ${e.b} = <span class="tf-box"></span>`:`${e.a} - ${e.b} = <span class="tf-box"></span>`,p=y(e.mode==="add"?e.a:e.a-e.b,(e.mode==="add",e.b),s);return`<div class="tf-card">
        <div class="tf-idx">${o+1}</div>
        <div class="tf-top">
          <div class="tf-frame">${p}</div>
          <div class="tf-bond">${$(d,r,c)}</div>
        </div>
        <div class="tf-eq">${m}</div>
      </div>`}).join(""),n=`<div class="ws-page">
    <div class="ws-header">
      <h1 class="ws-title">${l(i.title)}</h1>
      <p class="ws-sub">${l(i.volumeLabel)} · 看十格阵、填分与合、写算式（实心圆表示第一部分，空心圆表示第二部分）</p>
      <div class="ws-stu-bar">
        <span>班级：<i class="ws-stu-line"></i></span>
        <span>姓名：<i class="ws-stu-line"></i></span>
        <span>用时：<i class="ws-stu-line" style="min-width:16mm"></i>分</span>
      </div>
    </div>
    <div class="tf-grid">${a}</div>
  </div>`;return v(i.title,n,`
    .tf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4.5mm; }
    .tf-card { position: relative; border: 1.2px solid #cbd5e1; border-radius: 3mm; padding: 4mm 4.5mm; break-inside: avoid; display: flex; flex-direction: column; gap: 3.5mm; }
    .tf-idx { position: absolute; top: 2.5mm; left: 3mm; font-size: 9pt; font-weight: 800; color: #2f5d4e; }
    .tf-top { display: flex; align-items: center; justify-content: space-between; gap: 2mm; padding-top: 2mm; }
    .tf-eq { text-align: center; font-size: 13.5pt; font-weight: 700; letter-spacing: 0.06em; padding-top: 1.5mm; border-top: 1px dashed #e2e8f0; }
    .tf-box { display: inline-block; width: 12mm; height: 7.5mm; border: 1.2px solid #334155; border-radius: 1.5mm; vertical-align: middle; margin-left: 1mm; }
  `,!1)}function T(i){const s=Math.max(1,Math.trunc(i.targetNumber)),a=i.grade<=1?["十位","个位"]:i.grade===2?["百位","十位","个位"]:["千位","百位","十位","个位"],n=s>=10?10:1,t=s>=100?100:10,e=`<div class="ws-page">
    <div class="ws-header">
      <h1 class="ws-title">${l(i.title)}</h1>
      <p class="ws-sub">${l(i.volumeLabel)} · 课前 3 分钟数感热身 · 今日聚焦数字：<strong>${s}</strong></p>
      <div class="ws-stu-bar">
        <span>班级：<i class="ws-stu-line"></i></span>
        <span>姓名：<i class="ws-stu-line"></i></span>
        <span>日期：<i class="ws-stu-line" style="min-width:20mm"></i></span>
      </div>
    </div>

    <div class="pv-hero">
      <span>今日之数</span>
      <strong>${s}</strong>
      <small>请用 6 种方式全面认识它</small>
    </div>

    <div class="pv-grid">
      <section class="pv-box">
        <h3>1. 画一画：位值小方块 / 计数器珠子</h3>
        <table class="pv-table">
          <tr>${a.map(d=>`<th>${d}</th>`).join("")}</tr>
          <tr>${a.map(()=>'<td class="pv-draw"></td>').join("")}</tr>
        </table>
      </section>

      <section class="pv-box">
        <h3>2. 读一读、写一写（文字与展开式）</h3>
        <div class="pv-line">读作：<i class="pv-ul"></i></div>
        <div class="pv-line">数的组成：<i class="pv-ul"></i></div>
        <div class="pv-line">展开式：${s} = <i class="pv-ul"></i></div>
      </section>

      <section class="pv-box">
        <h3>3. 找邻居：加减推演十字格</h3>
        <div class="pv-cross">
          <div></div><div class="pv-c-cell">少 ${n}：______</div><div></div>
          <div class="pv-c-cell">前一个：____</div><div class="pv-c-cell center">${s}</div><div class="pv-c-cell">后一个：____</div>
          <div></div><div class="pv-c-cell">多 ${n}：______</div><div></div>
        </div>
      </section>

      <section class="pv-box">
        <h3>4. 数轴定位（标出 ${s} 的大致位置）</h3>
        <div class="pv-axis">
          <div class="pv-axis-line"></div>
          <div class="pv-axis-ticks">
            <span>${Math.max(0,Math.floor(s/t)*t)}</span>
            <span>${Math.max(0,Math.floor(s/t)*t)+t/2}</span>
            <span>${Math.max(0,Math.floor(s/t)*t)+t}</span>
          </div>
        </div>
        <div class="pv-line" style="margin-top:4mm">奇偶性判断：[&ensp;] 单数（奇数）&emsp;&emsp;[&ensp;] 双数（偶数）</div>
      </section>

      <section class="pv-box">
        <h3>5. 变式算式（用不同算式凑出 ${s}）</h3>
        <div class="pv-line">加法：_________ + _________ = ${s}</div>
        <div class="pv-line">减法：_________ - _________ = ${s}</div>
        <div class="pv-line">巧算：_____________________ = ${s}</div>
      </section>

      <section class="pv-box">
        <h3>6. 生活中的 ${s}（编一道一句话应用题）</h3>
        <div class="pv-writing-line"></div>
        <div class="pv-writing-line"></div>
        <div class="pv-writing-line"></div>
      </section>
    </div>
  </div>`;return v(i.title,e,`
    .pv-hero { display: flex; align-items: center; justify-content: center; gap: 6mm; padding: 3mm 5mm; margin-bottom: 4.5mm; border: 1.5px solid #2f5d4e; border-radius: 3mm; background: #f8faf8; }
    .pv-hero strong { font-size: 24pt; color: #1f3a30; letter-spacing: 0.08em; }
    .pv-hero small { font-size: 9.5pt; color: #52675f; }
    .pv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4.5mm; }
    .pv-box { border: 1.2px solid #94a3b8; border-radius: 3mm; padding: 3.5mm 4.5mm; min-height: 60mm; break-inside: avoid; }
    .pv-box h3 { margin: 0 0 3mm; font-size: 10.5pt; color: #1f3a30; border-left: 3px solid #2f5d4e; padding-left: 2.5mm; }
    .pv-table { width: 100%; border-collapse: collapse; }
    .pv-table th, .pv-table td { border: 1px solid #64748b; text-align: center; font-size: 9.5pt; padding: 1.5mm; }
    .pv-table th { background: #f1f5f9; }
    .pv-draw { height: 34mm; }
    .pv-line { font-size: 10pt; line-height: 2.2; }
    .pv-ul { display: inline-block; border-bottom: 1px solid #334155; min-width: 44mm; }
    .pv-cross { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5mm; margin-top: 2mm; }
    .pv-c-cell { border: 1px solid #94a3b8; border-radius: 1.5mm; padding: 3mm 1.5mm; text-align: center; font-size: 9pt; }
    .pv-c-cell.center { background: #2f5d4e; color: #fff; font-weight: 800; font-size: 12pt; border-color: #2f5d4e; }
    .pv-axis { margin-top: 8mm; }
    .pv-axis-line { height: 2px; background: #1f3a30; position: relative; }
    .pv-axis-ticks { display: flex; justify-content: space-between; font-size: 9.5pt; margin-top: 2mm; font-weight: 700; }
    .pv-writing-line { height: 11mm; border-bottom: 1px dashed #94a3b8; }
  `,!1)}function H(i){const s=i.perPage===4?4:2,n=i.words.slice(0,s).map(o=>{const d=Array.from(o.word).slice(0,4).map(r=>x(s===4?9.5:12,r,!1)).join("");return`<article class="fr-card ${s===4?"is-compact":""}">
        <div class="fr-grid">
          <div class="fr-cell">
            <div class="fr-label">① 拼音与词语释义</div>
            <div class="fr-pinyin">${l(o.pinyin||"（请注音）")}</div>
            <div class="fr-line"></div>
            <div class="fr-line"></div>
          </div>
          <div class="fr-cell">
            <div class="fr-label">② 近义词 / 反义词 / 搭词</div>
            <div class="fr-sub-line">近义词：________________</div>
            <div class="fr-sub-line">反义词：________________</div>
          </div>
          <div class="fr-cell">
            <div class="fr-label">③ 我会用它造句</div>
            <div class="fr-line"></div>
            <div class="fr-line"></div>
          </div>
          <div class="fr-cell">
            <div class="fr-label">④ 易错字形提醒 / 情景小画</div>
            <div class="fr-sketch"></div>
          </div>
        </div>
        <div class="fr-center">
          <div class="fr-tian-row">${d}</div>
        </div>
      </article>`}).join(""),t=`<div class="ws-page">
    <div class="ws-header">
      <h1 class="ws-title">${l(i.title)}</h1>
      <p class="ws-sub">${l(i.volumeLabel)}${i.lessonTitle?` · ${l(i.lessonTitle)}`:""} · 四维吃透重点词语</p>
      <div class="ws-stu-bar">
        <span>班级：<i class="ws-stu-line"></i></span>
        <span>姓名：<i class="ws-stu-line"></i></span>
      </div>
    </div>
    <div class="fr-list ${s===4?"cols-2":""}">${n}</div>
  </div>`;return v(i.title,t,`
    .fr-list { display: flex; flex-direction: column; gap: 6mm; }
    .fr-list.cols-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4.5mm; }
    .fr-card { position: relative; border: 1.5px solid #2f5d4e; border-radius: 3mm; overflow: hidden; break-inside: avoid; }
    .fr-grid { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; min-height: 106mm; }
    .fr-card.is-compact .fr-grid { min-height: 104mm; }
    .fr-cell { border: 0.7px solid #cbd5e1; padding: 3.5mm 4.5mm; display: flex; flex-direction: column; gap: 2mm; }
    .fr-cell:nth-child(1), .fr-cell:nth-child(2) { padding-bottom: 10mm; }
    .fr-cell:nth-child(3), .fr-cell:nth-child(4) { padding-top: 10mm; }
    .fr-label { font-size: 9.5pt; font-weight: 800; color: #2f5d4e; }
    .fr-pinyin { font-size: 11pt; color: #475569; letter-spacing: 0.08em; }
    .fr-line { height: 9mm; border-bottom: 1px dashed #cbd5e1; }
    .fr-sub-line { font-size: 9.2pt; line-height: 2.2; color: #334155; }
    .fr-sketch { flex: 1; border: 1px dotted #cbd5e1; border-radius: 2mm; min-height: 24mm; }
    .fr-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #fff; border: 1.8px solid #2f5d4e; border-radius: 3mm; padding: 2mm 3mm; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
    .fr-tian-row { display: flex; align-items: center; gap: 1.5mm; }
  `,!1)}function A(i){let s;i.kind==="five_finger"?s=`<div class="sc-fingers">
      ${[{no:"大拇指",name:"人物（谁）",tip:"故事里主要出现了哪些人物或小动物？"},{no:"食指",name:"时间与地点",tip:"事情发生在什么时候、什么地方？"},{no:"中指",name:"起因（开头）",tip:"最开始发生了什么问题或愿望？"},{no:"无名指",name:"经过（重点）",tip:"主人公先做了什么？接着又遇到了什么？"},{no:"小拇指",name:"结果与收获",tip:"最后问题怎么解决的？我明白了什么道理？"}].map((e,o)=>`<div class="sc-f-row">
            <div class="sc-f-badge"><b>${o+1}</b><span>${e.no}</span></div>
            <div class="sc-f-body">
              <div class="sc-f-title">${e.name}<small>（${e.tip}）</small></div>
              <div class="sc-write-line"></div>
              <div class="sc-write-line"></div>
            </div>
          </div>`).join("")}
    </div>`:i.kind==="story_mountain"?s=`<div class="sc-mountain-svg">
      <svg width="100%" viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg">
        <polyline points="20,185 160,145 340,32 520,145 660,185" fill="none" stroke="#2f5d4e" stroke-width="3"/>
        <circle cx="90" cy="165" r="8" fill="#2f5d4e"/>
        <circle cx="230" cy="100" r="8" fill="#2f5d4e"/>
        <circle cx="340" cy="32" r="10" fill="#b8643f"/>
        <circle cx="460" cy="108" r="8" fill="#2f5d4e"/>
        <circle cx="595" cy="168" r="8" fill="#2f5d4e"/>
        <text x="90" y="198" text-anchor="middle" font-size="13" font-weight="700" fill="#1f3a30">1. 起因</text>
        <text x="200" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="#1f3a30">2. 发展</text>
        <text x="340" y="18" text-anchor="middle" font-size="14" font-weight="800" fill="#b8643f">3. 高潮（最紧张/精彩）</text>
        <text x="485" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="#1f3a30">4. 转折</text>
        <text x="595" y="198" text-anchor="middle" font-size="13" font-weight="700" fill="#1f3a30">5. 结局</text>
      </svg>
    </div>
    <div class="sc-m-grid">
      <div class="sc-m-box"><h4>1. 故事起因（背景与人物）</h4><div class="sc-write-line"></div><div class="sc-write-line"></div></div>
      <div class="sc-m-box"><h4>2. 情节发展（遇到困难/变化）</h4><div class="sc-write-line"></div><div class="sc-write-line"></div></div>
      <div class="sc-m-box is-peak"><h4>3. 故事高潮（关键动作、语言与心理）</h4><div class="sc-write-line"></div><div class="sc-write-line"></div><div class="sc-write-line"></div></div>
      <div class="sc-m-box"><h4>4. 事情转折（如何解决）</h4><div class="sc-write-line"></div><div class="sc-write-line"></div></div>
      <div class="sc-m-box"><h4>5. 结局与主题感悟</h4><div class="sc-write-line"></div><div class="sc-write-line"></div></div>
    </div>`:s=`<div class="sc-burger">
      <div class="sc-b-layer is-bun"><strong>开头点题（中心句）</strong><div class="sc-write-line"></div></div>
      <div class="sc-b-layer"><strong>细节一（看到了什么 / 怎么做的）</strong><div class="sc-write-line"></div></div>
      <div class="sc-b-layer"><strong>细节二（动作、对话或心理变化）</strong><div class="sc-write-line"></div></div>
      <div class="sc-b-layer"><strong>细节三（精彩画面或好词佳句）</strong><div class="sc-write-line"></div></div>
      <div class="sc-b-layer is-bun"><strong>结尾收束（我的感受或收获）</strong><div class="sc-write-line"></div></div>
    </div>
    <div class="sc-draft-title">小试牛刀：把上面的构思连成一段通顺的话</div>
    ${i.grade<=2?`<div class="sc-tian-grid">${Array.from({length:36}).map(()=>x(13,"",!1)).join("")}</div>`:`<table class="sc-essay-tbl">${Array.from({length:8}).map(()=>`<tr>${Array.from({length:20}).map(()=>"<td></td>").join("")}</tr>`).join("")}</table>`}`;const a=`<div class="ws-page">
    <div class="ws-header">
      <h1 class="ws-title">${l(i.title)}</h1>
      <p class="ws-sub">${l(i.volumeLabel)}${i.lessonTitle?` · 对应课文/习作：${l(i.lessonTitle)}`:""}</p>
      <div class="ws-stu-bar">
        <span>班级：<i class="ws-stu-line"></i></span>
        <span>姓名：<i class="ws-stu-line"></i></span>
        <span>课题：<i class="ws-stu-line" style="min-width:40mm"></i></span>
      </div>
    </div>
    ${s}
  </div>`;return v(i.title,a,`
    .sc-fingers { display: flex; flex-direction: column; gap: 4.5mm; }
    .sc-f-row { display: flex; gap: 3.5mm; border: 1.2px solid #94a3b8; border-radius: 3mm; padding: 3.5mm 4mm; }
    .sc-f-badge { width: 16mm; background: #2f5d4e; color: #fff; border-radius: 2.5mm; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1mm; flex: none; }
    .sc-f-badge b { font-size: 14pt; }
    .sc-f-badge span { font-size: 8.5pt; }
    .sc-f-body { flex: 1; }
    .sc-f-title { font-size: 10.5pt; font-weight: 800; color: #1f3a30; margin-bottom: 1.5mm; }
    .sc-f-title small { font-weight: 400; color: #52675f; font-size: 9pt; }
    .sc-write-line { height: 9.5mm; border-bottom: 1px dashed #94a3b8; }
    .sc-mountain-svg { margin: 2mm 0 4mm; padding: 2mm; border: 1px solid #e2e8f0; border-radius: 3mm; background: #fcfdfb; }
    .sc-m-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5mm; }
    .sc-m-box { border: 1.2px solid #94a3b8; border-radius: 2.5mm; padding: 3mm 4mm; }
    .sc-m-box.is-peak { grid-column: 1 / -1; border-color: #b8643f; background: #fffaf7; }
    .sc-m-box h4 { margin: 0 0 1.5mm; font-size: 10pt; color: #1f3a30; }
    .sc-burger { display: flex; flex-direction: column; gap: 2.5mm; margin-bottom: 4mm; }
    .sc-b-layer { border: 1.2px solid #94a3b8; border-radius: 2.5mm; padding: 2.2mm 4mm; }
    .sc-b-layer.is-bun { border-color: #2f5d4e; border-radius: 6mm; background: #f8faf8; }
    .sc-b-layer strong { font-size: 9.8pt; color: #1f3a30; }
    .sc-draft-title { font-size: 10pt; font-weight: 700; color: #2f5d4e; margin: 2mm 0; }
    .sc-tian-grid { display: flex; flex-wrap: wrap; gap: 1.5mm; }
    .sc-essay-tbl { width: 100%; border-collapse: collapse; table-layout: fixed; }
    .sc-essay-tbl td { border: 0.7px solid #94a3b8; height: 8.6mm; }
  `,!1)}function C(i){const s=i.entries.slice(0,10).map((t,e)=>{const o=Math.max(1,Math.min(6,t.phonemes.length||3)),d=Array.from({length:o}).map((r,c)=>{const m=i.hideLetters?"":t.phonemes[c]??"";return`<div class="ek-box"><span class="ek-ph">${l(m)}</span><span class="ek-dot"></span></div>`}).join("");return`<div class="ek-row">
        <div class="ek-meta">
          <span class="ek-no">${e+1}.</span>
          <strong class="ek-zh">${l(t.meaning)}</strong>
          ${t.phonetic&&t.phonetic!=="-"?`<span class="ek-ipa">${l(t.phonetic)}</span>`:""}
        </div>
        <div class="ek-boxes">${d}</div>
        <div class="ek-fourline">
          <div class="fl-top"></div>
          <div class="fl-mid"></div>
          <div class="fl-bot"></div>
        </div>
      </div>`}).join(""),a=`<div class="ws-page">
    <div class="ws-header">
      <h1 class="ws-title">${l(i.title)}</h1>
      <p class="ws-sub">${l(i.unitLabel)} · 听音点圆点切分音素，再在右侧四线三格规范拼写整词</p>
      <div class="ws-stu-bar">
        <span>Class：<i class="ws-stu-line"></i></span>
        <span>Name：<i class="ws-stu-line"></i></span>
      </div>
    </div>
    <div class="ek-list">${s}</div>
  </div>`;return v(i.title,a,`
    .ek-list { display: flex; flex-direction: column; gap: 3.5mm; }
    .ek-row { display: grid; grid-template-columns: 44mm 64mm 1fr; align-items: center; gap: 4mm; padding: 2.5mm 3mm; border: 1px solid #cbd5e1; border-radius: 2.5mm; break-inside: avoid; }
    .ek-meta { display: flex; flex-direction: column; gap: 0.6mm; }
    .ek-no { font-size: 8.5pt; color: #64748b; }
    .ek-zh { font-size: 10.5pt; color: #162b24; }
    .ek-ipa { font-size: 8.5pt; color: #475569; font-family: "Times New Roman", serif; }
    .ek-boxes { display: flex; align-items: center; gap: 1.5mm; }
    .ek-box { width: 10.5mm; height: 12mm; border: 1.4px solid #2f5d4e; border-radius: 1.5mm; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 1mm 0; }
    .ek-ph { font-size: 11pt; font-weight: 700; color: #94a3b8; font-family: "Arial", sans-serif; }
    .ek-dot { width: 2.4mm; height: 2.4mm; border-radius: 50%; border: 1px solid #2f5d4e; }
    .ek-fourline { width: 100%; }
    .fl-top { height: 3mm; border-top: 0.7px solid #64748b; border-bottom: 0.6px dashed #94a3b8; }
    .fl-mid { height: 3.5mm; border-bottom: 0.7px dashed #dc2626; }
    .fl-bot { height: 3mm; border-bottom: 0.7px solid #64748b; }
  `,!1)}function _(i){const s={1:[[16,16]],2:[[9,9],[23,23]],3:[[9,9],[16,16],[23,23]],4:[[9,9],[23,9],[9,23],[23,23]],5:[[9,9],[23,9],[16,16],[9,23],[23,23]],6:[[9,8],[23,8],[9,16],[23,16],[9,24],[23,24]]};return`<svg width="28" height="28" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="28" height="28" rx="6" fill="#fff" stroke="#1f3a30" stroke-width="2"/>
    ${(s[i]??s[1]).map(([n,t])=>`<circle cx="${n}" cy="${t}" r="2.7" fill="#1f3a30"/>`).join("")}
  </svg>`}function M(i){const s=i.rows.slice(0,6).map(t=>`<tr>
        <td class="rr-die">${_(t.die)}</td>
        ${t.cells.slice(0,5).map(e=>`<td class="rr-cell"><div class="rr-txt">${h(e,!1)}</div><div class="rr-chk">○ ○ ○</div></td>`).join("")}
      </tr>`).join(""),a=`<div class="ws-page">
    <div class="ws-header">
      <h1 class="ws-title">${l(i.title)}</h1>
      <p class="ws-sub">${l(i.subtitle)} · ${l(i.ruleHint)}</p>
      <div class="ws-stu-bar">
        <span>玩家 A：<i class="ws-stu-line"></i></span>
        <span>玩家 B：<i class="ws-stu-line"></i></span>
        <span>胜方：<i class="ws-stu-line" style="min-width:20mm"></i></span>
      </div>
    </div>
    <table class="rr-table">${s}</table>
    <div class="rr-foot">玩法：同桌轮流掷骰子，读出或算出对应点数行内尚未涂黑的任意 1 格，答对打勾涂满圆圈，先连成一整行或完成 15 格者获胜！</div>
  </div>`;return v(i.title,a,`
    .rr-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
    .rr-table td { border: 1.3px solid #2f5d4e; text-align: center; vertical-align: middle; height: 24mm; padding: 2mm; }
    .rr-die { width: 18mm; background: #f8faf8; }
    .rr-txt { font-size: 13pt; font-weight: 700; color: #162b24; word-break: break-word; }
    .rr-chk { margin-top: 2mm; font-size: 8.5pt; color: #94a3b8; letter-spacing: 2px; }
    .rr-foot { margin-top: 4mm; font-size: 9.5pt; color: #475569; text-align: center; }
  `,!0)}export{z as a,S as b,T as c,H as d,A as e,C as f,M as g,j as r};
