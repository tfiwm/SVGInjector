{"version":3,"sources":["./svg-injector.js"],"names":["window","document","uniqueClasses","list","split","hash","i","length","out","hasOwnProperty","unshift","join","isLocal","location","protocol","hasSvgSupport","implementation","hasFeature","forEach","Array","prototype","fn","scope","this","TypeError","len","call","svgCache","injectCount","injectedElements","requestQueue","ranScripts","cloneSvg","sourceSvg","cloneNode","queueRequest","url","callback","push","processRequestQueue","index","setTimeout","loadSvg","undefined","SVGSVGElement","XMLHttpRequest","httpRequest","onreadystatechange","readyState","status","responseXML","statusText","Document","documentElement","DOMParser","Function","xmlDoc","parser","parseFromString","responseText","e","getElementsByTagName","open","overrideMimeType","send","injectElement","el","evalScripts","pngFallback","imgUrl","getAttribute","test","perElementFallback","setAttribute","pop","replace","indexOf","svg","imgId","imgTitle","classMerge","concat","imgStyle","imgData","filter","attributes","at","name","dataAttr","value","element","elementDefs","properties","currentId","newId","iriElementsAndProperties","clipPath","color-profile","cursor","linearGradient","marker","mask","pattern","radialGradient","Object","keys","key","querySelectorAll","elementsLen","id","referencingElements","property","j","referencingElementLen","removeAttribute","script","scriptType","scripts","scriptsToEval","k","scriptsLen","innerText","textContent","removeChild","l","scriptsToEvalLen","styleTags","styleTag","importNode","parentNode","replaceChild","SVGInjector","elements","options","done","eachCallback","each","elementsLoaded","module","exports","define","amd"],"mappings":"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","file":"./svg-injector.min.js"}