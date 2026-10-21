const isEnglish=location.pathname==='/en'||location.pathname.startsWith('/en/');
const localPath=isEnglish?(location.pathname.replace(/^\/en/,'')||'/'):location.pathname;
const englishLocalPath=localPath.startsWith('/education')?'/curriculum/':(localPath.startsWith('/references/')&&localPath!=='/references/'?'/references/':localPath);
const curriculumQuery=localPath==='/curriculum/program/'?location.search:'';
const englishPath=`/en${englishLocalPath==='/'?'/':englishLocalPath}${curriculumQuery}`;
const koreanPath=`${localPath||'/'}${curriculumQuery}`;
const navRoot=document.querySelector('.nav-links');
if(navRoot){
  const copy=isEnglish?{
    about:'About',products:'Products',curriculum:'Curriculum',references:'References',store:'Store',contact:'Contact',
    studio:'DEEPCO Studio',studioSub:'AI models, apps & Python',mini:'DEEPCO Mini',miniSub:'Small robot, smart autonomous driving',
    board:'DEEPCO Board',boardSub:'Expandable Physical AI',easy:'DEEPCO Easy',easySub:'Fast sensor connection',
    bot:'DEEPCO Bot',botSub:'Block coding & Python autonomy',short:'Short Camps & Training',shortSub:'2-4 sessions',
    semester:'Semester Programs',semesterSub:'8-16 sessions',annual:'Year-long Programs',annualSub:'32+ sessions'
  }:{
    about:'소개',products:'제품',curriculum:'커리큘럼',references:'레퍼런스',store:'스토어',contact:'도입 문의',
    studio:'딥코 스튜디오',studioSub:'AI 모델·앱·Python 플랫폼',mini:'딥코 미니',miniSub:'작지만 스마트한 자율주행',
    board:'딥코 보드',boardSub:'확장형 피지컬 AI',easy:'딥코 이지',easySub:'빠르게 연결하는 피지컬 AI',
    bot:'딥코봇',botSub:'블록코딩·Python 자율주행',short:'단기 캠프 및 연수',shortSub:'2차시–4차시',
    semester:'학기 프로그램',semesterSub:'8차시–16차시',annual:'연간 프로그램',annualSub:'32차시 이상'
  };
  const prefix=isEnglish?'/en':'';
  navRoot.innerHTML=`
    <div class="nav-item"><a class="nav-primary" href="${prefix}/about/">${copy.about}</a></div>
    <div class="nav-item has-submenu">
      <div class="nav-primary-row"><a class="nav-primary" href="${prefix}/products/">${copy.products}</a><button class="submenu-toggle" type="button" aria-expanded="false" aria-label="${isEnglish?'Open product menu':'제품 하위 메뉴 열기'}"></button></div>
      <div class="submenu" aria-label="${isEnglish?'Product submenu':'제품 하위 메뉴'}"><a href="${prefix}/products/studio/"><b>${copy.studio}</b><span>${copy.studioSub}</span></a><a href="${prefix}/products/mini/"><b>${copy.mini}</b><span>${copy.miniSub}</span></a><a href="${prefix}/products/board/"><b>${copy.board}</b><span>${copy.boardSub}</span></a><a href="${prefix}/products/easy/"><b>${copy.easy}</b><span>${copy.easySub}</span></a><a href="${prefix}/products/bot/"><b>${copy.bot}</b><span>${copy.botSub}</span></a></div>
    </div>
    <div class="nav-item has-submenu">
      <div class="nav-primary-row"><a class="nav-primary" href="${prefix}/curriculum/">${copy.curriculum}</a><button class="submenu-toggle" type="button" aria-expanded="false" aria-label="${isEnglish?'Open curriculum menu':'커리큘럼 하위 메뉴 열기'}"></button></div>
      <div class="submenu curriculum-submenu" aria-label="${isEnglish?'Curriculum submenu':'커리큘럼 하위 메뉴'}"><a href="${prefix}/curriculum/short/"><b>${copy.short}</b><span>${copy.shortSub}</span></a><a href="${prefix}/curriculum/semester/"><b>${copy.semester}</b><span>${copy.semesterSub}</span></a><a href="${prefix}/curriculum/annual/"><b>${copy.annual}</b><span>${copy.annualSub}</span></a></div>
    </div>
    <div class="nav-item"><a class="nav-primary" href="${prefix}/references/">${copy.references}</a></div>
    <div class="nav-item"><a class="nav-primary nav-store" href="https://smartstore.naver.com/deepco" target="_blank" rel="noopener noreferrer">${copy.store}</a></div>
    <div class="nav-actions"><div class="language-switch" aria-label="Language"><a href="${koreanPath}" hreflang="ko" class="${isEnglish?'':'is-active'}">한국어</a><a href="${englishPath}" hreflang="en" class="${isEnglish?'is-active':''}">English</a></div><a class="nav-contact" href="mailto:sales@deepco.co.kr?subject=${encodeURIComponent(isEnglish?'DEEPCO Inquiry':'딥코 도입 문의')}">${copy.contact}</a></div>`;
  const path=location.pathname;
  navRoot.querySelectorAll('.nav-primary').forEach(link=>{
    const href=link.getAttribute('href')||'';
    const localHref=href.replace(/^\/en/,'');
    if((localPath.startsWith('/about')&&localHref==='/about/')||(localPath.startsWith('/curriculum')&&localHref==='/curriculum/')||(localPath.startsWith('/references')&&localHref==='/references/')||(localPath.startsWith('/products')&&localHref==='/products/'))link.setAttribute('aria-current','page');
  });
}

const toggle=document.querySelector('.menu-toggle');
const submenuToggles=[...document.querySelectorAll('.submenu-toggle')];
const closeSubmenus=(except)=>submenuToggles.forEach(button=>{if(button!==except){button.setAttribute('aria-expanded','false');button.closest('.nav-item')?.classList.remove('submenu-open');}});
if(toggle){
  const menuLabel=open=>isEnglish?(open?'Close menu':'Open menu'):(open?'메뉴 닫기':'메뉴 열기');
  const closeMenu=()=>{document.body.classList.remove('nav-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label',menuLabel(false));toggle.textContent='☰';closeSubmenus();};
  toggle.addEventListener('click',()=>{const open=document.body.classList.toggle('nav-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',menuLabel(open));toggle.textContent=open?'×':'☰';if(!open)closeSubmenus();});
  document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  matchMedia('(min-width: 1281px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
}
submenuToggles.forEach(button=>button.addEventListener('click',event=>{event.stopPropagation();const item=button.closest('.nav-item');const willOpen=!item.classList.contains('submenu-open');closeSubmenus(button);item.classList.toggle('submenu-open',willOpen);button.setAttribute('aria-expanded',String(willOpen));}));
document.querySelectorAll('.has-submenu').forEach(item=>{
  const button=item.querySelector('.submenu-toggle');
  let closeTimer;
  const openDesktop=()=>{if(!matchMedia('(min-width:1281px)').matches)return;clearTimeout(closeTimer);closeSubmenus(button);item.classList.add('submenu-open');button?.setAttribute('aria-expanded','true');};
  const closeDesktop=()=>{if(!matchMedia('(min-width:1281px)').matches)return;clearTimeout(closeTimer);closeTimer=setTimeout(()=>{item.classList.remove('submenu-open');button?.setAttribute('aria-expanded','false');},140);};
  item.addEventListener('mouseenter',openDesktop);
  item.addEventListener('mouseleave',closeDesktop);
  item.addEventListener('focusin',openDesktop);
  item.addEventListener('focusout',event=>{if(!item.contains(event.relatedTarget))closeDesktop();});
});
document.addEventListener('click',event=>{if(!event.target.closest('.has-submenu'))closeSubmenus();});

const curriculumList=document.querySelector('[data-curriculum-list]');
const curriculumDetail=document.querySelector('[data-curriculum-detail]');
if(curriculumList||curriculumDetail){
  const escapeCurriculum=value=>String(value??'').replace(/[&<>'"]/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));
  const labels=isEnglish?{
    detail:'View program details',sessions:'Sessions',audience:'Learners',level:'Growth level',domain:'Curriculum domain',tools:'DEEPCO tools',objective:'Learning objective',standards:'Achievement standards',competencies:'Competencies',sequence:'Session plan',materials:'Downloads',lesson:'Lesson plan',guide:'Teacher guide',pending:'Coming soon',cost:'Program fee for one class (15 learners)',inquiry:'Contact us',outcome:'Project outcome',notFound:'Program information could not be found.',back:'Back to curriculum'
  }:{
    detail:'프로그램 자세히 보기',sessions:'운영 차시',audience:'교육 대상',level:'성장 단계',domain:'교육영역',tools:'사용 교구',objective:'학습목표',standards:'성취기준',competencies:'확보 역량',sequence:'차시별 학습 내용',materials:'다운로드 자료',lesson:'교안',guide:'교사용 지침서',pending:'준비 중',cost:'1반(15명 기준) 프로그램 운영비',inquiry:'별도 문의',outcome:'완성 결과',notFound:'프로그램 정보를 찾을 수 없습니다.',back:'커리큘럼으로 돌아가기'
  };
  const localized=program=>({...program,...program[isEnglish?'en':'ko']});
  const detailHref=id=>`${isEnglish?'/en':''}/curriculum/program/?id=${encodeURIComponent(id)}`;
  fetch('/assets/curriculum-data.json').then(response=>response.json()).then(data=>{
    if(curriculumList){
      const category=curriculumList.dataset.category;
      const programs=data.programs.filter(program=>program.category===category).map(localized);
      curriculumList.innerHTML=programs.map(program=>`<a class="curriculum-album-card" href="${detailHref(program.id)}"><div class="curriculum-album-image"><img src="${escapeCurriculum(program.image)}" alt="${escapeCurriculum(program.title)} ${isEnglish?'DEEPCO learning tools':'딥코 교육 교구'}"></div><div class="curriculum-album-copy"><div class="curriculum-album-meta"><span>${escapeCurriculum(program.sessions)} · ${escapeCurriculum(program.audience)}</span><b>${escapeCurriculum(program.level)}</b></div><h2>${escapeCurriculum(program.title)}</h2><p>${escapeCurriculum(program.summary)}</p><ul><li>${escapeCurriculum(program.domain)}</li><li>${escapeCurriculum(program.tools)}</li></ul><strong>${labels.detail} <span aria-hidden="true">→</span></strong></div></a>`).join('');
    }
    if(curriculumDetail){
      const id=new URLSearchParams(location.search).get('id');
      const raw=data.programs.find(program=>program.id===id);
      if(!raw){curriculumDetail.innerHTML=`<div class="curriculum-empty"><h1>${labels.notFound}</h1><a class="btn primary" href="${isEnglish?'/en':''}/curriculum/">${labels.back}</a></div>`;return;}
      const program=localized(raw);
      const categoryNames=isEnglish?{short:'Short Camps & Training',semester:'Semester Programs',annual:'Year-long Programs'}:{short:'단기 캠프 및 연수',semester:'학기 프로그램',annual:'연간 프로그램'};
      const categoryHref=`${isEnglish?'/en':''}/curriculum/${program.category}/`;
      document.title=`${program.title} | ${isEnglish?'DEEPCO Curriculum':'딥코 커리큘럼'}`;
      curriculumDetail.innerHTML=`
        <section class="program-detail-hero"><div class="wrap"><div class="crumbs"><a href="${isEnglish?'/en/':'/'}">${isEnglish?'Home':'홈'}</a><span>/</span><a href="${isEnglish?'/en':''}/curriculum/">${isEnglish?'Curriculum':'커리큘럼'}</a><span>/</span><a href="${categoryHref}">${categoryNames[program.category]}</a></div><div class="program-detail-hero-grid"><div><span class="eyebrow">${escapeCurriculum(program.domain)}</span><h1>${escapeCurriculum(program.title)}</h1><p>${escapeCurriculum(program.summary)}</p><div class="program-detail-tags"><span>${escapeCurriculum(program.sessions)}</span><span>${escapeCurriculum(program.audience)}</span><span>${escapeCurriculum(program.level)}</span></div></div><div class="program-detail-product"><img src="${escapeCurriculum(program.image)}" alt="${escapeCurriculum(program.title)} ${isEnglish?'DEEPCO learning tools':'딥코 교육 교구'}"><small>${labels.tools}</small><b>${escapeCurriculum(program.tools)}</b></div></div></div></section>
        <section class="program-detail-body"><div class="wrap program-detail-layout"><div class="program-detail-main"><article class="program-info-card"><span>01 · ${labels.objective.toUpperCase()}</span><h2>${labels.objective}</h2><p>${escapeCurriculum(program.objective)}</p><div class="program-outcome-large"><small>${labels.outcome}</small><b>${escapeCurriculum(program.outcome)}</b></div></article><article class="program-info-card"><span>02 · STANDARDS &amp; COMPETENCIES</span><h2>${labels.standards}</h2><p class="achievement-code">${escapeCurriculum(program.standards)}</p><h3>${labels.competencies}</h3><div class="competency-tags">${program.competencies.map(item=>`<span>${escapeCurriculum(item)}</span>`).join('')}</div></article><article class="program-info-card"><span>03 · SESSION PLAN</span><h2>${labels.sequence}</h2><ol class="session-plan">${program.sessionsDetail.map(item=>`<li>${escapeCurriculum(item)}</li>`).join('')}</ol></article></div><aside class="program-detail-side"><div class="program-side-card"><span>${labels.materials}</span><div class="download-placeholder"><b>${labels.lesson}</b><small>${labels.pending}</small></div><div class="download-placeholder"><b>${labels.guide}</b><small>${labels.pending}</small></div></div><div class="program-side-card fee"><span>${labels.cost}</span><strong>${labels.inquiry}</strong><a href="mailto:sales@deepco.co.kr?subject=${encodeURIComponent(program.title)}">${isEnglish?'Request program information':'프로그램 문의하기'} →</a></div></aside></div></section>
        <section class="curriculum-back"><div class="wrap"><a href="${categoryHref}">← ${categoryNames[program.category]} ${isEnglish?'list':'목록'}</a></div></section>`;
    }
  }).catch(()=>{if(curriculumDetail)curriculumDetail.innerHTML=`<div class="curriculum-empty"><h1>${labels.notFound}</h1></div>`;});
}

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduced){document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}

const referenceApp=document.querySelector('[data-reference-app]');
if(referenceApp){
  const typeLabels=isEnglish?{all:'All',school:'K-12 Schools',institution:'Organizations',university:'Universities',training:'Teacher Training'}:{all:'전체',school:'초·중·고',institution:'기관',university:'대학',training:'교사 연수'};
  let records=[];
  const regions=[['서울',38,20],['인천',27,24],['경기',44,27],['강원',66,18],['충남',33,39],['충북',55,36],['세종',43,44],['대전',49,49],['전북',38,57],['경북',68,48],['대구',68,60],['광주',38,68],['전남',31,75],['경남',56,72],['울산',76,67],['부산',69,79],['제주',37,93]];
  const regionLabels=isEnglish?{서울:'Seoul',인천:'Incheon',경기:'Gyeonggi',강원:'Gangwon',충남:'Chungnam',충북:'Chungbuk',세종:'Sejong',대전:'Daejeon',전북:'Jeonbuk',경북:'Gyeongbuk',대구:'Daegu',광주:'Gwangju',전남:'Jeonnam',경남:'Gyeongnam',울산:'Ulsan',부산:'Busan',제주:'Jeju'}:Object.fromEntries(regions.map(([name])=>[name,name]));
  let selectedType=referenceApp.dataset.defaultType||'all';
  let selectedRegion='경기';
  let selectedId='';
  referenceApp.innerHTML=`
    <div class="reference-map-toolbar" role="group" aria-label="${isEnglish?'Select education type':'교육 유형 선택'}">
      ${Object.entries(typeLabels).map(([key,label])=>`<button type="button" data-ref-type="${key}">${label}</button>`).join('')}
    </div>
    <div class="reference-map-grid">
      <div class="reference-map-panel">
        <div class="reference-map-title"><span>REGION</span><h2>${isEnglish?'Select a region':'지역을 선택하세요'}</h2></div>
        <div class="korea-real-map" aria-label="${isEnglish?'Map of South Korea by province':'대한민국 시도 선택 지도'}">
          <svg class="korea-map-art" data-korea-map viewBox="0 0 420 620" role="img" aria-label="${isEnglish?'Simplified map of South Korea provinces':'대한민국 시·도 경계를 단순화한 지도'}"></svg>
          ${regions.map(([name,x,y])=>`<button type="button" data-ref-region="${name}" style="--x:${x}%;--y:${y}%">${regionLabels[name]}</button>`).join('')}
        </div>
      </div>
      <div class="reference-list-panel">
        <div class="reference-selection"><div><span data-ref-region-title>${regionLabels['경기']}</span><small data-ref-region-count></small></div><b data-ref-type-title>${typeLabels[selectedType]}</b></div>
        <h2>${isEnglish?'Schools & Organizations':'교육기관'}</h2>
        <p>${isEnglish?'Select a location to view its program and classroom story.':'기관을 선택하면 운영 프로그램과 현장 사진을 확인할 수 있습니다.'}</p>
        <div class="reference-org-list" data-ref-list></div>
      </div>
    </div>
    <div class="reference-detail" data-ref-detail aria-live="polite"></div>`;
  const typeButtons=[...referenceApp.querySelectorAll('[data-ref-type]')];
  const regionButtons=[...referenceApp.querySelectorAll('[data-ref-region]')];
  const list=referenceApp.querySelector('[data-ref-list]');
  const detail=referenceApp.querySelector('[data-ref-detail]');
  const mapSvg=referenceApp.querySelector('[data-korea-map]');
  const summary=document.querySelector('[data-reference-summary]');
  let mapPaths=[];
  const drawKoreaMap=async()=>{
    try{
      const data=await fetch('/assets/korea-provinces-simple.json').then(response=>response.json());
      const labels={서울특별시:'서울',부산광역시:'부산',대구광역시:'대구',인천광역시:'인천',광주광역시:'광주',대전광역시:'대전',울산광역시:'울산',세종특별자치시:'세종',경기도:'경기',강원도:'강원',충청북도:'충북',충청남도:'충남',전라북도:'전북',전라남도:'전남',경상북도:'경북',경상남도:'경남',제주특별자치도:'제주'};
      const ringArea=ring=>ring.reduce((sum,point,index)=>{const next=ring[(index+1)%ring.length];return sum+(point[0]*next[1]-next[0]*point[1]);},0)/2;
      const ringCenter=ring=>{
        const xs=ring.map(point=>point[0]),ys=ring.map(point=>point[1]);
        return [(Math.min(...xs)+Math.max(...xs))/2,(Math.min(...ys)+Math.max(...ys))/2];
      };
      const rings=[];
      const regionCenters={};
      data.features.forEach(feature=>{
        const polygons=feature.geometry.type==='MultiPolygon'?feature.geometry.coordinates:[feature.geometry.coordinates];
        const largest=polygons.map(polygon=>polygon[0]).sort((a,b)=>Math.abs(ringArea(b))-Math.abs(ringArea(a)))[0];
        const region=labels[feature.properties.name];
        if(region&&largest)regionCenters[region]=ringCenter(largest);
        polygons.forEach(polygon=>{
          const ring=polygon[0];
          const area=Math.abs(ringArea(ring));
          if(area>.015)rings.push({feature,ring});
        });
      });
      const points=rings.flatMap(item=>item.ring);
      const minX=Math.min(...points.map(point=>point[0])),maxX=Math.max(...points.map(point=>point[0]));
      const minY=Math.min(...points.map(point=>point[1])),maxY=Math.max(...points.map(point=>point[1]));
      const padding=22,scale=Math.min((420-padding*2)/(maxX-minX),(620-padding*2)/(maxY-minY));
      const offsetX=(420-(maxX-minX)*scale)/2,offsetY=(620-(maxY-minY)*scale)/2;
      const project=point=>[offsetX+(point[0]-minX)*scale,620-(offsetY+(point[1]-minY)*scale)];
      const labelOffsets={서울:[-6,-10],인천:[-20,0],경기:[12,15],충남:[-10,0],세종:[-7,-6],대전:[8,8],광주:[-8,0],대구:[8,0],울산:[10,0],부산:[8,8]};
      const regionPositions={};
      regionButtons.forEach(button=>{
        const region=button.dataset.refRegion,center=regionCenters[region];
        if(!center)return;
        const [baseX,baseY]=project(center),[dx,dy]=labelOffsets[region]||[0,0];
        regionPositions[region]=[baseX+dx,baseY+dy];
      });
      const positionRegionButtons=()=>{
        const rect=mapSvg.getBoundingClientRect(),viewBox=mapSvg.viewBox.baseVal;
        if(!rect.width||!rect.height)return;
        const scale=Math.min(rect.width/viewBox.width,rect.height/viewBox.height);
        const padX=(rect.width-viewBox.width*scale)/2,padY=(rect.height-viewBox.height*scale)/2;
        regionButtons.forEach(button=>{
          const point=regionPositions[button.dataset.refRegion];
          if(!point)return;
          button.style.setProperty('--x',`${Math.max(3,Math.min(97,(padX+(point[0]-viewBox.x)*scale)/rect.width*100)).toFixed(2)}%`);
          button.style.setProperty('--y',`${Math.max(3,Math.min(97,(padY+(point[1]-viewBox.y)*scale)/rect.height*100)).toFixed(2)}%`);
        });
      };
      positionRegionButtons();
      if('ResizeObserver'in window)new ResizeObserver(positionRegionButtons).observe(mapSvg);
      const ns='http://www.w3.org/2000/svg';
      rings.forEach(({feature,ring})=>{
        const path=document.createElementNS(ns,'path');
        path.setAttribute('d',ring.map((point,index)=>{const [x,y]=project(point);return `${index?'L':'M'}${x.toFixed(1)} ${y.toFixed(1)}`;}).join('')+'Z');
        path.setAttribute('class','korea-province');
        const region=labels[feature.properties.name];
        if(region){path.dataset.mapRegion=region;path.setAttribute('tabindex','0');path.setAttribute('role','button');path.setAttribute('aria-label',isEnglish?`Select ${regionLabels[region]}`:`${region} 지역 선택`);path.addEventListener('click',()=>{selectedRegion=region;render();});path.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();selectedRegion=region;render();}});}
        mapSvg.appendChild(path);
      });
      mapPaths=[...mapSvg.querySelectorAll('[data-map-region]')];
      mapPaths.forEach(path=>path.classList.toggle('is-active',path.dataset.mapRegion===selectedRegion));
    }catch(error){mapSvg.classList.add('is-unavailable');}
  };
  const escapeHtml=value=>String(value??'').replace(/[&<>'"]/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]));
  const localizedRecord=record=>isEnglish?{...record,level:record.levelEn,program:record.programEn,materials:record.materialsEn,sessions:record.sessionsEn,title:record.titleEn,description:record.descriptionEn}:record;
  const updateNationalSummary=()=>{
    if(!summary)return;
    summary.querySelector('[data-total-schools]').textContent='289+';
    summary.querySelector('[data-total-institutions]').textContent='330+';
    summary.querySelector('[data-estimated-students]').textContent='6,680+';
  };
  const filteredRecords=()=>records.filter(record=>(selectedType==='all'||record.type===selectedType)&&record.region===selectedRegion);
  const renderDetail=(record)=>{
    if(!record){detail.innerHTML=isEnglish?`<div class="reference-detail-empty"><span>REFERENCE DATA</span><h3>More programs from this region are coming soon.</h3><p>Program details, dates and classroom images will appear here as new references are added.</p></div>`:`<div class="reference-detail-empty"><span>REFERENCE DATA</span><h3>이 지역의 운영 사례를 준비하고 있습니다.</h3><p>학교·기관 자료가 등록되면 프로그램, 운영 시기와 현장 사진이 이곳에 표시됩니다.</p></div>`;return;}
    const imageNote=record.imageSource==='institution-photo'?(isEnglish?'* Illustrated from this organization’s classroom photo with identifying details softened for privacy.':'※ 해당 기관의 실제 수업 사진을 바탕으로 개인정보가 식별되지 않도록 일러스트화했습니다.'):(isEnglish?'* The DEEPCO default image is shown because no classroom photo is currently available.':'※ 수업 사진이 아직 없는 기관은 딥코 기본 이미지를 표시합니다.');
    detail.innerHTML=`<div class="reference-detail-image"><img src="${escapeHtml(record.image)}" alt="${isEnglish?`Privacy-protected DEEPCO class image for ${escapeHtml(record.name)}`:`${escapeHtml(record.name)} 딥코 교육 현장을 표현한 개인정보 보호 이미지`}"><small>${imageNote}</small></div><div class="reference-detail-copy"><span>${escapeHtml(record.program)}</span><p class="reference-location">${escapeHtml(regionLabels[record.region])} · ${escapeHtml(record.level)} · ${escapeHtml(record.period)}</p><h3>${escapeHtml(record.name)}</h3><h4>${escapeHtml(record.title)}</h4><p>${escapeHtml(record.description)}</p><div class="result-schema"><span>${isEnglish?'Learning kit':'사용 교구'}<strong>${escapeHtml(record.materials)}</strong></span><span>${isEnglish?'Program length':'운영 차시'}<strong>${escapeHtml(record.sessions)}</strong></span></div></div>`;
  };
  const render=()=>{
    typeButtons.forEach(button=>button.classList.toggle('is-active',button.dataset.refType===selectedType));
    regionButtons.forEach(button=>button.classList.toggle('is-active',button.dataset.refRegion===selectedRegion));
    mapPaths.forEach(path=>path.classList.toggle('is-active',path.dataset.mapRegion===selectedRegion));
    referenceApp.querySelector('[data-ref-region-title]').textContent=regionLabels[selectedRegion];
    const regionCount=new Set(records.filter(record=>record.region===selectedRegion).map(record=>record.name)).size;
    referenceApp.querySelector('[data-ref-region-count]').textContent=isEnglish?`${regionCount} organizations`:`교육기관 ${regionCount}곳`;
    referenceApp.querySelector('[data-ref-type-title]').textContent=typeLabels[selectedType];
    const visible=filteredRecords();
    if(!visible.some(record=>record.id===selectedId))selectedId=visible[0]?.id||'';
    list.innerHTML=visible.length?visible.map(record=>`<button type="button" data-ref-id="${escapeHtml(record.id)}" class="${record.id===selectedId?'is-active':''}"><span>${escapeHtml(record.level)}</span><b>${escapeHtml(record.name)}</b><small>${escapeHtml(record.program)}</small></button>`).join(''):(isEnglish?`<div class="reference-list-empty"><b>No programs are listed yet.</b><span>New references will be added as they become available.</span></div>`:`<div class="reference-list-empty"><b>등록된 운영 사례가 없습니다.</b><span>자료가 준비되는 대로 지역별로 추가됩니다.</span></div>`);
    list.querySelectorAll('[data-ref-id]').forEach(button=>button.addEventListener('click',()=>{selectedId=button.dataset.refId;render();}));
    renderDetail(records.find(record=>record.id===selectedId));
  };
  typeButtons.forEach(button=>button.addEventListener('click',()=>{selectedType=button.dataset.refType;render();}));
  regionButtons.forEach(button=>button.addEventListener('click',()=>{selectedRegion=button.dataset.refRegion;render();}));
  list.innerHTML=isEnglish?'<div class="reference-list-empty"><b>Loading education records…</b></div>':'<div class="reference-list-empty"><b>교육 사례를 불러오고 있습니다.</b></div>';
  renderDetail(null);
  drawKoreaMap();
  fetch('/assets/reference-data.json')
    .then(response=>{if(!response.ok)throw new Error(`Reference data ${response.status}`);return response.json();})
    .then(data=>{records=data.map(localizedRecord);selectedRegion=records.some(record=>record.region==='경기')?'경기':records[0]?.region||'경기';selectedId='';updateNationalSummary();render();})
    .catch(()=>{list.innerHTML=isEnglish?'<div class="reference-list-empty"><b>Could not load the education records.</b><span>Please try again shortly.</span></div>':'<div class="reference-list-empty"><b>교육 사례를 불러오지 못했습니다.</b><span>잠시 후 다시 시도해 주세요.</span></div>';});
}


