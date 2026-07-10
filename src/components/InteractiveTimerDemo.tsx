'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Reveal from './Reveal';

type TimerMode = 'countdown' | 'countup';
type FocusMode = 'work' | 'study';

export default function InteractiveTimerDemo() {
  const [phase, setPhase] = useState<'idle' | 'running' | 'paused' | 'done'>('idle');
  const [timerMode, setTimerMode] = useState<TimerMode>('countdown');
  const [focusMode, setFocusMode] = useState<FocusMode>('work');
  const [display, setDisplay] = useState('00:30');
  const [progress, setProgress] = useState(1);

  const startTimeRef = useRef(0);
  const remainingRef = useRef(30);
  const rafRef = useRef(0);

  const TOTAL = 30;

  const tick = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = (timestamp - startTimeRef.current) / 1000;

    if (timerMode === 'countdown') {
      const left = Math.max(0, remainingRef.current - elapsed);
      const mins = Math.floor(left / 60);
      const secs = Math.floor(left % 60);
      setDisplay(`${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`);
      setProgress(left / TOTAL);
      if (left <= 0) {
        setPhase('done');
        setDisplay('00:00');
        setProgress(0);
        return;
      }
    } else {
      const total = remainingRef.current + elapsed;
      const mins = Math.floor(total / 60);
      const secs = Math.floor(total % 60);
      setDisplay(`${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`);
      const p = Math.min(total / TOTAL, 1);
      setProgress(p);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, [timerMode]);

  useEffect(() => {
    if (phase === 'running') {
      startTimeRef.current = 0;
      rafRef.current = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, tick]);

  useEffect(() => {
    if (phase === 'idle') {
      remainingRef.current = TOTAL;
      setDisplay('00:30');
      setProgress(1);
    }
  }, [phase, timerMode]);

  const start = () => {
    remainingRef.current = timerMode === 'countdown' ? remainingRef.current : 0;
    setPhase('running');
  };
  const pause = () => {
    if (phase === 'running') {
      cancelAnimationFrame(rafRef.current);
      if (timerMode === 'countdown') remainingRef.current -= (performance.now() - startTimeRef.current) / 1000;
      setPhase('paused');
    }
  };
  const resume = () => {
    setPhase('running');
  };
  const reset = () => {
    cancelAnimationFrame(rafRef.current);
    setPhase('idle');
  };

  const circumference = 2 * Math.PI * 52;
  const offset = circumference * (1 - progress);
  const isActive = phase === 'running' || phase === 'paused';

  return (
    <Reveal>
      <section id="interactive-demo" className="py-20 md:py-28 px-6" style={{ background: '#edf8f2' }}>
        <div className="max-w-content mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-brand-dark mb-2">{'Try it yourself'}</p>
            <h2 className="text-[28px] sm:text-[36px] font-semibold leading-[1.1] tracking-tight text-text-primary">
              {'See how it feels'}
            </h2>
          </div>

          <div className="max-w-[320px] mx-auto bg-surface rounded-2xl border border-border shadow-soft p-8">
            {/* Timer Display */}
            <div className="relative w-40 h-40 mx-auto mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(23,32,25,0.06)" strokeWidth="6" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="#32b978" strokeWidth="6" strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{ transition: 'stroke-dashoffset 0.3s ease' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold text-text-primary tabular-nums" aria-live="polite" aria-atomic="true">
                  {display}
                </span>
                <span className="text-xs text-text-tertiary mt-0.5 capitalize">{focusMode}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-2 justify-center mb-5">
              {phase === 'idle' && (
                <button onClick={start} className="btn-primary px-6 py-2.5 text-sm">Start</button>
              )}
              {phase === 'running' && (
                <button onClick={pause} className="btn-primary px-6 py-2.5 text-sm" style={{ background: '#145c3b' }}>Pause</button>
              )}
              {phase === 'paused' && (
                <>
                  <button onClick={resume} className="btn-primary px-6 py-2.5 text-sm">Resume</button>
                  <button onClick={reset} className="px-6 py-2.5 text-sm font-medium text-text-secondary bg-black/5 rounded-xl hover:bg-black/10 transition-colors">Reset</button>
                </>
              )}
              {phase === 'done' && (
                <button onClick={reset} className="btn-primary px-6 py-2.5 text-sm">Done</button>
              )}
            </div>

            {/* Mode toggles */}
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => { if (!isActive) { setTimerMode('countdown'); reset(); } }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${timerMode === 'countdown' ? 'bg-brand text-white' : 'bg-black/5 text-text-secondary'}`}
                aria-pressed={timerMode === 'countdown'}
              >
                Countdown
              </button>
              <button
                onClick={() => { if (!isActive) { setTimerMode('countup'); reset(); } }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${timerMode === 'countup' ? 'bg-brand text-white' : 'bg-black/5 text-text-secondary'}`}
                aria-pressed={timerMode === 'countup'}
              >
                Count Up
              </button>
              <button
                onClick={() => setFocusMode(focusMode === 'work' ? 'study' : 'work')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${focusMode === 'work' ? 'bg-amber-500/10 text-amber-700' : 'bg-blue-500/10 text-blue-700'}`}
                aria-pressed={false}
              >
                {focusMode === 'work' ? 'Work' : 'Study'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
