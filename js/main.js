/* ==================================================================
   PRODUCT DATA: edit text here. Photos go in images/ (see README).
   ================================================================== */
var CONTACT = { whatsapp: "85251951606", email: "holdengroupintl@gmail.com" };

/* Featured products: each has a large photo + 2 small photos */
var FEATURES = [
  { id:"sea-cucumber", cat:"seafood",
    tag:{zh:"海味珍品",en:"Premium Seafood"}, name:{zh:"海參",en:"Sea Cucumber"}, sub:{zh:"海中人參 · 滋補珍品",en:"Ginseng of the sea · A prized tonic"},
    intro:{zh:"海參有「海中人參」之稱，高蛋白、低脂肪，口感爽滑彈牙，是中式宴席及滋補料理的傳統珍品。經乾製處理後耐於儲存，方便廚房按需浸發使用。",
           en:"Known in Chinese cuisine as the “ginseng of the sea”, sea cucumber is high in protein, low in fat and prized for its springy, silky texture. Dried sea cucumber stores well, so kitchens can rehydrate exactly what they need."},
    points:[ {k:{zh:"產地",en:"Origin"},v:{zh:"精選優質產地",en:"Selected premium origins"}},
             {k:{zh:"規格",en:"Grading"},v:{zh:"按頭數及重量分級",en:"By count and weight"}},
             {k:{zh:"特點",en:"Character"},v:{zh:"高蛋白、低脂肪、口感彈牙",en:"High protein, low fat, springy bite"}},
             {k:{zh:"包裝",en:"Packing"},v:{zh:"散裝 / 禮盒",en:"Bulk / gift box"}} ],
    uses:{zh:["蔥燒海參","海參扣鮑","宴席菜式","節日禮盒"],en:["Braised with scallion","With abalone","Banquet dishes","Festive gift boxes"]},
    items:[ {pid:"sea-cucumber"} ] },
  { id:"abalone", cat:"seafood",
    tag:{zh:"海味珍品",en:"Premium Seafood"}, name:{zh:"鮑魚",en:"Abalone"}, sub:{zh:"鮑參翅肚之首 · 宴席首選",en:"King of Chinese delicacies · Banquet favourite"},
    intro:{zh:"鮑魚位列「鮑參翅肚」之首，肉質厚實、鮮味濃郁，是高端中菜及宴席的招牌食材。不同頭數規格適合不同菜式及價位需要。",
           en:"Abalone heads the classic list of Chinese seafood delicacies. Its thick, meaty flesh and deep savoury flavour make it a signature of fine Chinese dining and banquets, with different sizes for different dishes and budgets."},
    points:[ {k:{zh:"產地",en:"Origin"},v:{zh:"精選優質產地",en:"Selected premium origins"}},
             {k:{zh:"規格",en:"Grading"},v:{zh:"按頭數分級",en:"By count (size)"}},
             {k:{zh:"特點",en:"Character"},v:{zh:"肉質厚實、鮮味濃郁",en:"Thick, meaty, rich flavour"}},
             {k:{zh:"包裝",en:"Packing"},v:{zh:"散裝 / 禮盒",en:"Bulk / gift box"}} ],
    uses:{zh:["蠔皇鮑魚","鮑汁撈飯","宴席主菜","商務禮品"],en:["Braised in oyster sauce","Abalone rice","Banquet mains","Corporate gifts"]},
    items:[ {pid:"abalone"} ] },
  { id:"fish-maw", cat:"seafood",
    tag:{zh:"海味珍品",en:"Premium Seafood"}, name:{zh:"花膠",en:"Fish Maw"}, sub:{zh:"膠質豐富 · 燉湯珍品",en:"Rich in collagen · Prized for soups"},
    intro:{zh:"花膠即魚鰾的乾製品，膠質豐富，燉煮後口感軟糯，是燉湯、滋補料理及甜品燉品的常用珍品，深受注重養生的客人歡迎。",
           en:"Fish maw is the dried swim bladder of large fish. Rich in collagen and soft and silky once slow-cooked, it is a favourite in nourishing soups, braises and dessert tonics."},
    points:[ {k:{zh:"產地",en:"Origin"},v:{zh:"精選優質產地",en:"Selected premium origins"}},
             {k:{zh:"規格",en:"Grading"},v:{zh:"按大小及厚度分級",en:"By size and thickness"}},
             {k:{zh:"特點",en:"Character"},v:{zh:"膠質豐富、軟糯",en:"Collagen-rich, silky"}},
             {k:{zh:"包裝",en:"Packing"},v:{zh:"散裝 / 禮盒",en:"Bulk / gift box"}} ],
    uses:{zh:["花膠燉雞湯","紅燒花膠","滋補燉品","甜品"],en:["Double-boiled chicken soup","Braised fish maw","Tonic soups","Desserts"]},
    items:[ {pid:"fish-maw"} ] },
  { id:"wine", cat:"wine",
    tag:{zh:"精選酒類",en:"Fine Wines"}, name:{zh:"精選紅酒",en:"Fine Red Wines"}, sub:{zh:"法國 · 澳洲 精選佳釀",en:"Fine wines from France and Australia"},
    intro:{zh:"我們精選法國及澳洲優質紅酒：法國紅酒風格典雅細緻，澳洲紅酒果香濃郁、酒體飽滿，可配合中西餐廳及酒店酒單，以及宴會與商務送禮需要。",
           en:"We select quality reds from France and Australia. French wines bring elegance and finesse, while Australian wines are fruit-forward and full-bodied, suiting restaurant and hotel wine lists, banquets and corporate gifts."},
    points:[ {k:{zh:"產地",en:"Origin"},v:{zh:"法國 · 澳洲",en:"France · Australia"}},
             {k:{zh:"選擇",en:"Range"},v:{zh:"多款酒莊及年份",en:"Range of estates and vintages"}},
             {k:{zh:"風格",en:"Style"},v:{zh:"典雅細緻 / 果香濃郁",en:"Elegant / fruit-forward"}},
             {k:{zh:"包裝",en:"Packing"},v:{zh:"單支 / 原箱",en:"Bottle / case"}} ],
    uses:{zh:["西餐配酒","中式宴席","酒店酒單","商務禮品"],en:["Western pairing","Chinese banquets","Hotel wine lists","Corporate gifts"]},
    items:[ {pid:"wine-france"}, {pid:"wine-australia"} ] }
];

/* Everything that can go into the enquiry list */
var PRODUCTS = {
  "sea-cucumber":  {zh:"海參",en:"Sea Cucumber",units:[{zh:"斤",en:"catty"},{zh:"盒",en:"box"}]},
  "abalone":       {zh:"鮑魚",en:"Abalone",units:[{zh:"斤",en:"catty"},{zh:"盒",en:"box"}]},
  "fish-maw":      {zh:"花膠",en:"Fish Maw",units:[{zh:"斤",en:"catty"},{zh:"盒",en:"box"}]},
  "wine-france":   {zh:"法國紅酒",en:"French Red Wine",units:[{zh:"支",en:"bottle"},{zh:"箱",en:"case"}]},
  "wine-australia":{zh:"澳洲紅酒",en:"Australian Red Wine",units:[{zh:"支",en:"bottle"},{zh:"箱",en:"case"}]},
  "wagyu":         {zh:"和牛",en:"Wagyu",soon:true,units:[{zh:"公斤",en:"kg"}]},
  "caviar":        {zh:"魚子醬",en:"Caviar",soon:true,units:[{zh:"罐",en:"tin"}]},
  "sea-urchin":    {zh:"海膽",en:"Sea Urchin",soon:true,units:[{zh:"盒",en:"tray"}]}
};
var SOON = [
  {pid:"wagyu", d:{zh:"油花細緻、入口即溶的高端牛肉，適合扒房、日本料理及鐵板燒。",en:"Finely marbled, melt-in-the-mouth beef for steakhouses, Japanese restaurants and teppanyaki."}},
  {pid:"caviar", d:{zh:"鱘魚魚卵製成的奢華食材，適合西餐前菜、配香檳及高端宴會。",en:"Luxurious sturgeon roe for Western starters, champagne pairings and fine banquets."}},
  {pid:"sea-urchin", d:{zh:"鮮甜甘香、口感綿滑，是日本料理及創意西餐的熱門食材。",en:"Sweet, creamy and briny, a favourite in Japanese cuisine and modern Western dishes."}}
];
var CLIENT_TYPES=[{zh:"中餐廳",en:"Chinese restaurant"},{zh:"日本餐廳",en:"Japanese restaurant"},{zh:"西餐廳",en:"Western restaurant"},{zh:"酒店",en:"Hotel"},{zh:"個人客戶",en:"Private client"},{zh:"其他",en:"Other"}];
var DELIVERY=[{zh:"香港本地送貨",en:"Hong Kong delivery"},{zh:"定期配送",en:"Scheduled delivery"},{zh:"預約自取（葵涌）",en:"Pickup in Kwai Chung"},{zh:"大灣區 / 跨境",en:"GBA / cross-border"}];

(function(){
  var root=document.documentElement,LANG="zh";
  function t(o){return o[LANG]}
  function both(o){return '<span class="zh">'+o.zh+'</span><span class="en">'+o.en+'</span>'}
  var store={get:function(k){try{return localStorage.getItem(k)}catch(e){return null}},set:function(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
  function ph(file,label,dark,cls){
    return '<div class="ph'+(dark?' dark':'')+(cls?' '+cls:'')+'"><div class="ph-label"><svg><use href="#i-img"/></svg><b>'+both(label)+'</b><code>images/'+file+'</code></div><img src="images/'+file+'" alt="" loading="lazy" onerror="this.remove()"></div>';
  }
  function unitOpts(p){return p.units.map(function(u,i){return '<option value="'+i+'" data-zh="'+u.zh+'" data-en="'+u.en+'">'+t(u)+'</option>'}).join("")}
  function orderRow(pid,showName){
    var p=PRODUCTS[pid];
    return '<div class="order">'+(showName?'<span class="oname">'+both(p)+'</span>':'')+
      '<div class="stepper"><button type="button" data-step="-1" aria-label="-">−</button><input type="number" min="1" value="1" inputmode="numeric" aria-label="Qty"><button type="button" data-step="1" aria-label="+">+</button></div>'+
      '<select class="unit" aria-label="Unit">'+unitOpts(p)+'</select>'+
      '<button type="button" class="btn '+(p.soon?'btn-outline':'btn-orange')+' add" data-add="'+pid+'">'+(p.soon?both({zh:"登記興趣",en:"Register interest"}):both({zh:"加入查詢",en:"Add to enquiry"}))+'</button></div>';
  }
  function renderFeatures(){
    document.getElementById("features").innerHTML=FEATURES.map(function(f,i){
      var uses='<li class="lbl">'+both({zh:"適用：",en:"Ideal for:"})+'</li>'+f.uses.zh.map(function(u,k){return '<li>'+both({zh:u,en:f.uses.en[k]})+'</li>'}).join("");
      return '<article class="feature'+(i%2?' rev':'')+' reveal" id="p-'+f.id+'" data-cat="'+f.cat+'">'+
        '<div class="f-media">'+ph(f.id+'-1.jpg',{zh:"主圖位置 · "+f.name.zh,en:"Main photo · "+f.name.en},false,"main")+ph(f.id+'-2.jpg',{zh:"細節圖",en:"Detail"},false,"sm")+ph(f.id+'-3.jpg',{zh:"菜式圖",en:"Dish"},false,"sm")+'</div>'+
        '<div class="f-body"><span class="f-tag">'+both(f.tag)+'</span><h3>'+both(f.name)+'</h3><div class="alt">'+both(f.sub)+'</div>'+
        '<p class="intro">'+both(f.intro)+'</p>'+
        '<div class="f-points">'+f.points.map(function(p){return '<div><b>'+both(p.k)+'</b><span>'+both(p.v)+'</span></div>'}).join("")+'</div>'+
        '<ul class="f-uses">'+uses+'</ul>'+
        f.items.map(function(it){return orderRow(it.pid,f.items.length>1)}).join("")+
        '</div></article>';
    }).join("");
    document.getElementById("soonGrid").innerHTML=SOON.map(function(s){
      var p=PRODUCTS[s.pid];
      return '<div class="soon reveal">'+ph(s.pid+'.jpg',{zh:"產品圖片位置",en:"Product photo"})+
        '<div class="soon-body"><div class="top"><h3>'+both(p)+'</h3><span class="chip">'+both({zh:"即將推出",en:"Coming soon"})+'</span></div><p>'+both(s.d)+'</p></div></div>';
    }).join("");
  }

  /* language */
  var titles={zh:"海天集團國際有限公司 | 高端食材供應鏈",en:"Holden Group (International) Limited | Premium Food Supply Chain"};
  function setLang(l){
    LANG=l==="en"?"en":"zh";
    root.setAttribute("data-lang",LANG);root.setAttribute("lang",LANG==="en"?"en":"zh-Hant");document.title=titles[LANG];
    document.querySelectorAll("[data-set-lang]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-set-lang")===LANG?"true":"false")});
    fillSelects();store.set("holden-lang",LANG);
  }

  /* tabs */
  var tabs=document.getElementById("tabs");
  /* the first visible product block gets no divider line / top gap */
  function markFirst(){var first=null;document.querySelectorAll("#features .feature,#soonWrap").forEach(function(el){el.classList.remove("first-vis");if(!first&&el.style.display!=="none")first=el});if(first)first.classList.add("first-vis")}
  tabs.addEventListener("click",function(e){
    var b=e.target.closest("[data-tab]");if(!b)return;var f=b.getAttribute("data-tab");
    tabs.querySelectorAll(".tab").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});
    document.querySelectorAll("#features .feature,#soonWrap").forEach(function(el){el.style.display=(f==="all"||el.getAttribute("data-cat")===f)?"":"none"});
    markFirst();
  });

  /* product links (menu, tiles, footer): show only the chosen product; "#products" shows all again */
  function setTab(f){tabs.querySelectorAll(".tab").forEach(function(x){x.setAttribute("aria-pressed",x.getAttribute("data-tab")===f?"true":"false")})}
  document.addEventListener("click",function(e){
    var a=e.target.closest('a[href^="#p-"],a[href="#soonWrap"],a[href="#products"]');if(!a)return;
    var id=a.getAttribute("href").slice(1),blocks=document.querySelectorAll("#features .feature,#soonWrap");
    if(id==="products"){blocks.forEach(function(el){el.style.display=""});setTab("all");document.getElementById("product-detail").classList.remove("focused");markFirst();return}
    var target=document.getElementById(id);if(!target)return;
    e.preventDefault();
    blocks.forEach(function(el){el.style.display=el===target?"":"none"});
    setTab(id==="soonWrap"?"soon":"");document.getElementById("product-detail").classList.add("focused");markFirst();
    target.classList.add("in");
    if(document.activeElement)document.activeElement.blur();
    /* place the block just below the sticky header, same as 海參 */
    var hd=document.querySelector(".site-header"),hh=hd?hd.offsetHeight:0,
        r=target.getBoundingClientRect(),
        y=window.pageYOffset+r.top-hh-48;
    window.scrollTo({top:Math.max(0,y),behavior:"smooth"});
    if(history.replaceState)history.replaceState(null,"","#"+id);
  });

  /* other in-page links (menu, footer, buttons): put the section's top edge exactly under the sticky header,
     so no strip of the previous section shows. Re-checks once the smooth scroll has finished. */
  function sectionY(el){var hd=document.querySelector(".site-header"),hh=hd?hd.getBoundingClientRect().height:0;return Math.max(0,Math.round(window.pageYOffset+el.getBoundingClientRect().top-hh))}
  document.addEventListener("click",function(e){
    var a=e.target.closest('a[href^="#"]');if(!a)return;
    var href=a.getAttribute("href");if(href.length<2||/^#p-|^#soonWrap$/.test(href))return;
    var target=document.getElementById(href.slice(1));if(!target)return;
    e.preventDefault();
    if(document.activeElement)document.activeElement.blur();
    window.scrollTo({top:sectionY(target),behavior:"smooth"});
    setTimeout(function(){var y=sectionY(target);if(Math.abs(window.pageYOffset-y)>2)window.scrollTo({top:y,behavior:"smooth"})},900);
    if(history.replaceState)history.replaceState(null,"","#"+target.id);
  });

  /* add to list */
  document.getElementById("product-detail").addEventListener("click",function(e){
    var s=e.target.closest("[data-step]");
    if(s){var inp=s.parentNode.querySelector("input");inp.value=Math.max(1,(parseInt(inp.value,10)||1)+parseInt(s.getAttribute("data-step"),10));return}
    var a=e.target.closest("[data-add]");
    if(a){var row=a.closest(".order");addItem(a.getAttribute("data-add"),Math.max(1,parseInt(row.querySelector("input").value,10)||1),parseInt(row.querySelector(".unit").value,10)||0);
      a.classList.add("added");setTimeout(function(){a.classList.remove("added")},900)}
  });

  /* cart */
  var cart=[];try{cart=JSON.parse(store.get("holden-cart2")||"[]")||[]}catch(e){cart=[]}
  cart=cart.filter(function(i){return PRODUCTS[i.id]});
  function save(){store.set("holden-cart2",JSON.stringify(cart))}
  function addItem(id,qty,u){
    var ex=cart.filter(function(i){return i.id===id&&i.u===u})[0];if(ex)ex.qty+=qty;else cart.push({id:id,qty:qty,u:u});
    save();renderCart();var p=PRODUCTS[id];toast((LANG==="zh"?"已加入：":"Added: ")+t(p)+" × "+qty+" "+t(p.units[u]));
  }
  var itemsEl=document.getElementById("items"),emptyEl=document.getElementById("emptyState");
  /* product photo used as the enquiry-list thumbnail (same files as the product section) */
  function thumbFile(id){return {"sea-cucumber":"sea-cucumber-1.jpg","abalone":"abalone-1.jpg","fish-maw":"fish-maw-1.jpg","wine-france":"wine-1.jpg","wine-australia":"wine-1.jpg"}[id]||(id+".jpg")}
  function renderCart(){
    document.querySelectorAll(".cart-count").forEach(function(c){c.textContent=cart.length});
    emptyEl.style.display=cart.length?"none":"";
    itemsEl.innerHTML=cart.map(function(i,idx){var p=PRODUCTS[i.id];
      return '<li class="item" data-idx="'+idx+'"><span class="thumb"><svg><use href="#i-img"/></svg><img src="images/'+thumbFile(i.id)+'" alt="" onerror="this.remove()"></span><b>'+both(p)+'</b><button type="button" class="rm" data-rm="'+idx+'">'+both({zh:"移除",en:"Remove"})+'</button>'+
      '<div class="meta"><div class="stepper"><button type="button" data-cstep="-1" aria-label="-">−</button><input type="number" min="1" value="'+i.qty+'" data-cqty aria-label="Qty"><button type="button" data-cstep="1" aria-label="+">+</button></div><select class="unit" data-cunit aria-label="Unit">'+unitOpts(p)+'</select></div></li>'}).join("");
    itemsEl.querySelectorAll("[data-cunit]").forEach(function(s,k){s.value=cart[k].u});
  }
  itemsEl.addEventListener("click",function(e){
    var r=e.target.closest("[data-rm]");if(r){cart.splice(+r.getAttribute("data-rm"),1);save();renderCart();return}
    var s=e.target.closest("[data-cstep]");if(s){var idx=+s.closest(".item").getAttribute("data-idx");cart[idx].qty=Math.max(1,cart[idx].qty+parseInt(s.getAttribute("data-cstep"),10));save();renderCart()}
  });
  itemsEl.addEventListener("change",function(e){var li=e.target.closest(".item");if(!li)return;var idx=+li.getAttribute("data-idx");
    if(e.target.hasAttribute("data-cqty"))cart[idx].qty=Math.max(1,parseInt(e.target.value,10)||1);
    if(e.target.hasAttribute("data-cunit"))cart[idx].u=parseInt(e.target.value,10)||0;save();renderCart()});
  function fillSelects(){
    var ct=document.getElementById("ctype"),dm=document.getElementById("dmethod"),a=ct.selectedIndex,b=dm.selectedIndex;
    ct.innerHTML=CLIENT_TYPES.map(function(o){return "<option>"+t(o)+"</option>"}).join("");
    dm.innerHTML=DELIVERY.map(function(o){return "<option>"+t(o)+"</option>"}).join("");
    if(a>=0)ct.selectedIndex=a;if(b>=0)dm.selectedIndex=b;
    document.querySelectorAll("select.unit option").forEach(function(o){o.textContent=o.getAttribute("data-"+LANG)});
  }

  /* drawer */
  var drawer=document.getElementById("drawer"),overlay=document.getElementById("overlay");
  function openCart(){drawer.classList.add("open");overlay.classList.add("open");drawer.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";hideToast();setTimeout(function(){document.getElementById("closeCart").focus()},50)}
  function closeCart(){drawer.classList.remove("open");overlay.classList.remove("open");drawer.setAttribute("aria-hidden","true");document.body.style.overflow=""}
  document.addEventListener("click",function(e){if(e.target.closest("[data-open-cart]")){e.preventDefault();openCart()}});
  document.getElementById("closeCart").addEventListener("click",closeCart);overlay.addEventListener("click",closeCart);
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeCart()});

  function val(id){return document.getElementById(id).value.trim()}
  function validate(){var ok=true;["name","phone"].forEach(function(id){var f=document.getElementById("f-"+id),bad=!val(id);f.classList.toggle("err",bad);if(bad&&ok){document.getElementById(id).focus();ok=false}});
    if(!ok)toast(LANG==="zh"?"請填寫姓名及電話":"Please enter your name and phone number",true);return ok}
  function compose(){var zh=LANG==="zh",L=[];
    L.push(zh?"【海天集團 產品查詢】":"[Holden Group – Product Enquiry]");L.push("");
    if(cart.length){L.push(zh?"查詢產品：":"Products:");cart.forEach(function(i,k){var p=PRODUCTS[i.id];L.push((k+1)+". "+t(p)+(p.soon?(zh?"（登記興趣）":" (interest)"):"")+" × "+i.qty+" "+t(p.units[i.u]))})}
    else L.push(zh?"一般查詢":"General enquiry");
    L.push("");L.push((zh?"姓名：":"Name: ")+val("name"));L.push((zh?"電話：":"Phone: ")+val("phone"));
    if(val("company"))L.push((zh?"公司／餐廳：":"Company: ")+val("company"));
    L.push((zh?"客戶類別：":"Client type: ")+val("ctype"));L.push((zh?"配送方式：":"Delivery: ")+val("dmethod"));
    if(val("ddate"))L.push((zh?"期望日期：":"Preferred date: ")+val("ddate"));if(val("notes"))L.push((zh?"備註：":"Notes: ")+val("notes"));
    return L.join("\n")}
  document.getElementById("sendWa").addEventListener("click",function(){if(!validate())return;window.open("https://wa.me/"+CONTACT.whatsapp+"?text="+encodeURIComponent(compose()),"_blank","noopener")});
  /* direct WhatsApp links: open the chat with a ready-made enquiry template (includes enquiry-list items if any) */
  function waTemplate(){var zh=LANG==="zh",L=[];
    L.push(zh?"您好，我想查詢海天集團的產品。":"Hello, I would like to enquire about Holden Group's products.");L.push("");
    if(cart.length){L.push(zh?"查詢產品：":"Products:");cart.forEach(function(i,k){var p=PRODUCTS[i.id];L.push((k+1)+". "+t(p)+" × "+i.qty+" "+t(p.units[i.u]))})}
    else{L.push(zh?"查詢產品：":"Products:")}
    L.push(zh?"姓名：":"Name:");L.push(zh?"公司／餐廳：":"Company / restaurant:");L.push(zh?"客戶類別（餐廳／酒店／個人／企業禮品）：":"Client type (restaurant / hotel / private / corporate gift):");
    L.push(zh?"配送方式（送貨／自取）：":"Delivery or pickup:");L.push(zh?"期望日期：":"Preferred date:");L.push(zh?"備註：":"Notes:");
    return L.join("\n")}
  document.addEventListener("click",function(e){var a=e.target.closest('a[href^="https://wa.me/"]');if(!a)return;
    a.href="https://wa.me/"+CONTACT.whatsapp+"?text="+encodeURIComponent(waTemplate())});
  document.getElementById("sendMail").addEventListener("click",function(){if(!validate())return;var subj=(LANG==="zh"?"產品查詢 – ":"Product enquiry – ")+val("name");location.href="mailto:"+CONTACT.email+"?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(compose())});
  ["name","phone"].forEach(function(id){document.getElementById(id).addEventListener("input",function(){document.getElementById("f-"+id).classList.remove("err");hideToast()})});

  var toastEl=document.getElementById("toast"),toastMsg=document.getElementById("toastMsg"),tt;
  function toast(m,noView){toastMsg.textContent=m;toastEl.querySelector("button").style.display=noView?"none":"";toastEl.classList.add("show");clearTimeout(tt);tt=setTimeout(hideToast,2600)}
  function hideToast(){toastEl.classList.remove("show")}

  /* menu */
  var btn=document.getElementById("menuBtn"),links=document.getElementById("navLinks");
  function closeMenu(){links.classList.remove("open");btn.setAttribute("aria-expanded","false")}
  btn.addEventListener("click",function(){var o=!links.classList.contains("open");links.classList.toggle("open",o);btn.setAttribute("aria-expanded",o?"true":"false")});
  links.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeMenu)});
  function navTop(){var h=document.getElementById("siteHeader").getBoundingClientRect();links.style.top=h.bottom+"px"}
  window.addEventListener("scroll",function(){if(window.innerWidth<=1180)navTop()},{passive:true});window.addEventListener("resize",navTop);

  /* videos: hide placeholder video element if file missing */
  document.querySelectorAll(".ph > video").forEach(function(v){function ok(){v.classList.add("ok")}if(v.readyState>=2)ok();else v.addEventListener("loadeddata",ok)});

  /* init */
  renderFeatures();
  var q=(location.search.match(/[?&]lang=(en|zh)/)||[])[1];
  setLang(q||store.get("holden-lang")||"zh");renderCart();fillSelects();navTop();
  document.querySelectorAll("[data-set-lang]").forEach(function(b){b.addEventListener("click",function(){setLang(b.getAttribute("data-set-lang"))})});
  document.getElementById("ddate").min=new Date().toISOString().slice(0,10);
  document.getElementById("yr").textContent=new Date().getFullYear();
  if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.06});
    document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)})}else document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("in")});
})();
