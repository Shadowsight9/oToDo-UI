;(function(){System.register([],function(exports){'use strict';return{execute:function(){exports({A:createCommentVNode,B:renderList,D:watch,E:toRef,J:renderSlot,L:isRef,M:createTextVNode,N:withCtx,O:createRouter,P:createWebHistory,a:createPinia,b:o,c:createBlock,e:defineComponent,g:createElementBlock,h:createBaseVNode,k:popScopeId,l:ref,m:defineStore,n:h,o:openBlock,p:pushScopeId,r:resolveComponent,s:useRouter,u:unref,v:reactive,w:resolveDirective,x:withDirectives,z:normalizeClass});/**
             * Make a map and return a function for checking if a key
             * is in that map.
             * IMPORTANT: all calls of this function must be prefixed with
             * \/\*#\_\_PURE\_\_\*\/
             * So that rollup can tree-shake them if necessary.
             */function makeMap(str,expectsLowerCase){const map=Object.create(null);const list=str.split(',');for(let i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?val=>!!map[val.toLowerCase()]:val=>!!map[val];}/**
             * On the client we only need to offer special cases for boolean attributes that
             * have different names from their corresponding dom properties:
             * - itemscope -> N/A
             * - allowfullscreen -> allowFullscreen
             * - formnovalidate -> formNoValidate
             * - ismap -> isMap
             * - nomodule -> noModule
             * - novalidate -> noValidate
             * - readonly -> readOnly
             */const specialBooleanAttrs=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;const isSpecialBooleanAttr=/*#__PURE__*/makeMap(specialBooleanAttrs);/**
             * Boolean attributes should be included if the value is truthy or ''.
             * e.g. `<select multiple>` compiles to `{ multiple: '' }`
             */function includeBooleanAttr(value){return!!value||value==='';}function normalizeStyle(value){if(isArray$1(value)){const res={};for(let i=0;i<value.length;i++){const item=value[i];const normalized=isString$1(item)?parseStringStyle(item):normalizeStyle(item);if(normalized){for(const key in normalized){res[key]=normalized[key];}}}return res;}else if(isString$1(value)){return value;}else if(isObject$1(value)){return value;}}const listDelimiterRE=/;(?![^(]*\))/g;const propertyDelimiterRE=/:(.+)/;function parseStringStyle(cssText){const ret={};cssText.split(listDelimiterRE).forEach(item=>{if(item){const tmp=item.split(propertyDelimiterRE);tmp.length>1&&(ret[tmp[0].trim()]=tmp[1].trim());}});return ret;}function normalizeClass(value){let res='';if(isString$1(value)){res=value;}else if(isArray$1(value)){for(let i=0;i<value.length;i++){const normalized=normalizeClass(value[i]);if(normalized){res+=normalized+' ';}}}else if(isObject$1(value)){for(const name in value){if(value[name]){res+=name+' ';}}}return res.trim();}function looseCompareArrays(a,b){if(a.length!==b.length)return false;let equal=true;for(let i=0;equal&&i<a.length;i++){equal=looseEqual(a[i],b[i]);}return equal;}function looseEqual(a,b){if(a===b)return true;let aValidType=isDate$1(a);let bValidType=isDate$1(b);if(aValidType||bValidType){return aValidType&&bValidType?a.getTime()===b.getTime():false;}aValidType=isArray$1(a);bValidType=isArray$1(b);if(aValidType||bValidType){return aValidType&&bValidType?looseCompareArrays(a,b):false;}aValidType=isObject$1(a);bValidType=isObject$1(b);if(aValidType||bValidType){/* istanbul ignore if: this if will probably never be called */if(!aValidType||!bValidType){return false;}const aKeysCount=Object.keys(a).length;const bKeysCount=Object.keys(b).length;if(aKeysCount!==bKeysCount){return false;}for(const key in a){const aHasKey=a.hasOwnProperty(key);const bHasKey=b.hasOwnProperty(key);if(aHasKey&&!bHasKey||!aHasKey&&bHasKey||!looseEqual(a[key],b[key])){return false;}}}return String(a)===String(b);}function looseIndexOf(arr,val){return arr.findIndex(item=>looseEqual(item,val));}/**
             * For converting {{ interpolation }} values to displayed strings.
             * @private
             */const toDisplayString=exports('t',val=>{return val==null?'':isArray$1(val)||isObject$1(val)&&(val.toString===objectToString||!isFunction$1(val.toString))?JSON.stringify(val,replacer,2):String(val);});const replacer=(_key,val)=>{// can't use isRef here since @vue/shared has no deps
if(val&&val.__v_isRef){return replacer(_key,val.value);}else if(isMap(val)){return{[`Map(${val.size})`]:[...val.entries()].reduce((entries,[key,val])=>{entries[`${key} =>`]=val;return entries;},{})};}else if(isSet(val)){return{[`Set(${val.size})`]:[...val.values()]};}else if(isObject$1(val)&&!isArray$1(val)&&!isPlainObject$2(val)){return String(val);}return val;};const EMPTY_OBJ={};const EMPTY_ARR=[];const NOOP=()=>{};/**
             * Always return false.
             */const NO=()=>false;const onRE=/^on[^a-z]/;const isOn=key=>onRE.test(key);const isModelListener=key=>key.startsWith('onUpdate:');const extend$1=Object.assign;const remove=(arr,el)=>{const i=arr.indexOf(el);if(i>-1){arr.splice(i,1);}};const hasOwnProperty=Object.prototype.hasOwnProperty;const hasOwn=(val,key)=>hasOwnProperty.call(val,key);const isArray$1=Array.isArray;const isMap=val=>toTypeString(val)==='[object Map]';const isSet=val=>toTypeString(val)==='[object Set]';const isDate$1=val=>val instanceof Date;const isFunction$1=val=>typeof val==='function';const isString$1=val=>typeof val==='string';const isSymbol=val=>typeof val==='symbol';const isObject$1=val=>val!==null&&typeof val==='object';const isPromise=val=>{return isObject$1(val)&&isFunction$1(val.then)&&isFunction$1(val.catch);};const objectToString=Object.prototype.toString;const toTypeString=value=>objectToString.call(value);const toRawType=value=>{// extract "RawType" from strings like "[object RawType]"
return toTypeString(value).slice(8,-1);};const isPlainObject$2=val=>toTypeString(val)==='[object Object]';const isIntegerKey=key=>isString$1(key)&&key!=='NaN'&&key[0]!=='-'&&''+parseInt(key,10)===key;const isReservedProp=/*#__PURE__*/makeMap(// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,'+'onVnodeBeforeMount,onVnodeMounted,'+'onVnodeBeforeUpdate,onVnodeUpdated,'+'onVnodeBeforeUnmount,onVnodeUnmounted');const cacheStringFunction=fn=>{const cache=Object.create(null);return str=>{const hit=cache[str];return hit||(cache[str]=fn(str));};};const camelizeRE=/-(\w)/g;/**
             * @private
             */const camelize=cacheStringFunction(str=>{return str.replace(camelizeRE,(_,c)=>c?c.toUpperCase():'');});const hyphenateRE=/\B([A-Z])/g;/**
             * @private
             */const hyphenate=cacheStringFunction(str=>str.replace(hyphenateRE,'-$1').toLowerCase());/**
             * @private
             */const capitalize=cacheStringFunction(str=>str.charAt(0).toUpperCase()+str.slice(1));/**
             * @private
             */const toHandlerKey=cacheStringFunction(str=>str?`on${capitalize(str)}`:``);// compare whether a value has changed, accounting for NaN.
const hasChanged=(value,oldValue)=>!Object.is(value,oldValue);const invokeArrayFns=(fns,arg)=>{for(let i=0;i<fns.length;i++){fns[i](arg);}};const def=(obj,key,value)=>{Object.defineProperty(obj,key,{configurable:true,enumerable:false,value});};const toNumber=val=>{const n=parseFloat(val);return isNaN(n)?val:n;};let _globalThis;const getGlobalThis=()=>{return _globalThis||(_globalThis=typeof globalThis!=='undefined'?globalThis:typeof self!=='undefined'?self:typeof window!=='undefined'?window:typeof global!=='undefined'?global:{});};let activeEffectScope;const effectScopeStack=[];class EffectScope{constructor(detached=false){this.active=true;this.effects=[];this.cleanups=[];if(!detached&&activeEffectScope){this.parent=activeEffectScope;this.index=(activeEffectScope.scopes||(activeEffectScope.scopes=[])).push(this)-1;}}run(fn){if(this.active){try{this.on();return fn();}finally{this.off();}}}on(){if(this.active){effectScopeStack.push(this);activeEffectScope=this;}}off(){if(this.active){effectScopeStack.pop();activeEffectScope=effectScopeStack[effectScopeStack.length-1];}}stop(fromParent){if(this.active){this.effects.forEach(e=>e.stop());this.cleanups.forEach(cleanup=>cleanup());if(this.scopes){this.scopes.forEach(e=>e.stop(true));}// nested scope, dereference from parent to avoid memory leaks
if(this.parent&&!fromParent){// optimized O(1) removal
const last=this.parent.scopes.pop();if(last&&last!==this){this.parent.scopes[this.index]=last;last.index=this.index;}}this.active=false;}}}function effectScope(detached){return new EffectScope(detached);}function recordEffectScope(effect,scope){scope=scope||activeEffectScope;if(scope&&scope.active){scope.effects.push(effect);}}const createDep=effects=>{const dep=new Set(effects);dep.w=0;dep.n=0;return dep;};const wasTracked=dep=>(dep.w&trackOpBit)>0;const newTracked=dep=>(dep.n&trackOpBit)>0;const initDepMarkers=({deps})=>{if(deps.length){for(let i=0;i<deps.length;i++){deps[i].w|=trackOpBit;// set was tracked
}}};const finalizeDepMarkers=effect=>{const{deps}=effect;if(deps.length){let ptr=0;for(let i=0;i<deps.length;i++){const dep=deps[i];if(wasTracked(dep)&&!newTracked(dep)){dep.delete(effect);}else{deps[ptr++]=dep;}// clear bits
dep.w&=~trackOpBit;dep.n&=~trackOpBit;}deps.length=ptr;}};const targetMap=new WeakMap();// The number of effects currently being tracked recursively.
let effectTrackDepth=0;let trackOpBit=1;/**
             * The bitwise track markers support at most 30 levels of recursion.
             * This value is chosen to enable modern JS engines to use a SMI on all platforms.
             * When recursion depth is greater, fall back to using a full cleanup.
             */const maxMarkerBits=30;const effectStack=[];let activeEffect;const ITERATE_KEY=Symbol('');const MAP_KEY_ITERATE_KEY=Symbol('');class ReactiveEffect{constructor(fn,scheduler=null,scope){this.fn=fn;this.scheduler=scheduler;this.active=true;this.deps=[];recordEffectScope(this,scope);}run(){if(!this.active){return this.fn();}if(!effectStack.length||!effectStack.includes(this)){try{effectStack.push(activeEffect=this);enableTracking();trackOpBit=1<<++effectTrackDepth;if(effectTrackDepth<=maxMarkerBits){initDepMarkers(this);}else{cleanupEffect(this);}return this.fn();}finally{if(effectTrackDepth<=maxMarkerBits){finalizeDepMarkers(this);}trackOpBit=1<<--effectTrackDepth;resetTracking();effectStack.pop();const n=effectStack.length;activeEffect=n>0?effectStack[n-1]:undefined;}}}stop(){if(this.active){cleanupEffect(this);if(this.onStop){this.onStop();}this.active=false;}}}function cleanupEffect(effect){const{deps}=effect;if(deps.length){for(let i=0;i<deps.length;i++){deps[i].delete(effect);}deps.length=0;}}let shouldTrack=true;const trackStack=[];function pauseTracking(){trackStack.push(shouldTrack);shouldTrack=false;}function enableTracking(){trackStack.push(shouldTrack);shouldTrack=true;}function resetTracking(){const last=trackStack.pop();shouldTrack=last===undefined?true:last;}function track(target,type,key){if(!isTracking()){return;}let depsMap=targetMap.get(target);if(!depsMap){targetMap.set(target,depsMap=new Map());}let dep=depsMap.get(key);if(!dep){depsMap.set(key,dep=createDep());}trackEffects(dep);}function isTracking(){return shouldTrack&&activeEffect!==undefined;}function trackEffects(dep,debuggerEventExtraInfo){let shouldTrack=false;if(effectTrackDepth<=maxMarkerBits){if(!newTracked(dep)){dep.n|=trackOpBit;// set newly tracked
shouldTrack=!wasTracked(dep);}}else{// Full cleanup mode.
shouldTrack=!dep.has(activeEffect);}if(shouldTrack){dep.add(activeEffect);activeEffect.deps.push(dep);}}function trigger$1(target,type,key,newValue,oldValue,oldTarget){const depsMap=targetMap.get(target);if(!depsMap){// never been tracked
return;}let deps=[];if(type==="clear"/* CLEAR */){// collection being cleared
// trigger all effects for target
deps=[...depsMap.values()];}else if(key==='length'&&isArray$1(target)){depsMap.forEach((dep,key)=>{if(key==='length'||key>=newValue){deps.push(dep);}});}else{// schedule runs for SET | ADD | DELETE
if(key!==void 0){deps.push(depsMap.get(key));}// also run for iteration key on ADD | DELETE | Map.SET
switch(type){case"add"/* ADD */:if(!isArray$1(target)){deps.push(depsMap.get(ITERATE_KEY));if(isMap(target)){deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));}}else if(isIntegerKey(key)){// new index added to array -> length changes
deps.push(depsMap.get('length'));}break;case"delete"/* DELETE */:if(!isArray$1(target)){deps.push(depsMap.get(ITERATE_KEY));if(isMap(target)){deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));}}break;case"set"/* SET */:if(isMap(target)){deps.push(depsMap.get(ITERATE_KEY));}break;}}if(deps.length===1){if(deps[0]){{triggerEffects(deps[0]);}}}else{const effects=[];for(const dep of deps){if(dep){effects.push(...dep);}}{triggerEffects(createDep(effects));}}}function triggerEffects(dep,debuggerEventExtraInfo){// spread into array for stabilization
for(const effect of isArray$1(dep)?dep:[...dep]){if(effect!==activeEffect||effect.allowRecurse){if(effect.scheduler){effect.scheduler();}else{effect.run();}}}}const isNonTrackableKeys=/*#__PURE__*/makeMap(`__proto__,__v_isRef,__isVue`);const builtInSymbols=new Set(Object.getOwnPropertyNames(Symbol).map(key=>Symbol[key]).filter(isSymbol));const get=/*#__PURE__*/createGetter();const shallowGet=/*#__PURE__*/createGetter(false,true);const readonlyGet=/*#__PURE__*/createGetter(true);const arrayInstrumentations=/*#__PURE__*/createArrayInstrumentations();function createArrayInstrumentations(){const instrumentations={};['includes','indexOf','lastIndexOf'].forEach(key=>{instrumentations[key]=function(...args){const arr=toRaw(this);for(let i=0,l=this.length;i<l;i++){track(arr,"get"/* GET */,i+'');}// we run the method using the original args first (which may be reactive)
const res=arr[key](...args);if(res===-1||res===false){// if that didn't work, run it again using raw values.
return arr[key](...args.map(toRaw));}else{return res;}};});['push','pop','shift','unshift','splice'].forEach(key=>{instrumentations[key]=function(...args){pauseTracking();const res=toRaw(this)[key].apply(this,args);resetTracking();return res;};});return instrumentations;}function createGetter(isReadonly=false,shallow=false){return function get(target,key,receiver){if(key==="__v_isReactive"/* IS_REACTIVE */){return!isReadonly;}else if(key==="__v_isReadonly"/* IS_READONLY */){return isReadonly;}else if(key==="__v_isShallow"/* IS_SHALLOW */){return shallow;}else if(key==="__v_raw"/* RAW */&&receiver===(isReadonly?shallow?shallowReadonlyMap:readonlyMap:shallow?shallowReactiveMap:reactiveMap).get(target)){return target;}const targetIsArray=isArray$1(target);if(!isReadonly&&targetIsArray&&hasOwn(arrayInstrumentations,key)){return Reflect.get(arrayInstrumentations,key,receiver);}const res=Reflect.get(target,key,receiver);if(isSymbol(key)?builtInSymbols.has(key):isNonTrackableKeys(key)){return res;}if(!isReadonly){track(target,"get"/* GET */,key);}if(shallow){return res;}if(isRef(res)){// ref unwrapping - does not apply for Array + integer key.
const shouldUnwrap=!targetIsArray||!isIntegerKey(key);return shouldUnwrap?res.value:res;}if(isObject$1(res)){// Convert returned value into a proxy as well. we do the isObject check
// here to avoid invalid value warning. Also need to lazy access readonly
// and reactive here to avoid circular dependency.
return isReadonly?readonly(res):reactive(res);}return res;};}const set=/*#__PURE__*/createSetter();const shallowSet=/*#__PURE__*/createSetter(true);function createSetter(shallow=false){return function set(target,key,value,receiver){let oldValue=target[key];if(isReadonly(oldValue)&&isRef(oldValue)&&!isRef(value)){return false;}if(!shallow&&!isReadonly(value)){if(!isShallow(value)){value=toRaw(value);oldValue=toRaw(oldValue);}if(!isArray$1(target)&&isRef(oldValue)&&!isRef(value)){oldValue.value=value;return true;}}const hadKey=isArray$1(target)&&isIntegerKey(key)?Number(key)<target.length:hasOwn(target,key);const result=Reflect.set(target,key,value,receiver);// don't trigger if target is something up in the prototype chain of original
if(target===toRaw(receiver)){if(!hadKey){trigger$1(target,"add"/* ADD */,key,value);}else if(hasChanged(value,oldValue)){trigger$1(target,"set"/* SET */,key,value);}}return result;};}function deleteProperty(target,key){const hadKey=hasOwn(target,key);target[key];const result=Reflect.deleteProperty(target,key);if(result&&hadKey){trigger$1(target,"delete"/* DELETE */,key,undefined);}return result;}function has(target,key){const result=Reflect.has(target,key);if(!isSymbol(key)||!builtInSymbols.has(key)){track(target,"has"/* HAS */,key);}return result;}function ownKeys(target){track(target,"iterate"/* ITERATE */,isArray$1(target)?'length':ITERATE_KEY);return Reflect.ownKeys(target);}const mutableHandlers={get,set,deleteProperty,has,ownKeys};const readonlyHandlers={get:readonlyGet,set(target,key){return true;},deleteProperty(target,key){return true;}};const shallowReactiveHandlers=/*#__PURE__*/extend$1({},mutableHandlers,{get:shallowGet,set:shallowSet});const toShallow=value=>value;const getProto=v=>Reflect.getPrototypeOf(v);function get$1(target,key,isReadonly=false,isShallow=false){// #1772: readonly(reactive(Map)) should return readonly + reactive version
// of the value
target=target["__v_raw"/* RAW */];const rawTarget=toRaw(target);const rawKey=toRaw(key);if(key!==rawKey){!isReadonly&&track(rawTarget,"get"/* GET */,key);}!isReadonly&&track(rawTarget,"get"/* GET */,rawKey);const{has}=getProto(rawTarget);const wrap=isShallow?toShallow:isReadonly?toReadonly:toReactive;if(has.call(rawTarget,key)){return wrap(target.get(key));}else if(has.call(rawTarget,rawKey)){return wrap(target.get(rawKey));}else if(target!==rawTarget){// #3602 readonly(reactive(Map))
// ensure that the nested reactive `Map` can do tracking for itself
target.get(key);}}function has$1(key,isReadonly=false){const target=this["__v_raw"/* RAW */];const rawTarget=toRaw(target);const rawKey=toRaw(key);if(key!==rawKey){!isReadonly&&track(rawTarget,"has"/* HAS */,key);}!isReadonly&&track(rawTarget,"has"/* HAS */,rawKey);return key===rawKey?target.has(key):target.has(key)||target.has(rawKey);}function size(target,isReadonly=false){target=target["__v_raw"/* RAW */];!isReadonly&&track(toRaw(target),"iterate"/* ITERATE */,ITERATE_KEY);return Reflect.get(target,'size',target);}function add(value){value=toRaw(value);const target=toRaw(this);const proto=getProto(target);const hadKey=proto.has.call(target,value);if(!hadKey){target.add(value);trigger$1(target,"add"/* ADD */,value,value);}return this;}function set$1(key,value){value=toRaw(value);const target=toRaw(this);const{has,get}=getProto(target);let hadKey=has.call(target,key);if(!hadKey){key=toRaw(key);hadKey=has.call(target,key);}const oldValue=get.call(target,key);target.set(key,value);if(!hadKey){trigger$1(target,"add"/* ADD */,key,value);}else if(hasChanged(value,oldValue)){trigger$1(target,"set"/* SET */,key,value);}return this;}function deleteEntry(key){const target=toRaw(this);const{has,get}=getProto(target);let hadKey=has.call(target,key);if(!hadKey){key=toRaw(key);hadKey=has.call(target,key);}get?get.call(target,key):undefined;// forward the operation before queueing reactions
const result=target.delete(key);if(hadKey){trigger$1(target,"delete"/* DELETE */,key,undefined);}return result;}function clear(){const target=toRaw(this);const hadItems=target.size!==0;// forward the operation before queueing reactions
const result=target.clear();if(hadItems){trigger$1(target,"clear"/* CLEAR */,undefined,undefined);}return result;}function createForEach(isReadonly,isShallow){return function forEach(callback,thisArg){const observed=this;const target=observed["__v_raw"/* RAW */];const rawTarget=toRaw(target);const wrap=isShallow?toShallow:isReadonly?toReadonly:toReactive;!isReadonly&&track(rawTarget,"iterate"/* ITERATE */,ITERATE_KEY);return target.forEach((value,key)=>{// important: make sure the callback is
// 1. invoked with the reactive map as `this` and 3rd arg
// 2. the value received should be a corresponding reactive/readonly.
return callback.call(thisArg,wrap(value),wrap(key),observed);});};}function createIterableMethod(method,isReadonly,isShallow){return function(...args){const target=this["__v_raw"/* RAW */];const rawTarget=toRaw(target);const targetIsMap=isMap(rawTarget);const isPair=method==='entries'||method===Symbol.iterator&&targetIsMap;const isKeyOnly=method==='keys'&&targetIsMap;const innerIterator=target[method](...args);const wrap=isShallow?toShallow:isReadonly?toReadonly:toReactive;!isReadonly&&track(rawTarget,"iterate"/* ITERATE */,isKeyOnly?MAP_KEY_ITERATE_KEY:ITERATE_KEY);// return a wrapped iterator which returns observed versions of the
// values emitted from the real iterator
return{// iterator protocol
next(){const{value,done}=innerIterator.next();return done?{value,done}:{value:isPair?[wrap(value[0]),wrap(value[1])]:wrap(value),done};},// iterable protocol
[Symbol.iterator](){return this;}};};}function createReadonlyMethod(type){return function(...args){return type==="delete"/* DELETE */?false:this;};}function createInstrumentations(){const mutableInstrumentations={get(key){return get$1(this,key);},get size(){return size(this);},has:has$1,add,set:set$1,delete:deleteEntry,clear,forEach:createForEach(false,false)};const shallowInstrumentations={get(key){return get$1(this,key,false,true);},get size(){return size(this);},has:has$1,add,set:set$1,delete:deleteEntry,clear,forEach:createForEach(false,true)};const readonlyInstrumentations={get(key){return get$1(this,key,true);},get size(){return size(this,true);},has(key){return has$1.call(this,key,true);},add:createReadonlyMethod("add"/* ADD */),set:createReadonlyMethod("set"/* SET */),delete:createReadonlyMethod("delete"/* DELETE */),clear:createReadonlyMethod("clear"/* CLEAR */),forEach:createForEach(true,false)};const shallowReadonlyInstrumentations={get(key){return get$1(this,key,true,true);},get size(){return size(this,true);},has(key){return has$1.call(this,key,true);},add:createReadonlyMethod("add"/* ADD */),set:createReadonlyMethod("set"/* SET */),delete:createReadonlyMethod("delete"/* DELETE */),clear:createReadonlyMethod("clear"/* CLEAR */),forEach:createForEach(true,true)};const iteratorMethods=['keys','values','entries',Symbol.iterator];iteratorMethods.forEach(method=>{mutableInstrumentations[method]=createIterableMethod(method,false,false);readonlyInstrumentations[method]=createIterableMethod(method,true,false);shallowInstrumentations[method]=createIterableMethod(method,false,true);shallowReadonlyInstrumentations[method]=createIterableMethod(method,true,true);});return[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations];}const[mutableInstrumentations,readonlyInstrumentations,shallowInstrumentations,shallowReadonlyInstrumentations]=/* #__PURE__*/createInstrumentations();function createInstrumentationGetter(isReadonly,shallow){const instrumentations=shallow?isReadonly?shallowReadonlyInstrumentations:shallowInstrumentations:isReadonly?readonlyInstrumentations:mutableInstrumentations;return(target,key,receiver)=>{if(key==="__v_isReactive"/* IS_REACTIVE */){return!isReadonly;}else if(key==="__v_isReadonly"/* IS_READONLY */){return isReadonly;}else if(key==="__v_raw"/* RAW */){return target;}return Reflect.get(hasOwn(instrumentations,key)&&key in target?instrumentations:target,key,receiver);};}const mutableCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(false,false)};const shallowCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(false,true)};const readonlyCollectionHandlers={get:/*#__PURE__*/createInstrumentationGetter(true,false)};const reactiveMap=new WeakMap();const shallowReactiveMap=new WeakMap();const readonlyMap=new WeakMap();const shallowReadonlyMap=new WeakMap();function targetTypeMap(rawType){switch(rawType){case'Object':case'Array':return 1/* COMMON */;case'Map':case'Set':case'WeakMap':case'WeakSet':return 2/* COLLECTION */;default:return 0/* INVALID */;}}function getTargetType(value){return value["__v_skip"/* SKIP */]||!Object.isExtensible(value)?0/* INVALID */:targetTypeMap(toRawType(value));}function reactive(target){// if trying to observe a readonly proxy, return the readonly version.
if(isReadonly(target)){return target;}return createReactiveObject(target,false,mutableHandlers,mutableCollectionHandlers,reactiveMap);}/**
             * Return a shallowly-reactive copy of the original object, where only the root
             * level properties are reactive. It also does not auto-unwrap refs (even at the
             * root level).
             */function shallowReactive(target){return createReactiveObject(target,false,shallowReactiveHandlers,shallowCollectionHandlers,shallowReactiveMap);}/**
             * Creates a readonly copy of the original object. Note the returned copy is not
             * made reactive, but `readonly` can be called on an already reactive object.
             */function readonly(target){return createReactiveObject(target,true,readonlyHandlers,readonlyCollectionHandlers,readonlyMap);}function createReactiveObject(target,isReadonly,baseHandlers,collectionHandlers,proxyMap){if(!isObject$1(target)){return target;}// target is already a Proxy, return it.
// exception: calling readonly() on a reactive object
if(target["__v_raw"/* RAW */]&&!(isReadonly&&target["__v_isReactive"/* IS_REACTIVE */])){return target;}// target already has corresponding Proxy
const existingProxy=proxyMap.get(target);if(existingProxy){return existingProxy;}// only a whitelist of value types can be observed.
const targetType=getTargetType(target);if(targetType===0/* INVALID */){return target;}const proxy=new Proxy(target,targetType===2/* COLLECTION */?collectionHandlers:baseHandlers);proxyMap.set(target,proxy);return proxy;}function isReactive(value){if(isReadonly(value)){return isReactive(value["__v_raw"/* RAW */]);}return!!(value&&value["__v_isReactive"/* IS_REACTIVE */]);}function isReadonly(value){return!!(value&&value["__v_isReadonly"/* IS_READONLY */]);}function isShallow(value){return!!(value&&value["__v_isShallow"/* IS_SHALLOW */]);}function isProxy(value){return isReactive(value)||isReadonly(value);}function toRaw(observed){const raw=observed&&observed["__v_raw"/* RAW */];return raw?toRaw(raw):observed;}function markRaw(value){def(value,"__v_skip"/* SKIP */,true);return value;}const toReactive=value=>isObject$1(value)?reactive(value):value;const toReadonly=value=>isObject$1(value)?readonly(value):value;function trackRefValue(ref){if(isTracking()){ref=toRaw(ref);if(!ref.dep){ref.dep=createDep();}{trackEffects(ref.dep);}}}function triggerRefValue(ref,newVal){ref=toRaw(ref);if(ref.dep){{triggerEffects(ref.dep);}}}function isRef(r){return Boolean(r&&r.__v_isRef===true);}function ref(value){return createRef(value,false);}function shallowRef(value){return createRef(value,true);}function createRef(rawValue,shallow){if(isRef(rawValue)){return rawValue;}return new RefImpl(rawValue,shallow);}class RefImpl{constructor(value,__v_isShallow){this.__v_isShallow=__v_isShallow;this.dep=undefined;this.__v_isRef=true;this._rawValue=__v_isShallow?value:toRaw(value);this._value=__v_isShallow?value:toReactive(value);}get value(){trackRefValue(this);return this._value;}set value(newVal){newVal=this.__v_isShallow?newVal:toRaw(newVal);if(hasChanged(newVal,this._rawValue)){this._rawValue=newVal;this._value=this.__v_isShallow?newVal:toReactive(newVal);triggerRefValue(this);}}}function unref(ref){return isRef(ref)?ref.value:ref;}const shallowUnwrapHandlers={get:(target,key,receiver)=>unref(Reflect.get(target,key,receiver)),set:(target,key,value,receiver)=>{const oldValue=target[key];if(isRef(oldValue)&&!isRef(value)){oldValue.value=value;return true;}else{return Reflect.set(target,key,value,receiver);}}};function proxyRefs(objectWithRefs){return isReactive(objectWithRefs)?objectWithRefs:new Proxy(objectWithRefs,shallowUnwrapHandlers);}function toRefs(object){const ret=isArray$1(object)?new Array(object.length):{};for(const key in object){ret[key]=toRef(object,key);}return ret;}class ObjectRefImpl{constructor(_object,_key,_defaultValue){this._object=_object;this._key=_key;this._defaultValue=_defaultValue;this.__v_isRef=true;}get value(){const val=this._object[this._key];return val===undefined?this._defaultValue:val;}set value(newVal){this._object[this._key]=newVal;}}function toRef(object,key,defaultValue){const val=object[key];return isRef(val)?val:new ObjectRefImpl(object,key,defaultValue);}class ComputedRefImpl{constructor(getter,_setter,isReadonly,isSSR){this._setter=_setter;this.dep=undefined;this.__v_isRef=true;this._dirty=true;this.effect=new ReactiveEffect(getter,()=>{if(!this._dirty){this._dirty=true;triggerRefValue(this);}});this.effect.computed=this;this.effect.active=this._cacheable=!isSSR;this["__v_isReadonly"/* IS_READONLY */]=isReadonly;}get value(){// the computed ref may get wrapped by other proxies e.g. readonly() #3376
const self=toRaw(this);trackRefValue(self);if(self._dirty||!self._cacheable){self._dirty=false;self._value=self.effect.run();}return self._value;}set value(newValue){this._setter(newValue);}}function computed$1(getterOrOptions,debugOptions,isSSR=false){let getter;let setter;const onlyGetter=isFunction$1(getterOrOptions);if(onlyGetter){getter=getterOrOptions;setter=NOOP;}else{getter=getterOrOptions.get;setter=getterOrOptions.set;}const cRef=new ComputedRefImpl(getter,setter,onlyGetter||!setter,isSSR);return cRef;}Promise.resolve();function callWithErrorHandling(fn,instance,type,args){let res;try{res=args?fn(...args):fn();}catch(err){handleError(err,instance,type);}return res;}function callWithAsyncErrorHandling(fn,instance,type,args){if(isFunction$1(fn)){const res=callWithErrorHandling(fn,instance,type,args);if(res&&isPromise(res)){res.catch(err=>{handleError(err,instance,type);});}return res;}const values=[];for(let i=0;i<fn.length;i++){values.push(callWithAsyncErrorHandling(fn[i],instance,type,args));}return values;}function handleError(err,instance,type,throwInDev=true){const contextVNode=instance?instance.vnode:null;if(instance){let cur=instance.parent;// the exposed instance is the render proxy to keep it consistent with 2.x
const exposedInstance=instance.proxy;// in production the hook receives only the error code
const errorInfo=type;while(cur){const errorCapturedHooks=cur.ec;if(errorCapturedHooks){for(let i=0;i<errorCapturedHooks.length;i++){if(errorCapturedHooks[i](err,exposedInstance,errorInfo)===false){return;}}}cur=cur.parent;}// app-level handling
const appErrorHandler=instance.appContext.config.errorHandler;if(appErrorHandler){callWithErrorHandling(appErrorHandler,null,10/* APP_ERROR_HANDLER */,[err,exposedInstance,errorInfo]);return;}}logError(err,type,contextVNode,throwInDev);}function logError(err,type,contextVNode,throwInDev=true){{// recover in prod to reduce the impact on end-user
console.error(err);}}let isFlushing=false;let isFlushPending=false;const queue=[];let flushIndex=0;const pendingPreFlushCbs=[];let activePreFlushCbs=null;let preFlushIndex=0;const pendingPostFlushCbs=[];let activePostFlushCbs=null;let postFlushIndex=0;const resolvedPromise=Promise.resolve();let currentFlushPromise=null;let currentPreFlushParentJob=null;function nextTick(fn){const p=currentFlushPromise||resolvedPromise;return fn?p.then(this?fn.bind(this):fn):p;}// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function findInsertionIndex(id){// the start index should be `flushIndex + 1`
let start=flushIndex+1;let end=queue.length;while(start<end){const middle=start+end>>>1;const middleJobId=getId(queue[middle]);middleJobId<id?start=middle+1:end=middle;}return start;}function queueJob(job){// the dedupe search uses the startIndex argument of Array.includes()
// by default the search index includes the current job that is being run
// so it cannot recursively trigger itself again.
// if the job is a watch() callback, the search will start with a +1 index to
// allow it recursively trigger itself - it is the user's responsibility to
// ensure it doesn't end up in an infinite loop.
if((!queue.length||!queue.includes(job,isFlushing&&job.allowRecurse?flushIndex+1:flushIndex))&&job!==currentPreFlushParentJob){if(job.id==null){queue.push(job);}else{queue.splice(findInsertionIndex(job.id),0,job);}queueFlush();}}function queueFlush(){if(!isFlushing&&!isFlushPending){isFlushPending=true;currentFlushPromise=resolvedPromise.then(flushJobs);}}function invalidateJob(job){const i=queue.indexOf(job);if(i>flushIndex){queue.splice(i,1);}}function queueCb(cb,activeQueue,pendingQueue,index){if(!isArray$1(cb)){if(!activeQueue||!activeQueue.includes(cb,cb.allowRecurse?index+1:index)){pendingQueue.push(cb);}}else{// if cb is an array, it is a component lifecycle hook which can only be
// triggered by a job, which is already deduped in the main queue, so
// we can skip duplicate check here to improve perf
pendingQueue.push(...cb);}queueFlush();}function queuePreFlushCb(cb){queueCb(cb,activePreFlushCbs,pendingPreFlushCbs,preFlushIndex);}function queuePostFlushCb(cb){queueCb(cb,activePostFlushCbs,pendingPostFlushCbs,postFlushIndex);}function flushPreFlushCbs(seen,parentJob=null){if(pendingPreFlushCbs.length){currentPreFlushParentJob=parentJob;activePreFlushCbs=[...new Set(pendingPreFlushCbs)];pendingPreFlushCbs.length=0;for(preFlushIndex=0;preFlushIndex<activePreFlushCbs.length;preFlushIndex++){activePreFlushCbs[preFlushIndex]();}activePreFlushCbs=null;preFlushIndex=0;currentPreFlushParentJob=null;// recursively flush until it drains
flushPreFlushCbs(seen,parentJob);}}function flushPostFlushCbs(seen){if(pendingPostFlushCbs.length){const deduped=[...new Set(pendingPostFlushCbs)];pendingPostFlushCbs.length=0;// #1947 already has active queue, nested flushPostFlushCbs call
if(activePostFlushCbs){activePostFlushCbs.push(...deduped);return;}activePostFlushCbs=deduped;activePostFlushCbs.sort((a,b)=>getId(a)-getId(b));for(postFlushIndex=0;postFlushIndex<activePostFlushCbs.length;postFlushIndex++){activePostFlushCbs[postFlushIndex]();}activePostFlushCbs=null;postFlushIndex=0;}}const getId=job=>job.id==null?Infinity:job.id;function flushJobs(seen){isFlushPending=false;isFlushing=true;flushPreFlushCbs(seen);// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child so its render effect will have smaller
//    priority number)
// 2. If a component is unmounted during a parent component's update,
//    its update can be skipped.
queue.sort((a,b)=>getId(a)-getId(b));// conditional usage of checkRecursiveUpdate must be determined out of
// try ... catch block since Rollup by default de-optimizes treeshaking
// inside try-catch. This can leave all warning code unshaked. Although
// they would get eventually shaken by a minifier like terser, some minifiers
// would fail to do that (e.g. https://github.com/evanw/esbuild/issues/1610)
const check=NOOP;try{for(flushIndex=0;flushIndex<queue.length;flushIndex++){const job=queue[flushIndex];if(job&&job.active!==false){if("production"!=='production'&&check(job));// console.log(`running:`, job.id)
callWithErrorHandling(job,null,14/* SCHEDULER */);}}}finally{flushIndex=0;queue.length=0;flushPostFlushCbs();isFlushing=false;currentFlushPromise=null;// some postFlushCb queued jobs!
// keep flushing until it drains.
if(queue.length||pendingPreFlushCbs.length||pendingPostFlushCbs.length){flushJobs(seen);}}}function emit$1(instance,event,...rawArgs){const props=instance.vnode.props||EMPTY_OBJ;let args=rawArgs;const isModelListener=event.startsWith('update:');// for v-model update:xxx events, apply modifiers on args
const modelArg=isModelListener&&event.slice(7);if(modelArg&&modelArg in props){const modifiersKey=`${modelArg==='modelValue'?'model':modelArg}Modifiers`;const{number,trim}=props[modifiersKey]||EMPTY_OBJ;if(trim){args=rawArgs.map(a=>a.trim());}else if(number){args=rawArgs.map(toNumber);}}let handlerName;let handler=props[handlerName=toHandlerKey(event)]||// also try camelCase event handler (#2249)
props[handlerName=toHandlerKey(camelize(event))];// for v-model update:xxx events, also trigger kebab-case equivalent
// for props passed via kebab-case
if(!handler&&isModelListener){handler=props[handlerName=toHandlerKey(hyphenate(event))];}if(handler){callWithAsyncErrorHandling(handler,instance,6/* COMPONENT_EVENT_HANDLER */,args);}const onceHandler=props[handlerName+`Once`];if(onceHandler){if(!instance.emitted){instance.emitted={};}else if(instance.emitted[handlerName]){return;}instance.emitted[handlerName]=true;callWithAsyncErrorHandling(onceHandler,instance,6/* COMPONENT_EVENT_HANDLER */,args);}}function normalizeEmitsOptions(comp,appContext,asMixin=false){const cache=appContext.emitsCache;const cached=cache.get(comp);if(cached!==undefined){return cached;}const raw=comp.emits;let normalized={};// apply mixin/extends props
let hasExtends=false;if(!isFunction$1(comp)){const extendEmits=raw=>{const normalizedFromExtend=normalizeEmitsOptions(raw,appContext,true);if(normalizedFromExtend){hasExtends=true;extend$1(normalized,normalizedFromExtend);}};if(!asMixin&&appContext.mixins.length){appContext.mixins.forEach(extendEmits);}if(comp.extends){extendEmits(comp.extends);}if(comp.mixins){comp.mixins.forEach(extendEmits);}}if(!raw&&!hasExtends){cache.set(comp,null);return null;}if(isArray$1(raw)){raw.forEach(key=>normalized[key]=null);}else{extend$1(normalized,raw);}cache.set(comp,normalized);return normalized;}// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function isEmitListener(options,key){if(!options||!isOn(key)){return false;}key=key.slice(2).replace(/Once$/,'');return hasOwn(options,key[0].toLowerCase()+key.slice(1))||hasOwn(options,hyphenate(key))||hasOwn(options,key);}/**
             * mark the current rendering instance for asset resolution (e.g.
             * resolveComponent, resolveDirective) during render
             */let currentRenderingInstance=null;let currentScopeId=null;/**
             * Note: rendering calls maybe nested. The function returns the parent rendering
             * instance if present, which should be restored after the render is done:
             *
             * ```js
             * const prev = setCurrentRenderingInstance(i)
             * // ...render
             * setCurrentRenderingInstance(prev)
             * ```
             */function setCurrentRenderingInstance(instance){const prev=currentRenderingInstance;currentRenderingInstance=instance;currentScopeId=instance&&instance.type.__scopeId||null;return prev;}/**
             * Set scope id when creating hoisted vnodes.
             * @private compiler helper
             */function pushScopeId(id){currentScopeId=id;}/**
             * Technically we no longer need this after 3.0.8 but we need to keep the same
             * API for backwards compat w/ code generated by compilers.
             * @private
             */function popScopeId(){currentScopeId=null;}/**
             * Wrap a slot function to memoize current rendering instance
             * @private compiler helper
             */function withCtx(fn,ctx=currentRenderingInstance,isNonScopedSlot// false only
){if(!ctx)return fn;// already normalized
if(fn._n){return fn;}const renderFnWithContext=(...args)=>{// If a user calls a compiled slot inside a template expression (#1745), it
// can mess up block tracking, so by default we disable block tracking and
// force bail out when invoking a compiled slot (indicated by the ._d flag).
// This isn't necessary if rendering a compiled `<slot>`, so we flip the
// ._d flag off when invoking the wrapped fn inside `renderSlot`.
if(renderFnWithContext._d){setBlockTracking(-1);}const prevInstance=setCurrentRenderingInstance(ctx);const res=fn(...args);setCurrentRenderingInstance(prevInstance);if(renderFnWithContext._d){setBlockTracking(1);}return res;};// mark normalized to avoid duplicated wrapping
renderFnWithContext._n=true;// mark this as compiled by default
// this is used in vnode.ts -> normalizeChildren() to set the slot
// rendering flag.
renderFnWithContext._c=true;// disable block tracking by default
renderFnWithContext._d=true;return renderFnWithContext;}function markAttrsAccessed(){}function renderComponentRoot(instance){const{type:Component,vnode,proxy,withProxy,props,propsOptions:[propsOptions],slots,attrs,emit,render,renderCache,data,setupState,ctx,inheritAttrs}=instance;let result;let fallthroughAttrs;const prev=setCurrentRenderingInstance(instance);try{if(vnode.shapeFlag&4/* STATEFUL_COMPONENT */){// withProxy is a proxy with a different `has` trap only for
// runtime-compiled render functions using `with` block.
const proxyToUse=withProxy||proxy;result=normalizeVNode(render.call(proxyToUse,proxyToUse,renderCache,props,setupState,data,ctx));fallthroughAttrs=attrs;}else{// functional
const render=Component;// in dev, mark attrs accessed if optional props (attrs === props)
if("production"!=='production'&&attrs===props);result=normalizeVNode(render.length>1?render(props,"production"!=='production'?{get attrs(){markAttrsAccessed();return attrs;},slots,emit}:{attrs,slots,emit}):render(props,null/* we know it doesn't need it */));fallthroughAttrs=Component.props?attrs:getFunctionalFallthrough(attrs);}}catch(err){blockStack.length=0;handleError(err,instance,1/* RENDER_FUNCTION */);result=createVNode(Comment);}// attr merging
// in dev mode, comments are preserved, and it's possible for a template
// to have comments along side the root element which makes it a fragment
let root=result;if(fallthroughAttrs&&inheritAttrs!==false){const keys=Object.keys(fallthroughAttrs);const{shapeFlag}=root;if(keys.length){if(shapeFlag&(1/* ELEMENT */|6/* COMPONENT */)){if(propsOptions&&keys.some(isModelListener)){// If a v-model listener (onUpdate:xxx) has a corresponding declared
// prop, it indicates this component expects to handle v-model and
// it should not fallthrough.
// related: #1543, #1643, #1989
fallthroughAttrs=filterModelListeners(fallthroughAttrs,propsOptions);}root=cloneVNode(root,fallthroughAttrs);}}}// inherit directives
if(vnode.dirs){root.dirs=root.dirs?root.dirs.concat(vnode.dirs):vnode.dirs;}// inherit transition data
if(vnode.transition){root.transition=vnode.transition;}{result=root;}setCurrentRenderingInstance(prev);return result;}const getFunctionalFallthrough=attrs=>{let res;for(const key in attrs){if(key==='class'||key==='style'||isOn(key)){(res||(res={}))[key]=attrs[key];}}return res;};const filterModelListeners=(attrs,props)=>{const res={};for(const key in attrs){if(!isModelListener(key)||!(key.slice(9)in props)){res[key]=attrs[key];}}return res;};function shouldUpdateComponent(prevVNode,nextVNode,optimized){const{props:prevProps,children:prevChildren,component}=prevVNode;const{props:nextProps,children:nextChildren,patchFlag}=nextVNode;const emits=component.emitsOptions;// force child update for runtime directive or transition on component vnode.
if(nextVNode.dirs||nextVNode.transition){return true;}if(optimized&&patchFlag>=0){if(patchFlag&1024/* DYNAMIC_SLOTS */){// slot content that references values that might have changed,
// e.g. in a v-for
return true;}if(patchFlag&16/* FULL_PROPS */){if(!prevProps){return!!nextProps;}// presence of this flag indicates props are always non-null
return hasPropsChanged(prevProps,nextProps,emits);}else if(patchFlag&8/* PROPS */){const dynamicProps=nextVNode.dynamicProps;for(let i=0;i<dynamicProps.length;i++){const key=dynamicProps[i];if(nextProps[key]!==prevProps[key]&&!isEmitListener(emits,key)){return true;}}}}else{// this path is only taken by manually written render functions
// so presence of any children leads to a forced update
if(prevChildren||nextChildren){if(!nextChildren||!nextChildren.$stable){return true;}}if(prevProps===nextProps){return false;}if(!prevProps){return!!nextProps;}if(!nextProps){return true;}return hasPropsChanged(prevProps,nextProps,emits);}return false;}function hasPropsChanged(prevProps,nextProps,emitsOptions){const nextKeys=Object.keys(nextProps);if(nextKeys.length!==Object.keys(prevProps).length){return true;}for(let i=0;i<nextKeys.length;i++){const key=nextKeys[i];if(nextProps[key]!==prevProps[key]&&!isEmitListener(emitsOptions,key)){return true;}}return false;}function updateHOCHostEl({vnode,parent},el// HostNode
){while(parent&&parent.subTree===vnode){(vnode=parent.vnode).el=el;parent=parent.parent;}}const isSuspense=type=>type.__isSuspense;function queueEffectWithSuspense(fn,suspense){if(suspense&&suspense.pendingBranch){if(isArray$1(fn)){suspense.effects.push(...fn);}else{suspense.effects.push(fn);}}else{queuePostFlushCb(fn);}}function provide(key,value){if(!currentInstance);else{let provides=currentInstance.provides;// by default an instance inherits its parent's provides object
// but when it needs to provide values of its own, it creates its
// own provides object using parent provides object as prototype.
// this way in `inject` we can simply look up injections from direct
// parent and let the prototype chain do the work.
const parentProvides=currentInstance.parent&&currentInstance.parent.provides;if(parentProvides===provides){provides=currentInstance.provides=Object.create(parentProvides);}// TS doesn't allow symbol as index type
provides[key]=value;}}function inject(key,defaultValue,treatDefaultAsFactory=false){// fallback to `currentRenderingInstance` so that this can be called in
// a functional component
const instance=currentInstance||currentRenderingInstance;if(instance){// #2400
// to support `app.use` plugins,
// fallback to appContext's `provides` if the instance is at root
const provides=instance.parent==null?instance.vnode.appContext&&instance.vnode.appContext.provides:instance.parent.provides;if(provides&&key in provides){// TS doesn't allow symbol as index type
return provides[key];}else if(arguments.length>1){return treatDefaultAsFactory&&isFunction$1(defaultValue)?defaultValue.call(instance.proxy):defaultValue;}else;}}// initial value for watchers to trigger on undefined initial values
const INITIAL_WATCHER_VALUE={};// implementation
function watch(source,cb,options){return doWatch(source,cb,options);}function doWatch(source,cb,{immediate,deep,flush,onTrack,onTrigger}=EMPTY_OBJ){const instance=currentInstance;let getter;let forceTrigger=false;let isMultiSource=false;if(isRef(source)){getter=()=>source.value;forceTrigger=isShallow(source);}else if(isReactive(source)){getter=()=>source;deep=true;}else if(isArray$1(source)){isMultiSource=true;forceTrigger=source.some(isReactive);getter=()=>source.map(s=>{if(isRef(s)){return s.value;}else if(isReactive(s)){return traverse(s);}else if(isFunction$1(s)){return callWithErrorHandling(s,instance,2/* WATCH_GETTER */);}else;});}else if(isFunction$1(source)){if(cb){// getter with cb
getter=()=>callWithErrorHandling(source,instance,2/* WATCH_GETTER */);}else{// no cb -> simple effect
getter=()=>{if(instance&&instance.isUnmounted){return;}if(cleanup){cleanup();}return callWithAsyncErrorHandling(source,instance,3/* WATCH_CALLBACK */,[onCleanup]);};}}else{getter=NOOP;}if(cb&&deep){const baseGetter=getter;getter=()=>traverse(baseGetter());}let cleanup;let onCleanup=fn=>{cleanup=effect.onStop=()=>{callWithErrorHandling(fn,instance,4/* WATCH_CLEANUP */);};};// in SSR there is no need to setup an actual effect, and it should be noop
// unless it's eager
if(isInSSRComponentSetup){// we will also not call the invalidate callback (+ runner is not set up)
onCleanup=NOOP;if(!cb){getter();}else if(immediate){callWithAsyncErrorHandling(cb,instance,3/* WATCH_CALLBACK */,[getter(),isMultiSource?[]:undefined,onCleanup]);}return NOOP;}let oldValue=isMultiSource?[]:INITIAL_WATCHER_VALUE;const job=()=>{if(!effect.active){return;}if(cb){// watch(source, cb)
const newValue=effect.run();if(deep||forceTrigger||(isMultiSource?newValue.some((v,i)=>hasChanged(v,oldValue[i])):hasChanged(newValue,oldValue))||false){// cleanup before running cb again
if(cleanup){cleanup();}callWithAsyncErrorHandling(cb,instance,3/* WATCH_CALLBACK */,[newValue,// pass undefined as the old value when it's changed for the first time
oldValue===INITIAL_WATCHER_VALUE?undefined:oldValue,onCleanup]);oldValue=newValue;}}else{// watchEffect
effect.run();}};// important: mark the job as a watcher callback so that scheduler knows
// it is allowed to self-trigger (#1727)
job.allowRecurse=!!cb;let scheduler;if(flush==='sync'){scheduler=job;// the scheduler function gets called directly
}else if(flush==='post'){scheduler=()=>queuePostRenderEffect(job,instance&&instance.suspense);}else{// default: 'pre'
scheduler=()=>{if(!instance||instance.isMounted){queuePreFlushCb(job);}else{// with 'pre' option, the first call must happen before
// the component is mounted so it is called synchronously.
job();}};}const effect=new ReactiveEffect(getter,scheduler);// initial run
if(cb){if(immediate){job();}else{oldValue=effect.run();}}else if(flush==='post'){queuePostRenderEffect(effect.run.bind(effect),instance&&instance.suspense);}else{effect.run();}return()=>{effect.stop();if(instance&&instance.scope){remove(instance.scope.effects,effect);}};}// this.$watch
function instanceWatch(source,value,options){const publicThis=this.proxy;const getter=isString$1(source)?source.includes('.')?createPathGetter(publicThis,source):()=>publicThis[source]:source.bind(publicThis,publicThis);let cb;if(isFunction$1(value)){cb=value;}else{cb=value.handler;options=value;}const cur=currentInstance;setCurrentInstance(this);const res=doWatch(getter,cb.bind(publicThis),options);if(cur){setCurrentInstance(cur);}else{unsetCurrentInstance();}return res;}function createPathGetter(ctx,path){const segments=path.split('.');return()=>{let cur=ctx;for(let i=0;i<segments.length&&cur;i++){cur=cur[segments[i]];}return cur;};}function traverse(value,seen){if(!isObject$1(value)||value["__v_skip"/* SKIP */]){return value;}seen=seen||new Set();if(seen.has(value)){return value;}seen.add(value);if(isRef(value)){traverse(value.value,seen);}else if(isArray$1(value)){for(let i=0;i<value.length;i++){traverse(value[i],seen);}}else if(isSet(value)||isMap(value)){value.forEach(v=>{traverse(v,seen);});}else if(isPlainObject$2(value)){for(const key in value){traverse(value[key],seen);}}return value;}function useTransitionState(){const state={isMounted:false,isLeaving:false,isUnmounting:false,leavingVNodes:new Map()};onMounted(()=>{state.isMounted=true;});onBeforeUnmount(()=>{state.isUnmounting=true;});return state;}const TransitionHookValidator=[Function,Array];const BaseTransitionImpl={name:`BaseTransition`,props:{mode:String,appear:Boolean,persisted:Boolean,// enter
onBeforeEnter:TransitionHookValidator,onEnter:TransitionHookValidator,onAfterEnter:TransitionHookValidator,onEnterCancelled:TransitionHookValidator,// leave
onBeforeLeave:TransitionHookValidator,onLeave:TransitionHookValidator,onAfterLeave:TransitionHookValidator,onLeaveCancelled:TransitionHookValidator,// appear
onBeforeAppear:TransitionHookValidator,onAppear:TransitionHookValidator,onAfterAppear:TransitionHookValidator,onAppearCancelled:TransitionHookValidator},setup(props,{slots}){const instance=getCurrentInstance();const state=useTransitionState();let prevTransitionKey;return()=>{const children=slots.default&&getTransitionRawChildren(slots.default(),true);if(!children||!children.length){return;}// there's no need to track reactivity for these props so use the raw
// props for a bit better perf
const rawProps=toRaw(props);const{mode}=rawProps;// at this point children has a guaranteed length of 1.
const child=children[0];if(state.isLeaving){return emptyPlaceholder(child);}// in the case of <transition><keep-alive/></transition>, we need to
// compare the type of the kept-alive children.
const innerChild=getKeepAliveChild(child);if(!innerChild){return emptyPlaceholder(child);}const enterHooks=resolveTransitionHooks(innerChild,rawProps,state,instance);setTransitionHooks(innerChild,enterHooks);const oldChild=instance.subTree;const oldInnerChild=oldChild&&getKeepAliveChild(oldChild);let transitionKeyChanged=false;const{getTransitionKey}=innerChild.type;if(getTransitionKey){const key=getTransitionKey();if(prevTransitionKey===undefined){prevTransitionKey=key;}else if(key!==prevTransitionKey){prevTransitionKey=key;transitionKeyChanged=true;}}// handle mode
if(oldInnerChild&&oldInnerChild.type!==Comment&&(!isSameVNodeType(innerChild,oldInnerChild)||transitionKeyChanged)){const leavingHooks=resolveTransitionHooks(oldInnerChild,rawProps,state,instance);// update old tree's hooks in case of dynamic transition
setTransitionHooks(oldInnerChild,leavingHooks);// switching between different views
if(mode==='out-in'){state.isLeaving=true;// return placeholder node and queue update when leave finishes
leavingHooks.afterLeave=()=>{state.isLeaving=false;instance.update();};return emptyPlaceholder(child);}else if(mode==='in-out'&&innerChild.type!==Comment){leavingHooks.delayLeave=(el,earlyRemove,delayedLeave)=>{const leavingVNodesCache=getLeavingNodesForType(state,oldInnerChild);leavingVNodesCache[String(oldInnerChild.key)]=oldInnerChild;// early removal callback
el._leaveCb=()=>{earlyRemove();el._leaveCb=undefined;delete enterHooks.delayedLeave;};enterHooks.delayedLeave=delayedLeave;};}}return child;};}};// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
const BaseTransition=BaseTransitionImpl;function getLeavingNodesForType(state,vnode){const{leavingVNodes}=state;let leavingVNodesCache=leavingVNodes.get(vnode.type);if(!leavingVNodesCache){leavingVNodesCache=Object.create(null);leavingVNodes.set(vnode.type,leavingVNodesCache);}return leavingVNodesCache;}// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function resolveTransitionHooks(vnode,props,state,instance){const{appear,mode,persisted=false,onBeforeEnter,onEnter,onAfterEnter,onEnterCancelled,onBeforeLeave,onLeave,onAfterLeave,onLeaveCancelled,onBeforeAppear,onAppear,onAfterAppear,onAppearCancelled}=props;const key=String(vnode.key);const leavingVNodesCache=getLeavingNodesForType(state,vnode);const callHook=(hook,args)=>{hook&&callWithAsyncErrorHandling(hook,instance,9/* TRANSITION_HOOK */,args);};const hooks={mode,persisted,beforeEnter(el){let hook=onBeforeEnter;if(!state.isMounted){if(appear){hook=onBeforeAppear||onBeforeEnter;}else{return;}}// for same element (v-show)
if(el._leaveCb){el._leaveCb(true/* cancelled */);}// for toggled element with same key (v-if)
const leavingVNode=leavingVNodesCache[key];if(leavingVNode&&isSameVNodeType(vnode,leavingVNode)&&leavingVNode.el._leaveCb){// force early removal (not cancelled)
leavingVNode.el._leaveCb();}callHook(hook,[el]);},enter(el){let hook=onEnter;let afterHook=onAfterEnter;let cancelHook=onEnterCancelled;if(!state.isMounted){if(appear){hook=onAppear||onEnter;afterHook=onAfterAppear||onAfterEnter;cancelHook=onAppearCancelled||onEnterCancelled;}else{return;}}let called=false;const done=el._enterCb=cancelled=>{if(called)return;called=true;if(cancelled){callHook(cancelHook,[el]);}else{callHook(afterHook,[el]);}if(hooks.delayedLeave){hooks.delayedLeave();}el._enterCb=undefined;};if(hook){hook(el,done);if(hook.length<=1){done();}}else{done();}},leave(el,remove){const key=String(vnode.key);if(el._enterCb){el._enterCb(true/* cancelled */);}if(state.isUnmounting){return remove();}callHook(onBeforeLeave,[el]);let called=false;const done=el._leaveCb=cancelled=>{if(called)return;called=true;remove();if(cancelled){callHook(onLeaveCancelled,[el]);}else{callHook(onAfterLeave,[el]);}el._leaveCb=undefined;if(leavingVNodesCache[key]===vnode){delete leavingVNodesCache[key];}};leavingVNodesCache[key]=vnode;if(onLeave){onLeave(el,done);if(onLeave.length<=1){done();}}else{done();}},clone(vnode){return resolveTransitionHooks(vnode,props,state,instance);}};return hooks;}// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function emptyPlaceholder(vnode){if(isKeepAlive(vnode)){vnode=cloneVNode(vnode);vnode.children=null;return vnode;}}function getKeepAliveChild(vnode){return isKeepAlive(vnode)?vnode.children?vnode.children[0]:undefined:vnode;}function setTransitionHooks(vnode,hooks){if(vnode.shapeFlag&6/* COMPONENT */&&vnode.component){setTransitionHooks(vnode.component.subTree,hooks);}else if(vnode.shapeFlag&128/* SUSPENSE */){vnode.ssContent.transition=hooks.clone(vnode.ssContent);vnode.ssFallback.transition=hooks.clone(vnode.ssFallback);}else{vnode.transition=hooks;}}function getTransitionRawChildren(children,keepComment=false){let ret=[];let keyedFragmentCount=0;for(let i=0;i<children.length;i++){const child=children[i];// handle fragment children case, e.g. v-for
if(child.type===Fragment){if(child.patchFlag&128/* KEYED_FRAGMENT */)keyedFragmentCount++;ret=ret.concat(getTransitionRawChildren(child.children,keepComment));}// comment placeholders should be skipped, e.g. v-if
else if(keepComment||child.type!==Comment){ret.push(child);}}// #1126 if a transition children list contains multiple sub fragments, these
// fragments will be merged into a flat children array. Since each v-for
// fragment may contain different static bindings inside, we need to de-op
// these children to force full diffs to ensure correct behavior.
if(keyedFragmentCount>1){for(let i=0;i<ret.length;i++){ret[i].patchFlag=-2/* BAIL */;}}return ret;}// implementation, close to no-op
function defineComponent(options){return isFunction$1(options)?{setup:options,name:options.name}:options;}const isAsyncWrapper=i=>!!i.type.__asyncLoader;const isKeepAlive=vnode=>vnode.type.__isKeepAlive;function onActivated(hook,target){registerKeepAliveHook(hook,"a"/* ACTIVATED */,target);}function onDeactivated(hook,target){registerKeepAliveHook(hook,"da"/* DEACTIVATED */,target);}function registerKeepAliveHook(hook,type,target=currentInstance){// cache the deactivate branch check wrapper for injected hooks so the same
// hook can be properly deduped by the scheduler. "__wdc" stands for "with
// deactivation check".
const wrappedHook=hook.__wdc||(hook.__wdc=()=>{// only fire the hook if the target instance is NOT in a deactivated branch.
let current=target;while(current){if(current.isDeactivated){return;}current=current.parent;}return hook();});injectHook(type,wrappedHook,target);// In addition to registering it on the target instance, we walk up the parent
// chain and register it on all ancestor instances that are keep-alive roots.
// This avoids the need to walk the entire component tree when invoking these
// hooks, and more importantly, avoids the need to track child components in
// arrays.
if(target){let current=target.parent;while(current&&current.parent){if(isKeepAlive(current.parent.vnode)){injectToKeepAliveRoot(wrappedHook,type,target,current);}current=current.parent;}}}function injectToKeepAliveRoot(hook,type,target,keepAliveRoot){// injectHook wraps the original for error handling, so make sure to remove
// the wrapped version.
const injected=injectHook(type,hook,keepAliveRoot,true/* prepend */);onUnmounted(()=>{remove(keepAliveRoot[type],injected);},target);}function injectHook(type,hook,target=currentInstance,prepend=false){if(target){const hooks=target[type]||(target[type]=[]);// cache the error handling wrapper for injected hooks so the same hook
// can be properly deduped by the scheduler. "__weh" stands for "with error
// handling".
const wrappedHook=hook.__weh||(hook.__weh=(...args)=>{if(target.isUnmounted){return;}// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
pauseTracking();// Set currentInstance during hook invocation.
// This assumes the hook does not synchronously trigger other hooks, which
// can only be false when the user does something really funky.
setCurrentInstance(target);const res=callWithAsyncErrorHandling(hook,target,type,args);unsetCurrentInstance();resetTracking();return res;});if(prepend){hooks.unshift(wrappedHook);}else{hooks.push(wrappedHook);}return wrappedHook;}}const createHook=lifecycle=>(hook,target=currentInstance)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!isInSSRComponentSetup||lifecycle==="sp"/* SERVER_PREFETCH */)&&injectHook(lifecycle,hook,target);const onBeforeMount=createHook("bm"/* BEFORE_MOUNT */);const onMounted=exports('H',createHook("m"/* MOUNTED */));const onBeforeUpdate=createHook("bu"/* BEFORE_UPDATE */);const onUpdated=createHook("u"/* UPDATED */);const onBeforeUnmount=createHook("bum"/* BEFORE_UNMOUNT */);const onUnmounted=createHook("um"/* UNMOUNTED */);const onServerPrefetch=createHook("sp"/* SERVER_PREFETCH */);const onRenderTriggered=createHook("rtg"/* RENDER_TRIGGERED */);const onRenderTracked=createHook("rtc"/* RENDER_TRACKED */);function onErrorCaptured(hook,target=currentInstance){injectHook("ec"/* ERROR_CAPTURED */,hook,target);}let shouldCacheAccess=true;function applyOptions(instance){const options=resolveMergedOptions(instance);const publicThis=instance.proxy;const ctx=instance.ctx;// do not cache property access on public proxy during state initialization
shouldCacheAccess=false;// call beforeCreate first before accessing other options since
// the hook may mutate resolved options (#2791)
if(options.beforeCreate){callHook(options.beforeCreate,instance,"bc"/* BEFORE_CREATE */);}const{// state
data:dataOptions,computed:computedOptions,methods,watch:watchOptions,provide:provideOptions,inject:injectOptions,// lifecycle
created,beforeMount,mounted,beforeUpdate,updated,activated,deactivated,beforeDestroy,beforeUnmount,destroyed,unmounted,render,renderTracked,renderTriggered,errorCaptured,serverPrefetch,// public API
expose,inheritAttrs,// assets
components,directives,filters}=options;const checkDuplicateProperties=null;// options initialization order (to be consistent with Vue 2):
// - props (already done outside of this function)
// - inject
// - methods
// - data (deferred since it relies on `this` access)
// - computed
// - watch (deferred since it relies on `this` access)
if(injectOptions){resolveInjections(injectOptions,ctx,checkDuplicateProperties,instance.appContext.config.unwrapInjectedRef);}if(methods){for(const key in methods){const methodHandler=methods[key];if(isFunction$1(methodHandler)){// In dev mode, we use the `createRenderContext` function to define
// methods to the proxy target, and those are read-only but
// reconfigurable, so it needs to be redefined here
{ctx[key]=methodHandler.bind(publicThis);}}}}if(dataOptions){const data=dataOptions.call(publicThis,publicThis);if(!isObject$1(data));else{instance.data=reactive(data);}}// state initialization complete at this point - start caching access
shouldCacheAccess=true;if(computedOptions){for(const key in computedOptions){const opt=computedOptions[key];const get=isFunction$1(opt)?opt.bind(publicThis,publicThis):isFunction$1(opt.get)?opt.get.bind(publicThis,publicThis):NOOP;const set=!isFunction$1(opt)&&isFunction$1(opt.set)?opt.set.bind(publicThis):NOOP;const c=computed({get,set});Object.defineProperty(ctx,key,{enumerable:true,configurable:true,get:()=>c.value,set:v=>c.value=v});}}if(watchOptions){for(const key in watchOptions){createWatcher(watchOptions[key],ctx,publicThis,key);}}if(provideOptions){const provides=isFunction$1(provideOptions)?provideOptions.call(publicThis):provideOptions;Reflect.ownKeys(provides).forEach(key=>{provide(key,provides[key]);});}if(created){callHook(created,instance,"c"/* CREATED */);}function registerLifecycleHook(register,hook){if(isArray$1(hook)){hook.forEach(_hook=>register(_hook.bind(publicThis)));}else if(hook){register(hook.bind(publicThis));}}registerLifecycleHook(onBeforeMount,beforeMount);registerLifecycleHook(onMounted,mounted);registerLifecycleHook(onBeforeUpdate,beforeUpdate);registerLifecycleHook(onUpdated,updated);registerLifecycleHook(onActivated,activated);registerLifecycleHook(onDeactivated,deactivated);registerLifecycleHook(onErrorCaptured,errorCaptured);registerLifecycleHook(onRenderTracked,renderTracked);registerLifecycleHook(onRenderTriggered,renderTriggered);registerLifecycleHook(onBeforeUnmount,beforeUnmount);registerLifecycleHook(onUnmounted,unmounted);registerLifecycleHook(onServerPrefetch,serverPrefetch);if(isArray$1(expose)){if(expose.length){const exposed=instance.exposed||(instance.exposed={});expose.forEach(key=>{Object.defineProperty(exposed,key,{get:()=>publicThis[key],set:val=>publicThis[key]=val});});}else if(!instance.exposed){instance.exposed={};}}// options that are handled when creating the instance but also need to be
// applied from mixins
if(render&&instance.render===NOOP){instance.render=render;}if(inheritAttrs!=null){instance.inheritAttrs=inheritAttrs;}// asset options.
if(components)instance.components=components;if(directives)instance.directives=directives;}function resolveInjections(injectOptions,ctx,checkDuplicateProperties=NOOP,unwrapRef=false){if(isArray$1(injectOptions)){injectOptions=normalizeInject(injectOptions);}for(const key in injectOptions){const opt=injectOptions[key];let injected;if(isObject$1(opt)){if('default'in opt){injected=inject(opt.from||key,opt.default,true/* treat default function as factory */);}else{injected=inject(opt.from||key);}}else{injected=inject(opt);}if(isRef(injected)){// TODO remove the check in 3.3
if(unwrapRef){Object.defineProperty(ctx,key,{enumerable:true,configurable:true,get:()=>injected.value,set:v=>injected.value=v});}else{ctx[key]=injected;}}else{ctx[key]=injected;}}}function callHook(hook,instance,type){callWithAsyncErrorHandling(isArray$1(hook)?hook.map(h=>h.bind(instance.proxy)):hook.bind(instance.proxy),instance,type);}function createWatcher(raw,ctx,publicThis,key){const getter=key.includes('.')?createPathGetter(publicThis,key):()=>publicThis[key];if(isString$1(raw)){const handler=ctx[raw];if(isFunction$1(handler)){watch(getter,handler);}}else if(isFunction$1(raw)){watch(getter,raw.bind(publicThis));}else if(isObject$1(raw)){if(isArray$1(raw)){raw.forEach(r=>createWatcher(r,ctx,publicThis,key));}else{const handler=isFunction$1(raw.handler)?raw.handler.bind(publicThis):ctx[raw.handler];if(isFunction$1(handler)){watch(getter,handler,raw);}}}else;}/**
             * Resolve merged options and cache it on the component.
             * This is done only once per-component since the merging does not involve
             * instances.
             */function resolveMergedOptions(instance){const base=instance.type;const{mixins,extends:extendsOptions}=base;const{mixins:globalMixins,optionsCache:cache,config:{optionMergeStrategies}}=instance.appContext;const cached=cache.get(base);let resolved;if(cached){resolved=cached;}else if(!globalMixins.length&&!mixins&&!extendsOptions){{resolved=base;}}else{resolved={};if(globalMixins.length){globalMixins.forEach(m=>mergeOptions$1(resolved,m,optionMergeStrategies,true));}mergeOptions$1(resolved,base,optionMergeStrategies);}cache.set(base,resolved);return resolved;}function mergeOptions$1(to,from,strats,asMixin=false){const{mixins,extends:extendsOptions}=from;if(extendsOptions){mergeOptions$1(to,extendsOptions,strats,true);}if(mixins){mixins.forEach(m=>mergeOptions$1(to,m,strats,true));}for(const key in from){if(asMixin&&key==='expose');else{const strat=internalOptionMergeStrats[key]||strats&&strats[key];to[key]=strat?strat(to[key],from[key]):from[key];}}return to;}const internalOptionMergeStrats={data:mergeDataFn,props:mergeObjectOptions,emits:mergeObjectOptions,// objects
methods:mergeObjectOptions,computed:mergeObjectOptions,// lifecycle
beforeCreate:mergeAsArray,created:mergeAsArray,beforeMount:mergeAsArray,mounted:mergeAsArray,beforeUpdate:mergeAsArray,updated:mergeAsArray,beforeDestroy:mergeAsArray,beforeUnmount:mergeAsArray,destroyed:mergeAsArray,unmounted:mergeAsArray,activated:mergeAsArray,deactivated:mergeAsArray,errorCaptured:mergeAsArray,serverPrefetch:mergeAsArray,// assets
components:mergeObjectOptions,directives:mergeObjectOptions,// watch
watch:mergeWatchOptions,// provide / inject
provide:mergeDataFn,inject:mergeInject};function mergeDataFn(to,from){if(!from){return to;}if(!to){return from;}return function mergedDataFn(){return extend$1(isFunction$1(to)?to.call(this,this):to,isFunction$1(from)?from.call(this,this):from);};}function mergeInject(to,from){return mergeObjectOptions(normalizeInject(to),normalizeInject(from));}function normalizeInject(raw){if(isArray$1(raw)){const res={};for(let i=0;i<raw.length;i++){res[raw[i]]=raw[i];}return res;}return raw;}function mergeAsArray(to,from){return to?[...new Set([].concat(to,from))]:from;}function mergeObjectOptions(to,from){return to?extend$1(extend$1(Object.create(null),to),from):from;}function mergeWatchOptions(to,from){if(!to)return from;if(!from)return to;const merged=extend$1(Object.create(null),to);for(const key in from){merged[key]=mergeAsArray(to[key],from[key]);}return merged;}function initProps(instance,rawProps,isStateful,// result of bitwise flag comparison
isSSR=false){const props={};const attrs={};def(attrs,InternalObjectKey,1);instance.propsDefaults=Object.create(null);setFullProps(instance,rawProps,props,attrs);// ensure all declared prop keys are present
for(const key in instance.propsOptions[0]){if(!(key in props)){props[key]=undefined;}}if(isStateful){// stateful
instance.props=isSSR?props:shallowReactive(props);}else{if(!instance.type.props){// functional w/ optional props, props === attrs
instance.props=attrs;}else{// functional w/ declared props
instance.props=props;}}instance.attrs=attrs;}function updateProps(instance,rawProps,rawPrevProps,optimized){const{props,attrs,vnode:{patchFlag}}=instance;const rawCurrentProps=toRaw(props);const[options]=instance.propsOptions;let hasAttrsChanged=false;if(// always force full diff in dev
// - #1942 if hmr is enabled with sfc component
// - vite#872 non-sfc component used by sfc component
(optimized||patchFlag>0)&&!(patchFlag&16/* FULL_PROPS */)){if(patchFlag&8/* PROPS */){// Compiler-generated props & no keys change, just set the updated
// the props.
const propsToUpdate=instance.vnode.dynamicProps;for(let i=0;i<propsToUpdate.length;i++){let key=propsToUpdate[i];// PROPS flag guarantees rawProps to be non-null
const value=rawProps[key];if(options){// attr / props separation was done on init and will be consistent
// in this code path, so just check if attrs have it.
if(hasOwn(attrs,key)){if(value!==attrs[key]){attrs[key]=value;hasAttrsChanged=true;}}else{const camelizedKey=camelize(key);props[camelizedKey]=resolvePropValue(options,rawCurrentProps,camelizedKey,value,instance,false/* isAbsent */);}}else{if(value!==attrs[key]){attrs[key]=value;hasAttrsChanged=true;}}}}}else{// full props update.
if(setFullProps(instance,rawProps,props,attrs)){hasAttrsChanged=true;}// in case of dynamic props, check if we need to delete keys from
// the props object
let kebabKey;for(const key in rawCurrentProps){if(!rawProps||// for camelCase
!hasOwn(rawProps,key)&&(// it's possible the original props was passed in as kebab-case
// and converted to camelCase (#955)
(kebabKey=hyphenate(key))===key||!hasOwn(rawProps,kebabKey))){if(options){if(rawPrevProps&&(// for camelCase
rawPrevProps[key]!==undefined||// for kebab-case
rawPrevProps[kebabKey]!==undefined)){props[key]=resolvePropValue(options,rawCurrentProps,key,undefined,instance,true/* isAbsent */);}}else{delete props[key];}}}// in the case of functional component w/o props declaration, props and
// attrs point to the same object so it should already have been updated.
if(attrs!==rawCurrentProps){for(const key in attrs){if(!rawProps||!hasOwn(rawProps,key)&&!false){delete attrs[key];hasAttrsChanged=true;}}}}// trigger updates for $attrs in case it's used in component slots
if(hasAttrsChanged){trigger$1(instance,"set"/* SET */,'$attrs');}}function setFullProps(instance,rawProps,props,attrs){const[options,needCastKeys]=instance.propsOptions;let hasAttrsChanged=false;let rawCastValues;if(rawProps){for(let key in rawProps){// key, ref are reserved and never passed down
if(isReservedProp(key)){continue;}const value=rawProps[key];// prop option names are camelized during normalization, so to support
// kebab -> camel conversion here we need to camelize the key.
let camelKey;if(options&&hasOwn(options,camelKey=camelize(key))){if(!needCastKeys||!needCastKeys.includes(camelKey)){props[camelKey]=value;}else{(rawCastValues||(rawCastValues={}))[camelKey]=value;}}else if(!isEmitListener(instance.emitsOptions,key)){if(!(key in attrs)||value!==attrs[key]){attrs[key]=value;hasAttrsChanged=true;}}}}if(needCastKeys){const rawCurrentProps=toRaw(props);const castValues=rawCastValues||EMPTY_OBJ;for(let i=0;i<needCastKeys.length;i++){const key=needCastKeys[i];props[key]=resolvePropValue(options,rawCurrentProps,key,castValues[key],instance,!hasOwn(castValues,key));}}return hasAttrsChanged;}function resolvePropValue(options,props,key,value,instance,isAbsent){const opt=options[key];if(opt!=null){const hasDefault=hasOwn(opt,'default');// default values
if(hasDefault&&value===undefined){const defaultValue=opt.default;if(opt.type!==Function&&isFunction$1(defaultValue)){const{propsDefaults}=instance;if(key in propsDefaults){value=propsDefaults[key];}else{setCurrentInstance(instance);value=propsDefaults[key]=defaultValue.call(null,props);unsetCurrentInstance();}}else{value=defaultValue;}}// boolean casting
if(opt[0/* shouldCast */]){if(isAbsent&&!hasDefault){value=false;}else if(opt[1/* shouldCastTrue */]&&(value===''||value===hyphenate(key))){value=true;}}}return value;}function normalizePropsOptions(comp,appContext,asMixin=false){const cache=appContext.propsCache;const cached=cache.get(comp);if(cached){return cached;}const raw=comp.props;const normalized={};const needCastKeys=[];// apply mixin/extends props
let hasExtends=false;if(!isFunction$1(comp)){const extendProps=raw=>{hasExtends=true;const[props,keys]=normalizePropsOptions(raw,appContext,true);extend$1(normalized,props);if(keys)needCastKeys.push(...keys);};if(!asMixin&&appContext.mixins.length){appContext.mixins.forEach(extendProps);}if(comp.extends){extendProps(comp.extends);}if(comp.mixins){comp.mixins.forEach(extendProps);}}if(!raw&&!hasExtends){cache.set(comp,EMPTY_ARR);return EMPTY_ARR;}if(isArray$1(raw)){for(let i=0;i<raw.length;i++){const normalizedKey=camelize(raw[i]);if(validatePropName(normalizedKey)){normalized[normalizedKey]=EMPTY_OBJ;}}}else if(raw){for(const key in raw){const normalizedKey=camelize(key);if(validatePropName(normalizedKey)){const opt=raw[key];const prop=normalized[normalizedKey]=isArray$1(opt)||isFunction$1(opt)?{type:opt}:opt;if(prop){const booleanIndex=getTypeIndex(Boolean,prop.type);const stringIndex=getTypeIndex(String,prop.type);prop[0/* shouldCast */]=booleanIndex>-1;prop[1/* shouldCastTrue */]=stringIndex<0||booleanIndex<stringIndex;// if the prop needs boolean casting or default value
if(booleanIndex>-1||hasOwn(prop,'default')){needCastKeys.push(normalizedKey);}}}}}const res=[normalized,needCastKeys];cache.set(comp,res);return res;}function validatePropName(key){if(key[0]!=='$'){return true;}return false;}// use function string name to check type constructors
// so that it works across vms / iframes.
function getType(ctor){const match=ctor&&ctor.toString().match(/^\s*function (\w+)/);return match?match[1]:ctor===null?'null':'';}function isSameType(a,b){return getType(a)===getType(b);}function getTypeIndex(type,expectedTypes){if(isArray$1(expectedTypes)){return expectedTypes.findIndex(t=>isSameType(t,type));}else if(isFunction$1(expectedTypes)){return isSameType(expectedTypes,type)?0:-1;}return-1;}const isInternalKey=key=>key[0]==='_'||key==='$stable';const normalizeSlotValue=value=>isArray$1(value)?value.map(normalizeVNode):[normalizeVNode(value)];const normalizeSlot$1=(key,rawSlot,ctx)=>{const normalized=withCtx((...args)=>{return normalizeSlotValue(rawSlot(...args));},ctx);normalized._c=false;return normalized;};const normalizeObjectSlots=(rawSlots,slots,instance)=>{const ctx=rawSlots._ctx;for(const key in rawSlots){if(isInternalKey(key))continue;const value=rawSlots[key];if(isFunction$1(value)){slots[key]=normalizeSlot$1(key,value,ctx);}else if(value!=null){const normalized=normalizeSlotValue(value);slots[key]=()=>normalized;}}};const normalizeVNodeSlots=(instance,children)=>{const normalized=normalizeSlotValue(children);instance.slots.default=()=>normalized;};const initSlots=(instance,children)=>{if(instance.vnode.shapeFlag&32/* SLOTS_CHILDREN */){const type=children._;if(type){// users can get the shallow readonly version of the slots object through `this.$slots`,
// we should avoid the proxy object polluting the slots of the internal instance
instance.slots=toRaw(children);// make compiler marker non-enumerable
def(children,'_',type);}else{normalizeObjectSlots(children,instance.slots={});}}else{instance.slots={};if(children){normalizeVNodeSlots(instance,children);}}def(instance.slots,InternalObjectKey,1);};const updateSlots=(instance,children,optimized)=>{const{vnode,slots}=instance;let needDeletionCheck=true;let deletionComparisonTarget=EMPTY_OBJ;if(vnode.shapeFlag&32/* SLOTS_CHILDREN */){const type=children._;if(type){// compiled slots.
if(optimized&&type===1/* STABLE */){// compiled AND stable.
// no need to update, and skip stale slots removal.
needDeletionCheck=false;}else{// compiled but dynamic (v-if/v-for on slots) - update slots, but skip
// normalization.
extend$1(slots,children);// #2893
// when rendering the optimized slots by manually written render function,
// we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
// i.e. let the `renderSlot` create the bailed Fragment
if(!optimized&&type===1/* STABLE */){delete slots._;}}}else{needDeletionCheck=!children.$stable;normalizeObjectSlots(children,slots);}deletionComparisonTarget=children;}else if(children){// non slot object children (direct value) passed to a component
normalizeVNodeSlots(instance,children);deletionComparisonTarget={default:1};}// delete stale slots
if(needDeletionCheck){for(const key in slots){if(!isInternalKey(key)&&!(key in deletionComparisonTarget)){delete slots[key];}}}};/**
             * Adds directives to a VNode.
             */function withDirectives(vnode,directives){const internalInstance=currentRenderingInstance;if(internalInstance===null){return vnode;}const instance=internalInstance.proxy;const bindings=vnode.dirs||(vnode.dirs=[]);for(let i=0;i<directives.length;i++){let[dir,value,arg,modifiers=EMPTY_OBJ]=directives[i];if(isFunction$1(dir)){dir={mounted:dir,updated:dir};}if(dir.deep){traverse(value);}bindings.push({dir,instance,value,oldValue:void 0,arg,modifiers});}return vnode;}function invokeDirectiveHook(vnode,prevVNode,instance,name){const bindings=vnode.dirs;const oldBindings=prevVNode&&prevVNode.dirs;for(let i=0;i<bindings.length;i++){const binding=bindings[i];if(oldBindings){binding.oldValue=oldBindings[i].value;}let hook=binding.dir[name];if(hook){// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
pauseTracking();callWithAsyncErrorHandling(hook,instance,8/* DIRECTIVE_HOOK */,[vnode.el,binding,vnode,prevVNode]);resetTracking();}}}function createAppContext(){return{app:null,config:{isNativeTag:NO,performance:false,globalProperties:{},optionMergeStrategies:{},errorHandler:undefined,warnHandler:undefined,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap(),propsCache:new WeakMap(),emitsCache:new WeakMap()};}let uid=0;function createAppAPI(render,hydrate){return function createApp(rootComponent,rootProps=null){if(rootProps!=null&&!isObject$1(rootProps)){rootProps=null;}const context=createAppContext();const installedPlugins=new Set();let isMounted=false;const app=context.app={_uid:uid++,_component:rootComponent,_props:rootProps,_container:null,_context:context,_instance:null,version,get config(){return context.config;},set config(v){},use(plugin,...options){if(installedPlugins.has(plugin));else if(plugin&&isFunction$1(plugin.install)){installedPlugins.add(plugin);plugin.install(app,...options);}else if(isFunction$1(plugin)){installedPlugins.add(plugin);plugin(app,...options);}else;return app;},mixin(mixin){{if(!context.mixins.includes(mixin)){context.mixins.push(mixin);}}return app;},component(name,component){if(!component){return context.components[name];}context.components[name]=component;return app;},directive(name,directive){if(!directive){return context.directives[name];}context.directives[name]=directive;return app;},mount(rootContainer,isHydrate,isSVG){if(!isMounted){const vnode=createVNode(rootComponent,rootProps);// store app context on the root VNode.
// this will be set on the root instance on initial mount.
vnode.appContext=context;if(isHydrate&&hydrate){hydrate(vnode,rootContainer);}else{render(vnode,rootContainer,isSVG);}isMounted=true;app._container=rootContainer;rootContainer.__vue_app__=app;return getExposeProxy(vnode.component)||vnode.component.proxy;}},unmount(){if(isMounted){render(null,app._container);delete app._container.__vue_app__;}},provide(key,value){// TypeScript doesn't allow symbols as index type
// https://github.com/Microsoft/TypeScript/issues/24587
context.provides[key]=value;return app;}};return app;};}/**
             * Function for handling a template ref
             */function setRef(rawRef,oldRawRef,parentSuspense,vnode,isUnmount=false){if(isArray$1(rawRef)){rawRef.forEach((r,i)=>setRef(r,oldRawRef&&(isArray$1(oldRawRef)?oldRawRef[i]:oldRawRef),parentSuspense,vnode,isUnmount));return;}if(isAsyncWrapper(vnode)&&!isUnmount){// when mounting async components, nothing needs to be done,
// because the template ref is forwarded to inner component
return;}const refValue=vnode.shapeFlag&4/* STATEFUL_COMPONENT */?getExposeProxy(vnode.component)||vnode.component.proxy:vnode.el;const value=isUnmount?null:refValue;const{i:owner,r:ref}=rawRef;const oldRef=oldRawRef&&oldRawRef.r;const refs=owner.refs===EMPTY_OBJ?owner.refs={}:owner.refs;const setupState=owner.setupState;// dynamic ref changed. unset old ref
if(oldRef!=null&&oldRef!==ref){if(isString$1(oldRef)){refs[oldRef]=null;if(hasOwn(setupState,oldRef)){setupState[oldRef]=null;}}else if(isRef(oldRef)){oldRef.value=null;}}if(isFunction$1(ref)){callWithErrorHandling(ref,owner,12/* FUNCTION_REF */,[value,refs]);}else{const _isString=isString$1(ref);const _isRef=isRef(ref);if(_isString||_isRef){const doSet=()=>{if(rawRef.f){const existing=_isString?refs[ref]:ref.value;if(isUnmount){isArray$1(existing)&&remove(existing,refValue);}else{if(!isArray$1(existing)){if(_isString){refs[ref]=[refValue];}else{ref.value=[refValue];if(rawRef.k)refs[rawRef.k]=ref.value;}}else if(!existing.includes(refValue)){existing.push(refValue);}}}else if(_isString){refs[ref]=value;if(hasOwn(setupState,ref)){setupState[ref]=value;}}else if(isRef(ref)){ref.value=value;if(rawRef.k)refs[rawRef.k]=value;}else;};if(value){doSet.id=-1;queuePostRenderEffect(doSet,parentSuspense);}else{doSet();}}}}const queuePostRenderEffect=queueEffectWithSuspense;/**
             * The createRenderer function accepts two generic arguments:
             * HostNode and HostElement, corresponding to Node and Element types in the
             * host environment. For example, for runtime-dom, HostNode would be the DOM
             * `Node` interface and HostElement would be the DOM `Element` interface.
             *
             * Custom renderers can pass in the platform specific types like this:
             *
             * ``` js
             * const { render, createApp } = createRenderer<Node, Element>({
             *   patchProp,
             *   ...nodeOps
             * })
             * ```
             */function createRenderer(options){return baseCreateRenderer(options);}// implementation
function baseCreateRenderer(options,createHydrationFns){const target=getGlobalThis();target.__VUE__=true;const{insert:hostInsert,remove:hostRemove,patchProp:hostPatchProp,createElement:hostCreateElement,createText:hostCreateText,createComment:hostCreateComment,setText:hostSetText,setElementText:hostSetElementText,parentNode:hostParentNode,nextSibling:hostNextSibling,setScopeId:hostSetScopeId=NOOP,cloneNode:hostCloneNode,insertStaticContent:hostInsertStaticContent}=options;// Note: functions inside this closure should use `const xxx = () => {}`
// style in order to prevent being inlined by minifiers.
const patch=(n1,n2,container,anchor=null,parentComponent=null,parentSuspense=null,isSVG=false,slotScopeIds=null,optimized=!!n2.dynamicChildren)=>{if(n1===n2){return;}// patching & not same type, unmount old tree
if(n1&&!isSameVNodeType(n1,n2)){anchor=getNextHostNode(n1);unmount(n1,parentComponent,parentSuspense,true);n1=null;}if(n2.patchFlag===-2/* BAIL */){optimized=false;n2.dynamicChildren=null;}const{type,ref,shapeFlag}=n2;switch(type){case Text:processText(n1,n2,container,anchor);break;case Comment:processCommentNode(n1,n2,container,anchor);break;case Static:if(n1==null){mountStaticNode(n2,container,anchor,isSVG);}break;case Fragment:processFragment(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);break;default:if(shapeFlag&1/* ELEMENT */){processElement(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else if(shapeFlag&6/* COMPONENT */){processComponent(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else if(shapeFlag&64/* TELEPORT */){type.process(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,internals);}else if(shapeFlag&128/* SUSPENSE */){type.process(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,internals);}else;}// set ref
if(ref!=null&&parentComponent){setRef(ref,n1&&n1.ref,parentSuspense,n2||n1,!n2);}};const processText=(n1,n2,container,anchor)=>{if(n1==null){hostInsert(n2.el=hostCreateText(n2.children),container,anchor);}else{const el=n2.el=n1.el;if(n2.children!==n1.children){hostSetText(el,n2.children);}}};const processCommentNode=(n1,n2,container,anchor)=>{if(n1==null){hostInsert(n2.el=hostCreateComment(n2.children||''),container,anchor);}else{// there's no support for dynamic comments
n2.el=n1.el;}};const mountStaticNode=(n2,container,anchor,isSVG)=>{[n2.el,n2.anchor]=hostInsertStaticContent(n2.children,container,anchor,isSVG,n2.el,n2.anchor);};const moveStaticNode=({el,anchor},container,nextSibling)=>{let next;while(el&&el!==anchor){next=hostNextSibling(el);hostInsert(el,container,nextSibling);el=next;}hostInsert(anchor,container,nextSibling);};const removeStaticNode=({el,anchor})=>{let next;while(el&&el!==anchor){next=hostNextSibling(el);hostRemove(el);el=next;}hostRemove(anchor);};const processElement=(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized)=>{isSVG=isSVG||n2.type==='svg';if(n1==null){mountElement(n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{patchElement(n1,n2,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}};const mountElement=(vnode,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized)=>{let el;let vnodeHook;const{type,props,shapeFlag,transition,patchFlag,dirs}=vnode;if(vnode.el&&hostCloneNode!==undefined&&patchFlag===-1/* HOISTED */){// If a vnode has non-null el, it means it's being reused.
// Only static vnodes can be reused, so its mounted DOM nodes should be
// exactly the same, and we can simply do a clone here.
// only do this in production since cloned trees cannot be HMR updated.
el=vnode.el=hostCloneNode(vnode.el);}else{el=vnode.el=hostCreateElement(vnode.type,isSVG,props&&props.is,props);// mount children first, since some props may rely on child content
// being already rendered, e.g. `<select value>`
if(shapeFlag&8/* TEXT_CHILDREN */){hostSetElementText(el,vnode.children);}else if(shapeFlag&16/* ARRAY_CHILDREN */){mountChildren(vnode.children,el,null,parentComponent,parentSuspense,isSVG&&type!=='foreignObject',slotScopeIds,optimized);}if(dirs){invokeDirectiveHook(vnode,null,parentComponent,'created');}// props
if(props){for(const key in props){if(key!=='value'&&!isReservedProp(key)){hostPatchProp(el,key,null,props[key],isSVG,vnode.children,parentComponent,parentSuspense,unmountChildren);}}/**
                             * Special case for setting value on DOM elements:
                             * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                             * - it needs to be forced (#1471)
                             * #2353 proposes adding another renderer option to configure this, but
                             * the properties affects are so finite it is worth special casing it
                             * here to reduce the complexity. (Special casing it also should not
                             * affect non-DOM renderers)
                             */if('value'in props){hostPatchProp(el,'value',null,props.value);}if(vnodeHook=props.onVnodeBeforeMount){invokeVNodeHook(vnodeHook,parentComponent,vnode);}}// scopeId
setScopeId(el,vnode,vnode.scopeId,slotScopeIds,parentComponent);}if(dirs){invokeDirectiveHook(vnode,null,parentComponent,'beforeMount');}// #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
// #1689 For inside suspense + suspense resolved case, just call it
const needCallTransitionHooks=(!parentSuspense||parentSuspense&&!parentSuspense.pendingBranch)&&transition&&!transition.persisted;if(needCallTransitionHooks){transition.beforeEnter(el);}hostInsert(el,container,anchor);if((vnodeHook=props&&props.onVnodeMounted)||needCallTransitionHooks||dirs){queuePostRenderEffect(()=>{vnodeHook&&invokeVNodeHook(vnodeHook,parentComponent,vnode);needCallTransitionHooks&&transition.enter(el);dirs&&invokeDirectiveHook(vnode,null,parentComponent,'mounted');},parentSuspense);}};const setScopeId=(el,vnode,scopeId,slotScopeIds,parentComponent)=>{if(scopeId){hostSetScopeId(el,scopeId);}if(slotScopeIds){for(let i=0;i<slotScopeIds.length;i++){hostSetScopeId(el,slotScopeIds[i]);}}if(parentComponent){let subTree=parentComponent.subTree;if(vnode===subTree){const parentVNode=parentComponent.vnode;setScopeId(el,parentVNode,parentVNode.scopeId,parentVNode.slotScopeIds,parentComponent.parent);}}};const mountChildren=(children,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,start=0)=>{for(let i=start;i<children.length;i++){const child=children[i]=optimized?cloneIfMounted(children[i]):normalizeVNode(children[i]);patch(null,child,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}};const patchElement=(n1,n2,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized)=>{const el=n2.el=n1.el;let{patchFlag,dynamicChildren,dirs}=n2;// #1426 take the old vnode's patch flag into account since user may clone a
// compiler-generated vnode, which de-opts to FULL_PROPS
patchFlag|=n1.patchFlag&16/* FULL_PROPS */;const oldProps=n1.props||EMPTY_OBJ;const newProps=n2.props||EMPTY_OBJ;let vnodeHook;// disable recurse in beforeUpdate hooks
parentComponent&&toggleRecurse(parentComponent,false);if(vnodeHook=newProps.onVnodeBeforeUpdate){invokeVNodeHook(vnodeHook,parentComponent,n2,n1);}if(dirs){invokeDirectiveHook(n2,n1,parentComponent,'beforeUpdate');}parentComponent&&toggleRecurse(parentComponent,true);const areChildrenSVG=isSVG&&n2.type!=='foreignObject';if(dynamicChildren){patchBlockChildren(n1.dynamicChildren,dynamicChildren,el,parentComponent,parentSuspense,areChildrenSVG,slotScopeIds);}else if(!optimized){// full diff
patchChildren(n1,n2,el,null,parentComponent,parentSuspense,areChildrenSVG,slotScopeIds,false);}if(patchFlag>0){// the presence of a patchFlag means this element's render code was
// generated by the compiler and can take the fast path.
// in this path old node and new node are guaranteed to have the same shape
// (i.e. at the exact same position in the source template)
if(patchFlag&16/* FULL_PROPS */){// element props contain dynamic keys, full diff needed
patchProps(el,n2,oldProps,newProps,parentComponent,parentSuspense,isSVG);}else{// class
// this flag is matched when the element has dynamic class bindings.
if(patchFlag&2/* CLASS */){if(oldProps.class!==newProps.class){hostPatchProp(el,'class',null,newProps.class,isSVG);}}// style
// this flag is matched when the element has dynamic style bindings
if(patchFlag&4/* STYLE */){hostPatchProp(el,'style',oldProps.style,newProps.style,isSVG);}// props
// This flag is matched when the element has dynamic prop/attr bindings
// other than class and style. The keys of dynamic prop/attrs are saved for
// faster iteration.
// Note dynamic keys like :[foo]="bar" will cause this optimization to
// bail out and go through a full diff because we need to unset the old key
if(patchFlag&8/* PROPS */){// if the flag is present then dynamicProps must be non-null
const propsToUpdate=n2.dynamicProps;for(let i=0;i<propsToUpdate.length;i++){const key=propsToUpdate[i];const prev=oldProps[key];const next=newProps[key];// #1471 force patch value
if(next!==prev||key==='value'){hostPatchProp(el,key,prev,next,isSVG,n1.children,parentComponent,parentSuspense,unmountChildren);}}}}// text
// This flag is matched when the element has only dynamic text children.
if(patchFlag&1/* TEXT */){if(n1.children!==n2.children){hostSetElementText(el,n2.children);}}}else if(!optimized&&dynamicChildren==null){// unoptimized, full diff
patchProps(el,n2,oldProps,newProps,parentComponent,parentSuspense,isSVG);}if((vnodeHook=newProps.onVnodeUpdated)||dirs){queuePostRenderEffect(()=>{vnodeHook&&invokeVNodeHook(vnodeHook,parentComponent,n2,n1);dirs&&invokeDirectiveHook(n2,n1,parentComponent,'updated');},parentSuspense);}};// The fast path for blocks.
const patchBlockChildren=(oldChildren,newChildren,fallbackContainer,parentComponent,parentSuspense,isSVG,slotScopeIds)=>{for(let i=0;i<newChildren.length;i++){const oldVNode=oldChildren[i];const newVNode=newChildren[i];// Determine the container (parent element) for the patch.
const container=// oldVNode may be an errored async setup() component inside Suspense
// which will not have a mounted element
oldVNode.el&&(// - In the case of a Fragment, we need to provide the actual parent
// of the Fragment itself so it can move its children.
oldVNode.type===Fragment||// - In the case of different nodes, there is going to be a replacement
// which also requires the correct parent container
!isSameVNodeType(oldVNode,newVNode)||// - In the case of a component, it could contain anything.
oldVNode.shapeFlag&(6/* COMPONENT */|64/* TELEPORT */))?hostParentNode(oldVNode.el):// In other cases, the parent container is not actually used so we
// just pass the block element here to avoid a DOM parentNode call.
fallbackContainer;patch(oldVNode,newVNode,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,true);}};const patchProps=(el,vnode,oldProps,newProps,parentComponent,parentSuspense,isSVG)=>{if(oldProps!==newProps){for(const key in newProps){// empty string is not valid prop
if(isReservedProp(key))continue;const next=newProps[key];const prev=oldProps[key];// defer patching value
if(next!==prev&&key!=='value'){hostPatchProp(el,key,prev,next,isSVG,vnode.children,parentComponent,parentSuspense,unmountChildren);}}if(oldProps!==EMPTY_OBJ){for(const key in oldProps){if(!isReservedProp(key)&&!(key in newProps)){hostPatchProp(el,key,oldProps[key],null,isSVG,vnode.children,parentComponent,parentSuspense,unmountChildren);}}}if('value'in newProps){hostPatchProp(el,'value',oldProps.value,newProps.value);}}};const processFragment=(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized)=>{const fragmentStartAnchor=n2.el=n1?n1.el:hostCreateText('');const fragmentEndAnchor=n2.anchor=n1?n1.anchor:hostCreateText('');let{patchFlag,dynamicChildren,slotScopeIds:fragmentSlotScopeIds}=n2;// check if this is a slot fragment with :slotted scope ids
if(fragmentSlotScopeIds){slotScopeIds=slotScopeIds?slotScopeIds.concat(fragmentSlotScopeIds):fragmentSlotScopeIds;}if(n1==null){hostInsert(fragmentStartAnchor,container,anchor);hostInsert(fragmentEndAnchor,container,anchor);// a fragment can only have array children
// since they are either generated by the compiler, or implicitly created
// from arrays.
mountChildren(n2.children,container,fragmentEndAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{if(patchFlag>0&&patchFlag&64/* STABLE_FRAGMENT */&&dynamicChildren&&// #2715 the previous fragment could've been a BAILed one as a result
// of renderSlot() with no valid children
n1.dynamicChildren){// a stable fragment (template root or <template v-for>) doesn't need to
// patch children order, but it may contain dynamicChildren.
patchBlockChildren(n1.dynamicChildren,dynamicChildren,container,parentComponent,parentSuspense,isSVG,slotScopeIds);if(// #2080 if the stable fragment has a key, it's a <template v-for> that may
//  get moved around. Make sure all root level vnodes inherit el.
// #2134 or if it's a component root, it may also get moved around
// as the component is being moved.
n2.key!=null||parentComponent&&n2===parentComponent.subTree){traverseStaticChildren(n1,n2,true/* shallow */);}}else{// keyed / unkeyed, or manual fragments.
// for keyed & unkeyed, since they are compiler generated from v-for,
// each child is guaranteed to be a block so the fragment will never
// have dynamicChildren.
patchChildren(n1,n2,container,fragmentEndAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}}};const processComponent=(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized)=>{n2.slotScopeIds=slotScopeIds;if(n1==null){if(n2.shapeFlag&512/* COMPONENT_KEPT_ALIVE */){parentComponent.ctx.activate(n2,container,anchor,isSVG,optimized);}else{mountComponent(n2,container,anchor,parentComponent,parentSuspense,isSVG,optimized);}}else{updateComponent(n1,n2,optimized);}};const mountComponent=(initialVNode,container,anchor,parentComponent,parentSuspense,isSVG,optimized)=>{const instance=initialVNode.component=createComponentInstance(initialVNode,parentComponent,parentSuspense);// inject renderer internals for keepAlive
if(isKeepAlive(initialVNode)){instance.ctx.renderer=internals;}// resolve props and slots for setup context
{setupComponent(instance);}// setup() is async. This component relies on async logic to be resolved
// before proceeding
if(instance.asyncDep){parentSuspense&&parentSuspense.registerDep(instance,setupRenderEffect);// Give it a placeholder if this is not hydration
// TODO handle self-defined fallback
if(!initialVNode.el){const placeholder=instance.subTree=createVNode(Comment);processCommentNode(null,placeholder,container,anchor);}return;}setupRenderEffect(instance,initialVNode,container,anchor,parentSuspense,isSVG,optimized);};const updateComponent=(n1,n2,optimized)=>{const instance=n2.component=n1.component;if(shouldUpdateComponent(n1,n2,optimized)){if(instance.asyncDep&&!instance.asyncResolved){updateComponentPreRender(instance,n2,optimized);return;}else{// normal update
instance.next=n2;// in case the child component is also queued, remove it to avoid
// double updating the same child component in the same flush.
invalidateJob(instance.update);// instance.update is the reactive effect.
instance.update();}}else{// no update needed. just copy over properties
n2.component=n1.component;n2.el=n1.el;instance.vnode=n2;}};const setupRenderEffect=(instance,initialVNode,container,anchor,parentSuspense,isSVG,optimized)=>{const componentUpdateFn=()=>{if(!instance.isMounted){let vnodeHook;const{el,props}=initialVNode;const{bm,m,parent}=instance;const isAsyncWrapperVNode=isAsyncWrapper(initialVNode);toggleRecurse(instance,false);// beforeMount hook
if(bm){invokeArrayFns(bm);}// onVnodeBeforeMount
if(!isAsyncWrapperVNode&&(vnodeHook=props&&props.onVnodeBeforeMount)){invokeVNodeHook(vnodeHook,parent,initialVNode);}toggleRecurse(instance,true);if(el&&hydrateNode){// vnode has adopted host node - perform hydration instead of mount.
const hydrateSubTree=()=>{instance.subTree=renderComponentRoot(instance);hydrateNode(el,instance.subTree,instance,parentSuspense,null);};if(isAsyncWrapperVNode){initialVNode.type.__asyncLoader().then(// note: we are moving the render call into an async callback,
// which means it won't track dependencies - but it's ok because
// a server-rendered async wrapper is already in resolved state
// and it will never need to change.
()=>!instance.isUnmounted&&hydrateSubTree());}else{hydrateSubTree();}}else{const subTree=instance.subTree=renderComponentRoot(instance);patch(null,subTree,container,anchor,instance,parentSuspense,isSVG);initialVNode.el=subTree.el;}// mounted hook
if(m){queuePostRenderEffect(m,parentSuspense);}// onVnodeMounted
if(!isAsyncWrapperVNode&&(vnodeHook=props&&props.onVnodeMounted)){const scopedInitialVNode=initialVNode;queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook,parent,scopedInitialVNode),parentSuspense);}// activated hook for keep-alive roots.
// #1742 activated hook must be accessed after first render
// since the hook may be injected by a child keep-alive
if(initialVNode.shapeFlag&256/* COMPONENT_SHOULD_KEEP_ALIVE */){instance.a&&queuePostRenderEffect(instance.a,parentSuspense);}instance.isMounted=true;// #2458: deference mount-only object parameters to prevent memleaks
initialVNode=container=anchor=null;}else{// updateComponent
// This is triggered by mutation of component's own state (next: null)
// OR parent calling processComponent (next: VNode)
let{next,bu,u,parent,vnode}=instance;let originNext=next;let vnodeHook;// Disallow component effect recursion during pre-lifecycle hooks.
toggleRecurse(instance,false);if(next){next.el=vnode.el;updateComponentPreRender(instance,next,optimized);}else{next=vnode;}// beforeUpdate hook
if(bu){invokeArrayFns(bu);}// onVnodeBeforeUpdate
if(vnodeHook=next.props&&next.props.onVnodeBeforeUpdate){invokeVNodeHook(vnodeHook,parent,next,vnode);}toggleRecurse(instance,true);const nextTree=renderComponentRoot(instance);const prevTree=instance.subTree;instance.subTree=nextTree;patch(prevTree,nextTree,// parent may have changed if it's in a teleport
hostParentNode(prevTree.el),// anchor may have changed if it's in a fragment
getNextHostNode(prevTree),instance,parentSuspense,isSVG);next.el=nextTree.el;if(originNext===null){// self-triggered update. In case of HOC, update parent component
// vnode el. HOC is indicated by parent instance's subTree pointing
// to child component's vnode
updateHOCHostEl(instance,nextTree.el);}// updated hook
if(u){queuePostRenderEffect(u,parentSuspense);}// onVnodeUpdated
if(vnodeHook=next.props&&next.props.onVnodeUpdated){queuePostRenderEffect(()=>invokeVNodeHook(vnodeHook,parent,next,vnode),parentSuspense);}}};// create reactive effect for rendering
const effect=instance.effect=new ReactiveEffect(componentUpdateFn,()=>queueJob(instance.update),instance.scope// track it in component's effect scope
);const update=instance.update=effect.run.bind(effect);update.id=instance.uid;// allowRecurse
// #1801, #2043 component render effects should allow recursive updates
toggleRecurse(instance,true);update();};const updateComponentPreRender=(instance,nextVNode,optimized)=>{nextVNode.component=instance;const prevProps=instance.vnode.props;instance.vnode=nextVNode;instance.next=null;updateProps(instance,nextVNode.props,prevProps,optimized);updateSlots(instance,nextVNode.children,optimized);pauseTracking();// props update may have triggered pre-flush watchers.
// flush them before the render update.
flushPreFlushCbs(undefined,instance.update);resetTracking();};const patchChildren=(n1,n2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized=false)=>{const c1=n1&&n1.children;const prevShapeFlag=n1?n1.shapeFlag:0;const c2=n2.children;const{patchFlag,shapeFlag}=n2;// fast path
if(patchFlag>0){if(patchFlag&128/* KEYED_FRAGMENT */){// this could be either fully-keyed or mixed (some keyed some not)
// presence of patchFlag means children are guaranteed to be arrays
patchKeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);return;}else if(patchFlag&256/* UNKEYED_FRAGMENT */){// unkeyed
patchUnkeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);return;}}// children has 3 possibilities: text, array or no children.
if(shapeFlag&8/* TEXT_CHILDREN */){// text children fast path
if(prevShapeFlag&16/* ARRAY_CHILDREN */){unmountChildren(c1,parentComponent,parentSuspense);}if(c2!==c1){hostSetElementText(container,c2);}}else{if(prevShapeFlag&16/* ARRAY_CHILDREN */){// prev children was array
if(shapeFlag&16/* ARRAY_CHILDREN */){// two arrays, cannot assume anything, do full diff
patchKeyedChildren(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{// no new children, just unmount old
unmountChildren(c1,parentComponent,parentSuspense,true);}}else{// prev children was text OR null
// new children is array OR null
if(prevShapeFlag&8/* TEXT_CHILDREN */){hostSetElementText(container,'');}// mount new if array
if(shapeFlag&16/* ARRAY_CHILDREN */){mountChildren(c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}}}};const patchUnkeyedChildren=(c1,c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized)=>{c1=c1||EMPTY_ARR;c2=c2||EMPTY_ARR;const oldLength=c1.length;const newLength=c2.length;const commonLength=Math.min(oldLength,newLength);let i;for(i=0;i<commonLength;i++){const nextChild=c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]);patch(c1[i],nextChild,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}if(oldLength>newLength){// remove old
unmountChildren(c1,parentComponent,parentSuspense,true,false,commonLength);}else{// mount new
mountChildren(c2,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized,commonLength);}};// can be all-keyed or mixed
const patchKeyedChildren=(c1,c2,container,parentAnchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized)=>{let i=0;const l2=c2.length;let e1=c1.length-1;// prev ending index
let e2=l2-1;// next ending index
// 1. sync from start
// (a b) c
// (a b) d e
while(i<=e1&&i<=e2){const n1=c1[i];const n2=c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]);if(isSameVNodeType(n1,n2)){patch(n1,n2,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{break;}i++;}// 2. sync from end
// a (b c)
// d e (b c)
while(i<=e1&&i<=e2){const n1=c1[e1];const n2=c2[e2]=optimized?cloneIfMounted(c2[e2]):normalizeVNode(c2[e2]);if(isSameVNodeType(n1,n2)){patch(n1,n2,container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else{break;}e1--;e2--;}// 3. common sequence + mount
// (a b)
// (a b) c
// i = 2, e1 = 1, e2 = 2
// (a b)
// c (a b)
// i = 0, e1 = -1, e2 = 0
if(i>e1){if(i<=e2){const nextPos=e2+1;const anchor=nextPos<l2?c2[nextPos].el:parentAnchor;while(i<=e2){patch(null,c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]),container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);i++;}}}// 4. common sequence + unmount
// (a b) c
// (a b)
// i = 2, e1 = 2, e2 = 1
// a (b c)
// (b c)
// i = 0, e1 = 0, e2 = -1
else if(i>e2){while(i<=e1){unmount(c1[i],parentComponent,parentSuspense,true);i++;}}// 5. unknown sequence
// [i ... e1 + 1]: a b [c d e] f g
// [i ... e2 + 1]: a b [e d c h] f g
// i = 2, e1 = 4, e2 = 5
else{const s1=i;// prev starting index
const s2=i;// next starting index
// 5.1 build key:index map for newChildren
const keyToNewIndexMap=new Map();for(i=s2;i<=e2;i++){const nextChild=c2[i]=optimized?cloneIfMounted(c2[i]):normalizeVNode(c2[i]);if(nextChild.key!=null){keyToNewIndexMap.set(nextChild.key,i);}}// 5.2 loop through old children left to be patched and try to patch
// matching nodes & remove nodes that are no longer present
let j;let patched=0;const toBePatched=e2-s2+1;let moved=false;// used to track whether any node has moved
let maxNewIndexSoFar=0;// works as Map<newIndex, oldIndex>
// Note that oldIndex is offset by +1
// and oldIndex = 0 is a special value indicating the new node has
// no corresponding old node.
// used for determining longest stable subsequence
const newIndexToOldIndexMap=new Array(toBePatched);for(i=0;i<toBePatched;i++)newIndexToOldIndexMap[i]=0;for(i=s1;i<=e1;i++){const prevChild=c1[i];if(patched>=toBePatched){// all new children have been patched so this can only be a removal
unmount(prevChild,parentComponent,parentSuspense,true);continue;}let newIndex;if(prevChild.key!=null){newIndex=keyToNewIndexMap.get(prevChild.key);}else{// key-less node, try to locate a key-less node of the same type
for(j=s2;j<=e2;j++){if(newIndexToOldIndexMap[j-s2]===0&&isSameVNodeType(prevChild,c2[j])){newIndex=j;break;}}}if(newIndex===undefined){unmount(prevChild,parentComponent,parentSuspense,true);}else{newIndexToOldIndexMap[newIndex-s2]=i+1;if(newIndex>=maxNewIndexSoFar){maxNewIndexSoFar=newIndex;}else{moved=true;}patch(prevChild,c2[newIndex],container,null,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);patched++;}}// 5.3 move and mount
// generate longest stable subsequence only when nodes have moved
const increasingNewIndexSequence=moved?getSequence(newIndexToOldIndexMap):EMPTY_ARR;j=increasingNewIndexSequence.length-1;// looping backwards so that we can use last patched node as anchor
for(i=toBePatched-1;i>=0;i--){const nextIndex=s2+i;const nextChild=c2[nextIndex];const anchor=nextIndex+1<l2?c2[nextIndex+1].el:parentAnchor;if(newIndexToOldIndexMap[i]===0){// mount new
patch(null,nextChild,container,anchor,parentComponent,parentSuspense,isSVG,slotScopeIds,optimized);}else if(moved){// move if:
// There is no stable subsequence (e.g. a reverse)
// OR current node is not among the stable sequence
if(j<0||i!==increasingNewIndexSequence[j]){move(nextChild,container,anchor,2/* REORDER */);}else{j--;}}}}};const move=(vnode,container,anchor,moveType,parentSuspense=null)=>{const{el,type,transition,children,shapeFlag}=vnode;if(shapeFlag&6/* COMPONENT */){move(vnode.component.subTree,container,anchor,moveType);return;}if(shapeFlag&128/* SUSPENSE */){vnode.suspense.move(container,anchor,moveType);return;}if(shapeFlag&64/* TELEPORT */){type.move(vnode,container,anchor,internals);return;}if(type===Fragment){hostInsert(el,container,anchor);for(let i=0;i<children.length;i++){move(children[i],container,anchor,moveType);}hostInsert(vnode.anchor,container,anchor);return;}if(type===Static){moveStaticNode(vnode,container,anchor);return;}// single nodes
const needTransition=moveType!==2/* REORDER */&&shapeFlag&1/* ELEMENT */&&transition;if(needTransition){if(moveType===0/* ENTER */){transition.beforeEnter(el);hostInsert(el,container,anchor);queuePostRenderEffect(()=>transition.enter(el),parentSuspense);}else{const{leave,delayLeave,afterLeave}=transition;const remove=()=>hostInsert(el,container,anchor);const performLeave=()=>{leave(el,()=>{remove();afterLeave&&afterLeave();});};if(delayLeave){delayLeave(el,remove,performLeave);}else{performLeave();}}}else{hostInsert(el,container,anchor);}};const unmount=(vnode,parentComponent,parentSuspense,doRemove=false,optimized=false)=>{const{type,props,ref,children,dynamicChildren,shapeFlag,patchFlag,dirs}=vnode;// unset ref
if(ref!=null){setRef(ref,null,parentSuspense,vnode,true);}if(shapeFlag&256/* COMPONENT_SHOULD_KEEP_ALIVE */){parentComponent.ctx.deactivate(vnode);return;}const shouldInvokeDirs=shapeFlag&1/* ELEMENT */&&dirs;const shouldInvokeVnodeHook=!isAsyncWrapper(vnode);let vnodeHook;if(shouldInvokeVnodeHook&&(vnodeHook=props&&props.onVnodeBeforeUnmount)){invokeVNodeHook(vnodeHook,parentComponent,vnode);}if(shapeFlag&6/* COMPONENT */){unmountComponent(vnode.component,parentSuspense,doRemove);}else{if(shapeFlag&128/* SUSPENSE */){vnode.suspense.unmount(parentSuspense,doRemove);return;}if(shouldInvokeDirs){invokeDirectiveHook(vnode,null,parentComponent,'beforeUnmount');}if(shapeFlag&64/* TELEPORT */){vnode.type.remove(vnode,parentComponent,parentSuspense,optimized,internals,doRemove);}else if(dynamicChildren&&(// #1153: fast path should not be taken for non-stable (v-for) fragments
type!==Fragment||patchFlag>0&&patchFlag&64/* STABLE_FRAGMENT */)){// fast path for block nodes: only need to unmount dynamic children.
unmountChildren(dynamicChildren,parentComponent,parentSuspense,false,true);}else if(type===Fragment&&patchFlag&(128/* KEYED_FRAGMENT */|256/* UNKEYED_FRAGMENT */)||!optimized&&shapeFlag&16/* ARRAY_CHILDREN */){unmountChildren(children,parentComponent,parentSuspense);}if(doRemove){remove(vnode);}}if(shouldInvokeVnodeHook&&(vnodeHook=props&&props.onVnodeUnmounted)||shouldInvokeDirs){queuePostRenderEffect(()=>{vnodeHook&&invokeVNodeHook(vnodeHook,parentComponent,vnode);shouldInvokeDirs&&invokeDirectiveHook(vnode,null,parentComponent,'unmounted');},parentSuspense);}};const remove=vnode=>{const{type,el,anchor,transition}=vnode;if(type===Fragment){removeFragment(el,anchor);return;}if(type===Static){removeStaticNode(vnode);return;}const performRemove=()=>{hostRemove(el);if(transition&&!transition.persisted&&transition.afterLeave){transition.afterLeave();}};if(vnode.shapeFlag&1/* ELEMENT */&&transition&&!transition.persisted){const{leave,delayLeave}=transition;const performLeave=()=>leave(el,performRemove);if(delayLeave){delayLeave(vnode.el,performRemove,performLeave);}else{performLeave();}}else{performRemove();}};const removeFragment=(cur,end)=>{// For fragments, directly remove all contained DOM nodes.
// (fragment child nodes cannot have transition)
let next;while(cur!==end){next=hostNextSibling(cur);hostRemove(cur);cur=next;}hostRemove(end);};const unmountComponent=(instance,parentSuspense,doRemove)=>{const{bum,scope,update,subTree,um}=instance;// beforeUnmount hook
if(bum){invokeArrayFns(bum);}// stop effects in component scope
scope.stop();// update may be null if a component is unmounted before its async
// setup has resolved.
if(update){// so that scheduler will no longer invoke it
update.active=false;unmount(subTree,instance,parentSuspense,doRemove);}// unmounted hook
if(um){queuePostRenderEffect(um,parentSuspense);}queuePostRenderEffect(()=>{instance.isUnmounted=true;},parentSuspense);// A component with async dep inside a pending suspense is unmounted before
// its async dep resolves. This should remove the dep from the suspense, and
// cause the suspense to resolve immediately if that was the last dep.
if(parentSuspense&&parentSuspense.pendingBranch&&!parentSuspense.isUnmounted&&instance.asyncDep&&!instance.asyncResolved&&instance.suspenseId===parentSuspense.pendingId){parentSuspense.deps--;if(parentSuspense.deps===0){parentSuspense.resolve();}}};const unmountChildren=(children,parentComponent,parentSuspense,doRemove=false,optimized=false,start=0)=>{for(let i=start;i<children.length;i++){unmount(children[i],parentComponent,parentSuspense,doRemove,optimized);}};const getNextHostNode=vnode=>{if(vnode.shapeFlag&6/* COMPONENT */){return getNextHostNode(vnode.component.subTree);}if(vnode.shapeFlag&128/* SUSPENSE */){return vnode.suspense.next();}return hostNextSibling(vnode.anchor||vnode.el);};const render=(vnode,container,isSVG)=>{if(vnode==null){if(container._vnode){unmount(container._vnode,null,null,true);}}else{patch(container._vnode||null,vnode,container,null,null,null,isSVG);}flushPostFlushCbs();container._vnode=vnode;};const internals={p:patch,um:unmount,m:move,r:remove,mt:mountComponent,mc:mountChildren,pc:patchChildren,pbc:patchBlockChildren,n:getNextHostNode,o:options};let hydrate;let hydrateNode;if(createHydrationFns){[hydrate,hydrateNode]=createHydrationFns(internals);}return{render,hydrate,createApp:createAppAPI(render,hydrate)};}function toggleRecurse({effect,update},allowed){effect.allowRecurse=update.allowRecurse=allowed;}/**
             * #1156
             * When a component is HMR-enabled, we need to make sure that all static nodes
             * inside a block also inherit the DOM element from the previous tree so that
             * HMR updates (which are full updates) can retrieve the element for patching.
             *
             * #2080
             * Inside keyed `template` fragment static children, if a fragment is moved,
             * the children will always be moved. Therefore, in order to ensure correct move
             * position, el should be inherited from previous nodes.
             */function traverseStaticChildren(n1,n2,shallow=false){const ch1=n1.children;const ch2=n2.children;if(isArray$1(ch1)&&isArray$1(ch2)){for(let i=0;i<ch1.length;i++){// this is only called in the optimized path so array children are
// guaranteed to be vnodes
const c1=ch1[i];let c2=ch2[i];if(c2.shapeFlag&1/* ELEMENT */&&!c2.dynamicChildren){if(c2.patchFlag<=0||c2.patchFlag===32/* HYDRATE_EVENTS */){c2=ch2[i]=cloneIfMounted(ch2[i]);c2.el=c1.el;}if(!shallow)traverseStaticChildren(c1,c2);}}}}// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function getSequence(arr){const p=arr.slice();const result=[0];let i,j,u,v,c;const len=arr.length;for(i=0;i<len;i++){const arrI=arr[i];if(arrI!==0){j=result[result.length-1];if(arr[j]<arrI){p[i]=j;result.push(i);continue;}u=0;v=result.length-1;while(u<v){c=u+v>>1;if(arr[result[c]]<arrI){u=c+1;}else{v=c;}}if(arrI<arr[result[u]]){if(u>0){p[i]=result[u-1];}result[u]=i;}}}u=result.length;v=result[u-1];while(u-->0){result[u]=v;v=p[v];}return result;}const isTeleport=type=>type.__isTeleport;const COMPONENTS='components';const DIRECTIVES='directives';/**
             * @private
             */function resolveComponent(name,maybeSelfReference){return resolveAsset(COMPONENTS,name,true,maybeSelfReference)||name;}const NULL_DYNAMIC_COMPONENT=Symbol();/**
             * @private
             */function resolveDirective(name){return resolveAsset(DIRECTIVES,name);}// implementation
function resolveAsset(type,name,warnMissing=true,maybeSelfReference=false){const instance=currentRenderingInstance||currentInstance;if(instance){const Component=instance.type;// explicit self name has highest priority
if(type===COMPONENTS){const selfName=getComponentName(Component);if(selfName&&(selfName===name||selfName===camelize(name)||selfName===capitalize(camelize(name)))){return Component;}}const res=// local registration
// check instance[type] first which is resolved for options API
resolve(instance[type]||Component[type],name)||// global registration
resolve(instance.appContext[type],name);if(!res&&maybeSelfReference){// fallback to implicit self-reference
return Component;}return res;}}function resolve(registry,name){return registry&&(registry[name]||registry[camelize(name)]||registry[capitalize(camelize(name))]);}const Fragment=exports('F',Symbol(undefined));const Text=Symbol(undefined);const Comment=Symbol(undefined);const Static=Symbol(undefined);// Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).
const blockStack=[];let currentBlock=null;/**
             * Open a block.
             * This must be called before `createBlock`. It cannot be part of `createBlock`
             * because the children of the block are evaluated before `createBlock` itself
             * is called. The generated code typically looks like this:
             *
             * ```js
             * function render() {
             *   return (openBlock(),createBlock('div', null, [...]))
             * }
             * ```
             * disableTracking is true when creating a v-for fragment block, since a v-for
             * fragment always diffs its children.
             *
             * @private
             */function openBlock(disableTracking=false){blockStack.push(currentBlock=disableTracking?null:[]);}function closeBlock(){blockStack.pop();currentBlock=blockStack[blockStack.length-1]||null;}// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let isBlockTreeEnabled=1;/**
             * Block tracking sometimes needs to be disabled, for example during the
             * creation of a tree that needs to be cached by v-once. The compiler generates
             * code like this:
             *
             * ``` js
             * _cache[1] || (
             *   setBlockTracking(-1),
             *   _cache[1] = createVNode(...),
             *   setBlockTracking(1),
             *   _cache[1]
             * )
             * ```
             *
             * @private
             */function setBlockTracking(value){isBlockTreeEnabled+=value;}function setupBlock(vnode){// save current block children on the block vnode
vnode.dynamicChildren=isBlockTreeEnabled>0?currentBlock||EMPTY_ARR:null;// close block
closeBlock();// a block is always going to be patched, so track it as a child of its
// parent block
if(isBlockTreeEnabled>0&&currentBlock){currentBlock.push(vnode);}return vnode;}/**
             * @private
             */function createElementBlock(type,props,children,patchFlag,dynamicProps,shapeFlag){return setupBlock(createBaseVNode(type,props,children,patchFlag,dynamicProps,shapeFlag,true/* isBlock */));}/**
             * Create a block root vnode. Takes the same exact arguments as `createVNode`.
             * A block root keeps track of dynamic nodes within the block in the
             * `dynamicChildren` array.
             *
             * @private
             */function createBlock(type,props,children,patchFlag,dynamicProps){return setupBlock(createVNode(type,props,children,patchFlag,dynamicProps,true/* isBlock: prevent a block from tracking itself */));}function isVNode(value){return value?value.__v_isVNode===true:false;}function isSameVNodeType(n1,n2){return n1.type===n2.type&&n1.key===n2.key;}const InternalObjectKey=`__vInternal`;const normalizeKey=({key})=>key!=null?key:null;const normalizeRef=({ref,ref_key,ref_for})=>{return ref!=null?isString$1(ref)||isRef(ref)||isFunction$1(ref)?{i:currentRenderingInstance,r:ref,k:ref_key,f:!!ref_for}:ref:null;};function createBaseVNode(type,props=null,children=null,patchFlag=0,dynamicProps=null,shapeFlag=type===Fragment?0:1/* ELEMENT */,isBlockNode=false,needFullChildrenNormalization=false){const vnode={__v_isVNode:true,__v_skip:true,type,props,key:props&&normalizeKey(props),ref:props&&normalizeRef(props),scopeId:currentScopeId,slotScopeIds:null,children,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag,patchFlag,dynamicProps,dynamicChildren:null,appContext:null};if(needFullChildrenNormalization){normalizeChildren(vnode,children);// normalize suspense children
if(shapeFlag&128/* SUSPENSE */){type.normalize(vnode);}}else if(children){// compiled element vnode - if children is passed, only possible types are
// string or Array.
vnode.shapeFlag|=isString$1(children)?8/* TEXT_CHILDREN */:16/* ARRAY_CHILDREN */;}// track vnode for block tree
if(isBlockTreeEnabled>0&&// avoid a block node from tracking itself
!isBlockNode&&// has current parent block
currentBlock&&(// presence of a patch flag indicates this node needs patching on updates.
// component nodes also should always be patched, because even if the
// component doesn't need to update, it needs to persist the instance on to
// the next vnode so that it can be properly unmounted later.
vnode.patchFlag>0||shapeFlag&6/* COMPONENT */)&&// the EVENTS flag is only for hydration and if it is the only flag, the
// vnode should not be considered dynamic due to handler caching.
vnode.patchFlag!==32/* HYDRATE_EVENTS */){currentBlock.push(vnode);}return vnode;}const createVNode=exports('i',_createVNode);function _createVNode(type,props=null,children=null,patchFlag=0,dynamicProps=null,isBlockNode=false){if(!type||type===NULL_DYNAMIC_COMPONENT){type=Comment;}if(isVNode(type)){// createVNode receiving an existing vnode. This happens in cases like
// <component :is="vnode"/>
// #2078 make sure to merge refs during the clone instead of overwriting it
const cloned=cloneVNode(type,props,true/* mergeRef: true */);if(children){normalizeChildren(cloned,children);}return cloned;}// class component normalization.
if(isClassComponent(type)){type=type.__vccOpts;}// class & style normalization.
if(props){// for reactive or proxy objects, we need to clone it to enable mutation.
props=guardReactiveProps(props);let{class:klass,style}=props;if(klass&&!isString$1(klass)){props.class=normalizeClass(klass);}if(isObject$1(style)){// reactive state objects need to be cloned since they are likely to be
// mutated
if(isProxy(style)&&!isArray$1(style)){style=extend$1({},style);}props.style=normalizeStyle(style);}}// encode the vnode type information into a bitmap
const shapeFlag=isString$1(type)?1/* ELEMENT */:isSuspense(type)?128/* SUSPENSE */:isTeleport(type)?64/* TELEPORT */:isObject$1(type)?4/* STATEFUL_COMPONENT */:isFunction$1(type)?2/* FUNCTIONAL_COMPONENT */:0;return createBaseVNode(type,props,children,patchFlag,dynamicProps,shapeFlag,isBlockNode,true);}function guardReactiveProps(props){if(!props)return null;return isProxy(props)||InternalObjectKey in props?extend$1({},props):props;}function cloneVNode(vnode,extraProps,mergeRef=false){// This is intentionally NOT using spread or extend to avoid the runtime
// key enumeration cost.
const{props,ref,patchFlag,children}=vnode;const mergedProps=extraProps?mergeProps(props||{},extraProps):props;const cloned={__v_isVNode:true,__v_skip:true,type:vnode.type,props:mergedProps,key:mergedProps&&normalizeKey(mergedProps),ref:extraProps&&extraProps.ref?// #2078 in the case of <component :is="vnode" ref="extra"/>
// if the vnode itself already has a ref, cloneVNode will need to merge
// the refs so the single vnode can be set on multiple refs
mergeRef&&ref?isArray$1(ref)?ref.concat(normalizeRef(extraProps)):[ref,normalizeRef(extraProps)]:normalizeRef(extraProps):ref,scopeId:vnode.scopeId,slotScopeIds:vnode.slotScopeIds,children:children,target:vnode.target,targetAnchor:vnode.targetAnchor,staticCount:vnode.staticCount,shapeFlag:vnode.shapeFlag,// if the vnode is cloned with extra props, we can no longer assume its
// existing patch flag to be reliable and need to add the FULL_PROPS flag.
// note: preserve flag for fragments since they use the flag for children
// fast paths only.
patchFlag:extraProps&&vnode.type!==Fragment?patchFlag===-1// hoisted node
?16/* FULL_PROPS */:patchFlag|16/* FULL_PROPS */:patchFlag,dynamicProps:vnode.dynamicProps,dynamicChildren:vnode.dynamicChildren,appContext:vnode.appContext,dirs:vnode.dirs,transition:vnode.transition,// These should technically only be non-null on mounted VNodes. However,
// they *should* be copied for kept-alive vnodes. So we just always copy
// them since them being non-null during a mount doesn't affect the logic as
// they will simply be overwritten.
component:vnode.component,suspense:vnode.suspense,ssContent:vnode.ssContent&&cloneVNode(vnode.ssContent),ssFallback:vnode.ssFallback&&cloneVNode(vnode.ssFallback),el:vnode.el,anchor:vnode.anchor};return cloned;}/**
             * @private
             */function createTextVNode(text=' ',flag=0){return createVNode(Text,null,text,flag);}/**
             * @private
             */function createCommentVNode(text='',// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
asBlock=false){return asBlock?(openBlock(),createBlock(Comment,null,text)):createVNode(Comment,null,text);}function normalizeVNode(child){if(child==null||typeof child==='boolean'){// empty placeholder
return createVNode(Comment);}else if(isArray$1(child)){// fragment
return createVNode(Fragment,null,// #3666, avoid reference pollution when reusing vnode
child.slice());}else if(typeof child==='object'){// already vnode, this should be the most common since compiled templates
// always produce all-vnode children arrays
return cloneIfMounted(child);}else{// strings and numbers
return createVNode(Text,null,String(child));}}// optimized normalization for template-compiled render fns
function cloneIfMounted(child){return child.el===null||child.memo?child:cloneVNode(child);}function normalizeChildren(vnode,children){let type=0;const{shapeFlag}=vnode;if(children==null){children=null;}else if(isArray$1(children)){type=16/* ARRAY_CHILDREN */;}else if(typeof children==='object'){if(shapeFlag&(1/* ELEMENT */|64/* TELEPORT */)){// Normalize slot to plain children for plain element and Teleport
const slot=children.default;if(slot){// _c marker is added by withCtx() indicating this is a compiled slot
slot._c&&(slot._d=false);normalizeChildren(vnode,slot());slot._c&&(slot._d=true);}return;}else{type=32/* SLOTS_CHILDREN */;const slotFlag=children._;if(!slotFlag&&!(InternalObjectKey in children)){children._ctx=currentRenderingInstance;}else if(slotFlag===3/* FORWARDED */&&currentRenderingInstance){// a child component receives forwarded slots from the parent.
// its slot type is determined by its parent's slot type.
if(currentRenderingInstance.slots._===1/* STABLE */){children._=1/* STABLE */;}else{children._=2/* DYNAMIC */;vnode.patchFlag|=1024/* DYNAMIC_SLOTS */;}}}}else if(isFunction$1(children)){children={default:children,_ctx:currentRenderingInstance};type=32/* SLOTS_CHILDREN */;}else{children=String(children);// force teleport children to array so it can be moved around
if(shapeFlag&64/* TELEPORT */){type=16/* ARRAY_CHILDREN */;children=[createTextVNode(children)];}else{type=8/* TEXT_CHILDREN */;}}vnode.children=children;vnode.shapeFlag|=type;}function mergeProps(...args){const ret={};for(let i=0;i<args.length;i++){const toMerge=args[i];for(const key in toMerge){if(key==='class'){if(ret.class!==toMerge.class){ret.class=normalizeClass([ret.class,toMerge.class]);}}else if(key==='style'){ret.style=normalizeStyle([ret.style,toMerge.style]);}else if(isOn(key)){const existing=ret[key];const incoming=toMerge[key];if(incoming&&existing!==incoming&&!(isArray$1(existing)&&existing.includes(incoming))){ret[key]=existing?[].concat(existing,incoming):incoming;}}else if(key!==''){ret[key]=toMerge[key];}}}return ret;}function invokeVNodeHook(hook,instance,vnode,prevVNode=null){callWithAsyncErrorHandling(hook,instance,7/* VNODE_HOOK */,[vnode,prevVNode]);}/**
             * Actual implementation
             */function renderList(source,renderItem,cache,index){let ret;const cached=cache&&cache[index];if(isArray$1(source)||isString$1(source)){ret=new Array(source.length);for(let i=0,l=source.length;i<l;i++){ret[i]=renderItem(source[i],i,undefined,cached&&cached[i]);}}else if(typeof source==='number'){ret=new Array(source);for(let i=0;i<source;i++){ret[i]=renderItem(i+1,i,undefined,cached&&cached[i]);}}else if(isObject$1(source)){if(source[Symbol.iterator]){ret=Array.from(source,(item,i)=>renderItem(item,i,undefined,cached&&cached[i]));}else{const keys=Object.keys(source);ret=new Array(keys.length);for(let i=0,l=keys.length;i<l;i++){const key=keys[i];ret[i]=renderItem(source[key],key,i,cached&&cached[i]);}}}else{ret=[];}if(cache){cache[index]=ret;}return ret;}/**
             * Compiler runtime helper for rendering `<slot/>`
             * @private
             */function renderSlot(slots,name,props={},// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
fallback,noSlotted){if(currentRenderingInstance.isCE){return createVNode('slot',name==='default'?null:{name},fallback&&fallback());}let slot=slots[name];// a compiled slot disables block tracking by default to avoid manual
// invocation interfering with template-based block tracking, but in
// `renderSlot` we can be sure that it's template-based so we can force
// enable it.
if(slot&&slot._c){slot._d=false;}openBlock();const validSlotContent=slot&&ensureValidVNode(slot(props));const rendered=createBlock(Fragment,{key:props.key||`_${name}`},validSlotContent||(fallback?fallback():[]),validSlotContent&&slots._===1/* STABLE */?64/* STABLE_FRAGMENT */:-2/* BAIL */);if(!noSlotted&&rendered.scopeId){rendered.slotScopeIds=[rendered.scopeId+'-s'];}if(slot&&slot._c){slot._d=true;}return rendered;}function ensureValidVNode(vnodes){return vnodes.some(child=>{if(!isVNode(child))return true;if(child.type===Comment)return false;if(child.type===Fragment&&!ensureValidVNode(child.children))return false;return true;})?vnodes:null;}/**
             * #2437 In Vue 3, functional components do not have a public instance proxy but
             * they exist in the internal parent chain. For code that relies on traversing
             * public $parent chains, skip functional ones and go to the parent instead.
             */const getPublicInstance=i=>{if(!i)return null;if(isStatefulComponent(i))return getExposeProxy(i)||i.proxy;return getPublicInstance(i.parent);};const publicPropertiesMap=extend$1(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>getPublicInstance(i.parent),$root:i=>getPublicInstance(i.root),$emit:i=>i.emit,$options:i=>resolveMergedOptions(i),$forceUpdate:i=>()=>queueJob(i.update),$nextTick:i=>nextTick.bind(i.proxy),$watch:i=>instanceWatch.bind(i)});const PublicInstanceProxyHandlers={get({_:instance},key){const{ctx,setupState,data,props,accessCache,type,appContext}=instance;// data / props / ctx
// This getter gets called for every property access on the render context
// during render and is a major hotspot. The most expensive part of this
// is the multiple hasOwn() calls. It's much faster to do a simple property
// access on a plain object, so we use an accessCache object (with null
// prototype) to memoize what access type a key corresponds to.
let normalizedProps;if(key[0]!=='$'){const n=accessCache[key];if(n!==undefined){switch(n){case 1/* SETUP */:return setupState[key];case 2/* DATA */:return data[key];case 4/* CONTEXT */:return ctx[key];case 3/* PROPS */:return props[key];// default: just fallthrough
}}else if(setupState!==EMPTY_OBJ&&hasOwn(setupState,key)){accessCache[key]=1/* SETUP */;return setupState[key];}else if(data!==EMPTY_OBJ&&hasOwn(data,key)){accessCache[key]=2/* DATA */;return data[key];}else if(// only cache other properties when instance has declared (thus stable)
// props
(normalizedProps=instance.propsOptions[0])&&hasOwn(normalizedProps,key)){accessCache[key]=3/* PROPS */;return props[key];}else if(ctx!==EMPTY_OBJ&&hasOwn(ctx,key)){accessCache[key]=4/* CONTEXT */;return ctx[key];}else if(shouldCacheAccess){accessCache[key]=0/* OTHER */;}}const publicGetter=publicPropertiesMap[key];let cssModule,globalProperties;// public $xxx properties
if(publicGetter){if(key==='$attrs'){track(instance,"get"/* GET */,key);}return publicGetter(instance);}else if(// css module (injected by vue-loader)
(cssModule=type.__cssModules)&&(cssModule=cssModule[key])){return cssModule;}else if(ctx!==EMPTY_OBJ&&hasOwn(ctx,key)){// user may set custom properties to `this` that start with `$`
accessCache[key]=4/* CONTEXT */;return ctx[key];}else if(// global properties
globalProperties=appContext.config.globalProperties,hasOwn(globalProperties,key)){{return globalProperties[key];}}else;},set({_:instance},key,value){const{data,setupState,ctx}=instance;if(setupState!==EMPTY_OBJ&&hasOwn(setupState,key)){setupState[key]=value;}else if(data!==EMPTY_OBJ&&hasOwn(data,key)){data[key]=value;}else if(hasOwn(instance.props,key)){return false;}if(key[0]==='$'&&key.slice(1)in instance){return false;}else{{ctx[key]=value;}}return true;},has({_:{data,setupState,accessCache,ctx,appContext,propsOptions}},key){let normalizedProps;return!!accessCache[key]||data!==EMPTY_OBJ&&hasOwn(data,key)||setupState!==EMPTY_OBJ&&hasOwn(setupState,key)||(normalizedProps=propsOptions[0])&&hasOwn(normalizedProps,key)||hasOwn(ctx,key)||hasOwn(publicPropertiesMap,key)||hasOwn(appContext.config.globalProperties,key);}};const emptyAppContext=createAppContext();let uid$1=0;function createComponentInstance(vnode,parent,suspense){const type=vnode.type;// inherit parent app context - or - if root, adopt from root vnode
const appContext=(parent?parent.appContext:vnode.appContext)||emptyAppContext;const instance={uid:uid$1++,vnode,type,parent,appContext,root:null,next:null,subTree:null,effect:null,update:null,scope:new EffectScope(true/* detached */),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:parent?parent.provides:Object.create(appContext.provides),accessCache:null,renderCache:[],// local resovled assets
components:null,directives:null,// resolved props and emits options
propsOptions:normalizePropsOptions(type,appContext),emitsOptions:normalizeEmitsOptions(type,appContext),// emit
emit:null,emitted:null,// props default value
propsDefaults:EMPTY_OBJ,// inheritAttrs
inheritAttrs:type.inheritAttrs,// state
ctx:EMPTY_OBJ,data:EMPTY_OBJ,props:EMPTY_OBJ,attrs:EMPTY_OBJ,slots:EMPTY_OBJ,refs:EMPTY_OBJ,setupState:EMPTY_OBJ,setupContext:null,// suspense related
suspense,suspenseId:suspense?suspense.pendingId:0,asyncDep:null,asyncResolved:false,// lifecycle hooks
// not using enums here because it results in computed properties
isMounted:false,isUnmounted:false,isDeactivated:false,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};{instance.ctx={_:instance};}instance.root=parent?parent.root:instance;instance.emit=emit$1.bind(null,instance);// apply custom element special handling
if(vnode.ce){vnode.ce(instance);}return instance;}let currentInstance=null;const getCurrentInstance=()=>currentInstance||currentRenderingInstance;const setCurrentInstance=instance=>{currentInstance=instance;instance.scope.on();};const unsetCurrentInstance=()=>{currentInstance&&currentInstance.scope.off();currentInstance=null;};function isStatefulComponent(instance){return instance.vnode.shapeFlag&4/* STATEFUL_COMPONENT */;}let isInSSRComponentSetup=false;function setupComponent(instance,isSSR=false){isInSSRComponentSetup=isSSR;const{props,children}=instance.vnode;const isStateful=isStatefulComponent(instance);initProps(instance,props,isStateful,isSSR);initSlots(instance,children);const setupResult=isStateful?setupStatefulComponent(instance,isSSR):undefined;isInSSRComponentSetup=false;return setupResult;}function setupStatefulComponent(instance,isSSR){const Component=instance.type;// 0. create render proxy property access cache
instance.accessCache=Object.create(null);// 1. create public instance / render proxy
// also mark it raw so it's never observed
instance.proxy=markRaw(new Proxy(instance.ctx,PublicInstanceProxyHandlers));// 2. call setup()
const{setup}=Component;if(setup){const setupContext=instance.setupContext=setup.length>1?createSetupContext(instance):null;setCurrentInstance(instance);pauseTracking();const setupResult=callWithErrorHandling(setup,instance,0/* SETUP_FUNCTION */,[instance.props,setupContext]);resetTracking();unsetCurrentInstance();if(isPromise(setupResult)){setupResult.then(unsetCurrentInstance,unsetCurrentInstance);if(isSSR){// return the promise so server-renderer can wait on it
return setupResult.then(resolvedResult=>{handleSetupResult(instance,resolvedResult,isSSR);}).catch(e=>{handleError(e,instance,0/* SETUP_FUNCTION */);});}else{// async setup returned Promise.
// bail here and wait for re-entry.
instance.asyncDep=setupResult;}}else{handleSetupResult(instance,setupResult,isSSR);}}else{finishComponentSetup(instance,isSSR);}}function handleSetupResult(instance,setupResult,isSSR){if(isFunction$1(setupResult)){// setup returned an inline render function
if(instance.type.__ssrInlineRender){// when the function's name is `ssrRender` (compiled by SFC inline mode),
// set it as ssrRender instead.
instance.ssrRender=setupResult;}else{instance.render=setupResult;}}else if(isObject$1(setupResult)){instance.setupState=proxyRefs(setupResult);}else;finishComponentSetup(instance,isSSR);}let compile;function finishComponentSetup(instance,isSSR,skipOptions){const Component=instance.type;// template / render function normalization
// could be already set when returned from setup()
if(!instance.render){// only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
// is done by server-renderer
if(!isSSR&&compile&&!Component.render){const template=Component.template;if(template){const{isCustomElement,compilerOptions}=instance.appContext.config;const{delimiters,compilerOptions:componentCompilerOptions}=Component;const finalCompilerOptions=extend$1(extend$1({isCustomElement,delimiters},compilerOptions),componentCompilerOptions);Component.render=compile(template,finalCompilerOptions);}}instance.render=Component.render||NOOP;}// support for 2.x options
{setCurrentInstance(instance);pauseTracking();applyOptions(instance);resetTracking();unsetCurrentInstance();}}function createAttrsProxy(instance){return new Proxy(instance.attrs,{get(target,key){track(instance,"get"/* GET */,'$attrs');return target[key];}});}function createSetupContext(instance){const expose=exposed=>{instance.exposed=exposed||{};};let attrs;{return{get attrs(){return attrs||(attrs=createAttrsProxy(instance));},slots:instance.slots,emit:instance.emit,expose};}}function getExposeProxy(instance){if(instance.exposed){return instance.exposeProxy||(instance.exposeProxy=new Proxy(proxyRefs(markRaw(instance.exposed)),{get(target,key){if(key in target){return target[key];}else if(key in publicPropertiesMap){return publicPropertiesMap[key](instance);}}}));}}function getComponentName(Component){return isFunction$1(Component)?Component.displayName||Component.name:Component.name;}function isClassComponent(value){return isFunction$1(value)&&'__vccOpts'in value;}const computed=exports('f',(getterOrOptions,debugOptions)=>{// @ts-ignore
return computed$1(getterOrOptions,debugOptions,isInSSRComponentSetup);});// Actual implementation
function h(type,propsOrChildren,children){const l=arguments.length;if(l===2){if(isObject$1(propsOrChildren)&&!isArray$1(propsOrChildren)){// single vnode without props
if(isVNode(propsOrChildren)){return createVNode(type,null,[propsOrChildren]);}// props without children
return createVNode(type,propsOrChildren);}else{// omit props
return createVNode(type,null,propsOrChildren);}}else{if(l>3){children=Array.prototype.slice.call(arguments,2);}else if(l===3&&isVNode(children)){children=[children];}return createVNode(type,propsOrChildren,children);}}// Core API ------------------------------------------------------------------
const version="3.2.29";const svgNS='http://www.w3.org/2000/svg';const doc=typeof document!=='undefined'?document:null;const templateContainer=doc&&doc.createElement('template');const nodeOps={insert:(child,parent,anchor)=>{parent.insertBefore(child,anchor||null);},remove:child=>{const parent=child.parentNode;if(parent){parent.removeChild(child);}},createElement:(tag,isSVG,is,props)=>{const el=isSVG?doc.createElementNS(svgNS,tag):doc.createElement(tag,is?{is}:undefined);if(tag==='select'&&props&&props.multiple!=null){el.setAttribute('multiple',props.multiple);}return el;},createText:text=>doc.createTextNode(text),createComment:text=>doc.createComment(text),setText:(node,text)=>{node.nodeValue=text;},setElementText:(el,text)=>{el.textContent=text;},parentNode:node=>node.parentNode,nextSibling:node=>node.nextSibling,querySelector:selector=>doc.querySelector(selector),setScopeId(el,id){el.setAttribute(id,'');},cloneNode(el){const cloned=el.cloneNode(true);// #3072
// - in `patchDOMProp`, we store the actual value in the `el._value` property.
// - normally, elements using `:value` bindings will not be hoisted, but if
//   the bound value is a constant, e.g. `:value="true"` - they do get
//   hoisted.
// - in production, hoisted nodes are cloned when subsequent inserts, but
//   cloneNode() does not copy the custom property we attached.
// - This may need to account for other custom DOM properties we attach to
//   elements in addition to `_value` in the future.
if(`_value`in el){cloned._value=el._value;}return cloned;},// __UNSAFE__
// Reason: innerHTML.
// Static content here can only come from compiled templates.
// As long as the user only uses trusted templates, this is safe.
insertStaticContent(content,parent,anchor,isSVG,start,end){// <parent> before | first ... last | anchor </parent>
const before=anchor?anchor.previousSibling:parent.lastChild;// #5308 can only take cached path if:
// - has a single root node
// - nextSibling info is still available
if(start&&(start===end||start.nextSibling)){// cached
while(true){parent.insertBefore(start.cloneNode(true),anchor);if(start===end||!(start=start.nextSibling))break;}}else{// fresh insert
templateContainer.innerHTML=isSVG?`<svg>${content}</svg>`:content;const template=templateContainer.content;if(isSVG){// remove outer svg wrapper
const wrapper=template.firstChild;while(wrapper.firstChild){template.appendChild(wrapper.firstChild);}template.removeChild(wrapper);}parent.insertBefore(template,anchor);}return[// first
before?before.nextSibling:parent.firstChild,// last
anchor?anchor.previousSibling:parent.lastChild];}};// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function patchClass(el,value,isSVG){// directly setting className should be faster than setAttribute in theory
// if this is an element during a transition, take the temporary transition
// classes into account.
const transitionClasses=el._vtc;if(transitionClasses){value=(value?[value,...transitionClasses]:[...transitionClasses]).join(' ');}if(value==null){el.removeAttribute('class');}else if(isSVG){el.setAttribute('class',value);}else{el.className=value;}}function patchStyle(el,prev,next){const style=el.style;const isCssString=isString$1(next);if(next&&!isCssString){for(const key in next){setStyle(style,key,next[key]);}if(prev&&!isString$1(prev)){for(const key in prev){if(next[key]==null){setStyle(style,key,'');}}}}else{const currentDisplay=style.display;if(isCssString){if(prev!==next){style.cssText=next;}}else if(prev){el.removeAttribute('style');}// indicates that the `display` of the element is controlled by `v-show`,
// so we always keep the current `display` value regardless of the `style`
// value, thus handing over control to `v-show`.
if('_vod'in el){style.display=currentDisplay;}}}const importantRE=/\s*!important$/;function setStyle(style,name,val){if(isArray$1(val)){val.forEach(v=>setStyle(style,name,v));}else{if(name.startsWith('--')){// custom property definition
style.setProperty(name,val);}else{const prefixed=autoPrefix(style,name);if(importantRE.test(val)){// !important
style.setProperty(hyphenate(prefixed),val.replace(importantRE,''),'important');}else{style[prefixed]=val;}}}}const prefixes=['Webkit','Moz','ms'];const prefixCache={};function autoPrefix(style,rawName){const cached=prefixCache[rawName];if(cached){return cached;}let name=camelize(rawName);if(name!=='filter'&&name in style){return prefixCache[rawName]=name;}name=capitalize(name);for(let i=0;i<prefixes.length;i++){const prefixed=prefixes[i]+name;if(prefixed in style){return prefixCache[rawName]=prefixed;}}return rawName;}const xlinkNS='http://www.w3.org/1999/xlink';function patchAttr(el,key,value,isSVG,instance){if(isSVG&&key.startsWith('xlink:')){if(value==null){el.removeAttributeNS(xlinkNS,key.slice(6,key.length));}else{el.setAttributeNS(xlinkNS,key,value);}}else{// note we are only checking boolean attributes that don't have a
// corresponding dom prop of the same name here.
const isBoolean=isSpecialBooleanAttr(key);if(value==null||isBoolean&&!includeBooleanAttr(value)){el.removeAttribute(key);}else{el.setAttribute(key,isBoolean?'':value);}}}// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function patchDOMProp(el,key,value,// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
prevChildren,parentComponent,parentSuspense,unmountChildren){if(key==='innerHTML'||key==='textContent'){if(prevChildren){unmountChildren(prevChildren,parentComponent,parentSuspense);}el[key]=value==null?'':value;return;}if(key==='value'&&el.tagName!=='PROGRESS'&&// custom elements may use _value internally
!el.tagName.includes('-')){// store value as _value as well since
// non-string values will be stringified.
el._value=value;const newValue=value==null?'':value;if(el.value!==newValue||// #4956: always set for OPTION elements because its value falls back to
// textContent if no value attribute is present. And setting .value for
// OPTION has no side effect
el.tagName==='OPTION'){el.value=newValue;}if(value==null){el.removeAttribute(key);}return;}if(value===''||value==null){const type=typeof el[key];if(type==='boolean'){// e.g. <select multiple> compiles to { multiple: '' }
el[key]=includeBooleanAttr(value);return;}else if(value==null&&type==='string'){// e.g. <div :id="null">
el[key]='';el.removeAttribute(key);return;}else if(type==='number'){// e.g. <img :width="null">
// the value of some IDL attr must be greater than 0, e.g. input.size = 0 -> error
try{el[key]=0;}catch(_a){}el.removeAttribute(key);return;}}// some properties perform value validation and throw
try{el[key]=value;}catch(e){}}// Async edge case fix requires storing an event listener's attach timestamp.
let _getNow=Date.now;let skipTimestampCheck=false;if(typeof window!=='undefined'){// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
if(_getNow()>document.createEvent('Event').timeStamp){// if the low-res timestamp which is bigger than the event timestamp
// (which is evaluated AFTER) it means the event is using a hi-res timestamp,
// and we need to use the hi-res version for event listeners as well.
_getNow=()=>performance.now();}// #3485: Firefox <= 53 has incorrect Event.timeStamp implementation
// and does not fire microtasks in between event propagation, so safe to exclude.
const ffMatch=navigator.userAgent.match(/firefox\/(\d+)/i);skipTimestampCheck=!!(ffMatch&&Number(ffMatch[1])<=53);}// To avoid the overhead of repeatedly calling performance.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
let cachedNow=0;const p=Promise.resolve();const reset=()=>{cachedNow=0;};const getNow=()=>cachedNow||(p.then(reset),cachedNow=_getNow());function addEventListener(el,event,handler,options){el.addEventListener(event,handler,options);}function removeEventListener(el,event,handler,options){el.removeEventListener(event,handler,options);}function patchEvent(el,rawName,prevValue,nextValue,instance=null){// vei = vue event invokers
const invokers=el._vei||(el._vei={});const existingInvoker=invokers[rawName];if(nextValue&&existingInvoker){// patch
existingInvoker.value=nextValue;}else{const[name,options]=parseName(rawName);if(nextValue){// add
const invoker=invokers[rawName]=createInvoker(nextValue,instance);addEventListener(el,name,invoker,options);}else if(existingInvoker){// remove
removeEventListener(el,name,existingInvoker,options);invokers[rawName]=undefined;}}}const optionsModifierRE=/(?:Once|Passive|Capture)$/;function parseName(name){let options;if(optionsModifierRE.test(name)){options={};let m;while(m=name.match(optionsModifierRE)){name=name.slice(0,name.length-m[0].length);options[m[0].toLowerCase()]=true;}}return[hyphenate(name.slice(2)),options];}function createInvoker(initialValue,instance){const invoker=e=>{// async edge case #6566: inner click event triggers patch, event handler
// attached to outer element during patch, and triggered again. This
// happens because browsers fire microtask ticks between event propagation.
// the solution is simple: we save the timestamp when a handler is attached,
// and the handler would only fire if the event passed to it was fired
// AFTER it was attached.
const timeStamp=e.timeStamp||_getNow();if(skipTimestampCheck||timeStamp>=invoker.attached-1){callWithAsyncErrorHandling(patchStopImmediatePropagation(e,invoker.value),instance,5/* NATIVE_EVENT_HANDLER */,[e]);}};invoker.value=initialValue;invoker.attached=getNow();return invoker;}function patchStopImmediatePropagation(e,value){if(isArray$1(value)){const originalStop=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{originalStop.call(e);e._stopped=true;};return value.map(fn=>e=>!e._stopped&&fn&&fn(e));}else{return value;}}const nativeOnRE=/^on[a-z]/;const patchProp=(el,key,prevValue,nextValue,isSVG=false,prevChildren,parentComponent,parentSuspense,unmountChildren)=>{if(key==='class'){patchClass(el,nextValue,isSVG);}else if(key==='style'){patchStyle(el,prevValue,nextValue);}else if(isOn(key)){// ignore v-model listeners
if(!isModelListener(key)){patchEvent(el,key,prevValue,nextValue,parentComponent);}}else if(key[0]==='.'?(key=key.slice(1),true):key[0]==='^'?(key=key.slice(1),false):shouldSetAsProp(el,key,nextValue,isSVG)){patchDOMProp(el,key,nextValue,prevChildren,parentComponent,parentSuspense,unmountChildren);}else{// special case for <input v-model type="checkbox"> with
// :true-value & :false-value
// store value as dom properties since non-string values will be
// stringified.
if(key==='true-value'){el._trueValue=nextValue;}else if(key==='false-value'){el._falseValue=nextValue;}patchAttr(el,key,nextValue,isSVG);}};function shouldSetAsProp(el,key,value,isSVG){if(isSVG){// most keys must be set as attribute on svg elements to work
// ...except innerHTML & textContent
if(key==='innerHTML'||key==='textContent'){return true;}// or native onclick with function values
if(key in el&&nativeOnRE.test(key)&&isFunction$1(value)){return true;}return false;}// spellcheck and draggable are numerated attrs, however their
// corresponding DOM properties are actually booleans - this leads to
// setting it with a string "false" value leading it to be coerced to
// `true`, so we need to always treat them as attributes.
// Note that `contentEditable` doesn't have this problem: its DOM
// property is also enumerated string values.
if(key==='spellcheck'||key==='draggable'){return false;}// #1787, #2840 form property on form elements is readonly and must be set as
// attribute.
if(key==='form'){return false;}// #1526 <input list> must be set as attribute
if(key==='list'&&el.tagName==='INPUT'){return false;}// #2766 <textarea type> must be set as attribute
if(key==='type'&&el.tagName==='TEXTAREA'){return false;}// native onclick with string value, must be set as attribute
if(nativeOnRE.test(key)&&isString$1(value)){return false;}return key in el;}const DOMTransitionPropsValidators={name:String,type:String,css:{type:Boolean,default:true},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};/*#__PURE__*/extend$1({},BaseTransition.props,DOMTransitionPropsValidators);const getModelAssigner=vnode=>{const fn=vnode.props['onUpdate:modelValue'];return isArray$1(fn)?value=>invokeArrayFns(fn,value):fn;};function onCompositionStart(e){e.target.composing=true;}function onCompositionEnd(e){const target=e.target;if(target.composing){target.composing=false;trigger(target,'input');}}function trigger(el,type){const e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const vModelText=exports('G',{created(el,{modifiers:{lazy,trim,number}},vnode){el._assign=getModelAssigner(vnode);const castToNumber=number||vnode.props&&vnode.props.type==='number';addEventListener(el,lazy?'change':'input',e=>{if(e.target.composing)return;let domValue=el.value;if(trim){domValue=domValue.trim();}else if(castToNumber){domValue=toNumber(domValue);}el._assign(domValue);});if(trim){addEventListener(el,'change',()=>{el.value=el.value.trim();});}if(!lazy){addEventListener(el,'compositionstart',onCompositionStart);addEventListener(el,'compositionend',onCompositionEnd);// Safari < 10.2 & UIWebView doesn't fire compositionend when
// switching focus before confirming composition choice
// this also fixes the issue where some browsers e.g. iOS Chrome
// fires "change" instead of "input" on autocomplete.
addEventListener(el,'change',onCompositionEnd);}},// set value on mounted so it's after min/max for type="range"
mounted(el,{value}){el.value=value==null?'':value;},beforeUpdate(el,{value,modifiers:{lazy,trim,number}},vnode){el._assign=getModelAssigner(vnode);// avoid clearing unresolved text. #2302
if(el.composing)return;if(document.activeElement===el){if(lazy){return;}if(trim&&el.value.trim()===value){return;}if((number||el.type==='number')&&toNumber(el.value)===value){return;}}const newValue=value==null?'':value;if(el.value!==newValue){el.value=newValue;}}});const vModelCheckbox={// #4096 array checkboxes need to be deep traversed
deep:true,created(el,_,vnode){el._assign=getModelAssigner(vnode);addEventListener(el,'change',()=>{const modelValue=el._modelValue;const elementValue=getValue(el);const checked=el.checked;const assign=el._assign;if(isArray$1(modelValue)){const index=looseIndexOf(modelValue,elementValue);const found=index!==-1;if(checked&&!found){assign(modelValue.concat(elementValue));}else if(!checked&&found){const filtered=[...modelValue];filtered.splice(index,1);assign(filtered);}}else if(isSet(modelValue)){const cloned=new Set(modelValue);if(checked){cloned.add(elementValue);}else{cloned.delete(elementValue);}assign(cloned);}else{assign(getCheckboxValue(el,checked));}});},// set initial checked on mount to wait for true-value/false-value
mounted:setChecked,beforeUpdate(el,binding,vnode){el._assign=getModelAssigner(vnode);setChecked(el,binding,vnode);}};function setChecked(el,{value,oldValue},vnode){el._modelValue=value;if(isArray$1(value)){el.checked=looseIndexOf(value,vnode.props.value)>-1;}else if(isSet(value)){el.checked=value.has(vnode.props.value);}else if(value!==oldValue){el.checked=looseEqual(value,getCheckboxValue(el,true));}}const vModelRadio={created(el,{value},vnode){el.checked=looseEqual(value,vnode.props.value);el._assign=getModelAssigner(vnode);addEventListener(el,'change',()=>{el._assign(getValue(el));});},beforeUpdate(el,{value,oldValue},vnode){el._assign=getModelAssigner(vnode);if(value!==oldValue){el.checked=looseEqual(value,vnode.props.value);}}};const vModelSelect={// <select multiple> value need to be deep traversed
deep:true,created(el,{value,modifiers:{number}},vnode){const isSetModel=isSet(value);addEventListener(el,'change',()=>{const selectedVal=Array.prototype.filter.call(el.options,o=>o.selected).map(o=>number?toNumber(getValue(o)):getValue(o));el._assign(el.multiple?isSetModel?new Set(selectedVal):selectedVal:selectedVal[0]);});el._assign=getModelAssigner(vnode);},// set value in mounted & updated because <select> relies on its children
// <option>s.
mounted(el,{value}){setSelected(el,value);},beforeUpdate(el,_binding,vnode){el._assign=getModelAssigner(vnode);},updated(el,{value}){setSelected(el,value);}};function setSelected(el,value){const isMultiple=el.multiple;if(isMultiple&&!isArray$1(value)&&!isSet(value)){return;}for(let i=0,l=el.options.length;i<l;i++){const option=el.options[i];const optionValue=getValue(option);if(isMultiple){if(isArray$1(value)){option.selected=looseIndexOf(value,optionValue)>-1;}else{option.selected=value.has(optionValue);}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i)el.selectedIndex=i;return;}}}if(!isMultiple&&el.selectedIndex!==-1){el.selectedIndex=-1;}}// retrieve raw value set via :value bindings
function getValue(el){return'_value'in el?el._value:el.value;}// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function getCheckboxValue(el,checked){const key=checked?'_trueValue':'_falseValue';return key in el?el[key]:checked;}const vModelDynamic=exports('K',{created(el,binding,vnode){callModelHook(el,binding,vnode,null,'created');},mounted(el,binding,vnode){callModelHook(el,binding,vnode,null,'mounted');},beforeUpdate(el,binding,vnode,prevVNode){callModelHook(el,binding,vnode,prevVNode,'beforeUpdate');},updated(el,binding,vnode,prevVNode){callModelHook(el,binding,vnode,prevVNode,'updated');}});function callModelHook(el,binding,vnode,prevVNode,hook){let modelToUse;switch(el.tagName){case'SELECT':modelToUse=vModelSelect;break;case'TEXTAREA':modelToUse=vModelText;break;default:switch(vnode.props&&vnode.props.type){case'checkbox':modelToUse=vModelCheckbox;break;case'radio':modelToUse=vModelRadio;break;default:modelToUse=vModelText;}}const fn=modelToUse[hook];fn&&fn(el,binding,vnode,prevVNode);}const systemModifiers=['ctrl','shift','alt','meta'];const modifierGuards={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>'button'in e&&e.button!==0,middle:e=>'button'in e&&e.button!==1,right:e=>'button'in e&&e.button!==2,exact:(e,modifiers)=>systemModifiers.some(m=>e[`${m}Key`]&&!modifiers.includes(m))};/**
             * @private
             */const withModifiers=exports('I',(fn,modifiers)=>{return(event,...args)=>{for(let i=0;i<modifiers.length;i++){const guard=modifierGuards[modifiers[i]];if(guard&&guard(event,modifiers))return;}return fn(event,...args);};});// Kept for 2.x compat.
// Note: IE11 compat for `spacebar` and `del` is removed for now.
const keyNames={esc:'escape',space:' ',up:'arrow-up',left:'arrow-left',right:'arrow-right',down:'arrow-down',delete:'backspace'};/**
             * @private
             */const withKeys=exports('y',(fn,modifiers)=>{return event=>{if(!('key'in event)){return;}const eventKey=hyphenate(event.key);if(modifiers.some(k=>k===eventKey||keyNames[k]===eventKey)){return fn(event);}};});const vShow=exports('C',{beforeMount(el,{value},{transition}){el._vod=el.style.display==='none'?'':el.style.display;if(transition&&value){transition.beforeEnter(el);}else{setDisplay(el,value);}},mounted(el,{value},{transition}){if(transition&&value){transition.enter(el);}},updated(el,{value,oldValue},{transition}){if(!value===!oldValue)return;if(transition){if(value){transition.beforeEnter(el);setDisplay(el,true);transition.enter(el);}else{transition.leave(el,()=>{setDisplay(el,false);});}}else{setDisplay(el,value);}},beforeUnmount(el,{value}){setDisplay(el,value);}});function setDisplay(el,value){el.style.display=value?el._vod:'none';}const rendererOptions=extend$1({patchProp},nodeOps);// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let renderer;function ensureRenderer(){return renderer||(renderer=createRenderer(rendererOptions));}// use explicit type casts here to avoid import() calls in rolled-up d.ts
const render=exports('q',(...args)=>{ensureRenderer().render(...args);});const createApp=exports('Q',(...args)=>{const app=ensureRenderer().createApp(...args);const{mount}=app;app.mount=containerOrSelector=>{const container=normalizeContainer(containerOrSelector);if(!container)return;const component=app._component;if(!isFunction$1(component)&&!component.render&&!component.template){// __UNSAFE__
// Reason: potential execution of JS expressions in in-DOM template.
// The user must make sure the in-DOM template is trusted. If it's
// rendered by the server, the template should not contain any user data.
component.template=container.innerHTML;}// clear content before mounting
container.innerHTML='';const proxy=mount(container,false,container instanceof SVGElement);if(container instanceof Element){container.removeAttribute('v-cloak');container.setAttribute('data-v-app','');}return proxy;};return app;});function normalizeContainer(container){if(isString$1(container)){const res=document.querySelector(container);return res;}return container;}var isVue2=false;/*!
              * pinia v2.0.10
              * (c) 2022 Eduardo San Martin Morote
              * @license MIT
              */ /**
             * setActivePinia must be called to handle SSR at the top of functions like
             * `fetch`, `setup`, `serverPrefetch` and others
             */let activePinia;/**
             * Sets or unsets the active pinia. Used in SSR and internally when calling
             * actions and getters
             *
             * @param pinia - Pinia instance
             */const setActivePinia=pinia=>activePinia=pinia;const piniaSymbol=/* istanbul ignore next */Symbol();function isPlainObject$1(// eslint-disable-next-line @typescript-eslint/no-explicit-any
o){return o&&typeof o==='object'&&Object.prototype.toString.call(o)==='[object Object]'&&typeof o.toJSON!=='function';}// type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
// TODO: can we change these to numbers?
/**
             * Possible types for SubscriptionCallback
             */var MutationType;(function(MutationType){/**
                 * Direct mutation of the state:
                 *
                 * - `store.name = 'new name'`
                 * - `store.$state.name = 'new name'`
                 * - `store.list.push('new item')`
                 */MutationType["direct"]="direct";/**
                 * Mutated the state with `$patch` and an object
                 *
                 * - `store.$patch({ name: 'newName' })`
                 */MutationType["patchObject"]="patch object";/**
                 * Mutated the state with `$patch` and a function
                 *
                 * - `store.$patch(state => state.name = 'newName')`
                 */MutationType["patchFunction"]="patch function";// maybe reset? for $state = {} and $reset
})(MutationType||(MutationType={}));/**
             * Creates a Pinia instance to be used by the application
             */function createPinia(){const scope=effectScope(true);// NOTE: here we could check the window object for a state and directly set it
// if there is anything like it with Vue 3 SSR
const state=scope.run(()=>ref({}));let _p=[];// plugins added before calling app.use(pinia)
let toBeInstalled=[];const pinia=markRaw({install(app){// this allows calling useStore() outside of a component setup after
// installing pinia's plugin
setActivePinia(pinia);{pinia._a=app;app.provide(piniaSymbol,pinia);app.config.globalProperties.$pinia=pinia;toBeInstalled.forEach(plugin=>_p.push(plugin));toBeInstalled=[];}},use(plugin){if(!this._a&&!isVue2){toBeInstalled.push(plugin);}else{_p.push(plugin);}return this;},_p,// it's actually undefined here
// @ts-expect-error
_a:null,_e:scope,_s:new Map(),state});return pinia;}const noop$1=()=>{};function addSubscription(subscriptions,callback,detached,onCleanup=noop$1){subscriptions.push(callback);const removeSubscription=()=>{const idx=subscriptions.indexOf(callback);if(idx>-1){subscriptions.splice(idx,1);onCleanup();}};if(!detached&&getCurrentInstance()){onUnmounted(removeSubscription);}return removeSubscription;}function triggerSubscriptions(subscriptions,...args){subscriptions.slice().forEach(callback=>{callback(...args);});}function mergeReactiveObjects(target,patchToApply){// no need to go through symbols because they cannot be serialized anyway
for(const key in patchToApply){const subPatch=patchToApply[key];const targetValue=target[key];if(isPlainObject$1(targetValue)&&isPlainObject$1(subPatch)&&!isRef(subPatch)&&!isReactive(subPatch)){target[key]=mergeReactiveObjects(targetValue,subPatch);}else{// @ts-expect-error: subPatch is a valid value
target[key]=subPatch;}}return target;}const skipHydrateSymbol=/* istanbul ignore next */Symbol();function shouldHydrate(obj){return!isPlainObject$1(obj)||!obj.hasOwnProperty(skipHydrateSymbol);}const{assign:assign$1}=Object;function isComputed(o){return!!(isRef(o)&&o.effect);}function createOptionsStore(id,options,pinia,hot){const{state,actions,getters}=options;const initialState=pinia.state.value[id];let store;function setup(){if(!initialState&&!("production"!=='production')){/* istanbul ignore if */{pinia.state.value[id]=state?state():{};}}// avoid creating a state in pinia.state.value
const localState=toRefs(pinia.state.value[id]);return assign$1(localState,actions,Object.keys(getters||{}).reduce((computedGetters,name)=>{computedGetters[name]=markRaw(computed(()=>{setActivePinia(pinia);// it was created just before
const store=pinia._s.get(id);// @ts-expect-error
// return getters![name].call(context, context)
// TODO: avoid reading the getter while assigning with a global variable
return getters[name].call(store,store);}));return computedGetters;},{}));}store=createSetupStore(id,setup,options,pinia);store.$reset=function $reset(){const newState=state?state():{};// we use a patch to group all changes into one single subscription
this.$patch($state=>{assign$1($state,newState);});};return store;}function createSetupStore($id,setup,options={},pinia,hot){let scope;const buildState=options.state;const optionsForPlugin=assign$1({actions:{}},options);// watcher options for $subscribe
const $subscribeOptions={deep:true// flush: 'post',
};// internal state
let isListening;// set to true at the end
let isSyncListening;// set to true at the end
let subscriptions=markRaw([]);let actionSubscriptions=markRaw([]);let debuggerEvents;const initialState=pinia.state.value[$id];// avoid setting the state for option stores are it is set
// by the setup
if(!buildState&&!initialState&&!("production"!=='production')){/* istanbul ignore if */{pinia.state.value[$id]={};}}ref({});function $patch(partialStateOrMutator){let subscriptionMutation;isListening=isSyncListening=false;if(typeof partialStateOrMutator==='function'){partialStateOrMutator(pinia.state.value[$id]);subscriptionMutation={type:MutationType.patchFunction,storeId:$id,events:debuggerEvents};}else{mergeReactiveObjects(pinia.state.value[$id],partialStateOrMutator);subscriptionMutation={type:MutationType.patchObject,payload:partialStateOrMutator,storeId:$id,events:debuggerEvents};}nextTick().then(()=>{isListening=true;});isSyncListening=true;// because we paused the watcher, we need to manually call the subscriptions
triggerSubscriptions(subscriptions,subscriptionMutation,pinia.state.value[$id]);}/* istanbul ignore next */const $reset=noop$1;function $dispose(){scope.stop();subscriptions=[];actionSubscriptions=[];pinia._s.delete($id);}/**
                 * Wraps an action to handle subscriptions.
                 *
                 * @param name - name of the action
                 * @param action - action to wrap
                 * @returns a wrapped action to handle subscriptions
                 */function wrapAction(name,action){return function(){setActivePinia(pinia);const args=Array.from(arguments);const afterCallbackList=[];const onErrorCallbackList=[];function after(callback){afterCallbackList.push(callback);}function onError(callback){onErrorCallbackList.push(callback);}// @ts-expect-error
triggerSubscriptions(actionSubscriptions,{args,name,store,after,onError});let ret;try{ret=action.apply(this&&this.$id===$id?this:store,args);// handle sync errors
}catch(error){triggerSubscriptions(onErrorCallbackList,error);throw error;}if(ret instanceof Promise){return ret.then(value=>{triggerSubscriptions(afterCallbackList,value);return value;}).catch(error=>{triggerSubscriptions(onErrorCallbackList,error);return Promise.reject(error);});}// allow the afterCallback to override the return value
triggerSubscriptions(afterCallbackList,ret);return ret;};}const partialStore={_p:pinia,// _s: scope,
$id,$onAction:addSubscription.bind(null,actionSubscriptions),$patch,$reset,$subscribe(callback,options={}){const removeSubscription=addSubscription(subscriptions,callback,options.detached,()=>stopWatcher());const stopWatcher=scope.run(()=>watch(()=>pinia.state.value[$id],state=>{if(options.flush==='sync'?isSyncListening:isListening){callback({storeId:$id,type:MutationType.direct,events:debuggerEvents},state);}},assign$1({},$subscribeOptions,options)));return removeSubscription;},$dispose};const store=reactive(assign$1({},partialStore// must be added later
// setupStore
));// store the partial store now so the setup of stores can instantiate each other before they are finished without
// creating infinite loops.
pinia._s.set($id,store);// TODO: idea create skipSerialize that marks properties as non serializable and they are skipped
const setupStore=pinia._e.run(()=>{scope=effectScope();return scope.run(()=>setup());});// overwrite existing actions to support $onAction
for(const key in setupStore){const prop=setupStore[key];if(isRef(prop)&&!isComputed(prop)||isReactive(prop)){// mark it as a piece of state to be serialized
if(!buildState){// in setup stores we must hydrate the state and sync pinia state tree with the refs the user just created
if(initialState&&shouldHydrate(prop)){if(isRef(prop)){prop.value=initialState[key];}else{// probably a reactive object, lets recursively assign
mergeReactiveObjects(prop,initialState[key]);}}// transfer the ref to the pinia state to keep everything in sync
/* istanbul ignore if */{pinia.state.value[$id][key]=prop;}}// action
}else if(typeof prop==='function'){// @ts-expect-error: we are overriding the function we avoid wrapping if
const actionValue=wrapAction(key,prop);// this a hot module replacement store because the hotUpdate method needs
// to do it with the right context
/* istanbul ignore if */{// @ts-expect-error
setupStore[key]=actionValue;}// list actions so they can be used in plugins
// @ts-expect-error
optionsForPlugin.actions[key]=prop;}else;}// add the state, getters, and action properties
/* istanbul ignore if */{assign$1(store,setupStore);// allows retrieving reactive objects with `storeToRefs()`. Must be called after assigning to the reactive object.
// Make `storeToRefs()` work with `reactive()` #799
assign$1(toRaw(store),setupStore);}// use this instead of a computed with setter to be able to create it anywhere
// without linking the computed lifespan to wherever the store is first
// created.
Object.defineProperty(store,'$state',{get:()=>pinia.state.value[$id],set:state=>{$patch($state=>{assign$1($state,state);});}});// apply all plugins
pinia._p.forEach(extender=>{/* istanbul ignore else */{assign$1(store,scope.run(()=>extender({store,app:pinia._a,pinia,options:optionsForPlugin})));}});// only apply hydrate to option stores with an initial state in pinia
if(initialState&&buildState&&options.hydrate){options.hydrate(store.$state,initialState);}isListening=true;isSyncListening=true;return store;}function defineStore(// TODO: add proper types from above
idOrOptions,setup,setupOptions){let id;let options;const isSetupStore=typeof setup==='function';if(typeof idOrOptions==='string'){id=idOrOptions;// the option store setup will contain the actual options in this case
options=isSetupStore?setupOptions:setup;}else{options=idOrOptions;id=idOrOptions.id;}function useStore(pinia,hot){const currentInstance=getCurrentInstance();pinia=// in test mode, ignore the argument provided as we can always retrieve a
// pinia instance with getActivePinia()
pinia||currentInstance&&inject(piniaSymbol);if(pinia)setActivePinia(pinia);pinia=activePinia;if(!pinia._s.has(id)){// creating the store registers it in `pinia._s`
if(isSetupStore){createSetupStore(id,setup,options,pinia);}else{createOptionsStore(id,options,pinia);}}const store=pinia._s.get(id);// StoreGeneric cannot be casted towards Store
return store;}useStore.$id=id;return useStore;}/*!
              * vue-router v4.0.12
              * (c) 2021 Eduardo San Martin Morote
              * @license MIT
              */const hasSymbol=typeof Symbol==='function'&&typeof Symbol.toStringTag==='symbol';const PolySymbol=name=>// vr = vue router
hasSymbol?Symbol(name):'_vr_'+name;// rvlm = Router View Location Matched
/**
             * RouteRecord being rendered by the closest ancestor Router View. Used for
             * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
             * Location Matched
             *
             * @internal
             */const matchedRouteKey=/*#__PURE__*/PolySymbol('rvlm');/**
             * Allows overriding the router view depth to control which component in
             * `matched` is rendered. rvd stands for Router View Depth
             *
             * @internal
             */const viewDepthKey=/*#__PURE__*/PolySymbol('rvd');/**
             * Allows overriding the router instance returned by `useRouter` in tests. r
             * stands for router
             *
             * @internal
             */const routerKey=/*#__PURE__*/PolySymbol('r');/**
             * Allows overriding the current route returned by `useRoute` in tests. rl
             * stands for route location
             *
             * @internal
             */const routeLocationKey=/*#__PURE__*/PolySymbol('rl');/**
             * Allows overriding the current route used by router-view. Internally this is
             * used when the `route` prop is passed.
             *
             * @internal
             */const routerViewLocationKey=/*#__PURE__*/PolySymbol('rvl');const isBrowser=typeof window!=='undefined';function isESModule(obj){return obj.__esModule||hasSymbol&&obj[Symbol.toStringTag]==='Module';}const assign=Object.assign;function applyToParams(fn,params){const newParams={};for(const key in params){const value=params[key];newParams[key]=Array.isArray(value)?value.map(fn):fn(value);}return newParams;}const noop=()=>{};const TRAILING_SLASH_RE=/\/$/;const removeTrailingSlash=path=>path.replace(TRAILING_SLASH_RE,'');/**
             * Transforms an URI into a normalized history location
             *
             * @param parseQuery
             * @param location - URI to normalize
             * @param currentLocation - current absolute location. Allows resolving relative
             * paths. Must start with `/`. Defaults to `/`
             * @returns a normalized history location
             */function parseURL(parseQuery,location,currentLocation='/'){let path,query={},searchString='',hash='';// Could use URL and URLSearchParams but IE 11 doesn't support it
const searchPos=location.indexOf('?');const hashPos=location.indexOf('#',searchPos>-1?searchPos:0);if(searchPos>-1){path=location.slice(0,searchPos);searchString=location.slice(searchPos+1,hashPos>-1?hashPos:location.length);query=parseQuery(searchString);}if(hashPos>-1){path=path||location.slice(0,hashPos);// keep the # character
hash=location.slice(hashPos,location.length);}// no search and no query
path=resolveRelativePath(path!=null?path:location,currentLocation);// empty path means a relative query or hash `?foo=f`, `#thing`
return{fullPath:path+(searchString&&'?')+searchString+hash,path,query,hash};}/**
             * Stringifies a URL object
             *
             * @param stringifyQuery
             * @param location
             */function stringifyURL(stringifyQuery,location){const query=location.query?stringifyQuery(location.query):'';return location.path+(query&&'?')+query+(location.hash||'');}/**
             * Strips off the base from the beginning of a location.pathname in a non
             * case-sensitive way.
             *
             * @param pathname - location.pathname
             * @param base - base to strip off
             */function stripBase(pathname,base){// no base or base is not found at the beginning
if(!base||!pathname.toLowerCase().startsWith(base.toLowerCase()))return pathname;return pathname.slice(base.length)||'/';}/**
             * Checks if two RouteLocation are equal. This means that both locations are
             * pointing towards the same {@link RouteRecord} and that all `params`, `query`
             * parameters and `hash` are the same
             *
             * @param a - first {@link RouteLocation}
             * @param b - second {@link RouteLocation}
             */function isSameRouteLocation(stringifyQuery,a,b){const aLastIndex=a.matched.length-1;const bLastIndex=b.matched.length-1;return aLastIndex>-1&&aLastIndex===bLastIndex&&isSameRouteRecord(a.matched[aLastIndex],b.matched[bLastIndex])&&isSameRouteLocationParams(a.params,b.params)&&stringifyQuery(a.query)===stringifyQuery(b.query)&&a.hash===b.hash;}/**
             * Check if two `RouteRecords` are equal. Takes into account aliases: they are
             * considered equal to the `RouteRecord` they are aliasing.
             *
             * @param a - first {@link RouteRecord}
             * @param b - second {@link RouteRecord}
             */function isSameRouteRecord(a,b){// since the original record has an undefined value for aliasOf
// but all aliases point to the original record, this will always compare
// the original record
return(a.aliasOf||a)===(b.aliasOf||b);}function isSameRouteLocationParams(a,b){if(Object.keys(a).length!==Object.keys(b).length)return false;for(const key in a){if(!isSameRouteLocationParamsValue(a[key],b[key]))return false;}return true;}function isSameRouteLocationParamsValue(a,b){return Array.isArray(a)?isEquivalentArray(a,b):Array.isArray(b)?isEquivalentArray(b,a):a===b;}/**
             * Check if two arrays are the same or if an array with one single entry is the
             * same as another primitive value. Used to check query and parameters
             *
             * @param a - array of values
             * @param b - array of values or a single value
             */function isEquivalentArray(a,b){return Array.isArray(b)?a.length===b.length&&a.every((value,i)=>value===b[i]):a.length===1&&a[0]===b;}/**
             * Resolves a relative path that starts with `.`.
             *
             * @param to - path location we are resolving
             * @param from - currentLocation.path, should start with `/`
             */function resolveRelativePath(to,from){if(to.startsWith('/'))return to;if(!to)return from;const fromSegments=from.split('/');const toSegments=to.split('/');let position=fromSegments.length-1;let toPosition;let segment;for(toPosition=0;toPosition<toSegments.length;toPosition++){segment=toSegments[toPosition];// can't go below zero
if(position===1||segment==='.')continue;if(segment==='..')position--;// found something that is not relative path
else break;}return fromSegments.slice(0,position).join('/')+'/'+toSegments.slice(toPosition-(toPosition===toSegments.length?1:0)).join('/');}var NavigationType;(function(NavigationType){NavigationType["pop"]="pop";NavigationType["push"]="push";})(NavigationType||(NavigationType={}));var NavigationDirection;(function(NavigationDirection){NavigationDirection["back"]="back";NavigationDirection["forward"]="forward";NavigationDirection["unknown"]="";})(NavigationDirection||(NavigationDirection={}));// Generic utils
/**
             * Normalizes a base by removing any trailing slash and reading the base tag if
             * present.
             *
             * @param base - base to normalize
             */function normalizeBase(base){if(!base){if(isBrowser){// respect <base> tag
const baseEl=document.querySelector('base');base=baseEl&&baseEl.getAttribute('href')||'/';// strip full URL origin
base=base.replace(/^\w+:\/\/[^\/]+/,'');}else{base='/';}}// ensure leading slash when it was removed by the regex above avoid leading
// slash with hash because the file could be read from the disk like file://
// and the leading slash would cause problems
if(base[0]!=='/'&&base[0]!=='#')base='/'+base;// remove the trailing slash so all other method can just do `base + fullPath`
// to build an href
return removeTrailingSlash(base);}// remove any character before the hash
const BEFORE_HASH_RE=/^[^#]+#/;function createHref(base,location){return base.replace(BEFORE_HASH_RE,'#')+location;}function getElementPosition(el,offset){const docRect=document.documentElement.getBoundingClientRect();const elRect=el.getBoundingClientRect();return{behavior:offset.behavior,left:elRect.left-docRect.left-(offset.left||0),top:elRect.top-docRect.top-(offset.top||0)};}const computeScrollPosition=()=>({left:window.pageXOffset,top:window.pageYOffset});function scrollToPosition(position){let scrollToOptions;if('el'in position){const positionEl=position.el;const isIdSelector=typeof positionEl==='string'&&positionEl.startsWith('#');const el=typeof positionEl==='string'?isIdSelector?document.getElementById(positionEl.slice(1)):document.querySelector(positionEl):positionEl;if(!el){return;}scrollToOptions=getElementPosition(el,position);}else{scrollToOptions=position;}if('scrollBehavior'in document.documentElement.style)window.scrollTo(scrollToOptions);else{window.scrollTo(scrollToOptions.left!=null?scrollToOptions.left:window.pageXOffset,scrollToOptions.top!=null?scrollToOptions.top:window.pageYOffset);}}function getScrollKey(path,delta){const position=history.state?history.state.position-delta:-1;return position+path;}const scrollPositions=new Map();function saveScrollPosition(key,scrollPosition){scrollPositions.set(key,scrollPosition);}function getSavedScrollPosition(key){const scroll=scrollPositions.get(key);// consume it so it's not used again
scrollPositions.delete(key);return scroll;}// TODO: RFC about how to save scroll position
/**
             * ScrollBehavior instance used by the router to compute and restore the scroll
             * position when navigating.
             */ // export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }
let createBaseLocation=()=>location.protocol+'//'+location.host;/**
             * Creates a normalized history location from a window.location object
             * @param location -
             */function createCurrentLocation(base,location){const{pathname,search,hash}=location;// allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
const hashPos=base.indexOf('#');if(hashPos>-1){let slicePos=hash.includes(base.slice(hashPos))?base.slice(hashPos).length:1;let pathFromHash=hash.slice(slicePos);// prepend the starting slash to hash so the url starts with /#
if(pathFromHash[0]!=='/')pathFromHash='/'+pathFromHash;return stripBase(pathFromHash,'');}const path=stripBase(pathname,base);return path+search+hash;}function useHistoryListeners(base,historyState,currentLocation,replace){let listeners=[];let teardowns=[];// TODO: should it be a stack? a Dict. Check if the popstate listener
// can trigger twice
let pauseState=null;const popStateHandler=({state})=>{const to=createCurrentLocation(base,location);const from=currentLocation.value;const fromState=historyState.value;let delta=0;if(state){currentLocation.value=to;historyState.value=state;// ignore the popstate and reset the pauseState
if(pauseState&&pauseState===from){pauseState=null;return;}delta=fromState?state.position-fromState.position:0;}else{replace(to);}// console.log({ deltaFromCurrent })
// Here we could also revert the navigation by calling history.go(-delta)
// this listener will have to be adapted to not trigger again and to wait for the url
// to be updated before triggering the listeners. Some kind of validation function would also
// need to be passed to the listeners so the navigation can be accepted
// call all listeners
listeners.forEach(listener=>{listener(currentLocation.value,from,{delta,type:NavigationType.pop,direction:delta?delta>0?NavigationDirection.forward:NavigationDirection.back:NavigationDirection.unknown});});};function pauseListeners(){pauseState=currentLocation.value;}function listen(callback){// setup the listener and prepare teardown callbacks
listeners.push(callback);const teardown=()=>{const index=listeners.indexOf(callback);if(index>-1)listeners.splice(index,1);};teardowns.push(teardown);return teardown;}function beforeUnloadListener(){const{history}=window;if(!history.state)return;history.replaceState(assign({},history.state,{scroll:computeScrollPosition()}),'');}function destroy(){for(const teardown of teardowns)teardown();teardowns=[];window.removeEventListener('popstate',popStateHandler);window.removeEventListener('beforeunload',beforeUnloadListener);}// setup the listeners and prepare teardown callbacks
window.addEventListener('popstate',popStateHandler);window.addEventListener('beforeunload',beforeUnloadListener);return{pauseListeners,listen,destroy};}/**
             * Creates a state object
             */function buildState(back,current,forward,replaced=false,computeScroll=false){return{back,current,forward,replaced,position:window.history.length,scroll:computeScroll?computeScrollPosition():null};}function useHistoryStateNavigation(base){const{history,location}=window;// private variables
const currentLocation={value:createCurrentLocation(base,location)};const historyState={value:history.state};// build current history entry as this is a fresh navigation
if(!historyState.value){changeLocation(currentLocation.value,{back:null,current:currentLocation.value,forward:null,// the length is off by one, we need to decrease it
position:history.length-1,replaced:true,// don't add a scroll as the user may have an anchor and we want
// scrollBehavior to be triggered without a saved position
scroll:null},true);}function changeLocation(to,state,replace){/**
                     * if a base tag is provided and we are on a normal domain, we have to
                     * respect the provided `base` attribute because pushState() will use it and
                     * potentially erase anything before the `#` like at
                     * https://github.com/vuejs/vue-router-next/issues/685 where a base of
                     * `/folder/#` but a base of `/` would erase the `/folder/` section. If
                     * there is no host, the `<base>` tag makes no sense and if there isn't a
                     * base tag we can just use everything after the `#`.
                     */const hashIndex=base.indexOf('#');const url=hashIndex>-1?(location.host&&document.querySelector('base')?base:base.slice(hashIndex))+to:createBaseLocation()+base+to;try{// BROWSER QUIRK
// NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
history[replace?'replaceState':'pushState'](state,'',url);historyState.value=state;}catch(err){{console.error(err);}// Force the navigation, this also resets the call count
location[replace?'replace':'assign'](url);}}function replace(to,data){const state=assign({},history.state,buildState(historyState.value.back,// keep back and forward entries but override current position
to,historyState.value.forward,true),data,{position:historyState.value.position});changeLocation(to,state,true);currentLocation.value=to;}function push(to,data){// Add to current entry the information of where we are going
// as well as saving the current position
const currentState=assign({},// use current history state to gracefully handle a wrong call to
// history.replaceState
// https://github.com/vuejs/vue-router-next/issues/366
historyState.value,history.state,{forward:to,scroll:computeScrollPosition()});changeLocation(currentState.current,currentState,true);const state=assign({},buildState(currentLocation.value,to,null),{position:currentState.position+1},data);changeLocation(to,state,false);currentLocation.value=to;}return{location:currentLocation,state:historyState,push,replace};}/**
             * Creates an HTML5 history. Most common history for single page applications.
             *
             * @param base -
             */function createWebHistory(base){base=normalizeBase(base);const historyNavigation=useHistoryStateNavigation(base);const historyListeners=useHistoryListeners(base,historyNavigation.state,historyNavigation.location,historyNavigation.replace);function go(delta,triggerListeners=true){if(!triggerListeners)historyListeners.pauseListeners();history.go(delta);}const routerHistory=assign({// it's overridden right after
location:'',base,go,createHref:createHref.bind(null,base)},historyNavigation,historyListeners);Object.defineProperty(routerHistory,'location',{enumerable:true,get:()=>historyNavigation.location.value});Object.defineProperty(routerHistory,'state',{enumerable:true,get:()=>historyNavigation.state.value});return routerHistory;}function isRouteLocation(route){return typeof route==='string'||route&&typeof route==='object';}function isRouteName(name){return typeof name==='string'||typeof name==='symbol';}/**
             * Initial route location where the router is. Can be used in navigation guards
             * to differentiate the initial navigation.
             *
             * @example
             * ```js
             * import { START_LOCATION } from 'vue-router'
             *
             * router.beforeEach((to, from) => {
             *   if (from === START_LOCATION) {
             *     // initial navigation
             *   }
             * })
             * ```
             */const START_LOCATION_NORMALIZED={path:'/',name:undefined,params:{},query:{},hash:'',fullPath:'/',matched:[],meta:{},redirectedFrom:undefined};const NavigationFailureSymbol=/*#__PURE__*/PolySymbol('nf');/**
             * Enumeration with all possible types for navigation failures. Can be passed to
             * {@link isNavigationFailure} to check for specific failures.
             */var NavigationFailureType;(function(NavigationFailureType){/**
                 * An aborted navigation is a navigation that failed because a navigation
                 * guard returned `false` or called `next(false)`
                 */NavigationFailureType[NavigationFailureType["aborted"]=4]="aborted";/**
                 * A cancelled navigation is a navigation that failed because a more recent
                 * navigation finished started (not necessarily finished).
                 */NavigationFailureType[NavigationFailureType["cancelled"]=8]="cancelled";/**
                 * A duplicated navigation is a navigation that failed because it was
                 * initiated while already being at the exact same location.
                 */NavigationFailureType[NavigationFailureType["duplicated"]=16]="duplicated";})(NavigationFailureType||(NavigationFailureType={}));function createRouterError(type,params){// keep full error messages in cjs versions
{return assign(new Error(),{type,[NavigationFailureSymbol]:true},params);}}function isNavigationFailure(error,type){return error instanceof Error&&NavigationFailureSymbol in error&&(type==null||!!(error.type&type));}// default pattern for a param: non greedy everything but /
const BASE_PARAM_PATTERN='[^/]+?';const BASE_PATH_PARSER_OPTIONS={sensitive:false,strict:false,start:true,end:true};// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE=/[.+*?^${}()[\]/\\]/g;/**
             * Creates a path parser from an array of Segments (a segment is an array of Tokens)
             *
             * @param segments - array of segments returned by tokenizePath
             * @param extraOptions - optional options for the regexp
             * @returns a PathParser
             */function tokensToParser(segments,extraOptions){const options=assign({},BASE_PATH_PARSER_OPTIONS,extraOptions);// the amount of scores is the same as the length of segments except for the root segment "/"
const score=[];// the regexp as a string
let pattern=options.start?'^':'';// extracted keys
const keys=[];for(const segment of segments){// the root segment needs special treatment
const segmentScores=segment.length?[]:[90/* Root */];// allow trailing slash
if(options.strict&&!segment.length)pattern+='/';for(let tokenIndex=0;tokenIndex<segment.length;tokenIndex++){const token=segment[tokenIndex];// resets the score if we are inside a sub segment /:a-other-:b
let subSegmentScore=40/* Segment */+(options.sensitive?0.25/* BonusCaseSensitive */:0);if(token.type===0/* Static */){// prepend the slash if we are starting a new segment
if(!tokenIndex)pattern+='/';pattern+=token.value.replace(REGEX_CHARS_RE,'\\$&');subSegmentScore+=40/* Static */;}else if(token.type===1/* Param */){const{value,repeatable,optional,regexp}=token;keys.push({name:value,repeatable,optional});const re=regexp?regexp:BASE_PARAM_PATTERN;// the user provided a custom regexp /:id(\\d+)
if(re!==BASE_PARAM_PATTERN){subSegmentScore+=10/* BonusCustomRegExp */;// make sure the regexp is valid before using it
try{new RegExp(`(${re})`);}catch(err){throw new Error(`Invalid custom RegExp for param "${value}" (${re}): `+err.message);}}// when we repeat we must take care of the repeating leading slash
let subPattern=repeatable?`((?:${re})(?:/(?:${re}))*)`:`(${re})`;// prepend the slash if we are starting a new segment
if(!tokenIndex)subPattern=// avoid an optional / if there are more segments e.g. /:p?-static
// or /:p?-:p2
optional&&segment.length<2?`(?:/${subPattern})`:'/'+subPattern;if(optional)subPattern+='?';pattern+=subPattern;subSegmentScore+=20/* Dynamic */;if(optional)subSegmentScore+=-8/* BonusOptional */;if(repeatable)subSegmentScore+=-20/* BonusRepeatable */;if(re==='.*')subSegmentScore+=-50/* BonusWildcard */;}segmentScores.push(subSegmentScore);}// an empty array like /home/ -> [[{home}], []]
// if (!segment.length) pattern += '/'
score.push(segmentScores);}// only apply the strict bonus to the last score
if(options.strict&&options.end){const i=score.length-1;score[i][score[i].length-1]+=0.7000000000000001/* BonusStrict */;}// TODO: dev only warn double trailing slash
if(!options.strict)pattern+='/?';if(options.end)pattern+='$';// allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
else if(options.strict)pattern+='(?:/|$)';const re=new RegExp(pattern,options.sensitive?'':'i');function parse(path){const match=path.match(re);const params={};if(!match)return null;for(let i=1;i<match.length;i++){const value=match[i]||'';const key=keys[i-1];params[key.name]=value&&key.repeatable?value.split('/'):value;}return params;}function stringify(params){let path='';// for optional parameters to allow to be empty
let avoidDuplicatedSlash=false;for(const segment of segments){if(!avoidDuplicatedSlash||!path.endsWith('/'))path+='/';avoidDuplicatedSlash=false;for(const token of segment){if(token.type===0/* Static */){path+=token.value;}else if(token.type===1/* Param */){const{value,repeatable,optional}=token;const param=value in params?params[value]:'';if(Array.isArray(param)&&!repeatable)throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);const text=Array.isArray(param)?param.join('/'):param;if(!text){if(optional){// if we have more than one optional param like /:a?-static we
// don't need to care about the optional param
if(segment.length<2){// remove the last slash as we could be at the end
if(path.endsWith('/'))path=path.slice(0,-1);// do not append a slash on the next iteration
else avoidDuplicatedSlash=true;}}else throw new Error(`Missing required param "${value}"`);}path+=text;}}}return path;}return{re,score,keys,parse,stringify};}/**
             * Compares an array of numbers as used in PathParser.score and returns a
             * number. This function can be used to `sort` an array
             *
             * @param a - first array of numbers
             * @param b - second array of numbers
             * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
             * should be sorted first
             */function compareScoreArray(a,b){let i=0;while(i<a.length&&i<b.length){const diff=b[i]-a[i];// only keep going if diff === 0
if(diff)return diff;i++;}// if the last subsegment was Static, the shorter segments should be sorted first
// otherwise sort the longest segment first
if(a.length<b.length){return a.length===1&&a[0]===40/* Static */+40/* Segment */?-1:1;}else if(a.length>b.length){return b.length===1&&b[0]===40/* Static */+40/* Segment */?1:-1;}return 0;}/**
             * Compare function that can be used with `sort` to sort an array of PathParser
             *
             * @param a - first PathParser
             * @param b - second PathParser
             * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
             */function comparePathParserScore(a,b){let i=0;const aScore=a.score;const bScore=b.score;while(i<aScore.length&&i<bScore.length){const comp=compareScoreArray(aScore[i],bScore[i]);// do not return if both are equal
if(comp)return comp;i++;}// if a and b share the same score entries but b has more, sort b first
return bScore.length-aScore.length;// this is the ternary version
// return aScore.length < bScore.length
//   ? 1
//   : aScore.length > bScore.length
//   ? -1
//   : 0
}const ROOT_TOKEN={type:0/* Static */,value:''};const VALID_PARAM_RE=/[a-zA-Z0-9_]/;// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path){if(!path)return[[]];if(path==='/')return[[ROOT_TOKEN]];if(!path.startsWith('/')){throw new Error(`Invalid path "${path}"`);}// if (tokenCache.has(path)) return tokenCache.get(path)!
function crash(message){throw new Error(`ERR (${state})/"${buffer}": ${message}`);}let state=0/* Static */;let previousState=state;const tokens=[];// the segment will always be valid because we get into the initial state
// with the leading /
let segment;function finalizeSegment(){if(segment)tokens.push(segment);segment=[];}// index on the path
let i=0;// char at index
let char;// buffer of the value read
let buffer='';// custom regexp for a param
let customRe='';function consumeBuffer(){if(!buffer)return;if(state===0/* Static */){segment.push({type:0/* Static */,value:buffer});}else if(state===1/* Param */||state===2/* ParamRegExp */||state===3/* ParamRegExpEnd */){if(segment.length>1&&(char==='*'||char==='+'))crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);segment.push({type:1/* Param */,value:buffer,regexp:customRe,repeatable:char==='*'||char==='+',optional:char==='*'||char==='?'});}else{crash('Invalid state to consume buffer');}buffer='';}function addCharToBuffer(){buffer+=char;}while(i<path.length){char=path[i++];if(char==='\\'&&state!==2/* ParamRegExp */){previousState=state;state=4/* EscapeNext */;continue;}switch(state){case 0/* Static */:if(char==='/'){if(buffer){consumeBuffer();}finalizeSegment();}else if(char===':'){consumeBuffer();state=1/* Param */;}else{addCharToBuffer();}break;case 4/* EscapeNext */:addCharToBuffer();state=previousState;break;case 1/* Param */:if(char==='('){state=2/* ParamRegExp */;}else if(VALID_PARAM_RE.test(char)){addCharToBuffer();}else{consumeBuffer();state=0/* Static */;// go back one character if we were not modifying
if(char!=='*'&&char!=='?'&&char!=='+')i--;}break;case 2/* ParamRegExp */:// TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
// it already works by escaping the closing )
// https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
// is this really something people need since you can also write
// /prefix_:p()_suffix
if(char===')'){// handle the escaped )
if(customRe[customRe.length-1]=='\\')customRe=customRe.slice(0,-1)+char;else state=3/* ParamRegExpEnd */;}else{customRe+=char;}break;case 3/* ParamRegExpEnd */:// same as finalizing a param
consumeBuffer();state=0/* Static */;// go back one character if we were not modifying
if(char!=='*'&&char!=='?'&&char!=='+')i--;customRe='';break;default:crash('Unknown state');break;}}if(state===2/* ParamRegExp */)crash(`Unfinished custom RegExp for param "${buffer}"`);consumeBuffer();finalizeSegment();// tokenCache.set(path, tokens)
return tokens;}function createRouteRecordMatcher(record,parent,options){const parser=tokensToParser(tokenizePath(record.path),options);const matcher=assign(parser,{record,parent,// these needs to be populated by the parent
children:[],alias:[]});if(parent){// both are aliases or both are not aliases
// we don't want to mix them because the order is used when
// passing originalRecord in Matcher.addRoute
if(!matcher.record.aliasOf===!parent.record.aliasOf)parent.children.push(matcher);}return matcher;}/**
             * Creates a Router Matcher.
             *
             * @internal
             * @param routes - array of initial routes
             * @param globalOptions - global route options
             */function createRouterMatcher(routes,globalOptions){// normalized ordered array of matchers
const matchers=[];const matcherMap=new Map();globalOptions=mergeOptions({strict:false,end:true,sensitive:false},globalOptions);function getRecordMatcher(name){return matcherMap.get(name);}function addRoute(record,parent,originalRecord){// used later on to remove by name
const isRootAdd=!originalRecord;const mainNormalizedRecord=normalizeRouteRecord(record);// we might be the child of an alias
mainNormalizedRecord.aliasOf=originalRecord&&originalRecord.record;const options=mergeOptions(globalOptions,record);// generate an array of records to correctly handle aliases
const normalizedRecords=[mainNormalizedRecord];if('alias'in record){const aliases=typeof record.alias==='string'?[record.alias]:record.alias;for(const alias of aliases){normalizedRecords.push(assign({},mainNormalizedRecord,{// this allows us to hold a copy of the `components` option
// so that async components cache is hold on the original record
components:originalRecord?originalRecord.record.components:mainNormalizedRecord.components,path:alias,// we might be the child of an alias
aliasOf:originalRecord?originalRecord.record:mainNormalizedRecord// the aliases are always of the same kind as the original since they
// are defined on the same record
}));}}let matcher;let originalMatcher;for(const normalizedRecord of normalizedRecords){const{path}=normalizedRecord;// Build up the path for nested routes if the child isn't an absolute
// route. Only add the / delimiter if the child path isn't empty and if the
// parent path doesn't have a trailing slash
if(parent&&path[0]!=='/'){const parentPath=parent.record.path;const connectingSlash=parentPath[parentPath.length-1]==='/'?'':'/';normalizedRecord.path=parent.record.path+(path&&connectingSlash+path);}// create the object before hand so it can be passed to children
matcher=createRouteRecordMatcher(normalizedRecord,parent,options);// if we are an alias we must tell the original record that we exist
// so we can be removed
if(originalRecord){originalRecord.alias.push(matcher);}else{// otherwise, the first record is the original and others are aliases
originalMatcher=originalMatcher||matcher;if(originalMatcher!==matcher)originalMatcher.alias.push(matcher);// remove the route if named and only for the top record (avoid in nested calls)
// this works because the original record is the first one
if(isRootAdd&&record.name&&!isAliasRecord(matcher))removeRoute(record.name);}if('children'in mainNormalizedRecord){const children=mainNormalizedRecord.children;for(let i=0;i<children.length;i++){addRoute(children[i],matcher,originalRecord&&originalRecord.children[i]);}}// if there was no original record, then the first one was not an alias and all
// other alias (if any) need to reference this record when adding children
originalRecord=originalRecord||matcher;// TODO: add normalized records for more flexibility
// if (parent && isAliasRecord(originalRecord)) {
//   parent.children.push(originalRecord)
// }
insertMatcher(matcher);}return originalMatcher?()=>{// since other matchers are aliases, they should be removed by the original matcher
removeRoute(originalMatcher);}:noop;}function removeRoute(matcherRef){if(isRouteName(matcherRef)){const matcher=matcherMap.get(matcherRef);if(matcher){matcherMap.delete(matcherRef);matchers.splice(matchers.indexOf(matcher),1);matcher.children.forEach(removeRoute);matcher.alias.forEach(removeRoute);}}else{const index=matchers.indexOf(matcherRef);if(index>-1){matchers.splice(index,1);if(matcherRef.record.name)matcherMap.delete(matcherRef.record.name);matcherRef.children.forEach(removeRoute);matcherRef.alias.forEach(removeRoute);}}}function getRoutes(){return matchers;}function insertMatcher(matcher){let i=0;// console.log('i is', { i })
while(i<matchers.length&&comparePathParserScore(matcher,matchers[i])>=0)i++;// console.log('END i is', { i })
// while (i < matchers.length && matcher.score <= matchers[i].score) i++
matchers.splice(i,0,matcher);// only add the original record to the name map
if(matcher.record.name&&!isAliasRecord(matcher))matcherMap.set(matcher.record.name,matcher);}function resolve(location,currentLocation){let matcher;let params={};let path;let name;if('name'in location&&location.name){matcher=matcherMap.get(location.name);if(!matcher)throw createRouterError(1/* MATCHER_NOT_FOUND */,{location});name=matcher.record.name;params=assign(// paramsFromLocation is a new object
paramsFromLocation(currentLocation.params,// only keep params that exist in the resolved location
// TODO: only keep optional params coming from a parent record
matcher.keys.filter(k=>!k.optional).map(k=>k.name)),location.params);// throws if cannot be stringified
path=matcher.stringify(params);}else if('path'in location){// no need to resolve the path with the matcher as it was provided
// this also allows the user to control the encoding
path=location.path;matcher=matchers.find(m=>m.re.test(path));// matcher should have a value after the loop
if(matcher){// TODO: dev warning of unused params if provided
// we know the matcher works because we tested the regexp
params=matcher.parse(path);name=matcher.record.name;}// location is a relative path
}else{// match by name or path of current route
matcher=currentLocation.name?matcherMap.get(currentLocation.name):matchers.find(m=>m.re.test(currentLocation.path));if(!matcher)throw createRouterError(1/* MATCHER_NOT_FOUND */,{location,currentLocation});name=matcher.record.name;// since we are navigating to the same location, we don't need to pick the
// params like when `name` is provided
params=assign({},currentLocation.params,location.params);path=matcher.stringify(params);}const matched=[];let parentMatcher=matcher;while(parentMatcher){// reversed order so parents are at the beginning
matched.unshift(parentMatcher.record);parentMatcher=parentMatcher.parent;}return{name,path,params,matched,meta:mergeMetaFields(matched)};}// add initial routes
routes.forEach(route=>addRoute(route));return{addRoute,resolve,removeRoute,getRoutes,getRecordMatcher};}function paramsFromLocation(params,keys){const newParams={};for(const key of keys){if(key in params)newParams[key]=params[key];}return newParams;}/**
             * Normalizes a RouteRecordRaw. Creates a copy
             *
             * @param record
             * @returns the normalized version
             */function normalizeRouteRecord(record){return{path:record.path,redirect:record.redirect,name:record.name,meta:record.meta||{},aliasOf:undefined,beforeEnter:record.beforeEnter,props:normalizeRecordProps(record),children:record.children||[],instances:{},leaveGuards:new Set(),updateGuards:new Set(),enterCallbacks:{},components:'components'in record?record.components||{}:{default:record.component}};}/**
             * Normalize the optional `props` in a record to always be an object similar to
             * components. Also accept a boolean for components.
             * @param record
             */function normalizeRecordProps(record){const propsObject={};// props does not exist on redirect records but we can set false directly
const props=record.props||false;if('component'in record){propsObject.default=props;}else{// NOTE: we could also allow a function to be applied to every component.
// Would need user feedback for use cases
for(const name in record.components)propsObject[name]=typeof props==='boolean'?props:props[name];}return propsObject;}/**
             * Checks if a record or any of its parent is an alias
             * @param record
             */function isAliasRecord(record){while(record){if(record.record.aliasOf)return true;record=record.parent;}return false;}/**
             * Merge meta fields of an array of records
             *
             * @param matched - array of matched records
             */function mergeMetaFields(matched){return matched.reduce((meta,record)=>assign(meta,record.meta),{});}function mergeOptions(defaults,partialOptions){const options={};for(const key in defaults){options[key]=key in partialOptions?partialOptions[key]:defaults[key];}return options;}/**
             * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
             * < > `
             *
             * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
             * defines some extra characters to be encoded. Most browsers do not encode them
             * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
             * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
             * plus `-._~`. This extra safety should be applied to query by patching the
             * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
             * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
             * into a `/` if directly typed in. The _backtick_ (`````) should also be
             * encoded everywhere because some browsers like FF encode it when directly
             * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
             */ // const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE=/#/g;// %23
const AMPERSAND_RE=/&/g;// %26
const SLASH_RE=/\//g;// %2F
const EQUAL_RE=/=/g;// %3D
const IM_RE=/\?/g;// %3F
const PLUS_RE=/\+/g;// %2B
/**
             * NOTE: It's not clear to me if we should encode the + symbol in queries, it
             * seems to be less flexible than not doing so and I can't find out the legacy
             * systems requiring this for regular requests like text/html. In the standard,
             * the encoding of the plus character is only mentioned for
             * application/x-www-form-urlencoded
             * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
             * leave the plus character as is in queries. To be more flexible, we allow the
             * plus character on the query but it can also be manually encoded by the user.
             *
             * Resources:
             * - https://url.spec.whatwg.org/#urlencoded-parsing
             * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
             */const ENC_BRACKET_OPEN_RE=/%5B/g;// [
const ENC_BRACKET_CLOSE_RE=/%5D/g;// ]
const ENC_CARET_RE=/%5E/g;// ^
const ENC_BACKTICK_RE=/%60/g;// `
const ENC_CURLY_OPEN_RE=/%7B/g;// {
const ENC_PIPE_RE=/%7C/g;// |
const ENC_CURLY_CLOSE_RE=/%7D/g;// }
const ENC_SPACE_RE=/%20/g;// }
/**
             * Encode characters that need to be encoded on the path, search and hash
             * sections of the URL.
             *
             * @internal
             * @param text - string to encode
             * @returns encoded string
             */function commonEncode(text){return encodeURI(''+text).replace(ENC_PIPE_RE,'|').replace(ENC_BRACKET_OPEN_RE,'[').replace(ENC_BRACKET_CLOSE_RE,']');}/**
             * Encode characters that need to be encoded on the hash section of the URL.
             *
             * @param text - string to encode
             * @returns encoded string
             */function encodeHash(text){return commonEncode(text).replace(ENC_CURLY_OPEN_RE,'{').replace(ENC_CURLY_CLOSE_RE,'}').replace(ENC_CARET_RE,'^');}/**
             * Encode characters that need to be encoded query values on the query
             * section of the URL.
             *
             * @param text - string to encode
             * @returns encoded string
             */function encodeQueryValue(text){return commonEncode(text)// Encode the space as +, encode the + to differentiate it from the space
.replace(PLUS_RE,'%2B').replace(ENC_SPACE_RE,'+').replace(HASH_RE,'%23').replace(AMPERSAND_RE,'%26').replace(ENC_BACKTICK_RE,'`').replace(ENC_CURLY_OPEN_RE,'{').replace(ENC_CURLY_CLOSE_RE,'}').replace(ENC_CARET_RE,'^');}/**
             * Like `encodeQueryValue` but also encodes the `=` character.
             *
             * @param text - string to encode
             */function encodeQueryKey(text){return encodeQueryValue(text).replace(EQUAL_RE,'%3D');}/**
             * Encode characters that need to be encoded on the path section of the URL.
             *
             * @param text - string to encode
             * @returns encoded string
             */function encodePath(text){return commonEncode(text).replace(HASH_RE,'%23').replace(IM_RE,'%3F');}/**
             * Encode characters that need to be encoded on the path section of the URL as a
             * param. This function encodes everything {@link encodePath} does plus the
             * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
             * string instead.
             *
             * @param text - string to encode
             * @returns encoded string
             */function encodeParam(text){return text==null?'':encodePath(text).replace(SLASH_RE,'%2F');}/**
             * Decode text using `decodeURIComponent`. Returns the original text if it
             * fails.
             *
             * @param text - string to decode
             * @returns decoded string
             */function decode(text){try{return decodeURIComponent(''+text);}catch(err){}return''+text;}/**
             * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
             * version with the leading `?` and without Should work as URLSearchParams

             * @internal
             *
             * @param search - search string to parse
             * @returns a query object
             */function parseQuery(search){const query={};// avoid creating an object with an empty key and empty value
// because of split('&')
if(search===''||search==='?')return query;const hasLeadingIM=search[0]==='?';const searchParams=(hasLeadingIM?search.slice(1):search).split('&');for(let i=0;i<searchParams.length;++i){// pre decode the + into space
const searchParam=searchParams[i].replace(PLUS_RE,' ');// allow the = character
const eqPos=searchParam.indexOf('=');const key=decode(eqPos<0?searchParam:searchParam.slice(0,eqPos));const value=eqPos<0?null:decode(searchParam.slice(eqPos+1));if(key in query){// an extra variable for ts types
let currentValue=query[key];if(!Array.isArray(currentValue)){currentValue=query[key]=[currentValue];}currentValue.push(value);}else{query[key]=value;}}return query;}/**
             * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
             * doesn't prepend a `?`
             *
             * @internal
             *
             * @param query - query object to stringify
             * @returns string version of the query without the leading `?`
             */function stringifyQuery(query){let search='';for(let key in query){const value=query[key];key=encodeQueryKey(key);if(value==null){// only null adds the value
if(value!==undefined){search+=(search.length?'&':'')+key;}continue;}// keep null values
const values=Array.isArray(value)?value.map(v=>v&&encodeQueryValue(v)):[value&&encodeQueryValue(value)];values.forEach(value=>{// skip undefined values in arrays as if they were not present
// smaller code than using filter
if(value!==undefined){// only append & with non-empty search
search+=(search.length?'&':'')+key;if(value!=null)search+='='+value;}});}return search;}/**
             * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
             * numbers into strings, removing keys with an undefined value and replacing
             * undefined with null in arrays
             *
             * @param query - query object to normalize
             * @returns a normalized query object
             */function normalizeQuery(query){const normalizedQuery={};for(const key in query){const value=query[key];if(value!==undefined){normalizedQuery[key]=Array.isArray(value)?value.map(v=>v==null?null:''+v):value==null?value:''+value;}}return normalizedQuery;}/**
             * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
             */function useCallbacks(){let handlers=[];function add(handler){handlers.push(handler);return()=>{const i=handlers.indexOf(handler);if(i>-1)handlers.splice(i,1);};}function reset(){handlers=[];}return{add,list:()=>handlers,reset};}function guardToPromiseFn(guard,to,from,record,name){// keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
const enterCallbackArray=record&&(// name is defined if record is because of the function overload
record.enterCallbacks[name]=record.enterCallbacks[name]||[]);return()=>new Promise((resolve,reject)=>{const next=valid=>{if(valid===false)reject(createRouterError(4/* NAVIGATION_ABORTED */,{from,to}));else if(valid instanceof Error){reject(valid);}else if(isRouteLocation(valid)){reject(createRouterError(2/* NAVIGATION_GUARD_REDIRECT */,{from:to,to:valid}));}else{if(enterCallbackArray&&// since enterCallbackArray is truthy, both record and name also are
record.enterCallbacks[name]===enterCallbackArray&&typeof valid==='function')enterCallbackArray.push(valid);resolve();}};// wrapping with Promise.resolve allows it to work with both async and sync guards
const guardReturn=guard.call(record&&record.instances[name],to,from,next);let guardCall=Promise.resolve(guardReturn);if(guard.length<3)guardCall=guardCall.then(next);guardCall.catch(err=>reject(err));});}function extractComponentsGuards(matched,guardType,to,from){const guards=[];for(const record of matched){for(const name in record.components){let rawComponent=record.components[name];// skip update and leave guards if the route component is not mounted
if(guardType!=='beforeRouteEnter'&&!record.instances[name])continue;if(isRouteComponent(rawComponent)){// __vccOpts is added by vue-class-component and contain the regular options
const options=rawComponent.__vccOpts||rawComponent;const guard=options[guardType];guard&&guards.push(guardToPromiseFn(guard,to,from,record,name));}else{// start requesting the chunk already
let componentPromise=rawComponent();guards.push(()=>componentPromise.then(resolved=>{if(!resolved)return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));const resolvedComponent=isESModule(resolved)?resolved.default:resolved;// replace the function with the resolved component
record.components[name]=resolvedComponent;// __vccOpts is added by vue-class-component and contain the regular options
const options=resolvedComponent.__vccOpts||resolvedComponent;const guard=options[guardType];return guard&&guardToPromiseFn(guard,to,from,record,name)();}));}}}return guards;}/**
             * Allows differentiating lazy components from functional components and vue-class-component
             *
             * @param component
             */function isRouteComponent(component){return typeof component==='object'||'displayName'in component||'props'in component||'__vccOpts'in component;}// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function useLink(props){const router=inject(routerKey);const currentRoute=inject(routeLocationKey);const route=computed(()=>router.resolve(unref(props.to)));const activeRecordIndex=computed(()=>{const{matched}=route.value;const{length}=matched;const routeMatched=matched[length-1];const currentMatched=currentRoute.matched;if(!routeMatched||!currentMatched.length)return-1;const index=currentMatched.findIndex(isSameRouteRecord.bind(null,routeMatched));if(index>-1)return index;// possible parent record
const parentRecordPath=getOriginalPath(matched[length-2]);return(// we are dealing with nested routes
length>1&&// if the parent and matched route have the same path, this link is
// referring to the empty child. Or we currently are on a different
// child of the same parent
getOriginalPath(routeMatched)===parentRecordPath&&// avoid comparing the child with its parent
currentMatched[currentMatched.length-1].path!==parentRecordPath?currentMatched.findIndex(isSameRouteRecord.bind(null,matched[length-2])):index);});const isActive=computed(()=>activeRecordIndex.value>-1&&includesParams(currentRoute.params,route.value.params));const isExactActive=computed(()=>activeRecordIndex.value>-1&&activeRecordIndex.value===currentRoute.matched.length-1&&isSameRouteLocationParams(currentRoute.params,route.value.params));function navigate(e={}){if(guardEvent(e)){return router[unref(props.replace)?'replace':'push'](unref(props.to)// avoid uncaught errors are they are logged anyway
).catch(noop);}return Promise.resolve();}return{route,href:computed(()=>route.value.href),isActive,isExactActive,navigate};}const RouterLinkImpl=/*#__PURE__*/defineComponent({name:'RouterLink',props:{to:{type:[String,Object],required:true},replace:Boolean,activeClass:String,// inactiveClass: String,
exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:'page'}},useLink,setup(props,{slots}){const link=reactive(useLink(props));const{options}=inject(routerKey);const elClass=computed(()=>({[getLinkClass(props.activeClass,options.linkActiveClass,'router-link-active')]:link.isActive,// [getLinkClass(
//   props.inactiveClass,
//   options.linkInactiveClass,
//   'router-link-inactive'
// )]: !link.isExactActive,
[getLinkClass(props.exactActiveClass,options.linkExactActiveClass,'router-link-exact-active')]:link.isExactActive}));return()=>{const children=slots.default&&slots.default(link);return props.custom?children:h('a',{'aria-current':link.isExactActive?props.ariaCurrentValue:null,href:link.href,// this would override user added attrs but Vue will still add
// the listener so we end up triggering both
onClick:link.navigate,class:elClass.value},children);};}});// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
             * Component to render a link that triggers a navigation on click.
             */const RouterLink=RouterLinkImpl;function guardEvent(e){// don't redirect with control keys
if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;// don't redirect when preventDefault called
if(e.defaultPrevented)return;// don't redirect on right click
if(e.button!==undefined&&e.button!==0)return;// don't redirect if `target="_blank"`
// @ts-expect-error getAttribute does exist
if(e.currentTarget&&e.currentTarget.getAttribute){// @ts-expect-error getAttribute exists
const target=e.currentTarget.getAttribute('target');if(/\b_blank\b/i.test(target))return;}// this may be a Weex event which doesn't have this method
if(e.preventDefault)e.preventDefault();return true;}function includesParams(outer,inner){for(const key in inner){const innerValue=inner[key];const outerValue=outer[key];if(typeof innerValue==='string'){if(innerValue!==outerValue)return false;}else{if(!Array.isArray(outerValue)||outerValue.length!==innerValue.length||innerValue.some((value,i)=>value!==outerValue[i]))return false;}}return true;}/**
             * Get the original path value of a record by following its aliasOf
             * @param record
             */function getOriginalPath(record){return record?record.aliasOf?record.aliasOf.path:record.path:'';}/**
             * Utility class to get the active class based on defaults.
             * @param propClass
             * @param globalClass
             * @param defaultClass
             */const getLinkClass=(propClass,globalClass,defaultClass)=>propClass!=null?propClass:globalClass!=null?globalClass:defaultClass;const RouterViewImpl=/*#__PURE__*/defineComponent({name:'RouterView',// #674 we manually inherit them
inheritAttrs:false,props:{name:{type:String,default:'default'},route:Object},setup(props,{attrs,slots}){const injectedRoute=inject(routerViewLocationKey);const routeToDisplay=computed(()=>props.route||injectedRoute.value);const depth=inject(viewDepthKey,0);const matchedRouteRef=computed(()=>routeToDisplay.value.matched[depth]);provide(viewDepthKey,depth+1);provide(matchedRouteKey,matchedRouteRef);provide(routerViewLocationKey,routeToDisplay);const viewRef=ref();// watch at the same time the component instance, the route record we are
// rendering, and the name
watch(()=>[viewRef.value,matchedRouteRef.value,props.name],([instance,to,name],[oldInstance,from,oldName])=>{// copy reused instances
if(to){// this will update the instance for new instances as well as reused
// instances when navigating to a new route
to.instances[name]=instance;// the component instance is reused for a different route or name so
// we copy any saved update or leave guards. With async setup, the
// mounting component will mount before the matchedRoute changes,
// making instance === oldInstance, so we check if guards have been
// added before. This works because we remove guards when
// unmounting/deactivating components
if(from&&from!==to&&instance&&instance===oldInstance){if(!to.leaveGuards.size){to.leaveGuards=from.leaveGuards;}if(!to.updateGuards.size){to.updateGuards=from.updateGuards;}}}// trigger beforeRouteEnter next callbacks
if(instance&&to&&(// if there is no instance but to and from are the same this might be
// the first visit
!from||!isSameRouteRecord(to,from)||!oldInstance)){(to.enterCallbacks[name]||[]).forEach(callback=>callback(instance));}},{flush:'post'});return()=>{const route=routeToDisplay.value;const matchedRoute=matchedRouteRef.value;const ViewComponent=matchedRoute&&matchedRoute.components[props.name];// we need the value at the time we render because when we unmount, we
// navigated to a different location so the value is different
const currentName=props.name;if(!ViewComponent){return normalizeSlot(slots.default,{Component:ViewComponent,route});}// props from route configuration
const routePropsOption=matchedRoute.props[props.name];const routeProps=routePropsOption?routePropsOption===true?route.params:typeof routePropsOption==='function'?routePropsOption(route):routePropsOption:null;const onVnodeUnmounted=vnode=>{// remove the instance reference to prevent leak
if(vnode.component.isUnmounted){matchedRoute.instances[currentName]=null;}};const component=h(ViewComponent,assign({},routeProps,attrs,{onVnodeUnmounted,ref:viewRef}));return(// pass the vnode to the slot as a prop.
// h and <component :is="..."> both accept vnodes
normalizeSlot(slots.default,{Component:component,route})||component);};}});function normalizeSlot(slot,data){if(!slot)return null;const slotContent=slot(data);return slotContent.length===1?slotContent[0]:slotContent;}// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
             * Component to display the current route the user is at.
             */const RouterView=RouterViewImpl;/**
             * Creates a Router instance that can be used by a Vue app.
             *
             * @param options - {@link RouterOptions}
             */function createRouter(options){const matcher=createRouterMatcher(options.routes,options);const parseQuery$1=options.parseQuery||parseQuery;const stringifyQuery$1=options.stringifyQuery||stringifyQuery;const routerHistory=options.history;const beforeGuards=useCallbacks();const beforeResolveGuards=useCallbacks();const afterGuards=useCallbacks();const currentRoute=shallowRef(START_LOCATION_NORMALIZED);let pendingLocation=START_LOCATION_NORMALIZED;// leave the scrollRestoration if no scrollBehavior is provided
if(isBrowser&&options.scrollBehavior&&'scrollRestoration'in history){history.scrollRestoration='manual';}const normalizeParams=applyToParams.bind(null,paramValue=>''+paramValue);const encodeParams=applyToParams.bind(null,encodeParam);const decodeParams=// @ts-expect-error: intentionally avoid the type check
applyToParams.bind(null,decode);function addRoute(parentOrRoute,route){let parent;let record;if(isRouteName(parentOrRoute)){parent=matcher.getRecordMatcher(parentOrRoute);record=route;}else{record=parentOrRoute;}return matcher.addRoute(record,parent);}function removeRoute(name){const recordMatcher=matcher.getRecordMatcher(name);if(recordMatcher){matcher.removeRoute(recordMatcher);}}function getRoutes(){return matcher.getRoutes().map(routeMatcher=>routeMatcher.record);}function hasRoute(name){return!!matcher.getRecordMatcher(name);}function resolve(rawLocation,currentLocation){// const objectLocation = routerLocationAsObject(rawLocation)
// we create a copy to modify it later
currentLocation=assign({},currentLocation||currentRoute.value);if(typeof rawLocation==='string'){const locationNormalized=parseURL(parseQuery$1,rawLocation,currentLocation.path);const matchedRoute=matcher.resolve({path:locationNormalized.path},currentLocation);const href=routerHistory.createHref(locationNormalized.fullPath);// locationNormalized is always a new object
return assign(locationNormalized,matchedRoute,{params:decodeParams(matchedRoute.params),hash:decode(locationNormalized.hash),redirectedFrom:undefined,href});}let matcherLocation;// path could be relative in object as well
if('path'in rawLocation){matcherLocation=assign({},rawLocation,{path:parseURL(parseQuery$1,rawLocation.path,currentLocation.path).path});}else{// remove any nullish param
const targetParams=assign({},rawLocation.params);for(const key in targetParams){if(targetParams[key]==null){delete targetParams[key];}}// pass encoded values to the matcher so it can produce encoded path and fullPath
matcherLocation=assign({},rawLocation,{params:encodeParams(rawLocation.params)});// current location params are decoded, we need to encode them in case the
// matcher merges the params
currentLocation.params=encodeParams(currentLocation.params);}const matchedRoute=matcher.resolve(matcherLocation,currentLocation);const hash=rawLocation.hash||'';// decoding them) the matcher might have merged current location params so
// we need to run the decoding again
matchedRoute.params=normalizeParams(decodeParams(matchedRoute.params));const fullPath=stringifyURL(stringifyQuery$1,assign({},rawLocation,{hash:encodeHash(hash),path:matchedRoute.path}));const href=routerHistory.createHref(fullPath);return assign({fullPath,// keep the hash encoded so fullPath is effectively path + encodedQuery +
// hash
hash,query:// if the user is using a custom query lib like qs, we might have
// nested objects, so we keep the query as is, meaning it can contain
// numbers at `$route.query`, but at the point, the user will have to
// use their own type anyway.
// https://github.com/vuejs/vue-router-next/issues/328#issuecomment-649481567
stringifyQuery$1===stringifyQuery?normalizeQuery(rawLocation.query):rawLocation.query||{}},matchedRoute,{redirectedFrom:undefined,href});}function locationAsObject(to){return typeof to==='string'?parseURL(parseQuery$1,to,currentRoute.value.path):assign({},to);}function checkCanceledNavigation(to,from){if(pendingLocation!==to){return createRouterError(8/* NAVIGATION_CANCELLED */,{from,to});}}function push(to){return pushWithRedirect(to);}function replace(to){return push(assign(locationAsObject(to),{replace:true}));}function handleRedirectRecord(to){const lastMatched=to.matched[to.matched.length-1];if(lastMatched&&lastMatched.redirect){const{redirect}=lastMatched;let newTargetLocation=typeof redirect==='function'?redirect(to):redirect;if(typeof newTargetLocation==='string'){newTargetLocation=newTargetLocation.includes('?')||newTargetLocation.includes('#')?newTargetLocation=locationAsObject(newTargetLocation):// force empty params
{path:newTargetLocation};// @ts-expect-error: force empty params when a string is passed to let
// the router parse them again
newTargetLocation.params={};}return assign({query:to.query,hash:to.hash,params:to.params},newTargetLocation);}}function pushWithRedirect(to,redirectedFrom){const targetLocation=pendingLocation=resolve(to);const from=currentRoute.value;const data=to.state;const force=to.force;// to could be a string where `replace` is a function
const replace=to.replace===true;const shouldRedirect=handleRedirectRecord(targetLocation);if(shouldRedirect)return pushWithRedirect(assign(locationAsObject(shouldRedirect),{state:data,force,replace}),// keep original redirectedFrom if it exists
redirectedFrom||targetLocation);// if it was a redirect we already called `pushWithRedirect` above
const toLocation=targetLocation;toLocation.redirectedFrom=redirectedFrom;let failure;if(!force&&isSameRouteLocation(stringifyQuery$1,from,targetLocation)){failure=createRouterError(16/* NAVIGATION_DUPLICATED */,{to:toLocation,from});// trigger scroll to allow scrolling to the same anchor
handleScroll(from,from,// this is a push, the only way for it to be triggered from a
// history.listen is with a redirect, which makes it become a push
true,// This cannot be the first navigation because the initial location
// cannot be manually navigated to
false);}return(failure?Promise.resolve(failure):navigate(toLocation,from)).catch(error=>isNavigationFailure(error)?error:// reject any unknown error
triggerError(error,toLocation,from)).then(failure=>{if(failure){if(isNavigationFailure(failure,2/* NAVIGATION_GUARD_REDIRECT */)){return pushWithRedirect(// keep options
assign(locationAsObject(failure.to),{state:data,force,replace}),// preserve the original redirectedFrom if any
redirectedFrom||toLocation);}}else{// if we fail we don't finalize the navigation
failure=finalizeNavigation(toLocation,from,true,replace,data);}triggerAfterEach(toLocation,from,failure);return failure;});}/**
                 * Helper to reject and skip all navigation guards if a new navigation happened
                 * @param to
                 * @param from
                 */function checkCanceledNavigationAndReject(to,from){const error=checkCanceledNavigation(to,from);return error?Promise.reject(error):Promise.resolve();}// TODO: refactor the whole before guards by internally using router.beforeEach
function navigate(to,from){let guards;const[leavingRecords,updatingRecords,enteringRecords]=extractChangingRecords(to,from);// all components here have been resolved once because we are leaving
guards=extractComponentsGuards(leavingRecords.reverse(),'beforeRouteLeave',to,from);// leavingRecords is already reversed
for(const record of leavingRecords){record.leaveGuards.forEach(guard=>{guards.push(guardToPromiseFn(guard,to,from));});}const canceledNavigationCheck=checkCanceledNavigationAndReject.bind(null,to,from);guards.push(canceledNavigationCheck);// run the queue of per route beforeRouteLeave guards
return runGuardQueue(guards).then(()=>{// check global guards beforeEach
guards=[];for(const guard of beforeGuards.list()){guards.push(guardToPromiseFn(guard,to,from));}guards.push(canceledNavigationCheck);return runGuardQueue(guards);}).then(()=>{// check in components beforeRouteUpdate
guards=extractComponentsGuards(updatingRecords,'beforeRouteUpdate',to,from);for(const record of updatingRecords){record.updateGuards.forEach(guard=>{guards.push(guardToPromiseFn(guard,to,from));});}guards.push(canceledNavigationCheck);// run the queue of per route beforeEnter guards
return runGuardQueue(guards);}).then(()=>{// check the route beforeEnter
guards=[];for(const record of to.matched){// do not trigger beforeEnter on reused views
if(record.beforeEnter&&!from.matched.includes(record)){if(Array.isArray(record.beforeEnter)){for(const beforeEnter of record.beforeEnter)guards.push(guardToPromiseFn(beforeEnter,to,from));}else{guards.push(guardToPromiseFn(record.beforeEnter,to,from));}}}guards.push(canceledNavigationCheck);// run the queue of per route beforeEnter guards
return runGuardQueue(guards);}).then(()=>{// NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
// clear existing enterCallbacks, these are added by extractComponentsGuards
to.matched.forEach(record=>record.enterCallbacks={});// check in-component beforeRouteEnter
guards=extractComponentsGuards(enteringRecords,'beforeRouteEnter',to,from);guards.push(canceledNavigationCheck);// run the queue of per route beforeEnter guards
return runGuardQueue(guards);}).then(()=>{// check global guards beforeResolve
guards=[];for(const guard of beforeResolveGuards.list()){guards.push(guardToPromiseFn(guard,to,from));}guards.push(canceledNavigationCheck);return runGuardQueue(guards);})// catch any navigation canceled
.catch(err=>isNavigationFailure(err,8/* NAVIGATION_CANCELLED */)?err:Promise.reject(err));}function triggerAfterEach(to,from,failure){// navigation is confirmed, call afterGuards
// TODO: wrap with error handlers
for(const guard of afterGuards.list())guard(to,from,failure);}/**
                 * - Cleans up any navigation guards
                 * - Changes the url if necessary
                 * - Calls the scrollBehavior
                 */function finalizeNavigation(toLocation,from,isPush,replace,data){// a more recent navigation took place
const error=checkCanceledNavigation(toLocation,from);if(error)return error;// only consider as push if it's not the first navigation
const isFirstNavigation=from===START_LOCATION_NORMALIZED;const state=!isBrowser?{}:history.state;// change URL only if the user did a push/replace and if it's not the initial navigation because
// it's just reflecting the url
if(isPush){// on the initial navigation, we want to reuse the scroll position from
// history state if it exists
if(replace||isFirstNavigation)routerHistory.replace(toLocation.fullPath,assign({scroll:isFirstNavigation&&state&&state.scroll},data));else routerHistory.push(toLocation.fullPath,data);}// accept current navigation
currentRoute.value=toLocation;handleScroll(toLocation,from,isPush,isFirstNavigation);markAsReady();}let removeHistoryListener;// attach listener to history to trigger navigations
function setupListeners(){removeHistoryListener=routerHistory.listen((to,_from,info)=>{// cannot be a redirect route because it was in history
const toLocation=resolve(to);// due to dynamic routing, and to hash history with manual navigation
// (manually changing the url or calling history.hash = '#/somewhere'),
// there could be a redirect record in history
const shouldRedirect=handleRedirectRecord(toLocation);if(shouldRedirect){pushWithRedirect(assign(shouldRedirect,{replace:true}),toLocation).catch(noop);return;}pendingLocation=toLocation;const from=currentRoute.value;// TODO: should be moved to web history?
if(isBrowser){saveScrollPosition(getScrollKey(from.fullPath,info.delta),computeScrollPosition());}navigate(toLocation,from).catch(error=>{if(isNavigationFailure(error,4/* NAVIGATION_ABORTED */|8/* NAVIGATION_CANCELLED */)){return error;}if(isNavigationFailure(error,2/* NAVIGATION_GUARD_REDIRECT */)){// Here we could call if (info.delta) routerHistory.go(-info.delta,
// false) but this is bug prone as we have no way to wait the
// navigation to be finished before calling pushWithRedirect. Using
// a setTimeout of 16ms seems to work but there is not guarantee for
// it to work on every browser. So Instead we do not restore the
// history entry and trigger a new navigation as requested by the
// navigation guard.
// the error is already handled by router.push we just want to avoid
// logging the error
pushWithRedirect(error.to,toLocation// avoid an uncaught rejection, let push call triggerError
).then(failure=>{// manual change in hash history #916 ending up in the URL not
// changing but it was changed by the manual url change, so we
// need to manually change it ourselves
if(isNavigationFailure(failure,4/* NAVIGATION_ABORTED */|16/* NAVIGATION_DUPLICATED */)&&!info.delta&&info.type===NavigationType.pop){routerHistory.go(-1,false);}}).catch(noop);// avoid the then branch
return Promise.reject();}// do not restore history on unknown direction
if(info.delta)routerHistory.go(-info.delta,false);// unrecognized error, transfer to the global handler
return triggerError(error,toLocation,from);}).then(failure=>{failure=failure||finalizeNavigation(// after navigation, all matched components are resolved
toLocation,from,false);// revert the navigation
if(failure){if(info.delta){routerHistory.go(-info.delta,false);}else if(info.type===NavigationType.pop&&isNavigationFailure(failure,4/* NAVIGATION_ABORTED */|16/* NAVIGATION_DUPLICATED */)){// manual change in hash history #916
// it's like a push but lacks the information of the direction
routerHistory.go(-1,false);}}triggerAfterEach(toLocation,from,failure);}).catch(noop);});}// Initialization and Errors
let readyHandlers=useCallbacks();let errorHandlers=useCallbacks();let ready;/**
                 * Trigger errorHandlers added via onError and throws the error as well
                 *
                 * @param error - error to throw
                 * @param to - location we were navigating to when the error happened
                 * @param from - location we were navigating from when the error happened
                 * @returns the error as a rejected promise
                 */function triggerError(error,to,from){markAsReady(error);const list=errorHandlers.list();if(list.length){list.forEach(handler=>handler(error,to,from));}else{console.error(error);}return Promise.reject(error);}function isReady(){if(ready&&currentRoute.value!==START_LOCATION_NORMALIZED)return Promise.resolve();return new Promise((resolve,reject)=>{readyHandlers.add([resolve,reject]);});}/**
                 * Mark the router as ready, resolving the promised returned by isReady(). Can
                 * only be called once, otherwise does nothing.
                 * @param err - optional error
                 */function markAsReady(err){if(ready)return;ready=true;setupListeners();readyHandlers.list().forEach(([resolve,reject])=>err?reject(err):resolve());readyHandlers.reset();}// Scroll behavior
function handleScroll(to,from,isPush,isFirstNavigation){const{scrollBehavior}=options;if(!isBrowser||!scrollBehavior)return Promise.resolve();const scrollPosition=!isPush&&getSavedScrollPosition(getScrollKey(to.fullPath,0))||(isFirstNavigation||!isPush)&&history.state&&history.state.scroll||null;return nextTick().then(()=>scrollBehavior(to,from,scrollPosition)).then(position=>position&&scrollToPosition(position)).catch(err=>triggerError(err,to,from));}const go=delta=>routerHistory.go(delta);let started;const installedApps=new Set();const router={currentRoute,addRoute,removeRoute,hasRoute,getRoutes,resolve,options,push,replace,go,back:()=>go(-1),forward:()=>go(1),beforeEach:beforeGuards.add,beforeResolve:beforeResolveGuards.add,afterEach:afterGuards.add,onError:errorHandlers.add,isReady,install(app){const router=this;app.component('RouterLink',RouterLink);app.component('RouterView',RouterView);app.config.globalProperties.$router=router;Object.defineProperty(app.config.globalProperties,'$route',{enumerable:true,get:()=>unref(currentRoute)});// this initial navigation is only necessary on client, on server it doesn't
// make sense because it will create an extra unnecessary navigation and could
// lead to problems
if(isBrowser&&// used for the initial navigation client side to avoid pushing
// multiple times when the router is used in multiple apps
!started&&currentRoute.value===START_LOCATION_NORMALIZED){// see above
started=true;push(routerHistory.location).catch(err=>{});}const reactiveRoute={};for(const key in START_LOCATION_NORMALIZED){// @ts-expect-error: the key matches
reactiveRoute[key]=computed(()=>currentRoute.value[key]);}app.provide(routerKey,router);app.provide(routeLocationKey,reactive(reactiveRoute));app.provide(routerViewLocationKey,currentRoute);const unmountApp=app.unmount;installedApps.add(app);app.unmount=function(){installedApps.delete(app);// the router is not attached to an app anymore
if(installedApps.size<1){// invalidate the current navigation
pendingLocation=START_LOCATION_NORMALIZED;removeHistoryListener&&removeHistoryListener();currentRoute.value=START_LOCATION_NORMALIZED;started=false;ready=false;}unmountApp();};}};return router;}function runGuardQueue(guards){return guards.reduce((promise,guard)=>promise.then(()=>guard()),Promise.resolve());}function extractChangingRecords(to,from){const leavingRecords=[];const updatingRecords=[];const enteringRecords=[];const len=Math.max(from.matched.length,to.matched.length);for(let i=0;i<len;i++){const recordFrom=from.matched[i];if(recordFrom){if(to.matched.find(record=>isSameRouteRecord(record,recordFrom)))updatingRecords.push(recordFrom);else leavingRecords.push(recordFrom);}const recordTo=to.matched[i];if(recordTo){// the type doesn't matter because we are comparing per reference
if(!from.matched.find(record=>isSameRouteRecord(record,recordTo))){enteringRecords.push(recordTo);}}}return[leavingRecords,updatingRecords,enteringRecords];}/**
             * Returns the router instance. Equivalent to using `$router` inside
             * templates.
             */function useRouter(){return inject(routerKey);}function e(e){this.message=e;}e.prototype=new Error(),e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c;};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!";}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t;}));}(t);}catch(e){return r(t);}}function n(e){this.message=e;}function o(e,r){if("string"!=typeof e)throw new n("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]));}catch(e){throw new n("Invalid token specified: "+e.message);}}n.prototype=new Error(),n.prototype.name="InvalidTokenError";function getAugmentedNamespace(n){if(n.__esModule)return n;var a=Object.defineProperty({},'__esModule',{value:true});Object.keys(n).forEach(function(k){var d=Object.getOwnPropertyDescriptor(n,k);Object.defineProperty(a,k,d.get?d:{enumerable:true,get:function(){return n[k];}});});return a;}var axios$2={exports:{}};var bind$2=function bind(fn,thisArg){return function wrap(){var args=new Array(arguments.length);for(var i=0;i<args.length;i++){args[i]=arguments[i];}return fn.apply(thisArg,args);};};var bind$1=bind$2;// utils is a library of generic helper functions non-specific to axios
var toString=Object.prototype.toString;/**
             * Determine if a value is an Array
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Array, otherwise false
             */function isArray(val){return Array.isArray(val);}/**
             * Determine if a value is undefined
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if the value is undefined, otherwise false
             */function isUndefined(val){return typeof val==='undefined';}/**
             * Determine if a value is a Buffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Buffer, otherwise false
             */function isBuffer(val){return val!==null&&!isUndefined(val)&&val.constructor!==null&&!isUndefined(val.constructor)&&typeof val.constructor.isBuffer==='function'&&val.constructor.isBuffer(val);}/**
             * Determine if a value is an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an ArrayBuffer, otherwise false
             */function isArrayBuffer(val){return toString.call(val)==='[object ArrayBuffer]';}/**
             * Determine if a value is a FormData
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an FormData, otherwise false
             */function isFormData(val){return toString.call(val)==='[object FormData]';}/**
             * Determine if a value is a view on an ArrayBuffer
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
             */function isArrayBufferView(val){var result;if(typeof ArrayBuffer!=='undefined'&&ArrayBuffer.isView){result=ArrayBuffer.isView(val);}else{result=val&&val.buffer&&isArrayBuffer(val.buffer);}return result;}/**
             * Determine if a value is a String
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a String, otherwise false
             */function isString(val){return typeof val==='string';}/**
             * Determine if a value is a Number
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Number, otherwise false
             */function isNumber(val){return typeof val==='number';}/**
             * Determine if a value is an Object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is an Object, otherwise false
             */function isObject(val){return val!==null&&typeof val==='object';}/**
             * Determine if a value is a plain Object
             *
             * @param {Object} val The value to test
             * @return {boolean} True if value is a plain Object, otherwise false
             */function isPlainObject(val){if(toString.call(val)!=='[object Object]'){return false;}var prototype=Object.getPrototypeOf(val);return prototype===null||prototype===Object.prototype;}/**
             * Determine if a value is a Date
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Date, otherwise false
             */function isDate(val){return toString.call(val)==='[object Date]';}/**
             * Determine if a value is a File
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a File, otherwise false
             */function isFile(val){return toString.call(val)==='[object File]';}/**
             * Determine if a value is a Blob
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Blob, otherwise false
             */function isBlob(val){return toString.call(val)==='[object Blob]';}/**
             * Determine if a value is a Function
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Function, otherwise false
             */function isFunction(val){return toString.call(val)==='[object Function]';}/**
             * Determine if a value is a Stream
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a Stream, otherwise false
             */function isStream(val){return isObject(val)&&isFunction(val.pipe);}/**
             * Determine if a value is a URLSearchParams object
             *
             * @param {Object} val The value to test
             * @returns {boolean} True if value is a URLSearchParams object, otherwise false
             */function isURLSearchParams(val){return toString.call(val)==='[object URLSearchParams]';}/**
             * Trim excess whitespace off the beginning and end of a string
             *
             * @param {String} str The String to trim
             * @returns {String} The String freed of excess whitespace
             */function trim(str){return str.trim?str.trim():str.replace(/^\s+|\s+$/g,'');}/**
             * Determine if we're running in a standard browser environment
             *
             * This allows axios to run in a web worker, and react-native.
             * Both environments support XMLHttpRequest, but not fully standard globals.
             *
             * web workers:
             *  typeof window -> undefined
             *  typeof document -> undefined
             *
             * react-native:
             *  navigator.product -> 'ReactNative'
             * nativescript
             *  navigator.product -> 'NativeScript' or 'NS'
             */function isStandardBrowserEnv(){if(typeof navigator!=='undefined'&&(navigator.product==='ReactNative'||navigator.product==='NativeScript'||navigator.product==='NS')){return false;}return typeof window!=='undefined'&&typeof document!=='undefined';}/**
             * Iterate over an Array or an Object invoking a function for each item.
             *
             * If `obj` is an Array callback will be called passing
             * the value, index, and complete array for each item.
             *
             * If 'obj' is an Object callback will be called passing
             * the value, key, and complete object for each property.
             *
             * @param {Object|Array} obj The object to iterate
             * @param {Function} fn The callback to invoke for each item
             */function forEach(obj,fn){// Don't bother if no value provided
if(obj===null||typeof obj==='undefined'){return;}// Force an array if not already something iterable
if(typeof obj!=='object'){/*eslint no-param-reassign:0*/obj=[obj];}if(isArray(obj)){// Iterate over array values
for(var i=0,l=obj.length;i<l;i++){fn.call(null,obj[i],i,obj);}}else{// Iterate over object keys
for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){fn.call(null,obj[key],key,obj);}}}}/**
             * Accepts varargs expecting each argument to be an object, then
             * immutably merges the properties of each object and returns result.
             *
             * When multiple objects contain the same key the later object in
             * the arguments list will take precedence.
             *
             * Example:
             *
             * ```js
             * var result = merge({foo: 123}, {foo: 456});
             * console.log(result.foo); // outputs 456
             * ```
             *
             * @param {Object} obj1 Object to merge
             * @returns {Object} Result of all merge properties
             */function/* obj1, obj2, obj3, ... */merge(){var result={};function assignValue(val,key){if(isPlainObject(result[key])&&isPlainObject(val)){result[key]=merge(result[key],val);}else if(isPlainObject(val)){result[key]=merge({},val);}else if(isArray(val)){result[key]=val.slice();}else{result[key]=val;}}for(var i=0,l=arguments.length;i<l;i++){forEach(arguments[i],assignValue);}return result;}/**
             * Extends object a by mutably adding to it the properties of object b.
             *
             * @param {Object} a The object to be extended
             * @param {Object} b The object to copy properties from
             * @param {Object} thisArg The object to bind function to
             * @return {Object} The resulting value of object a
             */function extend(a,b,thisArg){forEach(b,function assignValue(val,key){if(thisArg&&typeof val==='function'){a[key]=bind$1(val,thisArg);}else{a[key]=val;}});return a;}/**
             * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
             *
             * @param {string} content with BOM
             * @return {string} content value without BOM
             */function stripBOM(content){if(content.charCodeAt(0)===0xFEFF){content=content.slice(1);}return content;}var utils$e={isArray:isArray,isArrayBuffer:isArrayBuffer,isBuffer:isBuffer,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isPlainObject:isPlainObject,isUndefined:isUndefined,isDate:isDate,isFile:isFile,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge,extend:extend,trim:trim,stripBOM:stripBOM};var utils$d=utils$e;function encode(val){return encodeURIComponent(val).replace(/%3A/gi,':').replace(/%24/g,'$').replace(/%2C/gi,',').replace(/%20/g,'+').replace(/%5B/gi,'[').replace(/%5D/gi,']');}/**
             * Build a URL by appending params to the end
             *
             * @param {string} url The base of the url (e.g., http://www.google.com)
             * @param {object} [params] The params to be appended
             * @returns {string} The formatted url
             */var buildURL$2=function buildURL(url,params,paramsSerializer){/*eslint no-param-reassign:0*/if(!params){return url;}var serializedParams;if(paramsSerializer){serializedParams=paramsSerializer(params);}else if(utils$d.isURLSearchParams(params)){serializedParams=params.toString();}else{var parts=[];utils$d.forEach(params,function serialize(val,key){if(val===null||typeof val==='undefined'){return;}if(utils$d.isArray(val)){key=key+'[]';}else{val=[val];}utils$d.forEach(val,function parseValue(v){if(utils$d.isDate(v)){v=v.toISOString();}else if(utils$d.isObject(v)){v=JSON.stringify(v);}parts.push(encode(key)+'='+encode(v));});});serializedParams=parts.join('&');}if(serializedParams){var hashmarkIndex=url.indexOf('#');if(hashmarkIndex!==-1){url=url.slice(0,hashmarkIndex);}url+=(url.indexOf('?')===-1?'?':'&')+serializedParams;}return url;};var utils$c=utils$e;function InterceptorManager$1(){this.handlers=[];}/**
             * Add a new interceptor to the stack
             *
             * @param {Function} fulfilled The function to handle `then` for a `Promise`
             * @param {Function} rejected The function to handle `reject` for a `Promise`
             *
             * @return {Number} An ID used to remove interceptor later
             */InterceptorManager$1.prototype.use=function use(fulfilled,rejected,options){this.handlers.push({fulfilled:fulfilled,rejected:rejected,synchronous:options?options.synchronous:false,runWhen:options?options.runWhen:null});return this.handlers.length-1;};/**
             * Remove an interceptor from the stack
             *
             * @param {Number} id The ID that was returned by `use`
             */InterceptorManager$1.prototype.eject=function eject(id){if(this.handlers[id]){this.handlers[id]=null;}};/**
             * Iterate over all the registered interceptors
             *
             * This method is particularly useful for skipping over any
             * interceptors that may have become `null` calling `eject`.
             *
             * @param {Function} fn The function to call for each interceptor
             */InterceptorManager$1.prototype.forEach=function forEach(fn){utils$c.forEach(this.handlers,function forEachHandler(h){if(h!==null){fn(h);}});};var InterceptorManager_1=InterceptorManager$1;var utils$b=utils$e;var normalizeHeaderName$1=function normalizeHeaderName(headers,normalizedName){utils$b.forEach(headers,function processHeader(value,name){if(name!==normalizedName&&name.toUpperCase()===normalizedName.toUpperCase()){headers[normalizedName]=value;delete headers[name];}});};/**
             * Update an Error with the specified config, error code, and response.
             *
             * @param {Error} error The error to update.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The error.
             */var enhanceError$2=function enhanceError(error,config,code,request,response){error.config=config;if(code){error.code=code;}error.request=request;error.response=response;error.isAxiosError=true;error.toJSON=function toJSON(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null};};return error;};var enhanceError$1=enhanceError$2;/**
             * Create an Error with the specified message, config, error code, request and response.
             *
             * @param {string} message The error message.
             * @param {Object} config The config.
             * @param {string} [code] The error code (for example, 'ECONNABORTED').
             * @param {Object} [request] The request.
             * @param {Object} [response] The response.
             * @returns {Error} The created error.
             */var createError$2=function createError(message,config,code,request,response){var error=new Error(message);return enhanceError$1(error,config,code,request,response);};var createError$1=createError$2;/**
             * Resolve or reject a Promise based on response status.
             *
             * @param {Function} resolve A function that resolves the promise.
             * @param {Function} reject A function that rejects the promise.
             * @param {object} response The response.
             */var settle$1=function settle(resolve,reject,response){var validateStatus=response.config.validateStatus;if(!response.status||!validateStatus||validateStatus(response.status)){resolve(response);}else{reject(createError$1('Request failed with status code '+response.status,response.config,null,response.request,response));}};var utils$a=utils$e;var cookies$1=utils$a.isStandardBrowserEnv()?// Standard browser envs support document.cookie
function standardBrowserEnv(){return{write:function write(name,value,expires,path,domain,secure){var cookie=[];cookie.push(name+'='+encodeURIComponent(value));if(utils$a.isNumber(expires)){cookie.push('expires='+new Date(expires).toGMTString());}if(utils$a.isString(path)){cookie.push('path='+path);}if(utils$a.isString(domain)){cookie.push('domain='+domain);}if(secure===true){cookie.push('secure');}document.cookie=cookie.join('; ');},read:function read(name){var match=document.cookie.match(new RegExp('(^|;\\s*)('+name+')=([^;]*)'));return match?decodeURIComponent(match[3]):null;},remove:function remove(name){this.write(name,'',Date.now()-86400000);}};}():// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv(){return{write:function write(){},read:function read(){return null;},remove:function remove(){}};}();/**
             * Determines whether the specified URL is absolute
             *
             * @param {string} url The URL to test
             * @returns {boolean} True if the specified URL is absolute, otherwise false
             */var isAbsoluteURL$1=function isAbsoluteURL(url){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);};/**
             * Creates a new URL by combining the specified URLs
             *
             * @param {string} baseURL The base URL
             * @param {string} relativeURL The relative URL
             * @returns {string} The combined URL
             */var combineURLs$1=function combineURLs(baseURL,relativeURL){return relativeURL?baseURL.replace(/\/+$/,'')+'/'+relativeURL.replace(/^\/+/,''):baseURL;};var isAbsoluteURL=isAbsoluteURL$1;var combineURLs=combineURLs$1;/**
             * Creates a new URL by combining the baseURL with the requestedURL,
             * only when the requestedURL is not already an absolute URL.
             * If the requestURL is absolute, this function returns the requestedURL untouched.
             *
             * @param {string} baseURL The base URL
             * @param {string} requestedURL Absolute or relative URL to combine
             * @returns {string} The combined full path
             */var buildFullPath$1=function buildFullPath(baseURL,requestedURL){if(baseURL&&!isAbsoluteURL(requestedURL)){return combineURLs(baseURL,requestedURL);}return requestedURL;};var utils$9=utils$e;// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf=['age','authorization','content-length','content-type','etag','expires','from','host','if-modified-since','if-unmodified-since','last-modified','location','max-forwards','proxy-authorization','referer','retry-after','user-agent'];/**
             * Parse headers into an object
             *
             * ```
             * Date: Wed, 27 Aug 2014 08:58:49 GMT
             * Content-Type: application/json
             * Connection: keep-alive
             * Transfer-Encoding: chunked
             * ```
             *
             * @param {String} headers Headers needing to be parsed
             * @returns {Object} Headers parsed into an object
             */var parseHeaders$1=function parseHeaders(headers){var parsed={};var key;var val;var i;if(!headers){return parsed;}utils$9.forEach(headers.split('\n'),function parser(line){i=line.indexOf(':');key=utils$9.trim(line.substr(0,i)).toLowerCase();val=utils$9.trim(line.substr(i+1));if(key){if(parsed[key]&&ignoreDuplicateOf.indexOf(key)>=0){return;}if(key==='set-cookie'){parsed[key]=(parsed[key]?parsed[key]:[]).concat([val]);}else{parsed[key]=parsed[key]?parsed[key]+', '+val:val;}}});return parsed;};var utils$8=utils$e;var isURLSameOrigin$1=utils$8.isStandardBrowserEnv()?// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv(){var msie=/(msie|trident)/i.test(navigator.userAgent);var urlParsingNode=document.createElement('a');var originURL;/**
                * Parse a URL to discover it's components
                *
                * @param {String} url The URL to be parsed
                * @returns {Object}
                */function resolveURL(url){var href=url;if(msie){// IE needs attribute set twice to normalize properties
urlParsingNode.setAttribute('href',href);href=urlParsingNode.href;}urlParsingNode.setAttribute('href',href);// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return{href:urlParsingNode.href,protocol:urlParsingNode.protocol?urlParsingNode.protocol.replace(/:$/,''):'',host:urlParsingNode.host,search:urlParsingNode.search?urlParsingNode.search.replace(/^\?/,''):'',hash:urlParsingNode.hash?urlParsingNode.hash.replace(/^#/,''):'',hostname:urlParsingNode.hostname,port:urlParsingNode.port,pathname:urlParsingNode.pathname.charAt(0)==='/'?urlParsingNode.pathname:'/'+urlParsingNode.pathname};}originURL=resolveURL(window.location.href);/**
                * Determine if a URL shares the same origin as the current location
                *
                * @param {String} requestURL The URL to test
                * @returns {boolean} True if URL shares the same origin, otherwise false
                */return function isURLSameOrigin(requestURL){var parsed=utils$8.isString(requestURL)?resolveURL(requestURL):requestURL;return parsed.protocol===originURL.protocol&&parsed.host===originURL.host;};}():// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv(){return function isURLSameOrigin(){return true;};}();/**
             * A `Cancel` is an object that is thrown when an operation is canceled.
             *
             * @class
             * @param {string=} message The message.
             */function Cancel$3(message){this.message=message;}Cancel$3.prototype.toString=function toString(){return'Cancel'+(this.message?': '+this.message:'');};Cancel$3.prototype.__CANCEL__=true;var Cancel_1=Cancel$3;var utils$7=utils$e;var settle=settle$1;var cookies=cookies$1;var buildURL$1=buildURL$2;var buildFullPath=buildFullPath$1;var parseHeaders=parseHeaders$1;var isURLSameOrigin=isURLSameOrigin$1;var createError=createError$2;var defaults$4=defaults_1;var Cancel$2=Cancel_1;var xhr=function xhrAdapter(config){return new Promise(function dispatchXhrRequest(resolve,reject){var requestData=config.data;var requestHeaders=config.headers;var responseType=config.responseType;var onCanceled;function done(){if(config.cancelToken){config.cancelToken.unsubscribe(onCanceled);}if(config.signal){config.signal.removeEventListener('abort',onCanceled);}}if(utils$7.isFormData(requestData)){delete requestHeaders['Content-Type'];// Let the browser set it
}var request=new XMLHttpRequest();// HTTP basic authentication
if(config.auth){var username=config.auth.username||'';var password=config.auth.password?unescape(encodeURIComponent(config.auth.password)):'';requestHeaders.Authorization='Basic '+btoa(username+':'+password);}var fullPath=buildFullPath(config.baseURL,config.url);request.open(config.method.toUpperCase(),buildURL$1(fullPath,config.params,config.paramsSerializer),true);// Set the request timeout in MS
request.timeout=config.timeout;function onloadend(){if(!request){return;}// Prepare the response
var responseHeaders='getAllResponseHeaders'in request?parseHeaders(request.getAllResponseHeaders()):null;var responseData=!responseType||responseType==='text'||responseType==='json'?request.responseText:request.response;var response={data:responseData,status:request.status,statusText:request.statusText,headers:responseHeaders,config:config,request:request};settle(function _resolve(value){resolve(value);done();},function _reject(err){reject(err);done();},response);// Clean up request
request=null;}if('onloadend'in request){// Use onloadend if available
request.onloadend=onloadend;}else{// Listen for ready state to emulate onloadend
request.onreadystatechange=function handleLoad(){if(!request||request.readyState!==4){return;}// The request errored out and we didn't get a response, this will be
// handled by onerror instead
// With one exception: request that using file: protocol, most browsers
// will return status as 0 even though it's a successful request
if(request.status===0&&!(request.responseURL&&request.responseURL.indexOf('file:')===0)){return;}// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(onloadend);};}// Handle browser request cancellation (as opposed to a manual cancellation)
request.onabort=function handleAbort(){if(!request){return;}reject(createError('Request aborted',config,'ECONNABORTED',request));// Clean up request
request=null;};// Handle low level network errors
request.onerror=function handleError(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
reject(createError('Network Error',config,null,request));// Clean up request
request=null;};// Handle timeout
request.ontimeout=function handleTimeout(){var timeoutErrorMessage=config.timeout?'timeout of '+config.timeout+'ms exceeded':'timeout exceeded';var transitional=config.transitional||defaults$4.transitional;if(config.timeoutErrorMessage){timeoutErrorMessage=config.timeoutErrorMessage;}reject(createError(timeoutErrorMessage,config,transitional.clarifyTimeoutError?'ETIMEDOUT':'ECONNABORTED',request));// Clean up request
request=null;};// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(utils$7.isStandardBrowserEnv()){// Add xsrf header
var xsrfValue=(config.withCredentials||isURLSameOrigin(fullPath))&&config.xsrfCookieName?cookies.read(config.xsrfCookieName):undefined;if(xsrfValue){requestHeaders[config.xsrfHeaderName]=xsrfValue;}}// Add headers to the request
if('setRequestHeader'in request){utils$7.forEach(requestHeaders,function setRequestHeader(val,key){if(typeof requestData==='undefined'&&key.toLowerCase()==='content-type'){// Remove Content-Type if data is undefined
delete requestHeaders[key];}else{// Otherwise add header to the request
request.setRequestHeader(key,val);}});}// Add withCredentials to request if needed
if(!utils$7.isUndefined(config.withCredentials)){request.withCredentials=!!config.withCredentials;}// Add responseType to request if needed
if(responseType&&responseType!=='json'){request.responseType=config.responseType;}// Handle progress if needed
if(typeof config.onDownloadProgress==='function'){request.addEventListener('progress',config.onDownloadProgress);}// Not all browsers support upload events
if(typeof config.onUploadProgress==='function'&&request.upload){request.upload.addEventListener('progress',config.onUploadProgress);}if(config.cancelToken||config.signal){// Handle cancellation
// eslint-disable-next-line func-names
onCanceled=function(cancel){if(!request){return;}reject(!cancel||cancel&&cancel.type?new Cancel$2('canceled'):cancel);request.abort();request=null;};config.cancelToken&&config.cancelToken.subscribe(onCanceled);if(config.signal){config.signal.aborted?onCanceled():config.signal.addEventListener('abort',onCanceled);}}if(!requestData){requestData=null;}// Send the request
request.send(requestData);});};var utils$6=utils$e;var normalizeHeaderName=normalizeHeaderName$1;var enhanceError=enhanceError$2;var DEFAULT_CONTENT_TYPE={'Content-Type':'application/x-www-form-urlencoded'};function setContentTypeIfUnset(headers,value){if(!utils$6.isUndefined(headers)&&utils$6.isUndefined(headers['Content-Type'])){headers['Content-Type']=value;}}function getDefaultAdapter(){var adapter;if(typeof XMLHttpRequest!=='undefined'){// For browsers use XHR adapter
adapter=xhr;}else if(typeof process!=='undefined'&&Object.prototype.toString.call(process)==='[object process]'){// For node use HTTP adapter
adapter=xhr;}return adapter;}function stringifySafely(rawValue,parser,encoder){if(utils$6.isString(rawValue)){try{(parser||JSON.parse)(rawValue);return utils$6.trim(rawValue);}catch(e){if(e.name!=='SyntaxError'){throw e;}}}return(encoder||JSON.stringify)(rawValue);}var defaults$3={transitional:{silentJSONParsing:true,forcedJSONParsing:true,clarifyTimeoutError:false},adapter:getDefaultAdapter(),transformRequest:[function transformRequest(data,headers){normalizeHeaderName(headers,'Accept');normalizeHeaderName(headers,'Content-Type');if(utils$6.isFormData(data)||utils$6.isArrayBuffer(data)||utils$6.isBuffer(data)||utils$6.isStream(data)||utils$6.isFile(data)||utils$6.isBlob(data)){return data;}if(utils$6.isArrayBufferView(data)){return data.buffer;}if(utils$6.isURLSearchParams(data)){setContentTypeIfUnset(headers,'application/x-www-form-urlencoded;charset=utf-8');return data.toString();}if(utils$6.isObject(data)||headers&&headers['Content-Type']==='application/json'){setContentTypeIfUnset(headers,'application/json');return stringifySafely(data);}return data;}],transformResponse:[function transformResponse(data){var transitional=this.transitional||defaults$3.transitional;var silentJSONParsing=transitional&&transitional.silentJSONParsing;var forcedJSONParsing=transitional&&transitional.forcedJSONParsing;var strictJSONParsing=!silentJSONParsing&&this.responseType==='json';if(strictJSONParsing||forcedJSONParsing&&utils$6.isString(data)&&data.length){try{return JSON.parse(data);}catch(e){if(strictJSONParsing){if(e.name==='SyntaxError'){throw enhanceError(e,this,'E_JSON_PARSE');}throw e;}}}return data;}],/**
               * A timeout in milliseconds to abort a request. If set to 0 (default) a
               * timeout is not created.
               */timeout:0,xsrfCookieName:'XSRF-TOKEN',xsrfHeaderName:'X-XSRF-TOKEN',maxContentLength:-1,maxBodyLength:-1,validateStatus:function validateStatus(status){return status>=200&&status<300;},headers:{common:{'Accept':'application/json, text/plain, */*'}}};utils$6.forEach(['delete','get','head'],function forEachMethodNoData(method){defaults$3.headers[method]={};});utils$6.forEach(['post','put','patch'],function forEachMethodWithData(method){defaults$3.headers[method]=utils$6.merge(DEFAULT_CONTENT_TYPE);});var defaults_1=defaults$3;var utils$5=utils$e;var defaults$2=defaults_1;/**
             * Transform the data for a request or a response
             *
             * @param {Object|String} data The data to be transformed
             * @param {Array} headers The headers for the request or response
             * @param {Array|Function} fns A single function or Array of functions
             * @returns {*} The resulting transformed data
             */var transformData$1=function transformData(data,headers,fns){var context=this||defaults$2;/*eslint no-param-reassign:0*/utils$5.forEach(fns,function transform(fn){data=fn.call(context,data,headers);});return data;};var isCancel$1=function isCancel(value){return!!(value&&value.__CANCEL__);};var utils$4=utils$e;var transformData=transformData$1;var isCancel=isCancel$1;var defaults$1=defaults_1;var Cancel$1=Cancel_1;/**
             * Throws a `Cancel` if cancellation has been requested.
             */function throwIfCancellationRequested(config){if(config.cancelToken){config.cancelToken.throwIfRequested();}if(config.signal&&config.signal.aborted){throw new Cancel$1('canceled');}}/**
             * Dispatch a request to the server using the configured adapter.
             *
             * @param {object} config The config that is to be used for the request
             * @returns {Promise} The Promise to be fulfilled
             */var dispatchRequest$1=function dispatchRequest(config){throwIfCancellationRequested(config);// Ensure headers exist
config.headers=config.headers||{};// Transform request data
config.data=transformData.call(config,config.data,config.headers,config.transformRequest);// Flatten headers
config.headers=utils$4.merge(config.headers.common||{},config.headers[config.method]||{},config.headers);utils$4.forEach(['delete','get','head','post','put','patch','common'],function cleanHeaderConfig(method){delete config.headers[method];});var adapter=config.adapter||defaults$1.adapter;return adapter(config).then(function onAdapterResolution(response){throwIfCancellationRequested(config);// Transform response data
response.data=transformData.call(config,response.data,response.headers,config.transformResponse);return response;},function onAdapterRejection(reason){if(!isCancel(reason)){throwIfCancellationRequested(config);// Transform response data
if(reason&&reason.response){reason.response.data=transformData.call(config,reason.response.data,reason.response.headers,config.transformResponse);}}return Promise.reject(reason);});};var utils$3=utils$e;/**
             * Config-specific merge-function which creates a new config-object
             * by merging two configuration objects together.
             *
             * @param {Object} config1
             * @param {Object} config2
             * @returns {Object} New object resulting from merging config2 to config1
             */var mergeConfig$2=function mergeConfig(config1,config2){// eslint-disable-next-line no-param-reassign
config2=config2||{};var config={};function getMergedValue(target,source){if(utils$3.isPlainObject(target)&&utils$3.isPlainObject(source)){return utils$3.merge(target,source);}else if(utils$3.isPlainObject(source)){return utils$3.merge({},source);}else if(utils$3.isArray(source)){return source.slice();}return source;}// eslint-disable-next-line consistent-return
function mergeDeepProperties(prop){if(!utils$3.isUndefined(config2[prop])){return getMergedValue(config1[prop],config2[prop]);}else if(!utils$3.isUndefined(config1[prop])){return getMergedValue(undefined,config1[prop]);}}// eslint-disable-next-line consistent-return
function valueFromConfig2(prop){if(!utils$3.isUndefined(config2[prop])){return getMergedValue(undefined,config2[prop]);}}// eslint-disable-next-line consistent-return
function defaultToConfig2(prop){if(!utils$3.isUndefined(config2[prop])){return getMergedValue(undefined,config2[prop]);}else if(!utils$3.isUndefined(config1[prop])){return getMergedValue(undefined,config1[prop]);}}// eslint-disable-next-line consistent-return
function mergeDirectKeys(prop){if(prop in config2){return getMergedValue(config1[prop],config2[prop]);}else if(prop in config1){return getMergedValue(undefined,config1[prop]);}}var mergeMap={'url':valueFromConfig2,'method':valueFromConfig2,'data':valueFromConfig2,'baseURL':defaultToConfig2,'transformRequest':defaultToConfig2,'transformResponse':defaultToConfig2,'paramsSerializer':defaultToConfig2,'timeout':defaultToConfig2,'timeoutMessage':defaultToConfig2,'withCredentials':defaultToConfig2,'adapter':defaultToConfig2,'responseType':defaultToConfig2,'xsrfCookieName':defaultToConfig2,'xsrfHeaderName':defaultToConfig2,'onUploadProgress':defaultToConfig2,'onDownloadProgress':defaultToConfig2,'decompress':defaultToConfig2,'maxContentLength':defaultToConfig2,'maxBodyLength':defaultToConfig2,'transport':defaultToConfig2,'httpAgent':defaultToConfig2,'httpsAgent':defaultToConfig2,'cancelToken':defaultToConfig2,'socketPath':defaultToConfig2,'responseEncoding':defaultToConfig2,'validateStatus':mergeDirectKeys};utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)),function computeConfigValue(prop){var merge=mergeMap[prop]||mergeDeepProperties;var configValue=merge(prop);utils$3.isUndefined(configValue)&&merge!==mergeDirectKeys||(config[prop]=configValue);});return config;};var data={"version":"0.25.0"};var VERSION=data.version;var validators$1={};// eslint-disable-next-line func-names
['object','boolean','number','function','string','symbol'].forEach(function(type,i){validators$1[type]=function validator(thing){return typeof thing===type||'a'+(i<1?'n ':' ')+type;};});var deprecatedWarnings={};/**
             * Transitional option validator
             * @param {function|boolean?} validator - set to false if the transitional option has been removed
             * @param {string?} version - deprecated version / removed since version
             * @param {string?} message - some message with additional info
             * @returns {function}
             */validators$1.transitional=function transitional(validator,version,message){function formatMessage(opt,desc){return'[Axios v'+VERSION+'] Transitional option \''+opt+'\''+desc+(message?'. '+message:'');}// eslint-disable-next-line func-names
return function(value,opt,opts){if(validator===false){throw new Error(formatMessage(opt,' has been removed'+(version?' in '+version:'')));}if(version&&!deprecatedWarnings[opt]){deprecatedWarnings[opt]=true;// eslint-disable-next-line no-console
console.warn(formatMessage(opt,' has been deprecated since v'+version+' and will be removed in the near future'));}return validator?validator(value,opt,opts):true;};};/**
             * Assert object's properties type
             * @param {object} options
             * @param {object} schema
             * @param {boolean?} allowUnknown
             */function assertOptions(options,schema,allowUnknown){if(typeof options!=='object'){throw new TypeError('options must be an object');}var keys=Object.keys(options);var i=keys.length;while(i-->0){var opt=keys[i];var validator=schema[opt];if(validator){var value=options[opt];var result=value===undefined||validator(value,opt,options);if(result!==true){throw new TypeError('option '+opt+' must be '+result);}continue;}if(allowUnknown!==true){throw Error('Unknown option '+opt);}}}var validator$1={assertOptions:assertOptions,validators:validators$1};var utils$2=utils$e;var buildURL=buildURL$2;var InterceptorManager=InterceptorManager_1;var dispatchRequest=dispatchRequest$1;var mergeConfig$1=mergeConfig$2;var validator=validator$1;var validators=validator.validators;/**
             * Create a new instance of Axios
             *
             * @param {Object} instanceConfig The default config for the instance
             */function Axios$1(instanceConfig){this.defaults=instanceConfig;this.interceptors={request:new InterceptorManager(),response:new InterceptorManager()};}/**
             * Dispatch a request
             *
             * @param {Object} config The config specific for this request (merged with this.defaults)
             */Axios$1.prototype.request=function request(configOrUrl,config){/*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
if(typeof configOrUrl==='string'){config=config||{};config.url=configOrUrl;}else{config=configOrUrl||{};}if(!config.url){throw new Error('Provided config url is not valid');}config=mergeConfig$1(this.defaults,config);// Set config.method
if(config.method){config.method=config.method.toLowerCase();}else if(this.defaults.method){config.method=this.defaults.method.toLowerCase();}else{config.method='get';}var transitional=config.transitional;if(transitional!==undefined){validator.assertOptions(transitional,{silentJSONParsing:validators.transitional(validators.boolean),forcedJSONParsing:validators.transitional(validators.boolean),clarifyTimeoutError:validators.transitional(validators.boolean)},false);}// filter out skipped interceptors
var requestInterceptorChain=[];var synchronousRequestInterceptors=true;this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor){if(typeof interceptor.runWhen==='function'&&interceptor.runWhen(config)===false){return;}synchronousRequestInterceptors=synchronousRequestInterceptors&&interceptor.synchronous;requestInterceptorChain.unshift(interceptor.fulfilled,interceptor.rejected);});var responseInterceptorChain=[];this.interceptors.response.forEach(function pushResponseInterceptors(interceptor){responseInterceptorChain.push(interceptor.fulfilled,interceptor.rejected);});var promise;if(!synchronousRequestInterceptors){var chain=[dispatchRequest,undefined];Array.prototype.unshift.apply(chain,requestInterceptorChain);chain=chain.concat(responseInterceptorChain);promise=Promise.resolve(config);while(chain.length){promise=promise.then(chain.shift(),chain.shift());}return promise;}var newConfig=config;while(requestInterceptorChain.length){var onFulfilled=requestInterceptorChain.shift();var onRejected=requestInterceptorChain.shift();try{newConfig=onFulfilled(newConfig);}catch(error){onRejected(error);break;}}try{promise=dispatchRequest(newConfig);}catch(error){return Promise.reject(error);}while(responseInterceptorChain.length){promise=promise.then(responseInterceptorChain.shift(),responseInterceptorChain.shift());}return promise;};Axios$1.prototype.getUri=function getUri(config){if(!config.url){throw new Error('Provided config url is not valid');}config=mergeConfig$1(this.defaults,config);return buildURL(config.url,config.params,config.paramsSerializer).replace(/^\?/,'');};// Provide aliases for supported request methods
utils$2.forEach(['delete','get','head','options'],function forEachMethodNoData(method){/*eslint func-names:0*/Axios$1.prototype[method]=function(url,config){return this.request(mergeConfig$1(config||{},{method:method,url:url,data:(config||{}).data}));};});utils$2.forEach(['post','put','patch'],function forEachMethodWithData(method){/*eslint func-names:0*/Axios$1.prototype[method]=function(url,data,config){return this.request(mergeConfig$1(config||{},{method:method,url:url,data:data}));};});var Axios_1=Axios$1;var Cancel=Cancel_1;/**
             * A `CancelToken` is an object that can be used to request cancellation of an operation.
             *
             * @class
             * @param {Function} executor The executor function.
             */function CancelToken(executor){if(typeof executor!=='function'){throw new TypeError('executor must be a function.');}var resolvePromise;this.promise=new Promise(function promiseExecutor(resolve){resolvePromise=resolve;});var token=this;// eslint-disable-next-line func-names
this.promise.then(function(cancel){if(!token._listeners)return;var i;var l=token._listeners.length;for(i=0;i<l;i++){token._listeners[i](cancel);}token._listeners=null;});// eslint-disable-next-line func-names
this.promise.then=function(onfulfilled){var _resolve;// eslint-disable-next-line func-names
var promise=new Promise(function(resolve){token.subscribe(resolve);_resolve=resolve;}).then(onfulfilled);promise.cancel=function reject(){token.unsubscribe(_resolve);};return promise;};executor(function cancel(message){if(token.reason){// Cancellation has already been requested
return;}token.reason=new Cancel(message);resolvePromise(token.reason);});}/**
             * Throws a `Cancel` if cancellation has been requested.
             */CancelToken.prototype.throwIfRequested=function throwIfRequested(){if(this.reason){throw this.reason;}};/**
             * Subscribe to the cancel signal
             */CancelToken.prototype.subscribe=function subscribe(listener){if(this.reason){listener(this.reason);return;}if(this._listeners){this._listeners.push(listener);}else{this._listeners=[listener];}};/**
             * Unsubscribe from the cancel signal
             */CancelToken.prototype.unsubscribe=function unsubscribe(listener){if(!this._listeners){return;}var index=this._listeners.indexOf(listener);if(index!==-1){this._listeners.splice(index,1);}};/**
             * Returns an object that contains a new `CancelToken` and a function that, when called,
             * cancels the `CancelToken`.
             */CancelToken.source=function source(){var cancel;var token=new CancelToken(function executor(c){cancel=c;});return{token:token,cancel:cancel};};var CancelToken_1=CancelToken;/**
             * Syntactic sugar for invoking a function and expanding an array for arguments.
             *
             * Common use case would be to use `Function.prototype.apply`.
             *
             *  ```js
             *  function f(x, y, z) {}
             *  var args = [1, 2, 3];
             *  f.apply(null, args);
             *  ```
             *
             * With `spread` this example can be re-written.
             *
             *  ```js
             *  spread(function(x, y, z) {})([1, 2, 3]);
             *  ```
             *
             * @param {Function} callback
             * @returns {Function}
             */var spread=function spread(callback){return function wrap(arr){return callback.apply(null,arr);};};var utils$1=utils$e;/**
             * Determines whether the payload is an error thrown by Axios
             *
             * @param {*} payload The value to test
             * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
             */var isAxiosError=function isAxiosError(payload){return utils$1.isObject(payload)&&payload.isAxiosError===true;};var utils=utils$e;var bind=bind$2;var Axios=Axios_1;var mergeConfig=mergeConfig$2;var defaults=defaults_1;/**
             * Create an instance of Axios
             *
             * @param {Object} defaultConfig The default config for the instance
             * @return {Axios} A new instance of Axios
             */function createInstance(defaultConfig){var context=new Axios(defaultConfig);var instance=bind(Axios.prototype.request,context);// Copy axios.prototype to instance
utils.extend(instance,Axios.prototype,context);// Copy context to instance
utils.extend(instance,context);// Factory for creating new instances
instance.create=function create(instanceConfig){return createInstance(mergeConfig(defaultConfig,instanceConfig));};return instance;}// Create the default instance to be exported
var axios$1=createInstance(defaults);// Expose Axios class to allow class inheritance
axios$1.Axios=Axios;// Expose Cancel & CancelToken
axios$1.Cancel=Cancel_1;axios$1.CancelToken=CancelToken_1;axios$1.isCancel=isCancel$1;axios$1.VERSION=data.version;// Expose all/spread
axios$1.all=function all(promises){return Promise.all(promises);};axios$1.spread=spread;// Expose isAxiosError
axios$1.isAxiosError=isAxiosError;axios$2.exports=axios$1;// Allow use of default import syntax in TypeScript
axios$2.exports.default=axios$1;var axios=exports('d',axios$2.exports);var jsonBigint={exports:{}};var stringify={exports:{}};/*
             *      bignumber.js v9.0.2
             *      A JavaScript library for arbitrary-precision arithmetic.
             *      https://github.com/MikeMcl/bignumber.js
             *      Copyright (c) 2021 Michael Mclaughlin <M8ch88l@gmail.com>
             *      MIT Licensed.
             *
             *      BigNumber.prototype methods     |  BigNumber methods
             *                                      |
             *      absoluteValue            abs    |  clone
             *      comparedTo                      |  config               set
             *      decimalPlaces            dp     |      DECIMAL_PLACES
             *      dividedBy                div    |      ROUNDING_MODE
             *      dividedToIntegerBy       idiv   |      EXPONENTIAL_AT
             *      exponentiatedBy          pow    |      RANGE
             *      integerValue                    |      CRYPTO
             *      isEqualTo                eq     |      MODULO_MODE
             *      isFinite                        |      POW_PRECISION
             *      isGreaterThan            gt     |      FORMAT
             *      isGreaterThanOrEqualTo   gte    |      ALPHABET
             *      isInteger                       |  isBigNumber
             *      isLessThan               lt     |  maximum              max
             *      isLessThanOrEqualTo      lte    |  minimum              min
             *      isNaN                           |  random
             *      isNegative                      |  sum
             *      isPositive                      |
             *      isZero                          |
             *      minus                           |
             *      modulo                   mod    |
             *      multipliedBy             times  |
             *      negated                         |
             *      plus                            |
             *      precision                sd     |
             *      shiftedBy                       |
             *      squareRoot               sqrt   |
             *      toExponential                   |
             *      toFixed                         |
             *      toFormat                        |
             *      toFraction                      |
             *      toJSON                          |
             *      toNumber                        |
             *      toPrecision                     |
             *      toString                        |
             *      valueOf                         |
             *
             */var isNumeric=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,mathceil=Math.ceil,mathfloor=Math.floor,bignumberError='[BigNumber Error] ',tooManyDigits=bignumberError+'Number primitive has more than 15 significant digits: ',BASE=1e14,LOG_BASE=14,MAX_SAFE_INTEGER=0x1fffffffffffff,// 2^53 - 1
// MAX_INT32 = 0x7fffffff,                   // 2^31 - 1
POWS_TEN=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],SQRT_BASE=1e7,// EDITABLE
// The limit on the value of DECIMAL_PLACES, TO_EXP_NEG, TO_EXP_POS, MIN_EXP, MAX_EXP, and
// the arguments to toExponential, toFixed, toFormat, and toPrecision.
MAX=1E9;// 0 to MAX_INT32
/*
             * Create and return a BigNumber constructor.
             */function clone(configObject){var div,convertBase,parseNumeric,P=BigNumber.prototype={constructor:BigNumber,toString:null,valueOf:null},ONE=new BigNumber(1),//----------------------------- EDITABLE CONFIG DEFAULTS -------------------------------
// The default values below must be integers within the inclusive ranges stated.
// The values can also be changed at run-time using BigNumber.set.
// The maximum number of decimal places for operations involving division.
DECIMAL_PLACES=20,// 0 to MAX
// The rounding mode used when rounding to the above decimal places, and when using
// toExponential, toFixed, toFormat and toPrecision, and round (default value).
// UP         0 Away from zero.
// DOWN       1 Towards zero.
// CEIL       2 Towards +Infinity.
// FLOOR      3 Towards -Infinity.
// HALF_UP    4 Towards nearest neighbour. If equidistant, up.
// HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
// HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
// HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
// HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
ROUNDING_MODE=4,// 0 to 8
// EXPONENTIAL_AT : [TO_EXP_NEG , TO_EXP_POS]
// The exponent value at and beneath which toString returns exponential notation.
// Number type: -7
TO_EXP_NEG=-7,// 0 to -MAX
// The exponent value at and above which toString returns exponential notation.
// Number type: 21
TO_EXP_POS=21,// 0 to MAX
// RANGE : [MIN_EXP, MAX_EXP]
// The minimum exponent value, beneath which underflow to zero occurs.
// Number type: -324  (5e-324)
MIN_EXP=-1e7,// -1 to -MAX
// The maximum exponent value, above which overflow to Infinity occurs.
// Number type:  308  (1.7976931348623157e+308)
// For MAX_EXP > 1e7, e.g. new BigNumber('1e100000000').plus(1) may be slow.
MAX_EXP=1e7,// 1 to MAX
// Whether to use cryptographically-secure random number generation, if available.
CRYPTO=false,// true or false
// The modulo mode used when calculating the modulus: a mod n.
// The quotient (q = a / n) is calculated according to the corresponding rounding mode.
// The remainder (r) is calculated as: r = a - n * q.
//
// UP        0 The remainder is positive if the dividend is negative, else is negative.
// DOWN      1 The remainder has the same sign as the dividend.
//             This modulo mode is commonly known as 'truncated division' and is
//             equivalent to (a % n) in JavaScript.
// FLOOR     3 The remainder has the same sign as the divisor (Python %).
// HALF_EVEN 6 This modulo mode implements the IEEE 754 remainder function.
// EUCLID    9 Euclidian division. q = sign(n) * floor(a / abs(n)).
//             The remainder is always positive.
//
// The truncated division, floored division, Euclidian division and IEEE 754 remainder
// modes are commonly used for the modulus operation.
// Although the other rounding modes can also be used, they may not give useful results.
MODULO_MODE=1,// 0 to 9
// The maximum number of significant digits of the result of the exponentiatedBy operation.
// If POW_PRECISION is 0, there will be unlimited significant digits.
POW_PRECISION=0,// 0 to MAX
// The format specification used by the BigNumber.prototype.toFormat method.
FORMAT={prefix:'',groupSize:3,secondaryGroupSize:0,groupSeparator:',',decimalSeparator:'.',fractionGroupSize:0,fractionGroupSeparator:'\xA0',// non-breaking space
suffix:''},// The alphabet used for base conversion. It must be at least 2 characters long, with no '+',
// '-', '.', whitespace, or repeated character.
// '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_'
ALPHABET='0123456789abcdefghijklmnopqrstuvwxyz',alphabetHasNormalDecimalDigits=true;//------------------------------------------------------------------------------------------
// CONSTRUCTOR
/*
               * The BigNumber constructor and exported function.
               * Create and return a new instance of a BigNumber object.
               *
               * v {number|string|BigNumber} A numeric value.
               * [b] {number} The base of v. Integer, 2 to ALPHABET.length inclusive.
               */function BigNumber(v,b){var alphabet,c,caseChanged,e,i,isNum,len,str,x=this;// Enable constructor call without `new`.
if(!(x instanceof BigNumber))return new BigNumber(v,b);if(b==null){if(v&&v._isBigNumber===true){x.s=v.s;if(!v.c||v.e>MAX_EXP){x.c=x.e=null;}else if(v.e<MIN_EXP){x.c=[x.e=0];}else{x.e=v.e;x.c=v.c.slice();}return;}if((isNum=typeof v=='number')&&v*0==0){// Use `1 / n` to handle minus zero also.
x.s=1/v<0?(v=-v,-1):1;// Fast path for integers, where n < 2147483648 (2**31).
if(v===~~v){for(e=0,i=v;i>=10;i/=10,e++);if(e>MAX_EXP){x.c=x.e=null;}else{x.e=e;x.c=[v];}return;}str=String(v);}else{if(!isNumeric.test(str=String(v)))return parseNumeric(x,str,isNum);x.s=str.charCodeAt(0)==45?(str=str.slice(1),-1):1;}// Decimal point?
if((e=str.indexOf('.'))>-1)str=str.replace('.','');// Exponential form?
if((i=str.search(/e/i))>0){// Determine exponent.
if(e<0)e=i;e+=+str.slice(i+1);str=str.substring(0,i);}else if(e<0){// Integer.
e=str.length;}}else{// '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
intCheck(b,2,ALPHABET.length,'Base');// Allow exponential notation to be used with base 10 argument, while
// also rounding to DECIMAL_PLACES as with other bases.
if(b==10&&alphabetHasNormalDecimalDigits){x=new BigNumber(v);return round(x,DECIMAL_PLACES+x.e+1,ROUNDING_MODE);}str=String(v);if(isNum=typeof v=='number'){// Avoid potential interpretation of Infinity and NaN as base 44+ values.
if(v*0!=0)return parseNumeric(x,str,isNum,b);x.s=1/v<0?(str=str.slice(1),-1):1;// '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
if(BigNumber.DEBUG&&str.replace(/^0\.0*|\./,'').length>15){throw Error(tooManyDigits+v);}}else{x.s=str.charCodeAt(0)===45?(str=str.slice(1),-1):1;}alphabet=ALPHABET.slice(0,b);e=i=0;// Check that str is a valid base b number.
// Don't use RegExp, so alphabet can contain special characters.
for(len=str.length;i<len;i++){if(alphabet.indexOf(c=str.charAt(i))<0){if(c=='.'){// If '.' is not the first character and it has not be found before.
if(i>e){e=len;continue;}}else if(!caseChanged){// Allow e.g. hexadecimal 'FF' as well as 'ff'.
if(str==str.toUpperCase()&&(str=str.toLowerCase())||str==str.toLowerCase()&&(str=str.toUpperCase())){caseChanged=true;i=-1;e=0;continue;}}return parseNumeric(x,String(v),isNum,b);}}// Prevent later check for length on converted number.
isNum=false;str=convertBase(str,b,10,x.s);// Decimal point?
if((e=str.indexOf('.'))>-1)str=str.replace('.','');else e=str.length;}// Determine leading zeros.
for(i=0;str.charCodeAt(i)===48;i++);// Determine trailing zeros.
for(len=str.length;str.charCodeAt(--len)===48;);if(str=str.slice(i,++len)){len-=i;// '[BigNumber Error] Number primitive has more than 15 significant digits: {n}'
if(isNum&&BigNumber.DEBUG&&len>15&&(v>MAX_SAFE_INTEGER||v!==mathfloor(v))){throw Error(tooManyDigits+x.s*v);}// Overflow?
if((e=e-i-1)>MAX_EXP){// Infinity.
x.c=x.e=null;// Underflow?
}else if(e<MIN_EXP){// Zero.
x.c=[x.e=0];}else{x.e=e;x.c=[];// Transform base
// e is the base 10 exponent.
// i is where to slice str to get the first element of the coefficient array.
i=(e+1)%LOG_BASE;if(e<0)i+=LOG_BASE;// i < 1
if(i<len){if(i)x.c.push(+str.slice(0,i));for(len-=LOG_BASE;i<len;){x.c.push(+str.slice(i,i+=LOG_BASE));}i=LOG_BASE-(str=str.slice(i)).length;}else{i-=len;}for(;i--;str+='0');x.c.push(+str);}}else{// Zero.
x.c=[x.e=0];}}// CONSTRUCTOR PROPERTIES
BigNumber.clone=clone;BigNumber.ROUND_UP=0;BigNumber.ROUND_DOWN=1;BigNumber.ROUND_CEIL=2;BigNumber.ROUND_FLOOR=3;BigNumber.ROUND_HALF_UP=4;BigNumber.ROUND_HALF_DOWN=5;BigNumber.ROUND_HALF_EVEN=6;BigNumber.ROUND_HALF_CEIL=7;BigNumber.ROUND_HALF_FLOOR=8;BigNumber.EUCLID=9;/*
               * Configure infrequently-changing library-wide settings.
               *
               * Accept an object with the following optional properties (if the value of a property is
               * a number, it must be an integer within the inclusive range stated):
               *
               *   DECIMAL_PLACES   {number}           0 to MAX
               *   ROUNDING_MODE    {number}           0 to 8
               *   EXPONENTIAL_AT   {number|number[]}  -MAX to MAX  or  [-MAX to 0, 0 to MAX]
               *   RANGE            {number|number[]}  -MAX to MAX (not zero)  or  [-MAX to -1, 1 to MAX]
               *   CRYPTO           {boolean}          true or false
               *   MODULO_MODE      {number}           0 to 9
               *   POW_PRECISION       {number}           0 to MAX
               *   ALPHABET         {string}           A string of two or more unique characters which does
               *                                       not contain '.'.
               *   FORMAT           {object}           An object with some of the following properties:
               *     prefix                 {string}
               *     groupSize              {number}
               *     secondaryGroupSize     {number}
               *     groupSeparator         {string}
               *     decimalSeparator       {string}
               *     fractionGroupSize      {number}
               *     fractionGroupSeparator {string}
               *     suffix                 {string}
               *
               * (The values assigned to the above FORMAT object properties are not checked for validity.)
               *
               * E.g.
               * BigNumber.config({ DECIMAL_PLACES : 20, ROUNDING_MODE : 4 })
               *
               * Ignore properties/parameters set to null or undefined, except for ALPHABET.
               *
               * Return an object with the properties current values.
               */BigNumber.config=BigNumber.set=function(obj){var p,v;if(obj!=null){if(typeof obj=='object'){// DECIMAL_PLACES {number} Integer, 0 to MAX inclusive.
// '[BigNumber Error] DECIMAL_PLACES {not a primitive number|not an integer|out of range}: {v}'
if(obj.hasOwnProperty(p='DECIMAL_PLACES')){v=obj[p];intCheck(v,0,MAX,p);DECIMAL_PLACES=v;}// ROUNDING_MODE {number} Integer, 0 to 8 inclusive.
// '[BigNumber Error] ROUNDING_MODE {not a primitive number|not an integer|out of range}: {v}'
if(obj.hasOwnProperty(p='ROUNDING_MODE')){v=obj[p];intCheck(v,0,8,p);ROUNDING_MODE=v;}// EXPONENTIAL_AT {number|number[]}
// Integer, -MAX to MAX inclusive or
// [integer -MAX to 0 inclusive, 0 to MAX inclusive].
// '[BigNumber Error] EXPONENTIAL_AT {not a primitive number|not an integer|out of range}: {v}'
if(obj.hasOwnProperty(p='EXPONENTIAL_AT')){v=obj[p];if(v&&v.pop){intCheck(v[0],-MAX,0,p);intCheck(v[1],0,MAX,p);TO_EXP_NEG=v[0];TO_EXP_POS=v[1];}else{intCheck(v,-MAX,MAX,p);TO_EXP_NEG=-(TO_EXP_POS=v<0?-v:v);}}// RANGE {number|number[]} Non-zero integer, -MAX to MAX inclusive or
// [integer -MAX to -1 inclusive, integer 1 to MAX inclusive].
// '[BigNumber Error] RANGE {not a primitive number|not an integer|out of range|cannot be zero}: {v}'
if(obj.hasOwnProperty(p='RANGE')){v=obj[p];if(v&&v.pop){intCheck(v[0],-MAX,-1,p);intCheck(v[1],1,MAX,p);MIN_EXP=v[0];MAX_EXP=v[1];}else{intCheck(v,-MAX,MAX,p);if(v){MIN_EXP=-(MAX_EXP=v<0?-v:v);}else{throw Error(bignumberError+p+' cannot be zero: '+v);}}}// CRYPTO {boolean} true or false.
// '[BigNumber Error] CRYPTO not true or false: {v}'
// '[BigNumber Error] crypto unavailable'
if(obj.hasOwnProperty(p='CRYPTO')){v=obj[p];if(v===!!v){if(v){if(typeof crypto!='undefined'&&crypto&&(crypto.getRandomValues||crypto.randomBytes)){CRYPTO=v;}else{CRYPTO=!v;throw Error(bignumberError+'crypto unavailable');}}else{CRYPTO=v;}}else{throw Error(bignumberError+p+' not true or false: '+v);}}// MODULO_MODE {number} Integer, 0 to 9 inclusive.
// '[BigNumber Error] MODULO_MODE {not a primitive number|not an integer|out of range}: {v}'
if(obj.hasOwnProperty(p='MODULO_MODE')){v=obj[p];intCheck(v,0,9,p);MODULO_MODE=v;}// POW_PRECISION {number} Integer, 0 to MAX inclusive.
// '[BigNumber Error] POW_PRECISION {not a primitive number|not an integer|out of range}: {v}'
if(obj.hasOwnProperty(p='POW_PRECISION')){v=obj[p];intCheck(v,0,MAX,p);POW_PRECISION=v;}// FORMAT {object}
// '[BigNumber Error] FORMAT not an object: {v}'
if(obj.hasOwnProperty(p='FORMAT')){v=obj[p];if(typeof v=='object')FORMAT=v;else throw Error(bignumberError+p+' not an object: '+v);}// ALPHABET {string}
// '[BigNumber Error] ALPHABET invalid: {v}'
if(obj.hasOwnProperty(p='ALPHABET')){v=obj[p];// Disallow if less than two characters,
// or if it contains '+', '-', '.', whitespace, or a repeated character.
if(typeof v=='string'&&!/^.?$|[+\-.\s]|(.).*\1/.test(v)){alphabetHasNormalDecimalDigits=v.slice(0,10)=='0123456789';ALPHABET=v;}else{throw Error(bignumberError+p+' invalid: '+v);}}}else{// '[BigNumber Error] Object expected: {v}'
throw Error(bignumberError+'Object expected: '+obj);}}return{DECIMAL_PLACES:DECIMAL_PLACES,ROUNDING_MODE:ROUNDING_MODE,EXPONENTIAL_AT:[TO_EXP_NEG,TO_EXP_POS],RANGE:[MIN_EXP,MAX_EXP],CRYPTO:CRYPTO,MODULO_MODE:MODULO_MODE,POW_PRECISION:POW_PRECISION,FORMAT:FORMAT,ALPHABET:ALPHABET};};/*
               * Return true if v is a BigNumber instance, otherwise return false.
               *
               * If BigNumber.DEBUG is true, throw if a BigNumber instance is not well-formed.
               *
               * v {any}
               *
               * '[BigNumber Error] Invalid BigNumber: {v}'
               */BigNumber.isBigNumber=function(v){if(!v||v._isBigNumber!==true)return false;if(!BigNumber.DEBUG)return true;var i,n,c=v.c,e=v.e,s=v.s;out:if({}.toString.call(c)=='[object Array]'){if((s===1||s===-1)&&e>=-MAX&&e<=MAX&&e===mathfloor(e)){// If the first element is zero, the BigNumber value must be zero.
if(c[0]===0){if(e===0&&c.length===1)return true;break out;}// Calculate number of digits that c[0] should have, based on the exponent.
i=(e+1)%LOG_BASE;if(i<1)i+=LOG_BASE;// Calculate number of digits of c[0].
//if (Math.ceil(Math.log(c[0] + 1) / Math.LN10) == i) {
if(String(c[0]).length==i){for(i=0;i<c.length;i++){n=c[i];if(n<0||n>=BASE||n!==mathfloor(n))break out;}// Last element cannot be zero, unless it is the only element.
if(n!==0)return true;}}// Infinity/NaN
}else if(c===null&&e===null&&(s===null||s===1||s===-1)){return true;}throw Error(bignumberError+'Invalid BigNumber: '+v);};/*
               * Return a new BigNumber whose value is the maximum of the arguments.
               *
               * arguments {number|string|BigNumber}
               */BigNumber.maximum=BigNumber.max=function(){return maxOrMin(arguments,P.lt);};/*
               * Return a new BigNumber whose value is the minimum of the arguments.
               *
               * arguments {number|string|BigNumber}
               */BigNumber.minimum=BigNumber.min=function(){return maxOrMin(arguments,P.gt);};/*
               * Return a new BigNumber with a random value equal to or greater than 0 and less than 1,
               * and with dp, or DECIMAL_PLACES if dp is omitted, decimal places (or less if trailing
               * zeros are produced).
               *
               * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
               *
               * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp}'
               * '[BigNumber Error] crypto unavailable'
               */BigNumber.random=function(){var pow2_53=0x20000000000000;// Return a 53 bit integer n, where 0 <= n < 9007199254740992.
// Check if Math.random() produces more than 32 bits of randomness.
// If it does, assume at least 53 bits are produced, otherwise assume at least 30 bits.
// 0x40000000 is 2^30, 0x800000 is 2^23, 0x1fffff is 2^21 - 1.
var random53bitInt=Math.random()*pow2_53&0x1fffff?function(){return mathfloor(Math.random()*pow2_53);}:function(){return(Math.random()*0x40000000|0)*0x800000+(Math.random()*0x800000|0);};return function(dp){var a,b,e,k,v,i=0,c=[],rand=new BigNumber(ONE);if(dp==null)dp=DECIMAL_PLACES;else intCheck(dp,0,MAX);k=mathceil(dp/LOG_BASE);if(CRYPTO){// Browsers supporting crypto.getRandomValues.
if(crypto.getRandomValues){a=crypto.getRandomValues(new Uint32Array(k*=2));for(;i<k;){// 53 bits:
// ((Math.pow(2, 32) - 1) * Math.pow(2, 21)).toString(2)
// 11111 11111111 11111111 11111111 11100000 00000000 00000000
// ((Math.pow(2, 32) - 1) >>> 11).toString(2)
//                                     11111 11111111 11111111
// 0x20000 is 2^21.
v=a[i]*0x20000+(a[i+1]>>>11);// Rejection sampling:
// 0 <= v < 9007199254740992
// Probability that v >= 9e15, is
// 7199254740992 / 9007199254740992 ~= 0.0008, i.e. 1 in 1251
if(v>=9e15){b=crypto.getRandomValues(new Uint32Array(2));a[i]=b[0];a[i+1]=b[1];}else{// 0 <= v <= 8999999999999999
// 0 <= (v % 1e14) <= 99999999999999
c.push(v%1e14);i+=2;}}i=k/2;// Node.js supporting crypto.randomBytes.
}else if(crypto.randomBytes){// buffer
a=crypto.randomBytes(k*=7);for(;i<k;){// 0x1000000000000 is 2^48, 0x10000000000 is 2^40
// 0x100000000 is 2^32, 0x1000000 is 2^24
// 11111 11111111 11111111 11111111 11111111 11111111 11111111
// 0 <= v < 9007199254740992
v=(a[i]&31)*0x1000000000000+a[i+1]*0x10000000000+a[i+2]*0x100000000+a[i+3]*0x1000000+(a[i+4]<<16)+(a[i+5]<<8)+a[i+6];if(v>=9e15){crypto.randomBytes(7).copy(a,i);}else{// 0 <= (v % 1e14) <= 99999999999999
c.push(v%1e14);i+=7;}}i=k/7;}else{CRYPTO=false;throw Error(bignumberError+'crypto unavailable');}}// Use Math.random.
if(!CRYPTO){for(;i<k;){v=random53bitInt();if(v<9e15)c[i++]=v%1e14;}}k=c[--i];dp%=LOG_BASE;// Convert trailing digits to zeros according to dp.
if(k&&dp){v=POWS_TEN[LOG_BASE-dp];c[i]=mathfloor(k/v)*v;}// Remove trailing elements which are zero.
for(;c[i]===0;c.pop(),i--);// Zero?
if(i<0){c=[e=0];}else{// Remove leading elements which are zero and adjust exponent accordingly.
for(e=-1;c[0]===0;c.splice(0,1),e-=LOG_BASE);// Count the digits of the first element of c to determine leading zeros, and...
for(i=1,v=c[0];v>=10;v/=10,i++);// adjust the exponent accordingly.
if(i<LOG_BASE)e-=LOG_BASE-i;}rand.e=e;rand.c=c;return rand;};}();/*
               * Return a BigNumber whose value is the sum of the arguments.
               *
               * arguments {number|string|BigNumber}
               */BigNumber.sum=function(){var i=1,args=arguments,sum=new BigNumber(args[0]);for(;i<args.length;)sum=sum.plus(args[i++]);return sum;};// PRIVATE FUNCTIONS
// Called by BigNumber and BigNumber.prototype.toString.
convertBase=function(){var decimal='0123456789';/*
                 * Convert string of baseIn to an array of numbers of baseOut.
                 * Eg. toBaseOut('255', 10, 16) returns [15, 15].
                 * Eg. toBaseOut('ff', 16, 10) returns [2, 5, 5].
                 */function toBaseOut(str,baseIn,baseOut,alphabet){var j,arr=[0],arrL,i=0,len=str.length;for(;i<len;){for(arrL=arr.length;arrL--;arr[arrL]*=baseIn);arr[0]+=alphabet.indexOf(str.charAt(i++));for(j=0;j<arr.length;j++){if(arr[j]>baseOut-1){if(arr[j+1]==null)arr[j+1]=0;arr[j+1]+=arr[j]/baseOut|0;arr[j]%=baseOut;}}}return arr.reverse();}// Convert a numeric string of baseIn to a numeric string of baseOut.
// If the caller is toString, we are converting from base 10 to baseOut.
// If the caller is BigNumber, we are converting from baseIn to base 10.
return function(str,baseIn,baseOut,sign,callerIsToString){var alphabet,d,e,k,r,x,xc,y,i=str.indexOf('.'),dp=DECIMAL_PLACES,rm=ROUNDING_MODE;// Non-integer.
if(i>=0){k=POW_PRECISION;// Unlimited precision.
POW_PRECISION=0;str=str.replace('.','');y=new BigNumber(baseIn);x=y.pow(str.length-i);POW_PRECISION=k;// Convert str as if an integer, then restore the fraction part by dividing the
// result by its base raised to a power.
y.c=toBaseOut(toFixedPoint(coeffToString(x.c),x.e,'0'),10,baseOut,decimal);y.e=y.c.length;}// Convert the number as integer.
xc=toBaseOut(str,baseIn,baseOut,callerIsToString?(alphabet=ALPHABET,decimal):(alphabet=decimal,ALPHABET));// xc now represents str as an integer and converted to baseOut. e is the exponent.
e=k=xc.length;// Remove trailing zeros.
for(;xc[--k]==0;xc.pop());// Zero?
if(!xc[0])return alphabet.charAt(0);// Does str represent an integer? If so, no need for the division.
if(i<0){--e;}else{x.c=xc;x.e=e;// The sign is needed for correct rounding.
x.s=sign;x=div(x,y,dp,rm,baseOut);xc=x.c;r=x.r;e=x.e;}// xc now represents str converted to baseOut.
// THe index of the rounding digit.
d=e+dp+1;// The rounding digit: the digit to the right of the digit that may be rounded up.
i=xc[d];// Look at the rounding digits and mode to determine whether to round up.
k=baseOut/2;r=r||d<0||xc[d+1]!=null;r=rm<4?(i!=null||r)&&(rm==0||rm==(x.s<0?3:2)):i>k||i==k&&(rm==4||r||rm==6&&xc[d-1]&1||rm==(x.s<0?8:7));// If the index of the rounding digit is not greater than zero, or xc represents
// zero, then the result of the base conversion is zero or, if rounding up, a value
// such as 0.00001.
if(d<1||!xc[0]){// 1^-dp or 0
str=r?toFixedPoint(alphabet.charAt(1),-dp,alphabet.charAt(0)):alphabet.charAt(0);}else{// Truncate xc to the required number of decimal places.
xc.length=d;// Round up?
if(r){// Rounding up may mean the previous digit has to be rounded up and so on.
for(--baseOut;++xc[--d]>baseOut;){xc[d]=0;if(!d){++e;xc=[1].concat(xc);}}}// Determine trailing zeros.
for(k=xc.length;!xc[--k];);// E.g. [4, 11, 15] becomes 4bf.
for(i=0,str='';i<=k;str+=alphabet.charAt(xc[i++]));// Add leading zeros, decimal point and trailing zeros as required.
str=toFixedPoint(str,e,alphabet.charAt(0));}// The caller will add the sign.
return str;};}();// Perform division in the specified base. Called by div and convertBase.
div=function(){// Assume non-zero x and k.
function multiply(x,k,base){var m,temp,xlo,xhi,carry=0,i=x.length,klo=k%SQRT_BASE,khi=k/SQRT_BASE|0;for(x=x.slice();i--;){xlo=x[i]%SQRT_BASE;xhi=x[i]/SQRT_BASE|0;m=khi*xlo+xhi*klo;temp=klo*xlo+m%SQRT_BASE*SQRT_BASE+carry;carry=(temp/base|0)+(m/SQRT_BASE|0)+khi*xhi;x[i]=temp%base;}if(carry)x=[carry].concat(x);return x;}function compare(a,b,aL,bL){var i,cmp;if(aL!=bL){cmp=aL>bL?1:-1;}else{for(i=cmp=0;i<aL;i++){if(a[i]!=b[i]){cmp=a[i]>b[i]?1:-1;break;}}}return cmp;}function subtract(a,b,aL,base){var i=0;// Subtract b from a.
for(;aL--;){a[aL]-=i;i=a[aL]<b[aL]?1:0;a[aL]=i*base+a[aL]-b[aL];}// Remove leading zeros.
for(;!a[0]&&a.length>1;a.splice(0,1));}// x: dividend, y: divisor.
return function(x,y,dp,rm,base){var cmp,e,i,more,n,prod,prodL,q,qc,rem,remL,rem0,xi,xL,yc0,yL,yz,s=x.s==y.s?1:-1,xc=x.c,yc=y.c;// Either NaN, Infinity or 0?
if(!xc||!xc[0]||!yc||!yc[0]){return new BigNumber(// Return NaN if either NaN, or both Infinity or 0.
!x.s||!y.s||(xc?yc&&xc[0]==yc[0]:!yc)?NaN:// Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
xc&&xc[0]==0||!yc?s*0:s/0);}q=new BigNumber(s);qc=q.c=[];e=x.e-y.e;s=dp+e+1;if(!base){base=BASE;e=bitFloor(x.e/LOG_BASE)-bitFloor(y.e/LOG_BASE);s=s/LOG_BASE|0;}// Result exponent may be one less then the current value of e.
// The coefficients of the BigNumbers from convertBase may have trailing zeros.
for(i=0;yc[i]==(xc[i]||0);i++);if(yc[i]>(xc[i]||0))e--;if(s<0){qc.push(1);more=true;}else{xL=xc.length;yL=yc.length;i=0;s+=2;// Normalise xc and yc so highest order digit of yc is >= base / 2.
n=mathfloor(base/(yc[0]+1));// Not necessary, but to handle odd bases where yc[0] == (base / 2) - 1.
// if (n > 1 || n++ == 1 && yc[0] < base / 2) {
if(n>1){yc=multiply(yc,n,base);xc=multiply(xc,n,base);yL=yc.length;xL=xc.length;}xi=yL;rem=xc.slice(0,yL);remL=rem.length;// Add zeros to make remainder as long as divisor.
for(;remL<yL;rem[remL++]=0);yz=yc.slice();yz=[0].concat(yz);yc0=yc[0];if(yc[1]>=base/2)yc0++;// Not necessary, but to prevent trial digit n > base, when using base 3.
// else if (base == 3 && yc0 == 1) yc0 = 1 + 1e-15;
do{n=0;// Compare divisor and remainder.
cmp=compare(yc,rem,yL,remL);// If divisor < remainder.
if(cmp<0){// Calculate trial digit, n.
rem0=rem[0];if(yL!=remL)rem0=rem0*base+(rem[1]||0);// n is how many times the divisor goes into the current remainder.
n=mathfloor(rem0/yc0);//  Algorithm:
//  product = divisor multiplied by trial digit (n).
//  Compare product and remainder.
//  If product is greater than remainder:
//    Subtract divisor from product, decrement trial digit.
//  Subtract product from remainder.
//  If product was less than remainder at the last compare:
//    Compare new remainder and divisor.
//    If remainder is greater than divisor:
//      Subtract divisor from remainder, increment trial digit.
if(n>1){// n may be > base only when base is 3.
if(n>=base)n=base-1;// product = divisor * trial digit.
prod=multiply(yc,n,base);prodL=prod.length;remL=rem.length;// Compare product and remainder.
// If product > remainder then trial digit n too high.
// n is 1 too high about 5% of the time, and is not known to have
// ever been more than 1 too high.
while(compare(prod,rem,prodL,remL)==1){n--;// Subtract divisor from product.
subtract(prod,yL<prodL?yz:yc,prodL,base);prodL=prod.length;cmp=1;}}else{// n is 0 or 1, cmp is -1.
// If n is 0, there is no need to compare yc and rem again below,
// so change cmp to 1 to avoid it.
// If n is 1, leave cmp as -1, so yc and rem are compared again.
if(n==0){// divisor < remainder, so n must be at least 1.
cmp=n=1;}// product = divisor
prod=yc.slice();prodL=prod.length;}if(prodL<remL)prod=[0].concat(prod);// Subtract product from remainder.
subtract(rem,prod,remL,base);remL=rem.length;// If product was < remainder.
if(cmp==-1){// Compare divisor and new remainder.
// If divisor < new remainder, subtract divisor from remainder.
// Trial digit n too low.
// n is 1 too low about 5% of the time, and very rarely 2 too low.
while(compare(yc,rem,yL,remL)<1){n++;// Subtract divisor from remainder.
subtract(rem,yL<remL?yz:yc,remL,base);remL=rem.length;}}}else if(cmp===0){n++;rem=[0];}// else cmp === 1 and n will be 0
// Add the next digit, n, to the result array.
qc[i++]=n;// Update the remainder.
if(rem[0]){rem[remL++]=xc[xi]||0;}else{rem=[xc[xi]];remL=1;}}while((xi++<xL||rem[0]!=null)&&s--);more=rem[0]!=null;// Leading zero?
if(!qc[0])qc.splice(0,1);}if(base==BASE){// To calculate q.e, first get the number of digits of qc[0].
for(i=1,s=qc[0];s>=10;s/=10,i++);round(q,dp+(q.e=i+e*LOG_BASE-1)+1,rm,more);// Caller is convertBase.
}else{q.e=e;q.r=+more;}return q;};}();/*
               * Return a string representing the value of BigNumber n in fixed-point or exponential
               * notation rounded to the specified decimal places or significant digits.
               *
               * n: a BigNumber.
               * i: the index of the last digit required (i.e. the digit that may be rounded up).
               * rm: the rounding mode.
               * id: 1 (toExponential) or 2 (toPrecision).
               */function format(n,i,rm,id){var c0,e,ne,len,str;if(rm==null)rm=ROUNDING_MODE;else intCheck(rm,0,8);if(!n.c)return n.toString();c0=n.c[0];ne=n.e;if(i==null){str=coeffToString(n.c);str=id==1||id==2&&(ne<=TO_EXP_NEG||ne>=TO_EXP_POS)?toExponential(str,ne):toFixedPoint(str,ne,'0');}else{n=round(new BigNumber(n),i,rm);// n.e may have changed if the value was rounded up.
e=n.e;str=coeffToString(n.c);len=str.length;// toPrecision returns exponential notation if the number of significant digits
// specified is less than the number of digits necessary to represent the integer
// part of the value in fixed-point notation.
// Exponential notation.
if(id==1||id==2&&(i<=e||e<=TO_EXP_NEG)){// Append zeros?
for(;len<i;str+='0',len++);str=toExponential(str,e);// Fixed-point notation.
}else{i-=ne;str=toFixedPoint(str,e,'0');// Append zeros?
if(e+1>len){if(--i>0)for(str+='.';i--;str+='0');}else{i+=e-len;if(i>0){if(e+1==len)str+='.';for(;i--;str+='0');}}}}return n.s<0&&c0?'-'+str:str;}// Handle BigNumber.max and BigNumber.min.
function maxOrMin(args,method){var n,i=1,m=new BigNumber(args[0]);for(;i<args.length;i++){n=new BigNumber(args[i]);// If any number is NaN, return NaN.
if(!n.s){m=n;break;}else if(method.call(m,n)){m=n;}}return m;}/*
               * Strip trailing zeros, calculate base 10 exponent and check against MIN_EXP and MAX_EXP.
               * Called by minus, plus and times.
               */function normalise(n,c,e){var i=1,j=c.length;// Remove trailing zeros.
for(;!c[--j];c.pop());// Calculate the base 10 exponent. First get the number of digits of c[0].
for(j=c[0];j>=10;j/=10,i++);// Overflow?
if((e=i+e*LOG_BASE-1)>MAX_EXP){// Infinity.
n.c=n.e=null;// Underflow?
}else if(e<MIN_EXP){// Zero.
n.c=[n.e=0];}else{n.e=e;n.c=c;}return n;}// Handle values that fail the validity test in BigNumber.
parseNumeric=function(){var basePrefix=/^(-?)0([xbo])(?=\w[\w.]*$)/i,dotAfter=/^([^.]+)\.$/,dotBefore=/^\.([^.]+)$/,isInfinityOrNaN=/^-?(Infinity|NaN)$/,whitespaceOrPlus=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(x,str,isNum,b){var base,s=isNum?str:str.replace(whitespaceOrPlus,'');// No exception on ±Infinity or NaN.
if(isInfinityOrNaN.test(s)){x.s=isNaN(s)?null:s<0?-1:1;}else{if(!isNum){// basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i
s=s.replace(basePrefix,function(m,p1,p2){base=(p2=p2.toLowerCase())=='x'?16:p2=='b'?2:8;return!b||b==base?p1:m;});if(b){base=b;// E.g. '1.' to '1', '.1' to '0.1'
s=s.replace(dotAfter,'$1').replace(dotBefore,'0.$1');}if(str!=s)return new BigNumber(s,base);}// '[BigNumber Error] Not a number: {n}'
// '[BigNumber Error] Not a base {b} number: {n}'
if(BigNumber.DEBUG){throw Error(bignumberError+'Not a'+(b?' base '+b:'')+' number: '+str);}// NaN
x.s=null;}x.c=x.e=null;};}();/*
               * Round x to sd significant digits using rounding mode rm. Check for over/under-flow.
               * If r is truthy, it is known that there are more digits after the rounding digit.
               */function round(x,sd,rm,r){var d,i,j,k,n,ni,rd,xc=x.c,pows10=POWS_TEN;// if x is not Infinity or NaN...
if(xc){// rd is the rounding digit, i.e. the digit after the digit that may be rounded up.
// n is a base 1e14 number, the value of the element of array x.c containing rd.
// ni is the index of n within x.c.
// d is the number of digits of n.
// i is the index of rd within n including leading zeros.
// j is the actual index of rd within n (if < 0, rd is a leading zero).
out:{// Get the number of digits of the first element of xc.
for(d=1,k=xc[0];k>=10;k/=10,d++);i=sd-d;// If the rounding digit is in the first element of xc...
if(i<0){i+=LOG_BASE;j=sd;n=xc[ni=0];// Get the rounding digit at index j of n.
rd=n/pows10[d-j-1]%10|0;}else{ni=mathceil((i+1)/LOG_BASE);if(ni>=xc.length){if(r){// Needed by sqrt.
for(;xc.length<=ni;xc.push(0));n=rd=0;d=1;i%=LOG_BASE;j=i-LOG_BASE+1;}else{break out;}}else{n=k=xc[ni];// Get the number of digits of n.
for(d=1;k>=10;k/=10,d++);// Get the index of rd within n.
i%=LOG_BASE;// Get the index of rd within n, adjusted for leading zeros.
// The number of leading zeros of n is given by LOG_BASE - d.
j=i-LOG_BASE+d;// Get the rounding digit at index j of n.
rd=j<0?0:n/pows10[d-j-1]%10|0;}}r=r||sd<0||// Are there any non-zero digits after the rounding digit?
// The expression  n % pows10[d - j - 1]  returns all digits of n to the right
// of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
xc[ni+1]!=null||(j<0?n:n%pows10[d-j-1]);r=rm<4?(rd||r)&&(rm==0||rm==(x.s<0?3:2)):rd>5||rd==5&&(rm==4||r||rm==6&&// Check whether the digit to the left of the rounding digit is odd.
(i>0?j>0?n/pows10[d-j]:0:xc[ni-1])%10&1||rm==(x.s<0?8:7));if(sd<1||!xc[0]){xc.length=0;if(r){// Convert sd to decimal places.
sd-=x.e+1;// 1, 0.1, 0.01, 0.001, 0.0001 etc.
xc[0]=pows10[(LOG_BASE-sd%LOG_BASE)%LOG_BASE];x.e=-sd||0;}else{// Zero.
xc[0]=x.e=0;}return x;}// Remove excess digits.
if(i==0){xc.length=ni;k=1;ni--;}else{xc.length=ni+1;k=pows10[LOG_BASE-i];// E.g. 56700 becomes 56000 if 7 is the rounding digit.
// j > 0 means i > number of leading zeros of n.
xc[ni]=j>0?mathfloor(n/pows10[d-j]%pows10[j])*k:0;}// Round up?
if(r){for(;;){// If the digit to be rounded up is in the first element of xc...
if(ni==0){// i will be the length of xc[0] before k is added.
for(i=1,j=xc[0];j>=10;j/=10,i++);j=xc[0]+=k;for(k=1;j>=10;j/=10,k++);// if i != k the length has increased.
if(i!=k){x.e++;if(xc[0]==BASE)xc[0]=1;}break;}else{xc[ni]+=k;if(xc[ni]!=BASE)break;xc[ni--]=0;k=1;}}}// Remove trailing zeros.
for(i=xc.length;xc[--i]===0;xc.pop());}// Overflow? Infinity.
if(x.e>MAX_EXP){x.c=x.e=null;// Underflow? Zero.
}else if(x.e<MIN_EXP){x.c=[x.e=0];}}return x;}function valueOf(n){var str,e=n.e;if(e===null)return n.toString();str=coeffToString(n.c);str=e<=TO_EXP_NEG||e>=TO_EXP_POS?toExponential(str,e):toFixedPoint(str,e,'0');return n.s<0?'-'+str:str;}// PROTOTYPE/INSTANCE METHODS
/*
               * Return a new BigNumber whose value is the absolute value of this BigNumber.
               */P.absoluteValue=P.abs=function(){var x=new BigNumber(this);if(x.s<0)x.s=1;return x;};/*
               * Return
               *   1 if the value of this BigNumber is greater than the value of BigNumber(y, b),
               *   -1 if the value of this BigNumber is less than the value of BigNumber(y, b),
               *   0 if they have the same value,
               *   or null if the value of either is NaN.
               */P.comparedTo=function(y,b){return compare(this,new BigNumber(y,b));};/*
               * If dp is undefined or null or true or false, return the number of decimal places of the
               * value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
               *
               * Otherwise, if dp is a number, return a new BigNumber whose value is the value of this
               * BigNumber rounded to a maximum of dp decimal places using rounding mode rm, or
               * ROUNDING_MODE if rm is omitted.
               *
               * [dp] {number} Decimal places: integer, 0 to MAX inclusive.
               * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
               *
               * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
               */P.decimalPlaces=P.dp=function(dp,rm){var c,n,v,x=this;if(dp!=null){intCheck(dp,0,MAX);if(rm==null)rm=ROUNDING_MODE;else intCheck(rm,0,8);return round(new BigNumber(x),dp+x.e+1,rm);}if(!(c=x.c))return null;n=((v=c.length-1)-bitFloor(this.e/LOG_BASE))*LOG_BASE;// Subtract the number of trailing zeros of the last number.
if(v=c[v])for(;v%10==0;v/=10,n--);if(n<0)n=0;return n;};/*
               *  n / 0 = I
               *  n / N = N
               *  n / I = 0
               *  0 / n = 0
               *  0 / 0 = N
               *  0 / N = N
               *  0 / I = 0
               *  N / n = N
               *  N / 0 = N
               *  N / N = N
               *  N / I = N
               *  I / n = I
               *  I / 0 = I
               *  I / N = N
               *  I / I = N
               *
               * Return a new BigNumber whose value is the value of this BigNumber divided by the value of
               * BigNumber(y, b), rounded according to DECIMAL_PLACES and ROUNDING_MODE.
               */P.dividedBy=P.div=function(y,b){return div(this,new BigNumber(y,b),DECIMAL_PLACES,ROUNDING_MODE);};/*
               * Return a new BigNumber whose value is the integer part of dividing the value of this
               * BigNumber by the value of BigNumber(y, b).
               */P.dividedToIntegerBy=P.idiv=function(y,b){return div(this,new BigNumber(y,b),0,1);};/*
               * Return a BigNumber whose value is the value of this BigNumber exponentiated by n.
               *
               * If m is present, return the result modulo m.
               * If n is negative round according to DECIMAL_PLACES and ROUNDING_MODE.
               * If POW_PRECISION is non-zero and m is not present, round to POW_PRECISION using ROUNDING_MODE.
               *
               * The modular power operation works efficiently when x, n, and m are integers, otherwise it
               * is equivalent to calculating x.exponentiatedBy(n).modulo(m) with a POW_PRECISION of 0.
               *
               * n {number|string|BigNumber} The exponent. An integer.
               * [m] {number|string|BigNumber} The modulus.
               *
               * '[BigNumber Error] Exponent not an integer: {n}'
               */P.exponentiatedBy=P.pow=function(n,m){var half,isModExp,i,k,more,nIsBig,nIsNeg,nIsOdd,y,x=this;n=new BigNumber(n);// Allow NaN and ±Infinity, but not other non-integers.
if(n.c&&!n.isInteger()){throw Error(bignumberError+'Exponent not an integer: '+valueOf(n));}if(m!=null)m=new BigNumber(m);// Exponent of MAX_SAFE_INTEGER is 15.
nIsBig=n.e>14;// If x is NaN, ±Infinity, ±0 or ±1, or n is ±Infinity, NaN or ±0.
if(!x.c||!x.c[0]||x.c[0]==1&&!x.e&&x.c.length==1||!n.c||!n.c[0]){// The sign of the result of pow when x is negative depends on the evenness of n.
// If +n overflows to ±Infinity, the evenness of n would be not be known.
y=new BigNumber(Math.pow(+valueOf(x),nIsBig?2-isOdd(n):+valueOf(n)));return m?y.mod(m):y;}nIsNeg=n.s<0;if(m){// x % m returns NaN if abs(m) is zero, or m is NaN.
if(m.c?!m.c[0]:!m.s)return new BigNumber(NaN);isModExp=!nIsNeg&&x.isInteger()&&m.isInteger();if(isModExp)x=x.mod(m);// Overflow to ±Infinity: >=2**1e10 or >=1.0000024**1e15.
// Underflow to ±0: <=0.79**1e10 or <=0.9999975**1e15.
}else if(n.e>9&&(x.e>0||x.e<-1||(x.e==0// [1, 240000000]
?x.c[0]>1||nIsBig&&x.c[1]>=24e7// [80000000000000]  [99999750000000]
:x.c[0]<8e13||nIsBig&&x.c[0]<=9999975e7))){// If x is negative and n is odd, k = -0, else k = 0.
k=x.s<0&&isOdd(n)?-0:0;// If x >= 1, k = ±Infinity.
if(x.e>-1)k=1/k;// If n is negative return ±0, else return ±Infinity.
return new BigNumber(nIsNeg?1/k:k);}else if(POW_PRECISION){// Truncating each coefficient array to a length of k after each multiplication
// equates to truncating significant digits to POW_PRECISION + [28, 41],
// i.e. there will be a minimum of 28 guard digits retained.
k=mathceil(POW_PRECISION/LOG_BASE+2);}if(nIsBig){half=new BigNumber(0.5);if(nIsNeg)n.s=1;nIsOdd=isOdd(n);}else{i=Math.abs(+valueOf(n));nIsOdd=i%2;}y=new BigNumber(ONE);// Performs 54 loop iterations for n of 9007199254740991.
for(;;){if(nIsOdd){y=y.times(x);if(!y.c)break;if(k){if(y.c.length>k)y.c.length=k;}else if(isModExp){y=y.mod(m);//y = y.minus(div(y, m, 0, MODULO_MODE).times(m));
}}if(i){i=mathfloor(i/2);if(i===0)break;nIsOdd=i%2;}else{n=n.times(half);round(n,n.e+1,1);if(n.e>14){nIsOdd=isOdd(n);}else{i=+valueOf(n);if(i===0)break;nIsOdd=i%2;}}x=x.times(x);if(k){if(x.c&&x.c.length>k)x.c.length=k;}else if(isModExp){x=x.mod(m);//x = x.minus(div(x, m, 0, MODULO_MODE).times(m));
}}if(isModExp)return y;if(nIsNeg)y=ONE.div(y);return m?y.mod(m):k?round(y,POW_PRECISION,ROUNDING_MODE,more):y;};/*
               * Return a new BigNumber whose value is the value of this BigNumber rounded to an integer
               * using rounding mode rm, or ROUNDING_MODE if rm is omitted.
               *
               * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
               *
               * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {rm}'
               */P.integerValue=function(rm){var n=new BigNumber(this);if(rm==null)rm=ROUNDING_MODE;else intCheck(rm,0,8);return round(n,n.e+1,rm);};/*
               * Return true if the value of this BigNumber is equal to the value of BigNumber(y, b),
               * otherwise return false.
               */P.isEqualTo=P.eq=function(y,b){return compare(this,new BigNumber(y,b))===0;};/*
               * Return true if the value of this BigNumber is a finite number, otherwise return false.
               */P.isFinite=function(){return!!this.c;};/*
               * Return true if the value of this BigNumber is greater than the value of BigNumber(y, b),
               * otherwise return false.
               */P.isGreaterThan=P.gt=function(y,b){return compare(this,new BigNumber(y,b))>0;};/*
               * Return true if the value of this BigNumber is greater than or equal to the value of
               * BigNumber(y, b), otherwise return false.
               */P.isGreaterThanOrEqualTo=P.gte=function(y,b){return(b=compare(this,new BigNumber(y,b)))===1||b===0;};/*
               * Return true if the value of this BigNumber is an integer, otherwise return false.
               */P.isInteger=function(){return!!this.c&&bitFloor(this.e/LOG_BASE)>this.c.length-2;};/*
               * Return true if the value of this BigNumber is less than the value of BigNumber(y, b),
               * otherwise return false.
               */P.isLessThan=P.lt=function(y,b){return compare(this,new BigNumber(y,b))<0;};/*
               * Return true if the value of this BigNumber is less than or equal to the value of
               * BigNumber(y, b), otherwise return false.
               */P.isLessThanOrEqualTo=P.lte=function(y,b){return(b=compare(this,new BigNumber(y,b)))===-1||b===0;};/*
               * Return true if the value of this BigNumber is NaN, otherwise return false.
               */P.isNaN=function(){return!this.s;};/*
               * Return true if the value of this BigNumber is negative, otherwise return false.
               */P.isNegative=function(){return this.s<0;};/*
               * Return true if the value of this BigNumber is positive, otherwise return false.
               */P.isPositive=function(){return this.s>0;};/*
               * Return true if the value of this BigNumber is 0 or -0, otherwise return false.
               */P.isZero=function(){return!!this.c&&this.c[0]==0;};/*
               *  n - 0 = n
               *  n - N = N
               *  n - I = -I
               *  0 - n = -n
               *  0 - 0 = 0
               *  0 - N = N
               *  0 - I = -I
               *  N - n = N
               *  N - 0 = N
               *  N - N = N
               *  N - I = N
               *  I - n = I
               *  I - 0 = I
               *  I - N = N
               *  I - I = N
               *
               * Return a new BigNumber whose value is the value of this BigNumber minus the value of
               * BigNumber(y, b).
               */P.minus=function(y,b){var i,j,t,xLTy,x=this,a=x.s;y=new BigNumber(y,b);b=y.s;// Either NaN?
if(!a||!b)return new BigNumber(NaN);// Signs differ?
if(a!=b){y.s=-b;return x.plus(y);}var xe=x.e/LOG_BASE,ye=y.e/LOG_BASE,xc=x.c,yc=y.c;if(!xe||!ye){// Either Infinity?
if(!xc||!yc)return xc?(y.s=-b,y):new BigNumber(yc?x:NaN);// Either zero?
if(!xc[0]||!yc[0]){// Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
return yc[0]?(y.s=-b,y):new BigNumber(xc[0]?x:// IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
ROUNDING_MODE==3?-0:0);}}xe=bitFloor(xe);ye=bitFloor(ye);xc=xc.slice();// Determine which is the bigger number.
if(a=xe-ye){if(xLTy=a<0){a=-a;t=xc;}else{ye=xe;t=yc;}t.reverse();// Prepend zeros to equalise exponents.
for(b=a;b--;t.push(0));t.reverse();}else{// Exponents equal. Check digit by digit.
j=(xLTy=(a=xc.length)<(b=yc.length))?a:b;for(a=b=0;b<j;b++){if(xc[b]!=yc[b]){xLTy=xc[b]<yc[b];break;}}}// x < y? Point xc to the array of the bigger number.
if(xLTy)t=xc,xc=yc,yc=t,y.s=-y.s;b=(j=yc.length)-(i=xc.length);// Append zeros to xc if shorter.
// No need to add zeros to yc if shorter as subtract only needs to start at yc.length.
if(b>0)for(;b--;xc[i++]=0);b=BASE-1;// Subtract yc from xc.
for(;j>a;){if(xc[--j]<yc[j]){for(i=j;i&&!xc[--i];xc[i]=b);--xc[i];xc[j]+=BASE;}xc[j]-=yc[j];}// Remove leading zeros and adjust exponent accordingly.
for(;xc[0]==0;xc.splice(0,1),--ye);// Zero?
if(!xc[0]){// Following IEEE 754 (2008) 6.3,
// n - n = +0  but  n - n = -0  when rounding towards -Infinity.
y.s=ROUNDING_MODE==3?-1:1;y.c=[y.e=0];return y;}// No need to check for Infinity as +x - +y != Infinity && -x - -y != Infinity
// for finite x and y.
return normalise(y,xc,ye);};/*
               *   n % 0 =  N
               *   n % N =  N
               *   n % I =  n
               *   0 % n =  0
               *  -0 % n = -0
               *   0 % 0 =  N
               *   0 % N =  N
               *   0 % I =  0
               *   N % n =  N
               *   N % 0 =  N
               *   N % N =  N
               *   N % I =  N
               *   I % n =  N
               *   I % 0 =  N
               *   I % N =  N
               *   I % I =  N
               *
               * Return a new BigNumber whose value is the value of this BigNumber modulo the value of
               * BigNumber(y, b). The result depends on the value of MODULO_MODE.
               */P.modulo=P.mod=function(y,b){var q,s,x=this;y=new BigNumber(y,b);// Return NaN if x is Infinity or NaN, or y is NaN or zero.
if(!x.c||!y.s||y.c&&!y.c[0]){return new BigNumber(NaN);// Return x if y is Infinity or x is zero.
}else if(!y.c||x.c&&!x.c[0]){return new BigNumber(x);}if(MODULO_MODE==9){// Euclidian division: q = sign(y) * floor(x / abs(y))
// r = x - qy    where  0 <= r < abs(y)
s=y.s;y.s=1;q=div(x,y,0,3);y.s=s;q.s*=s;}else{q=div(x,y,0,MODULO_MODE);}y=x.minus(q.times(y));// To match JavaScript %, ensure sign of zero is sign of dividend.
if(!y.c[0]&&MODULO_MODE==1)y.s=x.s;return y;};/*
               *  n * 0 = 0
               *  n * N = N
               *  n * I = I
               *  0 * n = 0
               *  0 * 0 = 0
               *  0 * N = N
               *  0 * I = N
               *  N * n = N
               *  N * 0 = N
               *  N * N = N
               *  N * I = N
               *  I * n = I
               *  I * 0 = N
               *  I * N = N
               *  I * I = I
               *
               * Return a new BigNumber whose value is the value of this BigNumber multiplied by the value
               * of BigNumber(y, b).
               */P.multipliedBy=P.times=function(y,b){var c,e,i,j,k,m,xcL,xlo,xhi,ycL,ylo,yhi,zc,base,sqrtBase,x=this,xc=x.c,yc=(y=new BigNumber(y,b)).c;// Either NaN, ±Infinity or ±0?
if(!xc||!yc||!xc[0]||!yc[0]){// Return NaN if either is NaN, or one is 0 and the other is Infinity.
if(!x.s||!y.s||xc&&!xc[0]&&!yc||yc&&!yc[0]&&!xc){y.c=y.e=y.s=null;}else{y.s*=x.s;// Return ±Infinity if either is ±Infinity.
if(!xc||!yc){y.c=y.e=null;// Return ±0 if either is ±0.
}else{y.c=[0];y.e=0;}}return y;}e=bitFloor(x.e/LOG_BASE)+bitFloor(y.e/LOG_BASE);y.s*=x.s;xcL=xc.length;ycL=yc.length;// Ensure xc points to longer array and xcL to its length.
if(xcL<ycL)zc=xc,xc=yc,yc=zc,i=xcL,xcL=ycL,ycL=i;// Initialise the result array with zeros.
for(i=xcL+ycL,zc=[];i--;zc.push(0));base=BASE;sqrtBase=SQRT_BASE;for(i=ycL;--i>=0;){c=0;ylo=yc[i]%sqrtBase;yhi=yc[i]/sqrtBase|0;for(k=xcL,j=i+k;j>i;){xlo=xc[--k]%sqrtBase;xhi=xc[k]/sqrtBase|0;m=yhi*xlo+xhi*ylo;xlo=ylo*xlo+m%sqrtBase*sqrtBase+zc[j]+c;c=(xlo/base|0)+(m/sqrtBase|0)+yhi*xhi;zc[j--]=xlo%base;}zc[j]=c;}if(c){++e;}else{zc.splice(0,1);}return normalise(y,zc,e);};/*
               * Return a new BigNumber whose value is the value of this BigNumber negated,
               * i.e. multiplied by -1.
               */P.negated=function(){var x=new BigNumber(this);x.s=-x.s||null;return x;};/*
               *  n + 0 = n
               *  n + N = N
               *  n + I = I
               *  0 + n = n
               *  0 + 0 = 0
               *  0 + N = N
               *  0 + I = I
               *  N + n = N
               *  N + 0 = N
               *  N + N = N
               *  N + I = N
               *  I + n = I
               *  I + 0 = I
               *  I + N = N
               *  I + I = I
               *
               * Return a new BigNumber whose value is the value of this BigNumber plus the value of
               * BigNumber(y, b).
               */P.plus=function(y,b){var t,x=this,a=x.s;y=new BigNumber(y,b);b=y.s;// Either NaN?
if(!a||!b)return new BigNumber(NaN);// Signs differ?
if(a!=b){y.s=-b;return x.minus(y);}var xe=x.e/LOG_BASE,ye=y.e/LOG_BASE,xc=x.c,yc=y.c;if(!xe||!ye){// Return ±Infinity if either ±Infinity.
if(!xc||!yc)return new BigNumber(a/0);// Either zero?
// Return y if y is non-zero, x if x is non-zero, or zero if both are zero.
if(!xc[0]||!yc[0])return yc[0]?y:new BigNumber(xc[0]?x:a*0);}xe=bitFloor(xe);ye=bitFloor(ye);xc=xc.slice();// Prepend zeros to equalise exponents. Faster to use reverse then do unshifts.
if(a=xe-ye){if(a>0){ye=xe;t=yc;}else{a=-a;t=xc;}t.reverse();for(;a--;t.push(0));t.reverse();}a=xc.length;b=yc.length;// Point xc to the longer array, and b to the shorter length.
if(a-b<0)t=yc,yc=xc,xc=t,b=a;// Only start adding at yc.length - 1 as the further digits of xc can be ignored.
for(a=0;b;){a=(xc[--b]=xc[b]+yc[b]+a)/BASE|0;xc[b]=BASE===xc[b]?0:xc[b]%BASE;}if(a){xc=[a].concat(xc);++ye;}// No need to check for zero, as +x + +y != 0 && -x + -y != 0
// ye = MAX_EXP + 1 possible
return normalise(y,xc,ye);};/*
               * If sd is undefined or null or true or false, return the number of significant digits of
               * the value of this BigNumber, or null if the value of this BigNumber is ±Infinity or NaN.
               * If sd is true include integer-part trailing zeros in the count.
               *
               * Otherwise, if sd is a number, return a new BigNumber whose value is the value of this
               * BigNumber rounded to a maximum of sd significant digits using rounding mode rm, or
               * ROUNDING_MODE if rm is omitted.
               *
               * sd {number|boolean} number: significant digits: integer, 1 to MAX inclusive.
               *                     boolean: whether to count integer-part trailing zeros: true or false.
               * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
               *
               * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
               */P.precision=P.sd=function(sd,rm){var c,n,v,x=this;if(sd!=null&&sd!==!!sd){intCheck(sd,1,MAX);if(rm==null)rm=ROUNDING_MODE;else intCheck(rm,0,8);return round(new BigNumber(x),sd,rm);}if(!(c=x.c))return null;v=c.length-1;n=v*LOG_BASE+1;if(v=c[v]){// Subtract the number of trailing zeros of the last element.
for(;v%10==0;v/=10,n--);// Add the number of digits of the first element.
for(v=c[0];v>=10;v/=10,n++);}if(sd&&x.e+1>n)n=x.e+1;return n;};/*
               * Return a new BigNumber whose value is the value of this BigNumber shifted by k places
               * (powers of 10). Shift to the right if n > 0, and to the left if n < 0.
               *
               * k {number} Integer, -MAX_SAFE_INTEGER to MAX_SAFE_INTEGER inclusive.
               *
               * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {k}'
               */P.shiftedBy=function(k){intCheck(k,-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER);return this.times('1e'+k);};/*
               *  sqrt(-n) =  N
               *  sqrt(N) =  N
               *  sqrt(-I) =  N
               *  sqrt(I) =  I
               *  sqrt(0) =  0
               *  sqrt(-0) = -0
               *
               * Return a new BigNumber whose value is the square root of the value of this BigNumber,
               * rounded according to DECIMAL_PLACES and ROUNDING_MODE.
               */P.squareRoot=P.sqrt=function(){var m,n,r,rep,t,x=this,c=x.c,s=x.s,e=x.e,dp=DECIMAL_PLACES+4,half=new BigNumber('0.5');// Negative/NaN/Infinity/zero?
if(s!==1||!c||!c[0]){return new BigNumber(!s||s<0&&(!c||c[0])?NaN:c?x:1/0);}// Initial estimate.
s=Math.sqrt(+valueOf(x));// Math.sqrt underflow/overflow?
// Pass x to Math.sqrt as integer, then adjust the exponent of the result.
if(s==0||s==1/0){n=coeffToString(c);if((n.length+e)%2==0)n+='0';s=Math.sqrt(+n);e=bitFloor((e+1)/2)-(e<0||e%2);if(s==1/0){n='5e'+e;}else{n=s.toExponential();n=n.slice(0,n.indexOf('e')+1)+e;}r=new BigNumber(n);}else{r=new BigNumber(s+'');}// Check for zero.
// r could be zero if MIN_EXP is changed after the this value was created.
// This would cause a division by zero (x/t) and hence Infinity below, which would cause
// coeffToString to throw.
if(r.c[0]){e=r.e;s=e+dp;if(s<3)s=0;// Newton-Raphson iteration.
for(;;){t=r;r=half.times(t.plus(div(x,t,dp,1)));if(coeffToString(t.c).slice(0,s)===(n=coeffToString(r.c)).slice(0,s)){// The exponent of r may here be one less than the final result exponent,
// e.g 0.0009999 (e-4) --> 0.001 (e-3), so adjust s so the rounding digits
// are indexed correctly.
if(r.e<e)--s;n=n.slice(s-3,s+1);// The 4th rounding digit may be in error by -1 so if the 4 rounding digits
// are 9999 or 4999 (i.e. approaching a rounding boundary) continue the
// iteration.
if(n=='9999'||!rep&&n=='4999'){// On the first iteration only, check to see if rounding up gives the
// exact result as the nines may infinitely repeat.
if(!rep){round(t,t.e+DECIMAL_PLACES+2,0);if(t.times(t).eq(x)){r=t;break;}}dp+=4;s+=4;rep=1;}else{// If rounding digits are null, 0{0,4} or 50{0,3}, check for exact
// result. If not, then there are further digits and m will be truthy.
if(!+n||!+n.slice(1)&&n.charAt(0)=='5'){// Truncate to the first rounding digit.
round(r,r.e+DECIMAL_PLACES+2,1);m=!r.times(r).eq(x);}break;}}}}return round(r,r.e+DECIMAL_PLACES+1,ROUNDING_MODE,m);};/*
               * Return a string representing the value of this BigNumber in exponential notation and
               * rounded using ROUNDING_MODE to dp fixed decimal places.
               *
               * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
               * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
               *
               * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
               */P.toExponential=function(dp,rm){if(dp!=null){intCheck(dp,0,MAX);dp++;}return format(this,dp,rm,1);};/*
               * Return a string representing the value of this BigNumber in fixed-point notation rounding
               * to dp fixed decimal places using rounding mode rm, or ROUNDING_MODE if rm is omitted.
               *
               * Note: as with JavaScript's number type, (-0).toFixed(0) is '0',
               * but e.g. (-0.00001).toFixed(0) is '-0'.
               *
               * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
               * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
               *
               * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
               */P.toFixed=function(dp,rm){if(dp!=null){intCheck(dp,0,MAX);dp=dp+this.e+1;}return format(this,dp,rm);};/*
               * Return a string representing the value of this BigNumber in fixed-point notation rounded
               * using rm or ROUNDING_MODE to dp decimal places, and formatted according to the properties
               * of the format or FORMAT object (see BigNumber.set).
               *
               * The formatting object may contain some or all of the properties shown below.
               *
               * FORMAT = {
               *   prefix: '',
               *   groupSize: 3,
               *   secondaryGroupSize: 0,
               *   groupSeparator: ',',
               *   decimalSeparator: '.',
               *   fractionGroupSize: 0,
               *   fractionGroupSeparator: '\xA0',      // non-breaking space
               *   suffix: ''
               * };
               *
               * [dp] {number} Decimal places. Integer, 0 to MAX inclusive.
               * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
               * [format] {object} Formatting options. See FORMAT pbject above.
               *
               * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {dp|rm}'
               * '[BigNumber Error] Argument not an object: {format}'
               */P.toFormat=function(dp,rm,format){var str,x=this;if(format==null){if(dp!=null&&rm&&typeof rm=='object'){format=rm;rm=null;}else if(dp&&typeof dp=='object'){format=dp;dp=rm=null;}else{format=FORMAT;}}else if(typeof format!='object'){throw Error(bignumberError+'Argument not an object: '+format);}str=x.toFixed(dp,rm);if(x.c){var i,arr=str.split('.'),g1=+format.groupSize,g2=+format.secondaryGroupSize,groupSeparator=format.groupSeparator||'',intPart=arr[0],fractionPart=arr[1],isNeg=x.s<0,intDigits=isNeg?intPart.slice(1):intPart,len=intDigits.length;if(g2)i=g1,g1=g2,g2=i,len-=i;if(g1>0&&len>0){i=len%g1||g1;intPart=intDigits.substr(0,i);for(;i<len;i+=g1)intPart+=groupSeparator+intDigits.substr(i,g1);if(g2>0)intPart+=groupSeparator+intDigits.slice(i);if(isNeg)intPart='-'+intPart;}str=fractionPart?intPart+(format.decimalSeparator||'')+((g2=+format.fractionGroupSize)?fractionPart.replace(new RegExp('\\d{'+g2+'}\\B','g'),'$&'+(format.fractionGroupSeparator||'')):fractionPart):intPart;}return(format.prefix||'')+str+(format.suffix||'');};/*
               * Return an array of two BigNumbers representing the value of this BigNumber as a simple
               * fraction with an integer numerator and an integer denominator.
               * The denominator will be a positive non-zero value less than or equal to the specified
               * maximum denominator. If a maximum denominator is not specified, the denominator will be
               * the lowest value necessary to represent the number exactly.
               *
               * [md] {number|string|BigNumber} Integer >= 1, or Infinity. The maximum denominator.
               *
               * '[BigNumber Error] Argument {not an integer|out of range} : {md}'
               */P.toFraction=function(md){var d,d0,d1,d2,e,exp,n,n0,n1,q,r,s,x=this,xc=x.c;if(md!=null){n=new BigNumber(md);// Throw if md is less than one or is not an integer, unless it is Infinity.
if(!n.isInteger()&&(n.c||n.s!==1)||n.lt(ONE)){throw Error(bignumberError+'Argument '+(n.isInteger()?'out of range: ':'not an integer: ')+valueOf(n));}}if(!xc)return new BigNumber(x);d=new BigNumber(ONE);n1=d0=new BigNumber(ONE);d1=n0=new BigNumber(ONE);s=coeffToString(xc);// Determine initial denominator.
// d is a power of 10 and the minimum max denominator that specifies the value exactly.
e=d.e=s.length-x.e-1;d.c[0]=POWS_TEN[(exp=e%LOG_BASE)<0?LOG_BASE+exp:exp];md=!md||n.comparedTo(d)>0?e>0?d:n1:n;exp=MAX_EXP;MAX_EXP=1/0;n=new BigNumber(s);// n0 = d1 = 0
n0.c[0]=0;for(;;){q=div(n,d,0,1);d2=d0.plus(q.times(d1));if(d2.comparedTo(md)==1)break;d0=d1;d1=d2;n1=n0.plus(q.times(d2=n1));n0=d2;d=n.minus(q.times(d2=d));n=d2;}d2=div(md.minus(d0),d1,0,1);n0=n0.plus(d2.times(n1));d0=d0.plus(d2.times(d1));n0.s=n1.s=x.s;e=e*2;// Determine which fraction is closer to x, n0/d0 or n1/d1
r=div(n1,d1,e,ROUNDING_MODE).minus(x).abs().comparedTo(div(n0,d0,e,ROUNDING_MODE).minus(x).abs())<1?[n1,d1]:[n0,d0];MAX_EXP=exp;return r;};/*
               * Return the value of this BigNumber converted to a number primitive.
               */P.toNumber=function(){return+valueOf(this);};/*
               * Return a string representing the value of this BigNumber rounded to sd significant digits
               * using rounding mode rm or ROUNDING_MODE. If sd is less than the number of digits
               * necessary to represent the integer part of the value in fixed-point notation, then use
               * exponential notation.
               *
               * [sd] {number} Significant digits. Integer, 1 to MAX inclusive.
               * [rm] {number} Rounding mode. Integer, 0 to 8 inclusive.
               *
               * '[BigNumber Error] Argument {not a primitive number|not an integer|out of range}: {sd|rm}'
               */P.toPrecision=function(sd,rm){if(sd!=null)intCheck(sd,1,MAX);return format(this,sd,rm,2);};/*
               * Return a string representing the value of this BigNumber in base b, or base 10 if b is
               * omitted. If a base is specified, including base 10, round according to DECIMAL_PLACES and
               * ROUNDING_MODE. If a base is not specified, and this BigNumber has a positive exponent
               * that is equal to or greater than TO_EXP_POS, or a negative exponent equal to or less than
               * TO_EXP_NEG, return exponential notation.
               *
               * [b] {number} Integer, 2 to ALPHABET.length inclusive.
               *
               * '[BigNumber Error] Base {not a primitive number|not an integer|out of range}: {b}'
               */P.toString=function(b){var str,n=this,s=n.s,e=n.e;// Infinity or NaN?
if(e===null){if(s){str='Infinity';if(s<0)str='-'+str;}else{str='NaN';}}else{if(b==null){str=e<=TO_EXP_NEG||e>=TO_EXP_POS?toExponential(coeffToString(n.c),e):toFixedPoint(coeffToString(n.c),e,'0');}else if(b===10&&alphabetHasNormalDecimalDigits){n=round(new BigNumber(n),DECIMAL_PLACES+e+1,ROUNDING_MODE);str=toFixedPoint(coeffToString(n.c),n.e,'0');}else{intCheck(b,2,ALPHABET.length,'Base');str=convertBase(toFixedPoint(coeffToString(n.c),e,'0'),10,b,s,true);}if(s<0&&n.c[0])str='-'+str;}return str;};/*
               * Return as toString, but do not accept a base argument, and include the minus sign for
               * negative zero.
               */P.valueOf=P.toJSON=function(){return valueOf(this);};P._isBigNumber=true;P[Symbol.toStringTag]='BigNumber';// Node.js v10.12.0+
P[Symbol.for('nodejs.util.inspect.custom')]=P.valueOf;if(configObject!=null)BigNumber.set(configObject);return BigNumber;}// PRIVATE HELPER FUNCTIONS
// These functions don't need access to variables,
// e.g. DECIMAL_PLACES, in the scope of the `clone` function above.
function bitFloor(n){var i=n|0;return n>0||n===i?i:i-1;}// Return a coefficient array as a string of base 10 digits.
function coeffToString(a){var s,z,i=1,j=a.length,r=a[0]+'';for(;i<j;){s=a[i++]+'';z=LOG_BASE-s.length;for(;z--;s='0'+s);r+=s;}// Determine trailing zeros.
for(j=r.length;r.charCodeAt(--j)===48;);return r.slice(0,j+1||1);}// Compare the value of BigNumbers x and y.
function compare(x,y){var a,b,xc=x.c,yc=y.c,i=x.s,j=y.s,k=x.e,l=y.e;// Either NaN?
if(!i||!j)return null;a=xc&&!xc[0];b=yc&&!yc[0];// Either zero?
if(a||b)return a?b?0:-j:i;// Signs differ?
if(i!=j)return i;a=i<0;b=k==l;// Either Infinity?
if(!xc||!yc)return b?0:!xc^a?1:-1;// Compare exponents.
if(!b)return k>l^a?1:-1;j=(k=xc.length)<(l=yc.length)?k:l;// Compare digit by digit.
for(i=0;i<j;i++)if(xc[i]!=yc[i])return xc[i]>yc[i]^a?1:-1;// Compare lengths.
return k==l?0:k>l^a?1:-1;}/*
             * Check that n is a primitive number, an integer, and in range, otherwise throw.
             */function intCheck(n,min,max,name){if(n<min||n>max||n!==mathfloor(n)){throw Error(bignumberError+(name||'Argument')+(typeof n=='number'?n<min||n>max?' out of range: ':' not an integer: ':' not a primitive number: ')+String(n));}}// Assumes finite n.
function isOdd(n){var k=n.c.length-1;return bitFloor(n.e/LOG_BASE)==k&&n.c[k]%2!=0;}function toExponential(str,e){return(str.length>1?str.charAt(0)+'.'+str.slice(1):str)+(e<0?'e':'e+')+e;}function toFixedPoint(str,e,z){var len,zs;// Negative exponent?
if(e<0){// Prepend zeros.
for(zs=z+'.';++e;zs+=z);str=zs+str;// Positive exponent
}else{len=str.length;// Append zeros.
if(++e>len){for(zs=z,e-=len;--e;zs+=z);str+=zs;}else if(e<len){str=str.slice(0,e)+'.'+str.slice(e);}}return str;}// EXPORT
var BigNumber$1=clone();var bignumber=/*#__PURE__*/Object.freeze({__proto__:null,[Symbol.toStringTag]:'Module',BigNumber:BigNumber$1,'default':BigNumber$1});var require$$0=/*@__PURE__*/getAugmentedNamespace(bignumber);(function(module){var BigNumber=require$$0;/*
                json2.js
                2013-05-26

                Public Domain.

                NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

                See http://www.JSON.org/js.html


                This code should be minified before deployment.
                See http://javascript.crockford.com/jsmin.html

                USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
                NOT CONTROL.


                This file creates a global JSON object containing two methods: stringify
                and parse.

                    JSON.stringify(value, replacer, space)
                        value       any JavaScript value, usually an object or array.

                        replacer    an optional parameter that determines how object
                                    values are stringified for objects. It can be a
                                    function or an array of strings.

                        space       an optional parameter that specifies the indentation
                                    of nested structures. If it is omitted, the text will
                                    be packed without extra whitespace. If it is a number,
                                    it will specify the number of spaces to indent at each
                                    level. If it is a string (such as '\t' or '&nbsp;'),
                                    it contains the characters used to indent at each level.

                        This method produces a JSON text from a JavaScript value.

                        When an object value is found, if the object contains a toJSON
                        method, its toJSON method will be called and the result will be
                        stringified. A toJSON method does not serialize: it returns the
                        value represented by the name/value pair that should be serialized,
                        or undefined if nothing should be serialized. The toJSON method
                        will be passed the key associated with the value, and this will be
                        bound to the value

                        For example, this would serialize Dates as ISO strings.

                            Date.prototype.toJSON = function (key) {
                                function f(n) {
                                    // Format integers to have at least two digits.
                                    return n < 10 ? '0' + n : n;
                                }

                                return this.getUTCFullYear()   + '-' +
                                     f(this.getUTCMonth() + 1) + '-' +
                                     f(this.getUTCDate())      + 'T' +
                                     f(this.getUTCHours())     + ':' +
                                     f(this.getUTCMinutes())   + ':' +
                                     f(this.getUTCSeconds())   + 'Z';
                            };

                        You can provide an optional replacer method. It will be passed the
                        key and value of each member, with this bound to the containing
                        object. The value that is returned from your method will be
                        serialized. If your method returns undefined, then the member will
                        be excluded from the serialization.

                        If the replacer parameter is an array of strings, then it will be
                        used to select the members to be serialized. It filters the results
                        such that only members with keys listed in the replacer array are
                        stringified.

                        Values that do not have JSON representations, such as undefined or
                        functions, will not be serialized. Such values in objects will be
                        dropped; in arrays they will be replaced with null. You can use
                        a replacer function to replace those with JSON values.
                        JSON.stringify(undefined) returns undefined.

                        The optional space parameter produces a stringification of the
                        value that is filled with line breaks and indentation to make it
                        easier to read.

                        If the space parameter is a non-empty string, then that string will
                        be used for indentation. If the space parameter is a number, then
                        the indentation will be that many spaces.

                        Example:

                        text = JSON.stringify(['e', {pluribus: 'unum'}]);
                        // text is '["e",{"pluribus":"unum"}]'


                        text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
                        // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

                        text = JSON.stringify([new Date()], function (key, value) {
                            return this[key] instanceof Date ?
                                'Date(' + this[key] + ')' : value;
                        });
                        // text is '["Date(---current time---)"]'


                    JSON.parse(text, reviver)
                        This method parses a JSON text to produce an object or array.
                        It can throw a SyntaxError exception.

                        The optional reviver parameter is a function that can filter and
                        transform the results. It receives each of the keys and values,
                        and its return value is used instead of the original value.
                        If it returns what it received, then the structure is not modified.
                        If it returns undefined then the member is deleted.

                        Example:

                        // Parse the text. Values that look like ISO date strings will
                        // be converted to Date objects.

                        myData = JSON.parse(text, function (key, value) {
                            var a;
                            if (typeof value === 'string') {
                                a =
            /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                                if (a) {
                                    return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                                        +a[5], +a[6]));
                                }
                            }
                            return value;
                        });

                        myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                            var d;
                            if (typeof value === 'string' &&
                                    value.slice(0, 5) === 'Date(' &&
                                    value.slice(-1) === ')') {
                                d = new Date(value.slice(5, -1));
                                if (d) {
                                    return d;
                                }
                            }
                            return value;
                        });


                This is a reference implementation. You are free to copy, modify, or
                redistribute.
            */ /*jslint evil: true, regexp: true */ /*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
                call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
                getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
                lastIndex, length, parse, prototype, push, replace, slice, stringify,
                test, toJSON, toString, valueOf
            */ // Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.
var JSON=module.exports;(function(){var escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={// table of character substitutions
'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.
escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){// Produce a string from holder[key].
var i,// The loop counter.
k,// The member key.
v,// The member value.
length,mind=gap,partial,value=holder[key],isBigNumber=value!=null&&(value instanceof BigNumber||BigNumber.isBigNumber(value));// If the value has a toJSON method, call it to obtain a replacement value.
if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.
if(typeof rep==='function'){value=rep.call(holder,key,value);}// What happens next depends on the value's type.
switch(typeof value){case'string':if(isBigNumber){return value;}else{return quote(value);}case'number':// JSON numbers must be finite. Encode non-finite numbers as null.
return isFinite(value)?String(value):'null';case'boolean':case'null':case'bigint':// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.
return String(value);// If the type is 'object', we might be dealing with an object or an array or
// null.
case'object':// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.
if(!value){return'null';}// Make an array to hold the partial results of stringifying this object value.
gap+=indent;partial=[];// Is the value an array?
if(Object.prototype.toString.apply(value)==='[object Array]'){// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.
length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}// Join all of the elements together, separated with commas, and wrap them in
// brackets.
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}// If the replacer is an array, use it to select the members to be stringified.
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{// Otherwise, iterate through all of the keys in the object.
Object.keys(value).forEach(function(k){var v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}});}// Join all of the member texts together, separated with commas,
// and wrap them in braces.
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}// If the JSON object does not yet have a stringify method, give it one.
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.
var i;gap='';indent='';// If the space parameter is a number, make an indent string containing that
// many spaces.
if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}// If the space parameter is a string, it will be used as the indent string.
}else if(typeof space==='string'){indent=space;}// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.
return str('',{'':value});};}})();})(stringify);var BigNumber=null;// regexpxs extracted from
// (c) BSD-3-Clause
// https://github.com/fastify/secure-json-parse/graphs/contributors and https://github.com/hapijs/bourne/graphs/contributors
const suspectProtoRx=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/;const suspectConstructorRx=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;/*
                json_parse.js
                2012-06-20

                Public Domain.

                NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

                This file creates a json_parse function.
                During create you can (optionally) specify some behavioural switches

                    require('json-bigint')(options)

                        The optional options parameter holds switches that drive certain
                        aspects of the parsing process:
                        * options.strict = true will warn about duplicate-key usage in the json.
                          The default (strict = false) will silently ignore those and overwrite
                          values for keys that are in duplicate use.

                The resulting function follows this signature:
                    json_parse(text, reviver)
                        This method parses a JSON text to produce an object or array.
                        It can throw a SyntaxError exception.

                        The optional reviver parameter is a function that can filter and
                        transform the results. It receives each of the keys and values,
                        and its return value is used instead of the original value.
                        If it returns what it received, then the structure is not modified.
                        If it returns undefined then the member is deleted.

                        Example:

                        // Parse the text. Values that look like ISO date strings will
                        // be converted to Date objects.

                        myData = json_parse(text, function (key, value) {
                            var a;
                            if (typeof value === 'string') {
                                a =
            /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                                if (a) {
                                    return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                                        +a[5], +a[6]));
                                }
                            }
                            return value;
                        });

                This is a reference implementation. You are free to copy, modify, or
                redistribute.

                This code should be minified before deployment.
                See http://javascript.crockford.com/jsmin.html

                USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
                NOT CONTROL.
            */ /*members "", "\"", "\/", "\\", at, b, call, charAt, f, fromCharCode,
                hasOwnProperty, message, n, name, prototype, push, r, t, text
            */var json_parse$1=function(options){// This is a function that can parse a JSON text, producing a JavaScript
// data structure. It is a simple, recursive descent parser. It does not use
// eval or regular expressions, so it can be used as a model for implementing
// a JSON parser in other languages.
// We are defining the function inside of another function to avoid creating
// global variables.
// Default options one can override by passing options to the parse()
var _options={strict:false,// not being strict means do not generate syntax errors for "duplicate key"
storeAsString:false,// toggles whether the values should be stored as BigNumber (default) or a string
alwaysParseAsBig:false,// toggles whether all numbers should be Big
useNativeBigInt:false,// toggles whether to use native BigInt instead of bignumber.js
protoAction:'error',constructorAction:'error'};// If there are options, then use them to override the default _options
if(options!==undefined&&options!==null){if(options.strict===true){_options.strict=true;}if(options.storeAsString===true){_options.storeAsString=true;}_options.alwaysParseAsBig=options.alwaysParseAsBig===true?options.alwaysParseAsBig:false;_options.useNativeBigInt=options.useNativeBigInt===true?options.useNativeBigInt:false;if(typeof options.constructorAction!=='undefined'){if(options.constructorAction==='error'||options.constructorAction==='ignore'||options.constructorAction==='preserve'){_options.constructorAction=options.constructorAction;}else{throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${options.constructorAction}`);}}if(typeof options.protoAction!=='undefined'){if(options.protoAction==='error'||options.protoAction==='ignore'||options.protoAction==='preserve'){_options.protoAction=options.protoAction;}else{throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${options.protoAction}`);}}}var at,// The index of the current character
ch,// The current character
escapee={'"':'"','\\':'\\','/':'/',b:'\b',f:'\f',n:'\n',r:'\r',t:'\t'},text,error=function(m){// Call error when something is wrong.
throw{name:'SyntaxError',message:m,at:at,text:text};},next=function(c){// If a c parameter is provided, verify that it matches the current character.
if(c&&c!==ch){error("Expected '"+c+"' instead of '"+ch+"'");}// Get the next character. When there are no more characters,
// return the empty string.
ch=text.charAt(at);at+=1;return ch;},number=function(){// Parse a number value.
var number,string='';if(ch==='-'){string='-';next('-');}while(ch>='0'&&ch<='9'){string+=ch;next();}if(ch==='.'){string+='.';while(next()&&ch>='0'&&ch<='9'){string+=ch;}}if(ch==='e'||ch==='E'){string+=ch;next();if(ch==='-'||ch==='+'){string+=ch;next();}while(ch>='0'&&ch<='9'){string+=ch;next();}}number=+string;if(!isFinite(number)){error('Bad number');}else{if(BigNumber==null)BigNumber=require$$0;//if (number > 9007199254740992 || number < -9007199254740992)
// Bignumber has stricter check: everything with length > 15 digits disallowed
if(string.length>15)return _options.storeAsString?string:_options.useNativeBigInt?BigInt(string):new BigNumber(string);else return!_options.alwaysParseAsBig?number:_options.useNativeBigInt?BigInt(number):new BigNumber(number);}},string=function(){// Parse a string value.
var hex,i,string='',uffff;// When parsing for string values, we must look for " and \ characters.
if(ch==='"'){var startAt=at;while(next()){if(ch==='"'){if(at-1>startAt)string+=text.substring(startAt,at-1);next();return string;}if(ch==='\\'){if(at-1>startAt)string+=text.substring(startAt,at-1);next();if(ch==='u'){uffff=0;for(i=0;i<4;i+=1){hex=parseInt(next(),16);if(!isFinite(hex)){break;}uffff=uffff*16+hex;}string+=String.fromCharCode(uffff);}else if(typeof escapee[ch]==='string'){string+=escapee[ch];}else{break;}startAt=at;}}}error('Bad string');},white=function(){// Skip whitespace.
while(ch&&ch<=' '){next();}},word=function(){// true, false, or null.
switch(ch){case't':next('t');next('r');next('u');next('e');return true;case'f':next('f');next('a');next('l');next('s');next('e');return false;case'n':next('n');next('u');next('l');next('l');return null;}error("Unexpected '"+ch+"'");},value,// Place holder for the value function.
array=function(){// Parse an array value.
var array=[];if(ch==='['){next('[');white();if(ch===']'){next(']');return array;// empty array
}while(ch){array.push(value());white();if(ch===']'){next(']');return array;}next(',');white();}}error('Bad array');},object=function(){// Parse an object value.
var key,object=Object.create(null);if(ch==='{'){next('{');white();if(ch==='}'){next('}');return object;// empty object
}while(ch){key=string();white();next(':');if(_options.strict===true&&Object.hasOwnProperty.call(object,key)){error('Duplicate key "'+key+'"');}if(suspectProtoRx.test(key)===true){if(_options.protoAction==='error'){error('Object contains forbidden prototype property');}else if(_options.protoAction==='ignore'){value();}else{object[key]=value();}}else if(suspectConstructorRx.test(key)===true){if(_options.constructorAction==='error'){error('Object contains forbidden constructor property');}else if(_options.constructorAction==='ignore'){value();}else{object[key]=value();}}else{object[key]=value();}white();if(ch==='}'){next('}');return object;}next(',');white();}}error('Bad object');};value=function(){// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.
white();switch(ch){case'{':return object();case'[':return array();case'"':return string();case'-':return number();default:return ch>='0'&&ch<='9'?number():word();}};// Return the json_parse function. It will have access to all of the above
// functions and variables.
return function(source,reviver){var result;text=source+'';at=0;ch=' ';result=value();white();if(ch){error('Syntax error');}// If there is a reviver function, we recursively walk the new structure,
// passing each name/value pair to the reviver function for possible
// transformation, starting with a temporary root object that holds the result
// in an empty key. If there is not a reviver function, we simply return the
// result.
return typeof reviver==='function'?function walk(holder,key){var v,value=holder[key];if(value&&typeof value==='object'){Object.keys(value).forEach(function(k){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}});}return reviver.call(holder,key,value);}({'':result},''):result;};};var parse=json_parse$1;var json_stringify=stringify.exports.stringify;var json_parse=parse;jsonBigint.exports=function(options){return{parse:json_parse(options),stringify:json_stringify};};//create the default method members with no options applied for backwards compatibility
jsonBigint.exports.parse=json_parse();jsonBigint.exports.stringify=json_stringify;var jsonBigInt=exports('j',jsonBigint.exports);}};});})();
