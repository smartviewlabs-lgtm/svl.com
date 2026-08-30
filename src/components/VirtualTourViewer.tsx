import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PANORAMA_SCENES } from '../data/agencyData';
import { PanoramaScene } from '../types';
import { 
  Play,
  Pause,
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Compass, 
  Navigation, 
  Maximize2, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  ChevronLeft,
  ChevronRight,
  Info,
  Move
} from 'lucide-react';

interface VirtualTourViewerProps {
  onBookShootForCategory?: (category: string) => void;
}

export const VirtualTourViewer: React.FC<VirtualTourViewerProps> = ({ onBookShootForCategory }) => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [panYaw, setPanYaw] = useState(0); // 0 to 360 degrees
  const [panPitch, setPanPitch] = useState(50); // vertical position percentage (30 to 70)
  const [zoomLevel, setZoomLevel] = useState(1);
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotateSpeed, setRotateSpeed] = useState(0.08); // degrees per frame
  const [showBlueLines, setShowBlueLines] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<{ title: string; description: string } | null>(null);

  const scene: PanoramaScene = PANORAMA_SCENES[activeSceneIndex];
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const autoRotateResumeTimer = useRef<NodeJS.Timeout | null>(null);

  // Smooth Pannellum style 60fps auto-rotation loop
  useEffect(() => {
    const loop = () => {
      if (autoRotate && !isDragging) {
        setPanYaw((prev) => (prev + rotateSpeed + 360) % 360);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [autoRotate, isDragging, rotateSpeed]);

  const scheduleAutoRotateResume = () => {
    if (autoRotateResumeTimer.current) clearTimeout(autoRotateResumeTimer.current);
    autoRotateResumeTimer.current = setTimeout(() => {
      setAutoRotate(true);
    }, 3500);
  };

  // Mouse / Touch Handlers for 360 Pan
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
    setAutoRotate(false);
  };

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    // Convert pixel movement to degrees based on zoom
    const yawSensitivity = 0.25 / zoomLevel;
    const pitchSensitivity = 0.1 / zoomLevel;

    setPanYaw((prev) => (prev - deltaX * yawSensitivity + 360) % 360);
    setPanPitch((prev) => Math.max(30, Math.min(70, prev - deltaY * pitchSensitivity)));

    setStartX(e.clientX);
    setStartY(e.clientY);
  }, [isDragging, startX, startY, zoomLevel]);

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      scheduleAutoRotateResume();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX);
      setStartY(e.touches[0].clientY);
      setAutoRotate(false);
    }
  };

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    const yawSensitivity = 0.3 / zoomLevel;
    const pitchSensitivity = 0.15 / zoomLevel;

    setPanYaw((prev) => (prev - deltaX * yawSensitivity + 360) % 360);
    setPanPitch((prev) => Math.max(30, Math.min(70, prev - deltaY * pitchSensitivity)));

    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  }, [isDragging, startX, startY, zoomLevel]);

  const handleZoom = (direction: 'in' | 'out') => {
    if (direction === 'in') {
      setZoomLevel((prev) => Math.min(prev + 0.25, 2.2));
    } else {
      setZoomLevel((prev) => Math.max(prev - 0.25, 1));
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Convert panYaw (0-360 deg) to background percentage (0-100%)
  const bgPositionX = (panYaw / 360) * 100;

  return (
    <section id="virtual-tours" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-indigo-600 animate-spin-slow" />
            <span>Pannellum 360° Moving Panorama Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700">Google 360° Virtual Tours</span> & Street View Blue Lines
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Let customers walk through your hotel, restaurant, hospital, or showroom straight from Google Maps & Search. Drag or let it auto-pan in 360°!
          </p>
        </div>

        {/* Scene Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {PANORAMA_SCENES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSceneIndex(idx);
                setActiveHotspot(null);
                setPanYaw(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeSceneIndex === idx
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                  : 'bg-white text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-200 shadow-xs'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* 360° Interactive Canvas Box */}
        <div 
          ref={containerRef}
          className="relative rounded-3xl overflow-hidden border border-slate-300 shadow-2xl bg-slate-950 select-none"
        >
          
          {/* Top Google Street View Interface Bar */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-3 sm:p-4 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-transparent backdrop-blur-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white shadow-md">
                <Compass 
                  className="w-4 h-4 transition-transform duration-100" 
                  style={{ transform: `rotate(${-panYaw}deg)` }}
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-white text-sm sm:text-base font-bold font-heading">{scene.name}</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-white shadow-xs">
                    Google Verified
                  </span>
                  <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-cyan-950/70 border border-cyan-700/50">
                    Heading: {Math.round(panYaw)}°
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span>{scene.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Blue Line Toggle & Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowBlueLines(!showBlueLines)}
                className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  showBlueLines 
                    ? 'bg-blue-600 border-blue-400 text-white shadow-md' 
                    : 'bg-slate-900/80 border-slate-700 text-slate-400'
                }`}
                title="Toggle Google Street View Blue Lines Navigation"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Street View Blue Line</span>
              </button>

              {/* Auto-Pan Toggle */}
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                  autoRotate 
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-md' 
                    : 'bg-slate-900/80 border-slate-700 text-slate-400 hover:text-white'
                }`}
                title={autoRotate ? "Pause Pannellum Auto-Pan" : "Start Pannellum Auto-Pan"}
              >
                {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden md:inline">{autoRotate ? 'Auto-Moving' : 'Move 360°'}</span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg text-xs font-bold bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white"
                title="Fullscreen Tour"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Drag Screen (Pannellum Style Smooth Canvas View) */}
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className={`w-full h-[380px] sm:h-[480px] md:h-[540px] relative overflow-hidden ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {/* Panoramic Image Container with Pannellum Smooth Infinite Loop */}
            <div 
              className="absolute inset-0 w-full h-full transform-gpu"
              style={{
                backgroundImage: `url('${scene.imageUrl}')`,
                backgroundPosition: `${bgPositionX}% ${panPitch}%`,
                backgroundSize: `${zoomLevel * 240}% 130%`,
                backgroundRepeat: 'repeat-x',
                transition: isDragging ? 'none' : 'background-position 0.05s linear'
              }}
            />

            {/* Dark contrast gradient vignettes */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Google Street View Certified Blue Line Simulation Overlay */}
            {showBlueLines && (
              <div className="absolute inset-x-0 bottom-12 h-20 pointer-events-none flex items-center justify-center">
                <div className="relative w-full max-w-2xl h-12 flex items-center justify-around">
                  {/* Glowing Street View Blue Line Ribbon */}
                  <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_#3b82f6] rounded-full animate-pulse opacity-80" />
                  
                  {/* Stepping Nodes */}
                  {[-45, 0, 45].map((offset, i) => (
                    <div 
                      key={i} 
                      className="relative z-10 flex flex-col items-center group cursor-pointer pointer-events-auto"
                      onClick={() => setPanYaw((prev) => (prev + offset + 360) % 360)}
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-600/90 border-2 border-white flex items-center justify-center shadow-lg shadow-blue-500/50 hover:scale-125 transition-transform">
                        <Navigation className="w-4 h-4 text-white -rotate-45" />
                      </div>
                      <span className="text-[10px] text-blue-200 bg-slate-950/80 px-2 py-0.5 rounded mt-1 border border-blue-500/30 whitespace-nowrap">
                        Step 360°
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dynamic Hotspots tracking panorama yaw */}
            {scene.hotspots.map((spot, idx) => {
              // Calculate screen X relative to current yaw
              const relativeAngle = ((spot.x * 3.6) - panYaw + 360) % 360;
              const normalizedAngle = relativeAngle > 180 ? relativeAngle - 360 : relativeAngle;
              const fov = 110 / zoomLevel;
              const isVisible = Math.abs(normalizedAngle) < fov;
              const screenXPercent = 50 + (normalizedAngle / fov) * 50;

              if (!isVisible) return null;

              return (
                <div
                  key={idx}
                  style={{
                    left: `${screenXPercent}%`,
                    top: `${spot.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute z-20 cursor-pointer pointer-events-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(spot);
                  }}
                >
                  <div className="relative group">
                    <span className="absolute -inset-2 rounded-full bg-cyan-400/40 animate-ping" />
                    <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/50 border-2 border-white group-hover:scale-110 transition-transform">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    {/* Tooltip on hover */}
                    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded-xl bg-slate-900/95 border border-slate-700 text-slate-200 text-xs shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">
                      <p className="font-bold text-cyan-300">{spot.title}</p>
                      <p className="text-[11px] text-slate-300 mt-0.5 line-clamp-2">{spot.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Dynamic Center Pannellum Nav Cue */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center gap-2 opacity-80 transition-opacity">
              <div className="px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 backdrop-blur-md">
                <Move className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Drag to Look Around (360°)</span>
              </div>
            </div>

            {/* Quick Directional Pan Controls on Side */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-20">
              <button
                onClick={() => setPanYaw((prev) => (prev - 25 + 360) % 360)}
                className="w-8 h-8 rounded-lg bg-slate-900/85 hover:bg-indigo-600 text-white border border-slate-700 flex items-center justify-center text-xs shadow-lg active:scale-95 transition-all"
                title="Pan Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setPanYaw((prev) => (prev + 25 + 360) % 360)}
                className="w-8 h-8 rounded-lg bg-slate-900/85 hover:bg-indigo-600 text-white border border-slate-700 flex items-center justify-center text-xs shadow-lg active:scale-95 transition-all"
                title="Pan Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            
            {/* Left Description */}
            <div className="flex items-center gap-2 text-slate-600 max-w-md">
              <Info className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="line-clamp-1 sm:line-clamp-none font-medium">{scene.description}</span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-slate-100 rounded-xl border border-slate-200 p-0.5">
                <button
                  onClick={() => handleZoom('in')}
                  className="p-1.5 text-slate-600 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <span className="px-2 text-slate-600 font-mono font-bold text-[11px]">{Math.round(zoomLevel * 100)}%</span>
                <button
                  onClick={() => handleZoom('out')}
                  className="p-1.5 text-slate-600 hover:text-indigo-600 hover:bg-white rounded-lg transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>

              {onBookShootForCategory && (
                <button
                  onClick={() => onBookShootForCategory(scene.category)}
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-md shadow-indigo-200 active:scale-95"
                >
                  Get 360° Shoot for Your Business
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Selected Hotspot Modal Card (Mobile & Desktop) */}
        {activeHotspot && (
          <div className="mt-4 p-4 rounded-2xl bg-white border border-indigo-200 shadow-xl flex items-start justify-between gap-4 animate-in fade-in">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-slate-900 font-bold text-sm sm:text-base">{activeHotspot.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm mt-1">{activeHotspot.description}</p>
              </div>
            </div>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-slate-500 hover:text-slate-800 text-xs px-2.5 py-1 bg-slate-100 rounded-lg font-semibold"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Feature Guarantee Badges */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { title: "Instant Verification", desc: "Guaranteed Google Maps checkmark & ranking push", iconColor: "text-emerald-600" },
            { title: "8K HDR Panoramic Quality", desc: "Shot on high-precision commercial spherical gear", iconColor: "text-indigo-600" },
            { title: "One-Time Investment", desc: "No monthly hosting or subscription costs", iconColor: "text-orange-600" },
            { title: "Punjab-Wide Coverage", desc: "24-48 hr on-site shoot dispatch across all districts", iconColor: "text-cyan-600" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <CheckCircle2 className={`w-5 h-5 ${item.iconColor} mx-auto mb-1.5`} />
              <h5 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h5>
              <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
