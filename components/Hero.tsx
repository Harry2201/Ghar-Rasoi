"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero(){
  const video=useRef<HTMLVideoElement>(null);
  const [videoReady,setVideoReady]=useState(false);
  useEffect(()=>{ const v=video.current; if(!v)return; v.play().catch(()=>{}); const done=()=>{v.pause();}; v.addEventListener('ended',done); return()=>v.removeEventListener('ended',done);},[]);
  return <section className="hero">
    <div className="hero-media"><video ref={video} className={videoReady?"hero-video ready":"hero-video"} muted playsInline preload="metadata" poster="/images/embedded-2.jpeg" onCanPlay={()=>setVideoReady(true)}><source src="/media/ghar-rasoi-process.mp4" type="video/mp4"/></video><div className="hero-poster" style={{backgroundImage:'url(/images/embedded-2.jpeg)'}} aria-hidden="true"/></div>
    <div className="hero-overlay" aria-hidden="true"/>
    <div className="hero-content"><p className="eyebrow">PURELY MADE IN VARANASI</p><h1>Pure mustard oil.<br/><em>Made with care.</em></h1><p className="hero-copy">From carefully cleaned mustard seeds to filtered oil and final bottling — a simple process, made visible.</p><div className="hero-actions"><a className="dark-button" href="#products">Explore products <span>↗</span></a><a className="quiet-link" href="/products/mustard-oil">See our process <span>↗</span></a></div><div className="hero-tag"><span>शुद्धता की एक पहचान</span><i/></div></div>
    <div className="hero-side-note"><span>01</span><div><b>Mustard Oil</b><small>Seed to bottle</small></div></div>
  </section>
}
